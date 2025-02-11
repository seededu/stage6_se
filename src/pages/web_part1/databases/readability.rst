Readability
===========

You may have noticed that SQL is not as fussy as other languages such as
Python.

SQL does not care about:

- Letter capitalisation
- New lines
- Indentation

For example, these two queries are equivalent.

.. code-block:: sql

    SELECT item, cost
    FROM products
    WHERE pricing = 'each' AND cost < 3.00
    ORDER BY item
    LIMIT 2;

.. code-block:: sql

    select iTEm, cOst from ProDuctS where pricing = 'each' and cost < 3.00 order by itEm limit 2;

Which one is easier to read?

General SQL convention is to start clauses on new lines, and to capitalise
keywords.

A good programming practice is to make sure that your code is **readable** so
that it is easier for you and for other people to understand. It also makes it
easier to identify mistakes (bugs) in your code!

Comments
--------

When you are writing code, it's always good to have comments! Comments are
there to improve the readability of your code and are ignored by the computer.

To add a comment in SQL we use ``--``.

.. code-block:: sql

    -- This is a comment

You can use the -- to add comments to the ends of lines in your SQL queries.

.. code-block:: sql

    SELECT firstname
    FROM customers
    ORDER BY firstname; -- default ascending order

Sometimes you might want to add longer comments. In SQL we use ``/*`` to begin
the comment and ``*/`` to end the comment.

For example, we can write a description of our ``customers`` table in SQL.

.. code-block:: sql

    /* The customers table stores the following attributes:
        - id
        - first_name
        - last_name
        - postcode
    */
