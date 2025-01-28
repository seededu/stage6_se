.. role:: python(code)
   :language: python


Input
================

It is often useful for a user to interact directly with their program. To do this, we can use input() to collect information from the user.

Here is the structure of the input() statement.

``variable_name = input(message_displayed_to_user)``

**Example**

.. code-block:: python

    name = input('Enter your name: ')
    print(name)

.. note:: We include a space after the semicolon so that there is a space between the semicolon and what the user types.

Input values are always strings!
--------------------------------

A very common mistake people make is that they forget that ``input()`` values are always strings.

.. code-block:: python

    n = input('Enter your lucky number: ')
    print(type(n))

Make sure you double check the variable type when you use ``input()``! If you are dealing with numerical input, you will have to cast the string to either an integer or a float. In the code below we have to convert the user's input to an integer (line 2).

.. code-block:: python

    n = input('Enter a number: ')
    n = int(n)
    print(n**2)

.. dropdown:: Code challenge: Echo
    :color: warning
    :icon: star

    Write a program that asks the user to say something and then echos back what the user says.

    **Example 1:** If you run your code and the user enters the input **Hello** then the outcome should look like this:

    .. code-block:: html

        Say something! Hello
        Hello

    **Example 2:** If you run your code and the user enters the input **I don't know what to say!** then the outcome should look like this:

    .. code-block:: html
            
        Say something! I don't know what to say!
        I don't know what to say!

    .. hint:: There is a space between the prompt and what the user types. To add this in make sure you include a space at the end of your prompt.

        .. image:: img/space.png
            :width: 200
            :align: center

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: python

        ..     msg = input('Say something! ')
        ..     print(msg)

        *Solution is locked*

.. dropdown:: Code challenge: Double that Number!
    :color: warning
    :icon: star

    Write a program that reads in an integer from the user, doubles it, and prints the result.

    Here are some examples of how your code should run:

    **Example 1**

    .. code-block:: html

        Enter a number: 5
        10

    **Example 2**

    .. code-block:: html

        Enter a number: 25
        50


    .. hint:: Don't forget that input values are always strings!

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: html

        ..     n = int(input('Enter a number: '))
        ..     print(2 * n)

        *solution is locked*