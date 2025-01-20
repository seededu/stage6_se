Service Workers
=============================

Service workers are the backbone of Progressive Web Apps (PWAs), enabling features like offline functionality, content
caching, and background tasks.

A service worker is JavaScript code that usually acts as a middle layer between the browser and the network. It
intercepts and manages network requests, allowing you to control how resources are fetched and cached.

**How They Work**

1. **Installation**

   - The service worker is installed when the user first visits the PWA.
   - During installation, resources can be pre-cached for offline use.

2. **Activation**

   - After installation, the service worker takes control of all pages within its scope.

3. **Interception**

   - The service worker intercepts network requests and decides how to handle them (e.g., serve from the cache or
     fetch from the network).

Main Thread and Background Service Worker
--------------------------------------------

Most browsers will run a web page's JavaScript code and all the work to render the website to the display in a single
thread. This means that if the JavaScript takes a long time to complete an operation then any content updates are
blocked and the webpage appears frozen to the user.

Some code that you would want to include in your PWA, such as downloading files, can take a long time to finish. For
this reason service workers run in a separate background thread. Communication between the main thread and the service
worker thread takes place through messages.

In general a PWA can be divided into:

- The main app, with the HTML, CSS, and any JavaScript that controls the web page's interface
- The service worker, which handles offline and background tasks

Example - Registering a Service Worker
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: javascript
   :caption: The main JavaScript file or inline in your HTML

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(() => console.log('Service Worker Registered'));
    }

Explanation:

- The ``navigator`` object represents the state and the identity of the user agent (browser)
- The ``serviceWorker`` property returns a representation of the service worker for the webpage
- ``register`` associates the code in the referenced script to the service worker


Fetching and Caching Content
---------------------------------

One of the primary functions of a service worker is to intercept network requests and determine how to handle them.

**Process Overview**

1. Service worker creates a cache
2. Service worker listens for fetches
3. Main thread makes a request
4. Service worker intercepts the request

   1. The service worker checks to see if the resource is cached
   2. If the resource is in the cache then it is immediately returned
   3. Otherwise

      - The request is processed resource is fetched as normal
      - The result stored in the cache.

Example
^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: javascript

    // Fetch event: Serve resources from cache or network
    self.addEventListener('fetch', event => {
        event.respondWith(
            cache = caches.open('my-pwa-cache');
            cache.match(event.request).then(response => {
                return response || fetch(event.request);
            })
        );
    });

**Explanation**

Fetch event:
- The 'fetch' event is triggered whenever the browser makes a network request.
- This includes requests for HTML, CSS, JavaScript, images, APIs, and more.
- The service worker listens for these fetch events and can intercept, modify, or respond to the requests.

The fetch event is part of the service worker API, which gives you control over how network requests are handled.

Caches:
- ``caches.open`` returns a cache object associated to the name provided and creates a new cache if it doesn't exist
- ``cache.match`` checks the cache for a resource associated with the request

If no match is found the resource is fetched normally.


Offline Support
---------------------------------

Service workers enable offline functionality by serving cached resources when the network is unavailable. This is
critical for providing a seamless user experience in areas with poor or no connectivity.

To make offline support functional resources should be cached immediately when the app is installed.

Example
^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: javascript

    const FILES_TO_CACHE = [
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
        '/icon.png'
    ];

    // Install event: Cache resources
    self.addEventListener('install', event => {
        event.waitUntil(
            caches.open(CACHE_NAME).then(cache => {
                console.log('Caching resources...');
                return cache.addAll(FILES_TO_CACHE);
            })
        );
    });

Explanation

- ``FILES_TO_CACHE`` is an array of resource paths on the server to be cached
- ``cache.addAll`` will add takes an array of URLs, retrieve them, and insert the resources into the cache

