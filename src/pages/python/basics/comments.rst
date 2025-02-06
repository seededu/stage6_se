Comments
========

As you begin to write longer and longer programs, it's often helpful to write notes in
your code. These are called comments. A comment is meant to be a short note explaining a
section of code to the programmer, and is ignored by the computer. There are two types
of comments.

1. .. code-block:: python

       # Single line comments
2. .. code-block:: python

       """
       Multi-line
       comments
       """

Here are some examples:

Single line comment
-------------------

.. code-block:: python

    x = 4
    y = x**2  # squares x

.. code-block:: python

    n = input("Enter a number:")

    # Convert string to integer
    n = int(n)

    print(n + 5)

Multi-line comments
-------------------

.. code-block:: python

    """
    This program takes two numbers from the user
    and then outputs the sum.
    """

    x = float(input("Enter a number: "))
    y = float(input("Enter another number: "))

    print("The sum of your numbers is {}".format(x + y))
