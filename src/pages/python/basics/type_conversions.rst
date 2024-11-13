.. role:: python(code)
   :language: python


Type Conversions
================

It is often useful to change the type of your variables. This is called casting. Here are some useful functions:

* ``int()``: convert to integer

* ``float()``: convert to float

* ``str()``: convert to string

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

        x = '2'
        y = '7'
        print(int(x) + int(y))

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        9

        ``x`` and ``y`` are initially strings, but both of these are converted to integers before they are added together. This means we are adding the integers 2 and 7 which gives 9.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

        x = 3
        y = 5
        z = str(x)
        print(z * y)

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        33333

        ``y`` contains the integer ``5`` and ``z`` contains the string ``'3'``. When you multiply a string by the number 5 that string gets repeated 5 times. This results in the string ``'33333'``.

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

        x = '1'
        y = '2'
        print(float( x + y))

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        12

        ``x`` and ``y`` contain the strings ``'1'`` and ``'2'``. The ``+`` operator will concatenate two strings so ``x + y`` results in the string ``'12'``. This string is then converted into a float which gives the number ``12.0``.


.. dropdown:: Code challenge: Nesting
    :color: warning
    :icon: star

    The following code takes input from a user, converts it to an integer and then adds 1. 
    
    .. code-block:: python

        n = input('Enter a number: ')
        n = int(n)
        print(n + 1)

    Can you rewrite this code in just two lines?

    .. note:: While it might look nicer to reduce the size of your code by combining multiple lines into one, spreading your code over more lines might make it easier for other people to read. In general, try to make your code easy to read. This will come with experience but it's something to keep in mind.

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. code-block:: python

            n = int(input('Enter a number: '))
            print(n + 1)

        We can convert the user input to an integer on the same line we read it in! This is quite convenient because it means that when we use n it has already been converted to an appropriate type and we don't have to constantly remember to convert it in the future.