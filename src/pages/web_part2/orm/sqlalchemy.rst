SQLAlchemy
=============================

SQLAlchemy is a popular Python ORM library that simplifies database interactions by allowing you to work with Python
classes and objects instead of raw SQL. It automatically maps these classes to database tables, so you can think about
your data in an object-oriented way rather than in rows and columns.

.. note::

    On this and subsequent pages we will use the example of a database of books.

Models
-------------------------

n the context of ORMs like SQLAlchemy, a **model** is a Python class that represents a table in your database. Each
attribute of the class corresponds to a column in that table, and each instance (object) of the class corresponds to a
row in the table.

Think of it like a blueprint: if your database is a library filled with information on books, then a model defines what
a single book record looks like—its title, author, publication date, and genre. The model acts as an intermediary
between your Python code and the underlying database structure. When you create a new instance of the model and save
it, SQLAlchemy translates that action into inserting a new row into the corresponding table.

Defining a Model
-----------------------------

Syntax
^^^^^^^^^^^^^^^^^^

To define a model with SQLAlchemy we need to create a new class that indirectly inherits from a special class called
``DeclarativeBase``, which manages a lot of the complex database interaction for us.

Here's an abstract example to create a new model called ``MyModelClass``. Notice that:

- ``MyModelClass`` inherits from ``Base`` which inherits from ``DeclarativeBase``. This structure is required, otherwise
  SQLAlchemy will throw an exception. It is due to the design of SQLAlchemy and we can ignore it for now.
- The ``__tablename__`` property defines the name of the table to use in the underlying database.
- The ``id`` property creates a column in the table that is an integer valued primary key
- The remaining properties will create columns in the table for other data such as strings, integers and dates.

.. code-block:: python

    from sqlalchemy.orm import DeclarativeBase
    from sqlalchemy import Column, Integer, String, Date

    class Base(DeclarativeBase):
        pass

    class MyModelClass(Base):
        __tablename__ = 'my_table_name'  # Name of the table in the database

        id = Column(Integer, primary_key=True)
        field1 = Column(String)
        field2 = Column(Integer, nullable=False)
        field3 = Column(Date)

.. hint::

    It is convention for model class names to follow CamelCase style naming.

Example: Book Class
^^^^^^^^^^^^^^^^^^^^^

Let's look at how we can create a class to represent a book object to hold the:

- title
- author
- publication date
- genre

.. code-block:: python

    from sqlalchemy.orm import DeclarativeBase
    from sqlalchemy import Column, Integer, String, Date

    # Define our own Base class using DeclarativeBase
    class Base(DeclarativeBase):
        pass

    class Book(Base):
        __tablename__ = 'books'  # Name of the table in the database

        id = Column(Integer, primary_key=True)
        title = Column(String, nullable=False)
        author = Column(String, nullable=False)
        publication_date = Column(Date)
        genre = Column(String)

Explanation:

- The ``Book`` class is our model.
- SQLAlchemy uses this model to create a books table in the database with columns for ``id``, ``title``, ``author``,
  ``publication_date``, and ``genre``.
- When you work with instances of Book in your code (create a new one, update one, query for one), SQLAlchemy
  translates those operations into database actions like inserting a new row, updating existing rows, or selecting data.


Setting Up the Database
-------------------------

Before we can add or fetch any books, we need to set up our database connection and create the necessary tables.

.. code-block:: python

    from sqlalchemy import create_engine

    # Create an engine that stores data in a local SQLite database file.
    engine = create_engine('sqlite:///books.db')

    # Create all tables defined by Base's subclasses (in this case, just Book).
    Base.metadata.create_all(engine)

Explanation:

- The ``engine`` object is responsible for connecting to the database object, in this case an SQLite file called
  ``books.db``.
- Calling ``create_all`` tells SQLAlchemy to create any missing tables according to our models.

Interacting With Model Objects
-------------------------------------

To interact with the database further we need to create a "session", which represents a connection to the database.
This session object is how we can create, query, edit and delete the objects in our database.

.. code-block:: python

    from sqlalchemy.orm import sessionmaker

    # Establish a session to interact with the database.
    Session = sessionmaker(bind=engine)
    session = Session()

Creating an Object
^^^^^^^^^^^^^^^^^^^^^^^^^

In the example below, we create a new Book instance in Python and add it to our database. If we were using raw SQL we
would have had to write a long and carefully formatted ``INSERT`` statement.

To create objects use the Model's constructor and then ``session.add`` and ``session.commit`` as shown below.

.. code-block:: python

    from datetime import date

    new_book = Book(
        title="The Adventures of Sherlock Holmes",
        author="Arthur Conan Doyle",
        publication_date=date(1892, 10, 14),
        genre="Mystery"
    )
    session.add(new_book)     # Stage the new book to be added
    session.commit()          # Commit changes to the database

Querying Objects
^^^^^^^^^^^^^^^^^^^^^^^^^

To search or query for Book's in the database we use the ``query`` method of the session and provide the class of the
model we are searching. Then filters (equivalent to ``WHERE`` clauses) can be applied.

.. code-block:: python

    # Fetch a book by title
    sherlock = session.query(Book).filter_by(title="The Adventures of Sherlock Holmes").first()
    print(sherlock.author, sherlock.publication_date)

Update an Object
^^^^^^^^^^^^^^^^^^^^^^^^^

Updating and editing an object just requires changing the relevant field property of the object and committing the
change to the database.

.. code-block:: python

    sherlock.genre = "Detective Fiction"
    session.commit()

Deleting an Object
^^^^^^^^^^^^^^^^^^^^^^^^^

Deleting an object from the database is handled by the ``session.delete`` method and committing the change.

.. code-block:: python

    session.delete(sherlock)
    session.commit()