.. role:: python(code)
   :language: python

Forms - Part 1
=====================

HTML forms are essential for collecting user input on webpages. In this section we will 
learn how to create forms with HTML, how to send the form data to a webserver using 
a HTTP ``GET`` request using :term:`query strings <query string>` and handle the 
request on a web server.

We'll use these form submissions to filter movie reviews in our case study as an 
example.

HTML Forms
--------------------------

A HTML form consists of

*   a ``form`` element
*   a set of ``input`` elements inside the form element.

Here's an example of a form

.. code-block:: html

    <!DOCTYPE html>
    <html>
    <head>
        <title>Search Form</title>
    </head>
    <body>
        <h1>Search</h1>
        <form>
            <label for="query">Enter your search:</label>
            <input type="text" id="term" name="term"><br><br>
            
            <input type="submit" value="Search">
        </form>
    </body>
    </html>

Explanation

*   ``<form>`` specifies the start of a form and encapsulates all the inputs that are 
    to be submitted with the form.
*   ``<input type="text" id="term" name="term">`` creates a text input for the user's 
    search term. The ``name`` attribute will become the key in the query string.
*   ``<input type="submit" value="Search">`` creates a button to submit the form data.

Form Inputs
--------------------------

The HTML specification defines a number of valid ``input`` types. Common examples are:

*   ``checkbox``
*   ``number``
*   ``radio``
*   ``text``

There is also a special type called ``submit``, which creates a button that submits 
the form when clicked.

A full list of valid ``input`` types can be found here 
`<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input>`_

Forms over HTTP
--------------------------

When a form is submitted, the browser sends the form data to the server using 
HTTP. The two most common methods are:

*   ``GET``: Sends data as part of the URL, typically used for 
    retrieving data.
*   ``POST``: Sends data in the body of the request, used for 
    submitting data such as forms or file uploads.

We will focus on submititng forms using ``GET`` requests on this page.

.. note::
    Forms using ``POST`` requests are described in
    :doc:`/web_part1/server_cont/flask_forms_post`.

For forms using ``GET`` the data is encoded in the URL itself, making them ideal for:

*   Search queries
*   Filters for content (e.g., filtering movies by genre)
*   Bookmarkable URLs (since the data is visible in the URL, users can save and share 
    the link)

Everyday examples include search bars on websites (e.g., Google) and filters on 
e-commerce sites (e.g., filtering by price or category).

Query Strings
--------------------------

When using the ``GET``, the data is sent in the URL as a :term:`query string`. Query 
strings consist of key-value pairs appended to the URL, and they follow this format:

.. code-block::

    http://example.com/search?key1=value1&key2=value2


*   **Key**: The name of the input field in the form.
*   **Value**: The value entered by the user.

Example Form
--------------------------

Here's an example of a form using ``GET`` where users can search by name:

.. code-block:: html
    :linenos:
    :emphasize-lines: 8

    <!DOCTYPE html>
    <html>
    <head>
        <title>Search Form</title>
    </head>
    <body>
        <h1>Search</h1>
        <form action="/search" method="GET">
            <label for="term">Enter your search:</label>
            <input type="text" id="term" name="term"><br><br>
            
            <input type="submit" value="Search">
        </form>
    </body>
    </html>


Explanation

*   ``<form action="/search" method="GET">`` creates a form that submits data to the 
    ``/search`` URL using the GET method. This means the input will appear in the URL 
    after submission.

When the form is submitted with "Flask" as the search term, the URL will look like this:

    http://localhost:5000/search?term=Flask


Handling Query Strings
--------------------------

Here's how you can handle the query string data in Flask:

.. code-block::

    from flask import Flask, request

    app = Flask(__name__)

    @app.route('/search', methods=['GET'])
    def search():
        # Access the query string data
        term = request.args.get('term', '')
        
        if term:
            return f"You searched for: {term}"
        else:
            return "No search term provided."

    app.run(debug=True, port=5000)

Explanation

*   The ``/search`` route listens for GET requests.
*   :python:`request.args.get('term', '')` is used to retrieve the value of the 
    ``term`` parameter from the URL. The `request.args` dictionary contains all the 
    query string data. If no value is provided, it defaults to an empty string 
    (:python:`''`).
