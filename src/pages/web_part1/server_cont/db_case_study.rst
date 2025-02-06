Case Study: Movie Reviews
=========================

The rest of this section uses the "Movie Reviews" case study as examples. The
movie reviews website will provide listings of movies and their associated
reviews. Backing the website is the ``movies`` database. It will store
information about the movies, e.g. the title and release year, and review
information such as the score and review text.

Later we'll see how to write a Flask app that connects to the database,
displays movies from it, list the most recent reviews, and show the top-rated
movies, all using python.

Download the Database
---------------------

You can download the :download:`movies.db <db/movies.db>` SQLite file used in
this section.

Movies Database
---------------

The movies database contains one table ``reviews`` with the following
structure:

.. code-block:: sql

    CREATE TABLE reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        release_year INTEGER NOT NULL,
        genre TEXT,
        review_date DATE,
        review_score INTEGER,
        review_text TEXT
    );

Reviews Table
-------------

Here is the content of the ``reviews`` table.

.. csv-table::
    :file: db/reviews.csv
    :header-rows: 1
    :class: longtable
