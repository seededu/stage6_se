Draw a Box: Code
================

Write a program that asks the user for an integer :math:`n` and then prints a
square box where the edges of the box are of length :math:`n` (as shown in the
examples below).

**You should implement the algorithms you designed during the previous
exercises by basing your code on the pseudocode.**

**Example 1:** :math:`n=1`

.. code-block:: text

    n: 1
    + - +
    |   |
    + - +

**Example 2:** :math:`n=2`

.. code-block:: text

    n: 2
    + - - +
    |     |
    |     |
    + - - +

**Example 3:** :math:`n=5`

.. code-block:: text

    n: 5
    + - - - - - +
    |           |
    |           |
    |           |
    |           |
    |           |
    + - - - - - +

Note:

- There is a space between each ``-`` in the top and bottom edge. This means
  there are :math:`n` dashes and :math:`n+1` spaces between each ``+`` on the
  top and bottom edges, i.e. :math:`2n+1` characters.
- There are :math:`2n+1` spaces between each ``|`` for the vertical edges.