*   The server returns a message that displays what the user searched for.

Example: Filter Reviews
--------------------------

Let's create an example where we filter the movies in the "Movie Reviews" database by 
attributes like genre or review score. The user will select filters using a form, and 
the results will be displayed based on the selected filters.

Project structure:

.. code-block:: text

   ├── app.py
   ├── movies.db
   └── templates/
       └── search.html
       └── filter.html

.. tab-set::

    .. tab-item:: Server

        .. code-block:: python
            :caption: app.py
            :linenos:

            from flask import Flask, request, render_template
            from sqlalchemy import create_engine, text

            app = Flask(__name__)
            
            # Connect to the database
            engine = create_engine('sqlite:///movies.db')

            @app.route('/search')
            def filter_movies():
                return render_template('search.html')

            @app.route('/filter', methods=['GET'])
            def filter_movies():
                # Get filter parameters from the query string
                genre = request.args.get('genre', '')
                score = request.args.get('score', '')

                conditions = []
                if genre:
                    conditions.append("genre={}".format(genre))
                if score:
                    conditions.append("score>={}".format(score))

                condition_str = " and ".join(conditions)

                # Get the movie review that match the conditions
                query = text("SELECT * FROM reviews WHERE {}".format(condition_str))
                result = connection.execute(query).fetchall()

                return render_template('movie_list.html', movies=filtered_movies)

            app.run(debug=True, port=5000)


        Explanation
        
        *   ``<form action="/filter" method="GET">`` creates a form that submits the 
            selected filters to the ``/filter`` URL using the GET method.
        *   ``<select id="genre" name="genre">`` creates a dropdown list of genres. 
            The ``name="genre"`` attribute ensures that the selected genre is sent as 
            a query string parameter.
        *   ``<input type="number" id="score" name="score">`` allows users to specify 
            a minimum review score. The `name="score"` attribute ensures this value is 
            sent as a query string parameter.
        *   ``<input type="submit" value="Filter Movies">`` sends the selected filter 
            options to the server when clicked.

        When the form is submitted with "Action" as the genre and "8" as the minimum 
        score, the URL will look like this:

            http://localhost:5000/filter?genre=Action&score=8


    .. tab-item:: Search page

        .. code-block:: html
            :caption: search.html
            :linenos:

            <!DOCTYPE html>
            <html>
                <head>
                    <title>Search Reviews</title>
                </head>
                <body>
                    <h1>Filter Movies</h1>
                    <form action="/filter" method="GET">
                        <label for="genre">Genre:</label>
                        <select id="genre" name="genre">
                            <option value="">Any</option>
                            <option value="Action">Action</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Drama">Drama</option>
                            <option value="Animation">Animation</option>
                        </select><br><br>

                        <label for="score">Minimum Review Score:</label>
                        <input type="number" id="score" name="score" min="1" max="10"><br><br>

                        <input type="submit" value="Filter Movies">
                    </form>
                </body>
            </html>

        Explanation

        *   The ``/filter`` route listens for GET requests with query string parameters 
            for filtering movies.
        *   :python:`request.args.get('genre', '')` and 
            :python:`request.args.get('score', '')` retrieve the values of the 
            ``genre`` and ``score`` parameters from the URL. If no value is provided, 
            they default to an empty string (``''``).
        *   The `reviews`` table is queried to retrieve reviews that match the 
            conditions.
        *   The filtered list of movies is passed to the ``movie_list.html`` template, 
            which displays the movies.


    .. tab-item:: Filter results page

        .. code-block:: html
            :caption: filter.html
            :linenos:

            <!DOCTYPE html>
            <html>
                <head>
                    <title>Movie List</title>
                </head>
                <body>
                    <h1>Filtered Movies</h1>
                    <ul>
                        {% for movie in movies %}
                            <li>{{ movie[1] }} ({{ movie[2] }}) - Score: {{ movie[5] }}</li>
                        {% endfor %}
                    </ul>
                </body>
            </html>

        Explanation

        *   This template loops through the filtered movies and displays each movie's 
            title, genre, and review score in a list.

Glossary
--------------

.. glossary::

    Query String
        TODO