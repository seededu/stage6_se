.. role:: python(code)
   :language: python

Variables in Routes
====================

Often, you will want to pass information in the URL itself. Flask allows you to 
include variables in a route and then use them in your function.

Here's an example where the URL includes a person's name:

.. code-block::

    from flask import Flask

    app = Flask(__name__)

    @app.route("/hello/<name>")  # Route with a variable 'name'
    def hello(name):
        return f"Hello, {name}!"

    if __name__ == "__main__":
        app.run(debug=True, port=5000)

Let's understand the ``hello`` decorator and function:

*   The ``<name>`` part of the URL is a placeholder for any name that a user types in 
    the URL.
*   The value provided in the URL is passed to the :python:`hello()`` function as a 
    parameter, and Flask will embed that value in the response.

For example, if you go to `<http://127.0.0.1:5000/hello/Alice>`_, the page will display 
``"Hello, Alice!"``. If you visit `<http://127.0.0.1:5000/hello/Bob>`_, it will display 
``"Hello, Bob!"``.
