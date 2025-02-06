Function Returns
================

Multiple Return Values
----------------------

We are able to return multiple values from a function. We do this by specifying
multiple values after the ``return`` keyword where each value is separated by a
comma.

.. code-block:: text

    return value_1, value_2, ...

The values are returned to the user as a *tuple*. A tuple is another variable
type, which is similar to a list, but is *immutable* (cannot be changed).
Tuples look a lot like lists but use parentheses ``()`` instead of square
brackets ``[]``. The order the values are returned in will match the order of
the values in the ``return`` statement.

**Example: 2 return values**

The function ``zero_nonzero`` counts the number of zero and non-zero values in
the given list. In this example where we give the function ``[3, 0, 0, 0, 1, 5,
0, 0, 2, 0]`` there are 6 elements that are zero and 4 elements that are
non-zero. This function returns these values as the *tuple* ``(6, 4)``. Note
that these are in the same order as in the ``return`` statement, ``zero,
nonzero``.

.. exec_code::
    :language: python

    def zero_nonzero(number_list):
        zero = 0
        nonzero = 0
        for i in number_list:
            if i == 0:
                zero = zero + 1
            else:
                nonzero = nonzero + 1
        return zero, nonzero

    print(zero_nonzero([3, 0, 0, 0, 1, 5, 0, 0, 2, 0]))

Unpacking Return Values
-----------------------

It can often be useful to unpack values. You can do this by having multiple
values on the left-hand-side of the ``=`` sign. Each variable name should be
separated by a comma:

.. code-block:: text

    variable_1, variable_2, ... = ...

If you have more than one variable on the left-hand-side, the number of
variable names on the left-hand-side of the ``=`` must match the number of
values on the right-hand-side of the ``=``. The values are unpacked into
variables in order.

**Example: Unpacking values from a function**

Here the ``zero_nonzero`` function is going to return two values, the values
stored in the variables ``zero`` and ``nonzero``, which for the given list is 6
and 4 respectively. We can see that we unpack these into the values ``x`` and
``y``, which are on the left-hand-side of the ``=``. This means the first value
6 gets unpacked into the variable ``x`` and the second value 4 gets unpacked
into the variable ``y``.

.. exec_code::
    :language: python

    def zero_nonzero(number_list):
        zero = 0
        nonzero = 0
        for i in number_list:
            if i == 0:
                zero = zero + 1
            else:
                nonzero = nonzero + 1
        return zero, nonzero

    x, y = zero_nonzero([3, 0, 0, 0, 1, 5, 0, 0, 2, 0])
    print('Number of zeros: {}'.format(x))
    print('Number of non-zeros: {}'.format(y))

.. note::

    You can also unpack values directly from a list! You just need to ensure
    the number of variables on the left-hand-side of the ``=`` matches the
    number of elements in the list.

**Example: Unpacking values from a list**

.. exec_code::
    :language: python

    player1, player2 = ['Alice', 'Bob']
    print(player1)
    print(player2)

No Return Value - Procedures
----------------------------

It's also possible for functions not to have a return value back to the main
program. In this case, the return will be ``None``. These are also known as
**procedures**.

**Example: no return**

The function ``box`` doesn't have a return statement. We follow the indentation
to know where the function ends. Note that we only need to call the function,
we don't need to ``print`` the results of the function.

.. exec_code::
    :language: python

    def box():
        print('+ - +')
        print('|   |')
        print('+ - +')

    box()

Printing the results of the function will result in ``None`` as the function
doesn't have an output. Note that the function is still called and since there
are ``print`` statements inside the function, the box will still print.

