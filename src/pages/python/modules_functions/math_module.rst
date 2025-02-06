The Math Module
===============

Importing Functions
-------------------

The `math <https://docs.python.org/3/library/math.html>`_ module gives us access to many
useful mathematical functions. But to use the functions we need to *import* the ``math``
module, which we will usually do at the *top* of our Python script. There are two ways
we recommend doing this

**Option 1:** Import the entire module. We do this if we want to access *all* of the
available functions.

.. code-block:: python

    import math

When you run this, it doesn't seem to do anything. But you'll see that this gives us
access to all of the functions inside the ``math`` module. In order to use these
functions, you need to indicate that they're coming from the ``math`` module using:

.. code-block:: text

    math.function()

For example,

.. code-block:: python

    import math

    print(math.cos(0))

**Option 2:** Import specific functions from the module.

.. code-block:: python

    from math import cos

Again, this doesn't seem to do anything, but you'll see that it does give us access to
the ``cos`` function. This time, when we use the ``cos`` function we don't need to
explicitly say it's coming from the ``math`` library we can just use the function:

.. code-block:: text

    function()

For example,

.. code-block:: python

    from math import cos

    print(cos(0))

If you want to import multiple functions you can so so by separating each function with
a comma.

For example,

.. code-block:: python

    from math import cos, sin

    print(cos(0))
    print(sin(0))

If you try to import a function that does not exist inside the ``math`` module, you will
get an **ImportErrror**.

Accessing Constants
-------------------

In addition to functions, modules may also provide useful constants. For example the
``math`` module provides :math:`\pi`, :math:`e`, :math:`\tau = 2\pi`, :math:`\infty` and
`nan` (not a number). To use these you also have to import the ``math`` module, but
since they are not functions, you don't need the brackets.

**Import option 1**

.. code-block:: python

    import math

    print(math.pi)

**Import option 2**

.. code-block:: python

    from math import pi

    print(pi)

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Which of the following will import the ``math`` module and give you access to the function ``exp()``? *Select all that apply.*

    A.

     .. code-block:: python

        import math

    B.

     .. code-block:: python

        import math.exp

    C.

     .. code-block:: python

        from math import exp

    D.

     .. code-block:: python

        from exp import math

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. code-block:: python

            import math

        :octicon:`issue-closed;1em;sd-text-success;` **Valid.**

        .. code-block:: python

            import math.exp

        :octicon:`x-circle;1em;sd-text-danger;` **Invalid.**

        .. code-block:: python

            from math import exp

        :octicon:`issue-closed;1em;sd-text-success;` **Valid.**


        .. code-block:: python

            import exp from math

        :octicon:`x-circle;1em;sd-text-danger;` **Invalid.**

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    Suppose you want to import the ``math`` module. Where in your program should you place the import statement?

    A. At the very start

    B. At the very end

    C. Directly before you first use the ``math`` module

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Look at the available functions in the `math <https://docs.python.org/3/library/math.html>`_  module. How would you convert :math:`2\pi` radians to degrees?

    A.

     .. code-block:: python

        import math
        print(math.degrees(2*math.pi))

    B.

     .. code-block:: python

        import math
        print(math.radians(2*pi))

    C.

     .. code-block:: python

        from math import degrees
        print(degree(2*pi))

    D.

     .. code-block:: python

        from math import from_rad
        print(from_rad(2*math.pi))

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code challenge: Factorial
    :color: warning
    :icon: star

    Write a program that reads in a number :math:`n` from the user and calculates :math:`n!`. Your program should use the ``factorial()`` function from the `math <https://docs.python.org/3/library/math.html>`_ library.

    **Example 1**

    .. code-block:: text

        n: 4
        24

    **Example 2**

    .. code-block:: text

        n: 10
        3628800

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: Calculate The Sine
    :color: warning
    :icon: star

    Write a program that reads in an angle from the user (in radians) and prints the sin of that angle (also in radians) to 2 decimal places.

    **Example 1**

    .. code-block:: text

        Enter an angle: 1.32
        0.97

    **Example 2**

    .. code-block:: text

        Enter an angle: 0.9
        0.78

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*
