Select
======

When you want to see information stored inside the database, you will need to use the
``SELECT`` command.

The ``*`` allows you to select all of the columns.

.. code-block:: sql

    SELECT *

You will also need to tell the database which table you're interested in. To do this,
you will use the ``FROM`` keyword.

.. code-block:: sql

    SELECT *
    FROM table;

To end a query, you will need to use a semicolon ``;``. This will become important when
we combine multiple queries!

Let's look at an example.

.. code-block:: sql

    SELECT *
    FROM customers;

This query selects all the columns from the ``customers`` table and shows us the
results.

SELECT columns
--------------

We have already seen that we can view all the columns in our database using ``SELECT
*``.

But what if we don't need to see all of the columns? Or what if our database had so many
columns that it isn't practical to see all the columns at once?

Well the ``SELECT``` command allows us to specify which columns we are interested in.

.. code-block:: sql

    SELECT attribute_1, attribute_2, ...
    FROM table;

Here is an example which selects only the ``firstname`` and ``lastname`` columns from
our ``customers`` table.

.. code-block:: sql

    SELECT firstname, lastname
    FROM customers;
