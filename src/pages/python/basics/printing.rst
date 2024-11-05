.. role:: python(code)
   :language: python


Printing
========

In order to get the computer to display information to the screen, we use the ``print()`` function.

Try running the code below!

.. code-block:: python

    print('I love Python')


Take note of the following:

- ``print`` must be in lower case. If you try using ``Print``, it won't work! This is because the computer is fussy! It can only understand very specific instructions.
- ``'I love Python'`` is just a piece of text. This is the information we want to display.
- We use ' ' or " " to indicate text. (We actually refer to text as a string; more on this later.)
- We tell the computer what to display by placing the contents in circular brackets ().

This is the structure of the print() function:

:python:`print(information_you_want_to_display)`.

.. dropdown:: Question
    :open:
    :color: info
    :icon: question

    Which of the following code snippets are valid? *Select all that apply.*

    :octicon:`circle;1em;sd-text-black;` ``print["I can code!"]``

    :octicon:`circle;1em;sd-text-black;` ``print('Computers are fun!')``

    :octicon:`circle;1em;sd-text-black;` ``print('Programming is awesome!)``

    :octicon:`circle;1em;sd-text-black;` ``print(Developing software is cool!)``

    :octicon:`circle;1em;sd-text-black;` ``print('Programming rules!')``

    :octicon:`circle;1em;sd-text-black;` ``print('Don't code while sleepy!')``

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        :octicon:`x-circle;1em;sd-text-danger;` ``print["I can code!"]``

        **Invalid.**  Uses square brackets instead of circular brackets

        :octicon:`issue-closed;1em;sd-text-success;` ``print('Computers are fun!')``

        **Valid.**

        :octicon:`x-circle;1em;sd-text-danger;` ``print('Programming is awesome!)``

        **Invalid.** Missing the quote at the end of the string

        :octicon:`x-circle;1em;sd-text-danger;` ``print(Developing software is cool!)``

        **Invalid.** Missing quotes altogether

        :octicon:`issue-closed;1em;sd-text-success;` ``print('Programming rules!')``

        **Valid.**

        :octicon:`x-circle;1em;sd-text-danger;` ``print('Don't code while sleepy!')``

        **Invalid.** Python is using single quotes to identify the start and end of the string. In this case the ``'`` in don't is registering as a closing  quote so python thinks that the string is Don. 

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