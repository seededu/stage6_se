Order By
========

It is often useful to sort a table of data by a given column. For example, you might
want to sort a dataset by date to put events into a chronological order.

To sort rows in SQL we use the ORDER BY keyword. This comes after your ``SELECT``,
``FROM`` and ``WHERE`` statements. By default, we sort in **ascending** order, but if
you want to be explicit you can use the keyword ``ASC``. To sort in **descending** order
we can use the keyword ``DESC``.

The structure of an ``ORDER BY`` statement is:

.. code-block:: sql

    ORDER BY attribute ASC|DESC;

Here is an example of a query that selects all columns from the ``transactions`` table,
but orders the rows an ascending order by ``id``.

.. code-block:: sql

    SELECT *
    FROM transactions
    ORDER BY id;
