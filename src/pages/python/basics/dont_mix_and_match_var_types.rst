.. role:: python(code)
   :language: python

Don't Mix and Match Variables Types
===================================

It's important to know that you can't mix and match operations between different data types and that it doesn't always make sense to apply mathematical operations to strings.

.. code-block:: python

    print('red' - 'blue')

However, if you use the ``+`` operator, you'll find that it actually *concatenates* (joins) the strings together.

.. code-block:: python

    print('red' + 'blue')

This means that there is a difference between the *number* ``3`` and the *string* ``'3'``.

Another slightly odd behaviour is that you can multiply a string with a number. This results in the string being repeated.

.. code-block:: python

    x = 'red'
    y = 3
    print(x * y)

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

        x = 3
        y = 4
        print(x + y)

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        7

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

        x = '3'
        y = '4'
        print(x + y)

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. 34

        .. Here ``x`` and ``y`` are *strings*. This means the ``+`` operator concatenates them. Think back to the example ``'red' + 'blue'`` which gives ``'redblue'``. Here were have ``'3' + '4'`` which gives ``'34'``.

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Which of the following code snippets will result in an error? *Select all that apply.*

    A. 

      .. code-block:: python

        x = '1'
        y = '2'
        print(x - y)

    B. 

      .. code-block:: python

        x = '1'
        y = '2'
        print(x + y)

    C. 

      .. code-block:: python

        x = '1'
        y = 2
        print(x + y)

    D. 

      .. code-block:: python

        x = 1
        y = 2
        print(x * y)

    E. 

      .. code-block:: python

        x = '1'
        y = 2
        print(x * y)

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: python

        ..     x = '1'
        ..     y = '2'
        ..     print(x - y)

        .. :octicon:`x-circle;1em;sd-text-danger;` **Error.** You cannot subtract a string from a string.

        .. .. code-block:: python

        ..     x = '1'
        ..     y = '2'
        ..     print(x + y)

        .. :octicon:`issue-closed;1em;sd-text-success;` **Valid.** You can add a string with a string. This is called *concatenation*.

        .. .. code-block:: python

        ..     x = '1'
        ..     y = 2
        ..     print(x + y)

        .. :octicon:`x-circle;1em;sd-text-danger;` **Error.** You cannot add a string to an integer. That's like asking the computer, 'What is *apple* + 2?'

        .. .. code-block:: python

        ..     x = 1
        ..     y = 2
        ..     print(x * y)

        .. :octicon:`issue-closed;1em;sd-text-success;` **Valid.** You can multiply two numbers together.

        .. .. code-block:: python

        ..     x = '1'
        ..     y = 2
        ..     print(x * y)

        .. :octicon:`issue-closed;1em;sd-text-success;` **Valid.** You can multiply a number and a string. This results in the string being repeated.

        *Solution is locked*