.. exec_code::
    :language: python

    def box():
        print('+ - +')
        print('|   |')
        print('+ - +')

    print(box())

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    The function ``quadratic`` implements the quadratic formula :math:`x = \cfrac{-b\pm \sqrt{b^2 - 4ac}}{2a}`. Here we use it to solve the equation :math:`x^2 - x - 2 = 0`, which has solutions :math:`x=2` and :math:`x=-1`.

    What do you expect to be the output of the following program?

    .. code-block:: python

        def quadratic(a, b, c):
            x1 = (- b + (b**2 - 4*a*c)**0.5)/(2*a)
            x2 = (- b - (b**2 - 4*a*c)**0.5)/(2*a)
            return x1, x2

        answer = quadratic(1, -1, -2)
        print(answer)

    A. ``(2.0, -1.0)``

    B. ``2``

    C. ``x1, x2``

    D. This results in a **ValueError** as there are too many values on the right-hand-side to unpack to the left-hand-side

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **A.**

        ``quadratic`` will return 2 values. If there is only one value on the left-hand-side of the ``=``, these will be returned in a tuple and we get ``(2.0, -1.0)``.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    Would the following be considered a function or a procedure?

    .. code-block:: python

        def get_status(x):
            if x == 1:
                print('On schedule')
            elif x == 2:
                print('Behind schedule')
            elif x == 3:
                print('Complete')
            elif x == 4:
                print('Closed')
            else:
                print('At risk')

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    What do you expect to be the output of the following program?

    .. code-block:: python

        def times_table(x):
            for i in range(3):
                print((i + 1) * x)

        print(times_table(7))

    A.

     .. code-block:: text

        7
        14
        21

    B.

     .. code-block:: text

        7
        14
        21
        None

    C.

     .. code-block:: text

        0
        7
        14

    D.

     .. code-block:: text

        0
        7
        14
        None

    E.

     .. code-block:: text

        None

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    What do you expect to be the output of the following program?

    .. code-block:: python

        def sing(phrase, repeats=2):
            for i in range(repeats):
                print(phrase)

        sing('Who let the dogs out? Who, who, who, who, who?', repeats=4)

    A.

     .. code-block:: text

        Who let the dogs out? Who, who, who, who, who?

    B.

     .. code-block:: text

        Who let the dogs out? Who, who, who, who, who?
        Who let the dogs out? Who, who, who, who, who?

    C.

     .. code-block:: text

        Who let the dogs out? Who, who, who, who, who?
        Who let the dogs out? Who, who, who, who, who?
        Who let the dogs out? Who, who, who, who, who?

    D.

     .. code-block:: text

        Who let the dogs out? Who, who, who, who, who?
        Who let the dogs out? Who, who, who, who, who?
        Who let the dogs out? Who, who, who, who, who?
        Who let the dogs out? Who, who, who, who, who?

    E.

     .. code-block:: text

        None

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code Challenge: Error Message
    :color: warning
    :icon: star

    Write a function that displays a message to the user when they don't have permission to perform the command.

    The message should say

    .. code-block:: text

        I'm sorry, name. I'm afraid I can't do that.

    where *name* is a placeholder that must be replaced by the username.

    **Function specification**

    * name: ``error_message``

    * parameters: ``username`` (``str``)

    * return: ``None``

    **Example 1**

    .. code-block:: python

        print(error_message('Steve'))

    .. code-block:: text

        I'm sorry, Steve. I'm afraid I can't do that.

    **Example 2**

    .. code-block:: python

        print(error_message('Nancy'))

    .. code-block:: text

        I'm sorry, Nancy. I'm afraid I can't do that.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code Challenge: Hours Minutes Seconds
    :color: warning
    :icon: star

    Write a function that extracts out the hours, minutes and seconds from a timedelta object.

    **Function specification**

    * name: ``hrs_mins_secs``

    * parameters: ``delta`` (``timedelta``)

    * return: hours (``int``), minutes (``int``), seconds (``int``)

    **Example 1**

    .. code-block:: python

        sunrise = datetime(2025, 1, 31, 6, 15, 30)
        sunset = datetime(2025, 1, 31, 20, 2, 00)
        delta = sunset - sunrise

        hours, minutes, seconds = hrs_mins_secs(delta)
        print('{}:{}:{}'.format(hours, minutes, seconds))

    .. code-block:: text

        13:46:30

    **Example 2**

    .. code-block:: python

        delta = timedelta(hours=5, minutes=20, seconds= 15)

        hours, minutes, seconds = hrs_mins_secs(delta)
        print('{}:{}:{}'.format(hours, minutes, seconds))

    .. code-block:: text

        5:20:15

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*
