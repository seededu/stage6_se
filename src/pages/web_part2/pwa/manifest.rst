Web App Manifest
================

The web app manifest is a JSON file that provides essential metadata about your
Progressive Web App (PWA). It tells the browser how your app should appear and
behave when installed on a device. It defines the app’s name, icons, theme
colours, and more.

Including the Manifest File in Your HTML
----------------------------------------

To use a web app manifest, you need to link it in the ``<head>`` of your HTML
file using a ``<link>`` tag:

**Example**

.. code-block:: html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My PWA</title>

        <!-- Link to the web app manifest -->
        <link rel="manifest" href="manifest.json">

    </head>
    <body>
        <h1>Welcome to My PWA!</h1>
    </body>
    </html>

manifest.json
-------------

A web app manifest is a simple JSON file that defines various properties of
your PWA. Below is an example of a basic ``manifest.json`` file:

.. code-block:: json

    {
      "name": "My Progressive Web App",
      "short_name": "My PWA",
      "start_url": "/",
      "display": "standalone",
      "background_color": "#ffffff",
      "theme_color": "#0000ff",
      "icons": [
        {
          "src": "icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    }

.. hint::

    The full specification for the manifest is available here
    https://developer.mozilla.org/en-US/docs/Web/Manifest

Required Members
~~~~~~~~~~~~~~~~

The following members are required for a valid manifest.json file:

**name**

The full name of the app, displayed to the user when they install it.

Example:

.. code-block:: json

    "name": "My Progressive Web App"

**icons**

An array of objects specifying the app's icons. Each icon object includes:

- ``src``: Path to the icon image.
- ``sizes``: Size of the icon (e.g., ``"192x192"``).
- ``type``: File type of the icon (e.g., ``"image/png"``).

Example:

.. code-block:: json

    "icons": [
      {
        "src": "icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      }
    ]

**start_url**

The URL that the app loads when launched from the home screen.

Example:

.. code-block:: json

    "start_url": "/index.html"

**display**

Specifies how the app appears when launched. Common values:

- ``fullscreen``: Takes up the entire screen.
- ``standalone``: Looks like a native app, without the browser UI.
- ``minimal-ui``: Includes minimal browser UI, like a back button.

Example:

.. code-block:: json

    "display": "standalone"

Optional Members
~~~~~~~~~~~~~~~~

The following members are optional but can enhance the user experience. This
list is not exhaustive.

**short_name**

A shorter name for the app, used where space is limited (e.g., the app icon
label).

Example:

.. code-block:: json

    "short_name": "My PWA"

**background_color**

Specifies the background colour of the splash screen displayed while the app is
loading.

Example:

.. code-block:: json

    "background_color": "#ffffff"

**theme_color**

Defines the theme colour of the app, which can affect the browser’s UI (e.g.,
the colour of the address bar).

Example:

.. code-block:: json

    "theme_color": "#0000ff"

**orientation**

Locks the app to a specific screen orientation, such as portrait or landscape.

Example:

.. code-block:: json

    "orientation": "portrait"

**description**

A brief description of the app’s purpose.

Example:

.. code-block:: json

    "description": "A PWA that tracks your daily tasks."
