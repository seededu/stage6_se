Python as a calculator
======================

We can use Python to perform many numerical calculations for us.

**Addition**

.. code-block:: python

    print(2 + 5)

**Subtraction**

.. code-block:: python

    print(8 - 3)

**Multiplication**

.. code-block:: python

    print(2 * 4)

**Division**

.. code-block:: python

    print(100 / 2)

**Modulus**

This tells you the *remainder*. If you run the example below, dividing 5 by 2
gives a remainder of 1.

.. code-block:: python

    print(5 % 2)

**Power**

The first number is the base and the second number is the power. For example
you would read ``4**2`` as '4 to the power of 2', i.e. :math:`4^2`, which is
16.

.. code-block:: python

    print(4**2)

Order of operations
-------------------

Python follows the stand standard order of mathematical operations, i.e.
**BODMAS**: Brackets Orders Division Multiplication Addition Subtraction.

Float Point Representation
--------------------------

Some decimal values cannot be represented exactly by a computer and sometimes
arithmetic containing floating points numbers will contain errors. Here are
some examples.

.. exec_code::
    :language: python

      print(10/3)

.. exec_code::
    :language: python

      print(1.2 - 1.0)

This is not a bug in the code that can be fixed - it is inherent to all
programming languages. Remembering these issues will help you build code robust
enough to handle the inaccuracies for floating point representations.

Note that some decimal values can be stored to a higher precision than other
decimal values and the level of precision these values are stored at depends on
how much memory is allocated to the variable in the computer.
**Double-precision** float point numbers can store decimals to a greater
precision than **single-precision** floating point numbers because
double-precision floating points numbers have 64 bits of memory allocated to
them compared to single-precision floating point numbers which only have 32
bits of memory.

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What is the output of the following code?

    .. code-block:: python

        x = (6 + 4)/2
        print(x)

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        5

        The order of operations must be followed. 6 and 4 are added *before* the division since they are inside a set of brackets. This is equivalent to the mathematical expression :math:`\cfrac{6 + 4}{2} = 5`.

        Removing the brackets results in the expression :math:`6 + \cfrac{4}{2}=8`.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What is the output of the following code?

    .. code-block:: python

        x = 6%3
        print(x)

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        0

        6 is divisible by 3, so the remainder is 0.

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    What is the output of the following code?

    .. code-block:: python

        x = 2**3
        print(x)

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        8

        ``2**3`` should be interpreted as 2 to the power of 3, i.e. :math:`2^3 = 2 \times 2 \times 2 = 8`.

.. dropdown:: Code challenge: Calculations
    :color: warning
    :icon: star

    Use Python to calculate the following.

    * :math:`124\ -\ 32\ \times8`

    * :math:`5^2-7^3`

    * :math:`\frac{6\times 14\ -\ 5^3}{2.8}`

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. code-block:: python

            x = 124 - 32 * 8
            print(x)

            y = 5**2 - 7**3
            print(y)

            z = 5**2 - 7**3
            print(z)
