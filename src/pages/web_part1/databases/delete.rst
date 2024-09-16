.. role:: sql(code)
   :language: sql

Delete
==============================

There are times when you might need to :sql:`DELETE`` a record. To do this, you need to 
specify which table you are deleting :sql:`FROM`` and you will also need to specify a 
criteria to identify :sql:`WHERE`` to find the records to delete.

.. code-block::

    DELETE FROM table
    WHERE condition;

For example, if one of our customers has decided to shop at a different place, we might 
want to delete them from our ``customers`` table. 

Here is an example where we :sql:`DELETE`` Alison from our customers table. 

.. code-block::

    DELETE FROM customers
    WHERE id = 2; -- id = 2 is Alison Wong

    SELECT *
    FROM customers;