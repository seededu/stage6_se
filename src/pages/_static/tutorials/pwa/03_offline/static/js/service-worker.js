// -------------------------------
// CONFIG
// -------------------------------
const CACHE_NAME = "todo-pwa-v2";
const STATIC_FILES = [
  "/",                // root page
  "/static/js/app.js",
  "/static/manifest.json",
  // Add your CSS, icons, or other files here
];

// The name/version of our IndexedDB
const DB_NAME = "todo_db";
const DB_VERSION = 2; // bump if you add new stores or changes

// -------------------------------
// 1. INSTALL & CACHE STATIC ASSETS
// -------------------------------
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_FILES))
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// -------------------------------
// 2. ACTIVATE & CLEAN OLD CACHES
// -------------------------------
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Delete older caches
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
      // Take control of all pages
      self.clients.claim();

      // Attempt to replay offline requests if any exist
      await replayRequests();
    })()
  );
});

// -------------------------------
// 3. INDEXEDDB SETUP
//    - "tasks" store holds actual tasks { id, text }
//    - "requests" store queues offline POST/DELETE ops
// -------------------------------
let dbPromise = null;

/**
 * Open (or create) the IndexedDB with "tasks" and "requests" stores.
 */
function initDB() {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (e) => {
        const db = e.target.result;

        // 1. tasks store: keyPath = "id"
        if (!db.objectStoreNames.contains("tasks")) {
          db.createObjectStore("tasks", { keyPath: "id" });
        }

        // 2. requests store: keyPath = "id" (autoIncrement for queued ops)
        if (!db.objectStoreNames.contains("requests")) {
          db.createObjectStore("requests", { keyPath: "id", autoIncrement: true });
        }
      };

      request.onsuccess = (e) => {
        resolve(e.target.result);
      };
      request.onerror = (e) => reject(e.target.error);
    });
  }
  return dbPromise;
}

// -------------------------------
// 4. STORING & RETRIEVING TASKS OFFLINE
// -------------------------------
async function storeTasksOffline(tasks) {
  const db = await initDB();
  const tx = db.transaction("tasks", "readwrite");
  const store = tx.objectStore("tasks");
  // Clear existing tasks
  await store.clear();
  // Insert/update each task
  for (const task of tasks) {
    await store.put(task);
  }
  await tx.done;
}

function getTasksOffline() {
  return new Promise((resolve, reject) => {
    initDB().then((db) => {
      const tx = db.transaction("tasks", "readonly");
      const store = tx.objectStore("tasks");
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    }).catch(reject);
  });
}

// -------------------------------
// 5. STORING & REPLAYING OFFLINE REQUESTS
// -------------------------------
async function queueRequest(method, url, body) {
  const db = await initDB();
  const tx = db.transaction("requests", "readwrite");
  const store = tx.objectStore("requests");
  await store.add({ method, url, body, timestamp: Date.now() });
  await tx.done;
}

// Retrieve all queued requests
function getAllRequests() {
  return new Promise((resolve, reject) => {
    initDB().then((db) => {
      const tx = db.transaction("requests", "readonly");
      const store = tx.objectStore("requests");
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    }).catch(reject);
  });
}

// Remove a request from the queue once replayed
async function removeRequest(id) {
  const db = await initDB();
  const tx = db.transaction("requests", "readwrite");
  const store = tx.objectStore("requests");
  await store.delete(id);
  await tx.done;
}

// Replay queued offline ops
async function replayRequests() {
  const allRequests = await getAllRequests();
  if (!allRequests.length) return;

  for (const req of allRequests) {
    try {
      if (req.method === "POST") {
        // Attempt to POST to the server
        const res = await fetch(req.url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(req.body),
        });
        if (!res.ok) throw new Error("POST replay failed");
      } else if (req.method === "DELETE") {
        // Attempt to DELETE from the server
        const res = await fetch(req.url, { method: "DELETE" });
        if (!res.ok) throw new Error("DELETE replay failed");
      }
      // If successful, remove from queue
      await removeRequest(req.id);
    } catch (err) {
      console.error("[SW] Replay failed:", err);
      // If it fails again, we'll keep it in the queue
    }
  }

  // Now that we've replayed ops, let's re-fetch tasks from the server to refresh local store
  try {
    const response = await fetch("/api/tasks");
    if (response.ok) {
      const tasks = await response.json();
      await storeTasksOffline(tasks);
    }
  } catch (err) {
    console.warn("[SW] Could not refresh tasks after replay:", err);
  }
}

