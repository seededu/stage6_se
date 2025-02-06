Databases with Flask
====================

Displaying Data from a Database
-------------------------------

In this example, we'll display a list of all movies from our database on the home page.
We'll use ``session.execute`` to run a SQL query that selects all movies then insert the
results as a list in our HTML.

.. code-block:: python
    :linenos:
    :emphasize-lines: 13-14, 22, 41

    from flask import Flask
    from sqlalchemy import create_engine, text

    app = Flask(__name__)

    # Connect to the database
    engine = create_engine("sqlite:///movies.db")
    connection = engine.connect()


    @app.route("/")
    def home():
        # SQL query to select all movies
        query = text("SELECT * FROM reviews")
        result = connection.execute(query).fetchall()

        # Create a list of <li> strings, one for each movie/review
        list_items = []
        for row in range(result):
            title = row[1]
            year = row[2]
            score = row[5]
            list_items.append("<li>{} ({}) - Score: {}</li>".format(title, year, row))

        # Combine all <li> strings into a single string
        list_items_str = "\n".join(list_items)

        # Insert <li> string into the homepage
        return """
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Movie Reviews</title>
            </head>
            <body>
                <h1>Movie Reviews</h1>
                <ul>
                    {}
                </ul>
            </body>
        </html>
        """.format(
            list_items_str
        )


    app.run(debug=True, reloader_type="stat", port=5000)

Explanation:

- We define the Flask app and connect to the database using the SQLite database stored
  in the file ``movies.db``. The connection is created by ``engine.connect()``.
- Inside the ``home()`` function, we define a SQL query to fetch all the movies from the
  database using ``session.execute``.
- The result of the query is processed to generate a list of HTML list items, which is
  then displayed on the home page.

Sort Results - Most Recent Reviews
----------------------------------

Let's display the most recently reviewed movies first on the home page. We'll modify the
SQL query to sort the results by ``review_date`` in descending order.

.. code-block:: python
    :linenos:
    :emphasize-lines: 13

    from flask import Flask
    from sqlalchemy import create_engine, text

    app = Flask(__name__)

    # Connect to the database
    engine = create_engine("sqlite:///movies.db")
    connection = engine.connect()


    @app.route("/")
    def home():
        # SQL query to select all movies
        query = text("SELECT * FROM reviews ORDER BY review_date DESC")
        result = connection.execute(query).fetchall()

        # Create a list of <li> strings, one for each movie/review
        list_items = []
        for row in range(result):
            title = row[1]
            year = row[2]
            score = row[5]
            list_items.append("<li>{} ({}) - Score: {}</li>".format(title, year, row))

        # Combine all <li> strings into a single string
        list_items_str = "\n".join(list_items)

        # Insert <li> string into the homepage
        return """
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Movie Reviews</title>
            </head>
            <body>
                <h1>Movie Reviews</h1>
                <ul>
                    {}
                </ul>
            </body>
        </html>
        """.format(
            list_items_str
        )


    app.run(debug=True, reloader_type="stat", port=5000)

Explanation:

- This example is similar to the previous one, but now the SQL query is modified to sort
  the movies based on ``review_date`` in descending order.
- The rest of the function works the same way by displaying the movies and their reviews
  sorted by the most recent date.

Sort and Limit Results - Top 10 Movies
--------------------------------------

In this example, we'll display the top 10 highest-rated movies, sorted by their
``review_score``. We'll modify the SQL query to limit the number of results and order
them by score.

.. code-block:: python
    :linenos:
    :emphasize-lines: 13

    from flask import Flask
    from sqlalchemy import create_engine, text

    app = Flask(__name__)

    # Connect to the database
    engine = create_engine("sqlite:///movies.db")
    connection = engine.connect()


    @app.route("/")
    def home():
        # SQL query to select all movies
        query = text("SELECT * FROM reviews ORDER BY review_score DESC LIMIT 10")
        result = connection.execute(query).fetchall()

        # Create a list of <li> strings, one for each movie/review
        list_items = []
        for row in range(result):
            title = row[1]
            year = row[2]
            score = row[5]
            list_items.append("<li>{} ({}) - Score: {}</li>".format(title, year, row))

        # Combine all <li> strings into a single string
        list_items_str = "\n".join(list_items)

        # Insert <li> string into the homepage
        return """
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Movie Reviews</title>
            </head>
            <body>
                <h1>Top 10 Movies</h1>
                <ul>
                    {}
                </ul>
            </body>
        </html>
        """.format(
            list_items_str
        )


    app.run(debug=True, reloader_type="stat", port=5000)

Explanation:

- This query fetches the top 10 movies with the highest review scores by using ``ORDER
  BY review_score DESC LIMIT 10``.
- We then process the results the same way as before, displaying only the top 10 movies
  on the home page.
