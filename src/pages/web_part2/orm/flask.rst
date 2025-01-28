Tutorial: ORMs in Flask
=============================

In this tutorial we will work step-by-step to build a web app using Flask and SQLAlchemy ORM to keep track of a list of
books in your personal collection.

At the end of the tutorial you will have built a web app that:

- lists all books in your collection
- supports adding new books
- does not require any SQL!

Setup
---------------------

To begin, we will make a basic Flask web app that shows a list of books in the database, which at start will be empty.

We will use the `flask-sqlalchemy <https://flask-sqlalchemy.readthedocs.io/en/stable/>`_ extension, which simplifies
the integration of SQLAlchemy's ORM with Flask.

.. code-block::
    :caption: Directory structure

    my-books
    │
    ├── app.py
    ├── static
    └── templates
        └── index.html

Flask app
^^^^^^^^^^^^^^^^^^^^^^^^

The code below is our Flask app definition.

.. literalinclude:: ../../_static/tutorials/orm/01_setup/app.py
    :language: python
    :caption: app.py
    :linenos:

Explanation:

- Because we are using ``flask-sqlalchemy``, our database configuration and Model specification is different
- Note that most SQLAlchemy functions and classes are available through the ``db`` object
- A nice feature of ``flask-sqlalchemy`` is that common database operations are also available as methods of the model
  class e.g. ``Book.query.all()``, instead of through a ``session`` object.

Homepage template
^^^^^^^^^^^^^^^^^^^^^^^^

The template for the homepage is relatively simple. It will show a list of books if available, otherwise it shows
that no books are found.

.. literalinclude:: ../../_static/tutorials/orm/01_setup/templates/index.html
    :language: html
    :caption: index.html
    :linenos:

Adding Books
---------------------

To add books we need to:

- Add a form to our homepage to collect the book information and submit a POST request to the web app
- Add a new route to our Flask app that accepts POST requests and converts form data to a model object


Homepage template
^^^^^^^^^^^^^^^^^^^^^^^^

The template for the homepage should now include a form for adding books, like the one shown below.

.. literalinclude:: ../../_static/tutorials/orm/02_form/templates/index.html
    :language: html
    :caption: index.html
    :linenos:

Flask app
^^^^^^^^^^^^^^^^^^^^^^^^

Now we need a corresponding route in our Flask app to accept the form data.

Below is the route function that we need to add.

.. literalinclude:: ../../_static/tutorials/orm/02_form/app.py
    :language: python
    :caption: Excerpt of app.py
    :linenos:
    :lineno-start: 28
    :lines: 28-44

Explanation:

- Inside the route ``/add`` the form data is collected
- This data is used to create a new ``Book`` instance
- Using the ``db.session`` object it is added and committed to the database
- The user is redirected to the homepage, where the new book will appear on the list


