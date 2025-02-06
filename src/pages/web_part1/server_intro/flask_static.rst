Serving Static Files
====================

In web development, static files refer to resources like images, CSS files (for
styling), and JavaScript files (for interactivity) that don't change as users
interact with the web page. Flask makes serving static files easy by
automatically creating a special route for these files.

Flask Project Structure
-----------------------

To understand how Flask serves static files, it's important to understand
Flask's project structure. Here's a typical structure for a Flask project that
includes static files:

.. code-block::

    /my_flask_app
        /static
            /css
                styles.css
            /images
                logo.png
        app.py

- ``/static/``: This directory contains all the static files like CSS, images,
  and JavaScript.
- ``app.py``: This is your main Flask application file, where you define your
  routes.

The static directory
--------------------

Flask knows that web applications often need static resources like images and
stylesheets, so it automatically serves any files placed in a folder named
static. By default, Flask creates a special route ``/static/`` to serve these
files.

For example, if you have an image called logo.png in the static directory, you
can access it in your browser by visiting
http://127.0.0.1:5000/static/logo.png. Flask automatically knows where to find
it!

Changing the static URL
~~~~~~~~~~~~~~~~~~~~~~~

By default, Flask serves static files under the ``/static/`` URL path. However,
you can change this URL path if you want to serve static files from a different
location. For example, you might want to serve your files from ``/assets/``
instead of ``/static/``.

To do this, you can pass the ``static_url_path`` argument when creating the
Flask application:

.. code-block:: python

    app = Flask(__name__, static_url_path="/assets")

Example: Serving CSS
--------------------

Let's create a simple example where we serve a custom CSS file to style the
homepage.

1. Create the Flask app (``app.py``)

.. code-block:: python

    from flask import Flask, render_template

    app = Flask(__name__)


    @app.route("/")  # Define the route for the home page
    def home():
        return """
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/static/css/styles.css">  <!-- Link to the CSS file -->
        </head>
        <body>
            <h1>Welcome to My Styled Homepage!</h1>
            <p>This page is styled with custom CSS.</p>
        </body>
        </html>
        """


    if __name__ == "__main__":
        app.run(debug=True)

In this code:

- We created a basic Flask app with a single homepage route.
- In the ``<head>`` section of the HTML, we link to a custom CSS file located
  at ``/static/css/styles.css``. The href points to the CSS file in the static
  folder.

2. Create the ``static/css/styles.css`` file

Next, we create the CSS file that will style our page. Place this file in the
static/css/ folder.

.. code-block:: css

    body {
        background-color: lightblue;
        font-family: Arial, sans-serif;
    }

    h1 {
        color: darkblue;
    }

    p {
        color: darkgreen;
    }

This CSS file changes the background color of the page to light blue, the
heading (``h1``) to dark blue, and the paragraph text (``p``) to dark green.

.. hint::

    Make sure your project folder looks like the following:

    .. code-block::

        /my_flask_app
            /static
                /css
                    styles.css
            app.py

3. Run the Flask App

.. code-block::

    python app.py

4. Access the Webpage

Open your browser and go to http://127.0.0.1:5000/. You should see the styled
homepage with a light blue background, a dark blue heading, and dark green text
for the paragraph. Flask automatically serves the CSS file from the
``/static/`` folder.

Example: Serving Images
-----------------------

Now that you've learned how to serve CSS files, let’s add an image to the
homepage, such as a selfie, and serve it using Flask.

1. Update the Flask app (``app.py``)

.. code-block:: python

    from flask import Flask

    app = Flask(__name__)


    @app.route("/")  # Define the route for the home page
    def home():
        return """
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/static/css/styles.css">  <!-- Link to the CSS file -->
        </head>
        <body>
            <h1>Welcome to My Styled Homepage!</h1>
            <p>This page is styled with custom CSS.</p>
            <img src="/static/images/selfie.jpg" alt="My Selfie" width="300">  <!-- Serve the selfie image -->
        </body>
        </html>
        """


    if __name__ == "__main__":
        app.run(debug=True)

In this code:

- The ``<img>`` tag is used to display an image. The ``src`` attribute points
  to the image file ``selfie.jpg`` located in the ``static/images/`` folder.
- The width attribute sets the width of the image to 300 pixels (you can change
  it based on your ego).

2. Add the Image File

Place your selfie image in the ``static/images/`` folder. You can name the file
``selfie.jpg`` or any name you prefer, as long as the file path matches what's
in the ``<img>`` tag.

.. hint::

    Make sure your project folder looks like the following:

    .. code-block::

        /my_flask_app
        /static
            /css
                styles.css
            /images
                selfie.jpg  <-- Place your selfie image here
        app.py

3. Run the Flask App

.. code-block::

    python app.py

4. Access the Webpage

Open your browser and go to http://127.0.0.1:5000/. You should see the styled
homepage with the selfie displayed below the heading and paragraph text.
