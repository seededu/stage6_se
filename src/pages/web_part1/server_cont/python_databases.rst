.. role:: python(code)
   :language: python


Databases and Python
===========================

`SQLAlchemy <https://www.sqlalchemy.org>`_ is a Python library that helps you work with 
databases. It allows you to submit SQL queries to a database using Python.

SQLAlchemy can **interact with many different types of databases**, such as:

*   SQLite
*   MySQL
*   PostgreSQL

SQLAlchemy makes it easy to work with any of these databases using the same Python 
code. You don't need to learn different ways to connect or run queries for each 
database; SQLAlchemy takes care of that for you.

SQLAlchemy
-----------------------

Here's how to connect to an SQLite database and run a basic query using SQLAlchemy

.. code-block:: python

    from sqlalchemy import create_engine, text

    # Connect to the database
    engine = create_engine('sqlite:///movies.db')
    connection = engine.connect()

    # SQL query to select all movies
    query = text("SELECT * FROM movies")

    # Execute query and fetch results
    result = connection.execute(query).fetchall()

    # Print the result
    for row in result:
        print(row)


Code breakdown:

*   **Engine**: :python:`create_engine('sqlite:///movies.db')` connects to the SQLite database file named ``movies.db``.
*   **Connection**: We create a `Connection`, which represents the connection to the database.
*   **Using** :python:`text`: We write a SQL query as a string using :python:`text("SELECT * FROM movies")`.
*   **Executing and fetching results**: :python:`session.execute(query)` runs the query, and :python:`fetchall()` retrieves all rows.
