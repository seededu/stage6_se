.. role:: python(code)
   :language: python

Flask Intro
======================

Flask is a lightweight and powerful web framework written in Python. Flask takes care 
of the tedious parts of  building server side applications by handling the low level 
details of HTTP requests and responses for you.

Flask is an open source framework, with a large user base. Some of the worlds largest 
companies build some or all of their web applications using Flask. For example:

* Netflix uses Flask for building internal tools.
* Pinterest uses Flask for developing their web API
* Linkedin 
* Uber [1]_

.. caution::

    TODO: FIX THESE LINKS

Flask simplifies web development by allowing you to create a web application using 
Python functions. All you need to do is define routes and write code to respond to 
requests — Flask takes care of the rest!


Hello World with Flask
------------------------

We will start with a "Hello World!" application using Flask.

.. code-block:: python
    :caption: ``app.py``

    from flask import Flask

    app = Flask(__name__)  # Create a Flask application

    @app.route("/")  # Define the route for the home page
    def hello_world():
        return "Hello, World!"  # Return "Hello, World!" as a response

    if __name__ == "__main__":
        app.run(debug=True, port=5000)  # Run the app

Let's breakdown the Python script

*   :python:`from flask import Flask`: This line imports the Flask class from the 
    flask module.
*   :python:`app = Flask(__name__)`: Here, we create a new Flask application. 
    :python:`__name__` helps Flask figure out the root path of your application.
*   :python:`@app.route("/")`: This is called a route. It tells Flask which URL should 
    trigger the function right below it. In this case, it's the home page (``/``).
*   :python:`def hello_world():`: This function is triggered when the user visits the 
    home page, and it returns the message ``"Hello, World!"``.
*   :python:`if __name__ == "__main__":`: This checks if the script is being run 
    directly (not imported as a module). If true, it runs the Flask app.
*   :python:`app.run(debug=True, port=5000)`: This starts the Flask web server with: 
    
    *   ``debug`` mode enabled  which helps catch errors and reload the app when changes are 
        made.
    *   listens for requests on port ``5000``, which is useful since the default HTTP 
        port ``80`` can be already occupied on your computer.


Running Hello World
------------------------

To run the Flask app, follow these steps:

1. Save the above code in a file named ``app.py``.
2. Open a terminal or command prompt in the directory where ``app.py`` is located.
3. Run the command:

.. code-block:: sh

    python app.py

4. Open your browser and go to `<http://127.0.0.1:5000/>`_

.. hint::

   If you see "Hello, World!" displayed on the page you've successfully created your 
   first server side app!

   You can end the process by pressing ``CTRL + C`` keys together in the terminal 
   window where you ran the command originally.


What's the time?
------------------------

Let's build a slightly more advanced example where the webpage shows the current date 
and time.


.. code-block::
    :caption: ``time.py``

    from flask import Flask
    import datetime

    app = Flask(__name__)

    @app.route("/")  # Define the route for the home page
    def show_date_random_word():
         # Get current date and time
        current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S") 
        html = f"""
        <!DOCTYPE html>
        <html>
        <body>
            <h1>Welcome!</h1>
            <p>Current Date and Time: {current_time}</p>
        </body>
        </html>
        """
        return html  # Return the HTML

    if __name__ == "__main__":
        app.run(debug=True, port=5000)

The steps to run the "What's the time?" app are similar as "Hello World":

1. Save the above code in a file named ``time.py``.
2. Open a terminal or command prompt in the directory where ``time.py`` is located.
3. Run the command:

.. code-block:: sh

    python time.py

4. Open your browser and go to `<http://127.0.0.1:5000/>`_. 

.. hint::

   Each time you refresh the page in your browser you should see a different time 
   since the python function is executed on every page load.


.. caution::

    You can't run multiple servers on the same port. So make sure you terminate the 
    "Hello, World!" example before running "What's the time?".


References
-----------------------

.. [1] https://www.uber.com/en-AU/blog/uber-tech-stack-part-two/

