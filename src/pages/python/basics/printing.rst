Printing
========

In order to get the computer to display information to the screen, we use the
``print()`` function.

Try running the code below!

.. code-block:: python

    print("I love Python")

Take note of the following:

- ``print`` must be in lower case. If you try using ``Print``, it won't work! This is
  because the computer is fussy! It can only understand very specific instructions.
- ``'I love Python'`` is just a piece of text. This is the information we want to
  display.
- We use ' ' or " " to indicate text. (We actually refer to text as a string; more on
  this later.)
- We tell the computer what to display by placing the contents in circular brackets ().

This is the structure of the print() function:

``print(information_you_want_to_display)``.

.. dropdown:: Question
    :open:
    :color: info
    :icon: question

    Which of the following code snippets are **valid**? *Select all that apply.*

    A.

      .. code-block:: python

        print["I can code!"]

    B.

      .. code-block:: python

        print('Computers are fun!')

    C.

      .. code-block:: python

        print('Programming is awesome!)

    D.

      .. code-block:: python

        print(Developing software is cool!)

    E.

      .. code-block:: python

        print('Programming rules!')

    F.

      .. code-block:: python

        print('Don't code while sleepy!')

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. code-block:: python

            print["I can code!"]

        :octicon:`x-circle;1em;sd-text-danger;` **Invalid.**  Uses square brackets instead of circular brackets

        .. code-block:: python

            print('Computers are fun!')


        :octicon:`issue-closed;1em;sd-text-success;` **Valid.**

        .. code-block:: python

            print('Programming is awesome!)


        :octicon:`x-circle;1em;sd-text-danger;` **Invalid.** Missing the quote at the end of the string

        .. code-block:: python

            print(Developing software is cool!)

        :octicon:`x-circle;1em;sd-text-danger;` **Invalid.** Missing quotes altogether

        .. code-block:: python

            print('Programming rules!')

        :octicon:`issue-closed;1em;sd-text-success;` **Valid.**

        .. code-block:: python

            print('Don't code while sleepy!')

        :octicon:`x-circle;1em;sd-text-danger;` **Invalid.** Python is using single quotes to identify the start and end of the string. In this case the ``'`` in don't is registering as a closing  quote so python thinks that the string is Don.

.. dropdown:: Code challenge: Hello World!
    :color: warning
    :icon: star

    Write a Python program which displays the text *Hello World!*

    The output of your program should look like this:

    .. code-block:: html

        Hello World!

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. code-block:: python

            print('Hello World!')

.. dropdown:: Code challenge: Practice!
    :color: warning
    :icon: star

    Write a program which displays the following message.

    It should look like this:

    .. code-block:: html

        To become a great Python programmer you need to
        practice, practice, PRACTICE!!!

    .. hint::
        Use two ``print()`` statements.


    .. note::
        **Did you know?** You can solve this challenge in one line! See what happens when you try ``print('Hello\nWorld!')``.

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. code-block:: python

            print('To become a great Python programmer you need to')
            print('practice, practice, PRACTICE!!!')
