Insert
======

To update a database, you may need to add new records to a table. To add a record, you
need to specify the attribute names and the corresponding record values.

We use the following structure:

.. code-block:: sql

    INSERT INTO table (attribute_1, attibute_2, attribute_3, ...)
    VALUES (value_1, value_2, value_3, ...);

Below is an example of inserting a new customer into the database. We then create a
second query to check the new values have been inserted. We use a ``;`` at the end of
each query.

.. code-block:: sql

    INSERT INTO customers (id, firstname, lastname, postcode)
    VALUES (24, 'David', 'Sweeney', 2367);

    SELECT *
    FROM customers;

Inserting multiple records
--------------------------

You are also able to insert more than one person at a time by separating the records by
a comma.

.. code-block:: sql

    INSERT INTO table (attribute_1, attribute_2, attribute_3, ...)
    VALUES
        (values_for_record_1),
        (values_for_record_2),
        ...
    ;

Here's an example of inserting multiple records

.. code-block:: sql

    INSERT INTO customers (id, firstname, lastname, postcode)
    VALUES
        (25, 'Jayant', 'Khatkar', 2202),
        (26, 'Jack', 'Sice', 4200);

    SELECT *
    FROM customers;
