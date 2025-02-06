Optional Parameters (Keyword Arguments)
=======================================

Python allows you to have parameters that are optional. These are called **keyword
arguments**. Keyword arguments must come *after* all of our mandatory parameters. We
must also set a default value. Like with mandatory parameters, we can have multiple
keyword arguments. The syntax for this is as follows:

.. code-block:: text

    def function_name(param_1, param_2, ..., k_param_1=default, k_param_2=default):

**Example 1: Numeric keyword argument**

The ``increase`` function will by default, increase ``x`` by 1. But if you specify a
different increment amount it will increase ``x`` by the specified amount.

.. exec_code::
    :language: python

    def increase(x, increment=1):
        return x + increment

    print(increase(5))
    print(increase(5, increment=10))

**Example 2: Boolean keyword argument**

The ``difference`` function will calculate the difference between ``x`` and ``y``. If
the keyword ``positive`` is ``True`` it will return a positive value, otherwise it will
return a negative value.

.. exec_code::
    :language: python

    def difference(x, y, positive=True):
        diff = x - y

        if diff > 0 and positive:
            return diff
        else:
            return -diff

    print(difference(5, 2))
    print(difference(5, 2, positive=False))

Keyword arguments must come *after* all of our mandatory parameters. If you try to
switch the order you will get a **SyntaxError** with the error *parameter without a
default follows parameter with a default*, which essentially is telling you that a
mandatory parameter is following a keyword argument.

.. code-block:: python

    def difference(x, positive=True, y):
        diff = x - y

        if diff > 0 and positive:
            return diff
        else:
            return -diff

.. code-block:: text

    File "/home/main.py", line 1
        def difference(x, positive=True, y):
                                        ^
    SyntaxError: parameter without a default follows parameter with a default

Parameters vs Arguments
-----------------------

Often the terms 'parameter' and 'argument' are used interchangeably, but there is a
subtle distinction between the two terms. *Parameters* are the names of the variables as
specified in the function definition, i.e. the variable names used when creating the
function, whereas *arguments* are the actual values that are passed to the function when
the function is called.

**Example**

In this ``add`` function ``x`` and ``y`` are the *parameters*. When the function is
called we pass it the *arguments* ``5`` and ``3``.

.. exec_code::
    :language: python

    def add(x, y):
        return x + y

    print(add(5, 3))

If you give a function the wrong number of arguments it will result in a **TypeError**
and notify you that you're missing an argument.

.. code-block:: python

    def add(x, y):
        return x + y


    print(add(5))

.. code-block:: text

    Traceback (most recent call last):
        File "/home/main.py", line 4, in <module>
            print(add(5))
                ^^^^^^
        TypeError: add() missing 1 required positional argument: 'y'

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

        def calc_speed(time, distance=100):
            return distance/time

        print(calc_speed(5))

    A.

     .. code-block:: python

        100.0

    B.

     .. code-block:: python

        5.0

    C.

     .. code-block:: python

        20.0

    D.

     .. code-block:: python

        0.02

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *D.*

        This program will calculate speed which is distance divided by time. By default ``distance`` is 100 units. ``calc_speed(5)`` passes in 5 as the value for ``time``, so the result will be 100/5, which is 20.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

        def calc_speed(time, distance=100):
            return distance/time

        print(calc_speed(2, 200))

    A.

     .. code-block:: python

        100.0

    B.

     .. code-block:: python

        5.0

    C.

     .. code-block:: python

        20.0

    D.

     .. code-block:: python

        0.02

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

        def crazy_maths(a, b, c=3, d=-1):
            return b - c**d + a

        print(crazy_maths(3, 5, d=2))

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    What is wrong with the following code?

    .. code-block:: python

        def double(n, repeat=1):
            for i in range(repeat):
                n = n * 2
            return n

        print(double(repeat=2, 5))

    A. When the function is defined the keyword argument should appear before the mandatory parameters. i.e. the first line of the function should be ``def double(repeat=1, n):``


    B. When the function is called, the mandatory arguments should appear before the key word arguments. i.e. the function should be called using ``double(5, repeat=2)``

    C. ``n`` is out of the local scope of the function and this will result in a **NameError**.

    D. The ``return`` function should be indented one more level so that it sits *inside* the ``for`` loop.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 5
    :open:
    :color: info
    :icon: question

    Consider the following program.

    .. exec_code::
        :language: python

        def reverse(input_list):
            new_list = []
            for i in range(len(input_list), 0, -1):
                new_list.append(input_list[i-1])
            return new_list

        numbers = ['one', 'two', 'three', 'four', 'five']
        print(reverse(numbers))

    A. ``reverse``

    B. ``'one'``, ``'two'``, ``'three'``, ``'four'`` and ``'five'``

    C. ``input_list``

    D. ``numbers``

    E. ``def``, ``for``, ``in``, ``range``, ``len``, ``print``

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code challenge: Happy Birthday!
    :color: warning
    :icon: star

    Write a function called ``happy_birthday``, which takes as input an age and a keyword argument ``suffix (default ='th')``. The program then displays the following message:

    .. code-block:: text

        Happy <age><suffix> Birthday!

    **Function specification**

    * name: ``happy_birthday``

    * parameters: ``age`` (``int``), ``suffix`` (``default='th'``, ``str``)

    * return: output message ``str``

    **Example 1**

    .. code-block:: python

        print(happy_birthday(10))

    .. code-block:: text

        Happy 10th Birthday!

    **Example 2**

    .. code-block:: python

        print(happy_birthday(21, suffix='st'))

    .. code-block:: text

        Happy 21st Birthday!

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: Weight
    :color: warning
    :icon: star

    The weight of an object is the force it experiences due to the object's mass and gravity.

    Write a function to calculate the weight of an object based on its mass and the gravitational acceleration at the surface of a planet.

    The acceleration must be an optional parameter with a default value equal to Earth's gravitational acceleration.

    **Formula**

    :math:`w = ma`

    where :math:`w` is the weight in Newtons, :math:`m` is mass in kg, :math:`a = 9.80665` m/s/s by default.

    **Function specification**

    * name: ``weight``

    * parameters:

      -  ``object_mass`` (``float``),

      -  ``planet_acceleration`` (``default=9.80665``, ``float``)

    * return: object's weight (``float``)

    **Example 1**

    .. code-block:: python

        print(weight(10))

    .. code-block:: text

        98.06649999999999

    **Example 2**

    .. code-block:: python

        print(weight(8, 2.56))

    .. code-block:: text

        20.48

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*
