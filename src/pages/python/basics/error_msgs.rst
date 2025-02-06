Error Messages
==============

Quite often while you're programming you'll find that you make mistakes and
your program won't run or it does the wrong thing.

An important skill to learn is *debuggin\\*g. This is the process of locating
and removing errors from your code. When debugging, it's very useful to be able
to read and \\*understand* the error messages.

.. code-block:: python

    x = 5
    print(X)

The code above produced the following error message.

.. code-block::

    Traceback (most recent call last):
        File "/home/main.py", line 2, in <module>
            print(X)
                ^
        NameError: name 'X' is not defined. Did you mean: 'x'?

- **The first line is the start of the error message**
- The next few lines tell you where the error is
      - In this example it tells us the error is in line 2 and comes from the
        code print(X)
      - Sometimes the error is in the line before i.e. if you can't see any
        errors in the specified line, try looking at the line above!
- The last line in the error message tells you the type of error
      - In this example NameError: name 'X' is not defined. Did you mean: 'x'?
        tells you that there is a variable that hasn't been defined. In this
        case the program can't find the variable X.

Common Types of Errors
----------------------

- **NameError:** A variable of the specified name cannot be found.
- **SyntaxError:** The structure of the code is invalid.
- **TypeError:** An operation is being applied to variables of the wrong type.
- **ValueError:** A function or operation has received a value of the wrong
  type.

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What type of error does the following code produce?

    .. code-block:: python

        print(2+7)/3)

    A. NameError

    B. SyntaxError

    C. TypeError

    D. ValueError

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        This is an example of a **SyntaxError**.

        This is because the brackets don't match up. There is only one left ``(`` bracket but there are two ``)`` brackets.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What type of error does the following code produce?

    .. code-block:: python

        Print('Hello!')

    A. NameError

    B. SyntaxError

    C. TypeError

    D. ValueError

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. This is an example of a **NameError**.

        .. You'll notice that they keyword ``print`` has been capitalised. Since Python is case sensitive it doesn't register ``Print`` as a keyword. The program is looking for ``Print`` to be defined somewhere in the code, but it can't find it.

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    What type of error does the following code produce?

    .. code-block:: python

        pi = 3.1415926
        print('pi to 2dp: {:2.f}'.format(pi))

    A. NameError

    B. SyntaxError

    C. TypeError

    D. ValueError

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. This is an example of a **ValueError**.

        .. This is because the ``{}`` has been given invalid formatting instructions. It should be given ``:.2f`` instead of ``:2.f``. Remember that the ``.2`` indicates that there should be 2 digits *after* the decimal point.

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    What type of error does the following code produce?

    .. code-block:: python

        print('red' - 'blue')

    A. NameError

    B. SyntaxError

    C. TypeError

    D. ValueError

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. This is an example of a **TypeError**.

        .. TypeError: An operation is being applied to variables of the wrong type.
        .. This is because you cannot subtract a string from another string, so the subtraction operator is being applied to variables of the wrong type.

        *Solution is locked*

.. dropdown:: Code challenge: Add Two Numbers
    :color: warning
    :icon: star

    You have been provided with some code.

    .. code-block:: python

        x = int('Enter a number: ")
        y = int('Enter another number:')


        print('The sum of your two numbers is: {}'.format(x, y))

    The code should take in two numbers from the user, add them together, and then display the result to the user. However, the code has bugs!

    Debug this code!

    Here are some examples of how the program should work:

    **Example 1**

    .. code-block:: html

        Enter a number: 32
        Enter another number: 64
        The sum of your two numbers is: 96.00

    **Example 2**

    .. code-block:: html

        Enter a number: 1234.5678
        Enter another number: 9999.99
        The sum of your two numbers is: 11234.56

    **Example 3**

    .. code-block:: html

        Enter a number: 23
        Enter another number: -532.824
        The sum of your two numbers is: -509.82


    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: python

        ..     x = float(input('Enter a number: '))
        ..     y = float(input('Enter another number: '))

        ..     print('The sum of your two numbers is: {:.2f}'.format(x + y))

        *Solution is locked*