async function addTaskToLocalStore(task) {
  const db = await initDB();
  const tx = db.transaction("tasks", "readwrite");
  const store = tx.objectStore("tasks");
  await store.put(task); // Put/Update this single task
  await tx.done;
}

async function removeTaskFromLocalStore(id) {
  const db = await initDB();
  const tx = db.transaction("tasks", "readwrite");
  const store = tx.objectStore("tasks");
  await store.delete(id);
  await tx.done;
}

// -------------------------------
// 6. FETCH EVENT INTERCEPTION
// -------------------------------
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle same-origin requests
  if (!request.url.startsWith(self.location.origin)) {
    return; // Skip cross-origin
  }

  // If not /api/tasks, do a cache-first approach for static files
  if (!request.url.includes("/api/tasks")) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        return cachedResponse || fetch(request);
      })
    );
    return;
  }

  // Handle /api/tasks logic
  if (request.method === "GET") {
    // Network-first for GET /api/tasks
    event.respondWith(
      (async () => {
        try {
          // 1. Try network
          const networkResponse = await fetch(request);
          // 2. If successful, store tasks offline
          const cloned = networkResponse.clone();
          const tasks = await cloned.json();
          await storeTasksOffline(tasks);
          // 3. Return real network response
          return networkResponse;
        } catch (err) {
          console.warn("[SW] GET /api/tasks offline, returning local tasks:", err);
          // 4. If offline, return tasks from IndexedDB
          const offlineTasks = await getTasksOffline();
          return new Response(JSON.stringify(offlineTasks), {
            headers: { "Content-Type": "application/json" },
          });
        }
      })()
    );
  } else if (request.method === "POST") {
    event.respondWith(
      (async () => {
        const clonedRequest = request.clone();
        try {
          // Attempt network
          const networkResponse = await fetch(request);
          return networkResponse;
        } catch (err) {
          console.warn("[SW] Offline, queueing POST request:", err);

          // Read the body from the cloned request
          const taskData = await clonedRequest.json(); 
          // e.g. { text: "Buy milk" }

          // Generate a LARGE placeholder ID so it sorts at the bottom
          // This ID is guaranteed bigger than typical server IDs.
          const offlineId = 10_000_000_000_000 + Date.now(); 
          // or something similarly large

          // Create an offline placeholder task
          const offlineTask = {
            id: offlineId,
            text: taskData.text,
            offline: true // optional flag to mark it as offline
          };

          // Store this task in the "tasks" object store so it appears in offline data
          await addTaskToLocalStore(offlineTask);

          // Queue the original request for replay
          await queueRequest("POST", request.url, taskData);

          // Return a fake 201 so the front-end thinks creation succeeded
          // Optionally return some minimal JSON that matches a server response
          return new Response(
            JSON.stringify({
              message: "Offline creation success",
              id: offlineId
            }),
            { status: 201, headers: { "Content-Type": "application/json" } }
          );
        }
      })()
    );
  } else if (request.method === "DELETE") {
    event.respondWith(
      (async () => {
        const requestClone = request.clone();
        try {
          const networkResponse = await fetch(request);
          return networkResponse;
        } catch (err) {
          console.warn("[SW] Offline, queueing DELETE request:", err);

          // 1. Parse the task ID from the URL or request
          // e.g., /api/tasks/123
          const urlParts = requestClone.url.split("/");
          const taskIdStr = urlParts[urlParts.length - 1];
          const taskId = Number(taskIdStr);

          // 2. Remove from local 'tasks' store immediately
          if (!isNaN(taskId)) {
            await removeTaskFromLocalStore(taskId);
          }

          // 3. Queue the request so it replays later
          await queueRequest("DELETE", requestClone.url, null);

          // 4. Return a fake success
          return new Response(
            JSON.stringify({ message: "Deleted offline." }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        }
      })()
    );
  }
});

// -------------------------------
// 7. SYNC WHEN ONLINE AGAIN
// -------------------------------
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "ONLINE") {
    console.log("[SW] Received message to replay requests");
    event.waitUntil(replayRequests());
  }
});


