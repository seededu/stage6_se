Variables
=========

Introduction
------------

Python stores data in variables. To assign data to a variable we use the = sign.

For example,

.. code-block:: python

    x = "Alison"

One way to think of variables is to treat them like a box. In the above example, we have
a box named x, and the box is storing the value 10.

.. image:: img/variable_in.png
    :width: 400
    :align: center

When we want to use the value x, we look for the box labelled x and extract the
contents.

.. image:: img/variable_out.png
    :width: 400
    :align: center

Here is an example:

.. code-block:: python

    x = "Alison"
    print(x)

Note that the variable x does not have quotes but the string 'Alison' does!

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

      name = 'Steve'
      print('Hello')
      print(name)

    A.

      .. code-block:: python

        Hello

    B.

      .. code-block:: python

        Steve

    C.

      .. code-block:: python

        Hello
        name

    D.

      .. code-block:: python

        Hello
        Steve


    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        First the program will print the string ``'Hello'``, then the code will print the information stored in the variable name. This will result in the program printing

        .. code-block:: python

          Hello
          Steve

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

      x = '3'
      print('My lucky number is')
      print('x')

    A.

      .. code-block:: html

        My lucky number is
        3

    B.

      .. code-block:: html

        My lucky number is
        x

    C.

      .. code-block:: html

        My lucky number is

    D.

      .. code-block:: html

        3

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. First the program will print the string ``'My lucky name is'``, then the code will print the string ``'x'``. This is because there are quotes around the x so it's treated as a string.

        .. This will result in the program printing

        .. .. code-block:: html

        ..   My lucky name is
        ..   x

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Which of the following are **valid**? *Select all that apply*.

    A.

      .. code-block:: html

        print(x)

    B.

      .. code-block:: html

        'message' = Happy Birthday
        print(message)

    C.

      .. code-block:: html

        day = 'Monday'
        print('Today is')
        print(day)

    D.

      .. code-block:: html

        print('I do not like')
        print(dislike)
        dislike = 'eggs and ham'

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: html

        ..   print(x)

        .. :octicon:`x-circle;1em;sd-text-danger;` **Invalid.**  The variable ``x`` does not exist so when the program tries to access it you get an error.

        .. .. code-block:: html

        ..   'message' = Happy Birthday
        ..   print(message)

        .. :octicon:`x-circle;1em;sd-text-danger;` **Invalid.** Variables should be defined without the quotes and strings should be defined with quotes. Note that the variable name must always be to the left of the ``=``.

        .. .. code-block:: html

        ..   day = 'Monday'
        ..   print('Today is')
        ..   print(day)

        .. :octicon:`issue-closed;1em;sd-text-success;` **Valid.**

        .. .. code-block:: html

        ..   print('I do not like')
        ..   print(dislike)
        ..   dislike = 'eggs and ham'

        .. :octicon:`x-circle;1em;sd-text-danger;` **Invalid.** The program will run line by line. The variable ``dislike`` isn't defined until line 3, so when the program tries to access the variable on line 2, it doesn't exist yet!

        *Solution is locked*
