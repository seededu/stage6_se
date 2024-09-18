.. role:: python(code)
   :language: python

Handling Requests
====================

Flask makes it easy to manage HTTP requests by allowing us to define routes, which are 
specific URLs that trigger functions in our code. These functions process the requests 
and generate HTTP responses, which are then sent back to the user's browser.

Route Decorator
-----------------

In Flask, we use the :python:`@` symbol (called a decorator) to associate a function 
with a specific URL, also known as a route. A decorator is a special function in Python 
that modifies or extends the behavior of the function it is applied to. Decorators 
allow us to add extra functionality to functions in a clean and simple way, without 
changing the function's core code.

When you use a decorator like :python:`@app.route("/")`, it associates the URL ``/``
and the function directly below with each other inside the Flask app object's routing 
directory.

Flask Routing System
--------------------

Flask's routing system is designed to be both powerful and flexible. Here's how it 
works:

*   You declare routes using the :python:`@app.route()` decorator.
*   Each route corresponds to a different URL in your web application.
*   Flask automatically matches incoming requests to the right route and runs the 
    associated function.

.. hint::

    You can define your routes in any order in your code, and Flask will handle them 
    correctly. This means even if you declare a route at the bottom of your file, Flask 
    will still know how to route requests to that URL.

Two Routes Example
-----------------------

Below is an example with two routes: one for the home page (``/``) and another for the 
"about" page (``/about``):

.. code-block::

    from flask import Flask

    app = Flask(__name__)

    @app.route("/")
    def home():
        return """
        Welcome to the home page!

        <a href="/about">Go to About page</a>
        """"

    @app.route("/about")
    def about():
        return "This is the about page!"

    if __name__ == "__main__":
        app.run(debug=True, port=5000)


In this example:

*   The first route (:python:`@app.route("/")`) maps to the function :python:`home()`, 
    which returns a simple message for the home page.
*   The second route (:python:`@app.route("/about")`) maps to the function 
    :python:`about()`, which handles the "about" page.
*   When you visit `<http://127.0.0.1:5000/>`_, the home page will show, and when you 
    visit `<http://127.0.0.1:5000/about>`_, the about page will appear.


A Complete Example
-----------------------

Now, let's bring everything together and build a small personal web page with multiple 
routes.

In this example, we have:

*   A home page (``/``) that contains links to the "About" and "Contact" pages.
*   An "About" page (``/about``) that gives some information about yourself.
*   A "Contact" page (``/contact``) that displays a fictional email address.

.. code-block::

    from flask import Flask

    app = Flask(__name__)

    # Home page
    @app.route("/")
    def home():
        return """
        <h1>Welcome to My Personal Webpage</h1>
        <p>This is the home page.</p>
        <p><a href="/about">About Me</a> | <a href="/contact">Contact</a></p>
        """

    # About page
    @app.route("/about")
    def about():
        return """
        <h1>About Me</h1>
        <p>Hello! I'm a high school student learning web development with Flask.</p>
        <p><a href="/">Back to Home</a></p>
        """

    # Contact page
    @app.route("/contact")
    def contact():
        return """
        <h1>Contact Me</h1>
        <p>You can reach me via email at student@example.com.</p>
        <p><a href="/">Back to Home</a></p>
        """