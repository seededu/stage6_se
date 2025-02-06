Group By
========

It can often be useful to group data by a particular attribute. For example, consider
the following table.

.. figure:: img/groupby_table.png
    :width: 400

Let's suppose we want to see how students performed on the exam ``BY`` class. In this
case, there are two classes, class A and class B. What we can do, is ``GROUP BY`` class.
The structure of a ``GROUP BY`` statement:

.. code-block::

    GROUP BY attribute;

The ``GROUP BY`` clause goes after a ``WHERE`` clause.

We then need to provide a function that summarises information about each group. The
functions we can use are:

- ``COUNT()``
- ``MAX()``
- ``MIN()``
- ``SUM()``
- ``AVG()``

This whole process can be summarised by the figure below.

.. figure:: img/groupby_exploded.png

These functions go in the ``SELECT``` statement. Here is an example.

.. code-block:: sql

    SELECT AVG(exam_mark), class
    FROM marks
    GROUP BY class
