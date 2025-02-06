Where
=====

Sometimes we only want to select rows from our dataset which meet a particular criteria.
For example, we might only want to look at customers with a postcodes greater than 8000,
or were an item costs more than $2.00.

To select rows based on a particular criteria, we use the ``WHERE``` clause. The
``WHERE``` clause comes **after** the ``SELECT`` and ``FROM`` statements.

The structure of the ``WHERE`` clause is as follows:

.. code-block:: sql

    WHERE condition;

In SQL we can compare values using the following operators:

- ``<`` less than
- ``>`` greater than
- ``<=`` less than or equal to
- ``>=`` greater than or equal to
- ``=`` check values are equal
- ``!=`` check values are not equal

.. note::

    Note that we use a single = sign for comparisons in SQL.

Here is an example.

.. code-block:: sql

    SELECT *
    FROM customers
    WHERE lastname = 'Montazerolghaem';

.. note::

    Note! You might want to click the square button on the right of the code toolbar to
    make the example full screen before you run it.

We can also construct ``WHERE`` statements using multiple conditions using the keywords
``AND`` and ``OR`` separating each criterion.

.. code-block:: sql

    SELECT *
    FROM customers
    WHERE id < 10 AND postcode > 8000;
