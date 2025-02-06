Limit
=====

If you have a large dataset, it is impractical to display all the rows in the dataset.
To do this in SQL, we use the ``LIMIT`` keyword to specify how many rows we would like
to display.

The ``LIMIT`` clause comes after the ``SELECT``, ``FROM``, ``WHERE`` and ``ORDER BY``
clauses.

.. code-block:: sql

    LIMIT number_of_rows;

Here is an example of a query that displays only the first 3 rows of the
``transactions`` table.

.. code-block:: sql

    SELECT *
    FROM transactions
    LIMIT 3;
