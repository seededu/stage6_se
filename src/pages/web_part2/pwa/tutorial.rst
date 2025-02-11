PWA Tutorial
============

In this tutorial we will work step-by-step to build a To-Do list PWA using a
Flask backend.

At the end of the tutorial you will have built a PWA that:

- works like a website and can be used normally in a browser
- can be installed as a local app
- works online and offline, with to-do items synchronised on reconnection to
  the server

.. note::

    While one of the key principles of a PWA is a responsive design, we will
    ignore the design and styling of the PWA in order to keep the code as
    simple as possible.

Setup
-----

To begin, let's take a look at the overall structure of the project below

.. code-block::
    :caption: Directory structure

    my-todo-app
    │
    ├── app.py
    ├── static
    │   └── js
    │       └── app.js
    └── templates
        └── index.html

Explanation:

- ``app.py`` contains Flask code responsible for the back end
- ``static`` will contain static files such as the JavaScript in ``app.js``
  responsible for the front end
- ``templates`` contains the template file ``index.html``

Backend
~~~~~~~

The backend code in ``app.py`` performs the following:

1. Create an sqlite database called ``tasks.db`` if it doesn't exist
2. Define a Task model using SQLAlchemy's ORM
3. Setup routes for:

   1. The homepage, which just renders the homepage template
   2. ``GET``-ing the list of all tasks in the database
   3. ``POST``-ing a new task to add to the database

.. literalinclude:: ../../_static/tutorials/pwa/01_setup/app.py
    :language: python
    :caption: app.py
    :linenos:

Frontend
~~~~~~~~

The frontend is composed of two files:

1. The ``index.html`` template which launches the controlling ``app.js`` code
   and has user interface placeholders
2. The ``app.js`` JavaScript that controls the webpage contents and connects to
   the backend

**index.html**

In the ``index.html`` template shown below:

- A small form is presented to enter short to-do items
- A placeholder ``<ul>`` is created which will be updated by the JavaScript
  code
- The ``app.js`` script is loaded, which controls the web page

.. literalinclude:: ../../_static/tutorials/pwa/01_setup/templates/index.html
    :language: html
    :caption: index.html
    :linenos:

**app.js**

The ``app.js`` file is responsible for:

- retrieving the list of tasks from the server and populating the ``<ul>`` on
  the first page load
- responding to events such as creating a task or deleting a task

.. literalinclude:: ../../_static/tutorials/pwa/01_setup/static/js/app.js
    :language: javascript
    :caption: app.js
    :linenos:

Installable PWA
---------------

So far we've created fairly standard website. To make it installable as a PWA
we need to add the following:

1. The manifest (``manifest.json``), describing the PWA
2. An icon for installed application

The new project structure is below

.. code-block::
    :caption: Directory structure

    my-todo-app
    │
    ├── app.py
    ├── static
    │   ├── images
    │   │   └── icon-512.png
    │   ├── js
    │   │   └── app.js
    │   └── manifest.json
    └── templates
        └── index.html

Manifest
~~~~~~~~

The manifest provides some basic information to the web browser and operating
system about how the PWA should be installed and presented to the user.

You'll notice:

- The ``manifest.json`` file is located under ``/static``
- The manifest is referenced in the ``index.html`` template so that the browser
  knows that the app is a PWA.

.. literalinclude:: ../../_static/tutorials/pwa/02_install/static/manifest.json
    :language: json
    :caption: manifest.json
    :linenos:

.. literalinclude:: ../../_static/tutorials/pwa/02_install/templates/index.html
    :language: html
    :caption: Excerpt of ``index.html``
    :linenos:
    :lines: 1-9

Icon
~~~~

You need to provide an icon to make the PWA installable. Below you can find the
included icon at ``512x512`` size, feel free to change the icon to your liking.

.. figure:: ../../_static/tutorials/pwa/02_install/static/images/icon-512.png
    :align: center
    :width: 192

    The included app icon.

Working Offline
---------------

To make the app "progressive" by working when offline (disconnected from the
web or the server), we need to:

1. Write a service worker, which

   - **intercepts** network requests
   - manages **offline** behaviour

2. Serve the ``service-worker.js`` file from the root of the URL, which allows
   it to intercept network requests
3. Add code to ``app.js`` to notify the service worker when the computer
   connects to the internet so that offline changes can be synchronised.
4. Update the ``index.html`` template to **register** the service worker

.. hint::

    Once you're done working through the steps below, you can run the PWA and
    test the offline behaviour using the developer tools in your browser.

    For example in Google Chrome under the "Application > Service workers"
    developer options you can tick "Offline" at the top of the page to put the
    window or tab into offline mode. Unticking the option restores the
    connection.

The new project structure is below

.. code-block::
    :caption: Directory structure

    my-todo-app
    │
    ├── app.py
    ├── static
    │   ├── images
    │   │   └── icon-512.png
    │   ├── js
    │   │   ├── app.js
    │   │   └── service-worker.js
    │   └── manifest.json
    └── templates
        └── index.html

Service Worker
~~~~~~~~~~~~~~

The service worker definition is quite long as it handles the complex task of
managing offline behaviour.

To summarise the service worker:

1. Caches files to make them available offline
2. Create an in-browser database to:

   - Manage a copy of the task list so that the tasks are available offline
   - Keep a copy of requests that happened offline so that they can be replayed
     to the server when reconnected

3. Intercept network requests

   - Attempt to send the requests normally
   - If the request fails because the computer is offline, store the requests
     to be replayed later

4. Listen for messages from ``app.js`` (main thread) that the computer has
   connected to the internet

.. literalinclude:: ../../_static/tutorials/pwa/03_offline/static/js/service-worker.js
    :language: javascript
    :caption: service-worker.js
    :linenos:

Serving the Service Worker
~~~~~~~~~~~~~~~~~~~~~~~~~~

Part of the security restrictions of service workers is that they can only
listen for network requests made to the same path, or descendants of the path,
that they are served from. This means we need to serve the
``service-worker.js`` file from ``/service-worker.js`` to intercept all network
requests made to the server.

By using Flask's ``send_from_directory`` we can add a new view to serve the
file at the root path.

.. literalinclude:: ../../_static/tutorials/pwa/03_offline/app.py
    :language: python
    :caption: app.py
    :linenos:
    :lineno-start: 37
    :lines: 37-40

Online Event
~~~~~~~~~~~~

When the browser detects online/offline conditions it broadcasts these to any
listening objects. We can pass these events on to the service worker through
the inbuilt messaging system that allows the main browser thread and service
workers to communicate.

Adding the code below to ``app.js`` achieves this task:

.. literalinclude:: ../../_static/tutorials/pwa/03_offline/static/js/app.js
    :language: javascript
    :caption: app.js
    :linenos:
    :lineno-start: 93
    :lines: 93-97

Register Service Worker
~~~~~~~~~~~~~~~~~~~~~~~

To finally register the service worker you can add the small snippet of
JavaScript shown below to ``index.html``.

.. literalinclude:: ../../_static/tutorials/pwa/03_offline/templates/index.html
    :language: html
    :caption: index.html
    :linenos:
    :lineno-start: 24
    :lines: 24-31
