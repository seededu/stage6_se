Naming Variables
================

It is important you give your variables appropriate names - like how you might
label boxes at home. If you don't **choose descriptive variable names**, it can
be very difficult for yourself or others to read your code. This will become
increasingly important as you write longer and more complex programs.

Below are two examples of code that calculates the cost of 4 pens and 2
highlighters. Which is easier to interpret?

**Program 1**

.. code-block:: python

    a = 2.89
    b = 1.97
    c = 4 * a + 2 * b
    print(c)

**Program 2**

.. code-block:: python

    pen = 2.89
    highlighter = 1.97
    cost = 4 * pen + 2 * highlighter
    print(cost)

In addition to using descriptive names, there are rules that you must follow
when choosing a variable name. A variable name:

- Must start with a letter or an underscore character
- Can only contain alpha-numeric characters and underscores

Further, variable names are **case sensitive**. This means that ``age`` and
``Age``, are not the same.

.. code-block:: python

    age = 32
    Age = 17

    print(age)
    print(Age)

Finally, you must ensure you don't name your variables using **keywords**.
Keywords are special words in Python that have a special meaning. You will
notice that often they will be formatted in a different colour. For example,
print is a keyword. If you end up assigning a value to a keyword, you will
overwrite it and your code won't work properly.

.. code-block:: python

    print = "hello"
    print(print)

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Which of the following code snippets are **valid**? *Select all that apply.*

    A.

      .. code-block:: html

        number

    B.

      .. code-block:: html

        deg2rad

    C.

      .. code-block:: html

        10th

    D.

      .. code-block:: html

        float

    E.

      .. code-block:: html

        ten%


    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. code-block:: html

            number


        :octicon:`issue-closed;1em;sd-text-success;` **Valid.**

        .. code-block:: html

            deg2rad


        :octicon:`issue-closed;1em;sd-text-success;` **Valid.** Numbers are allowed as long as they are not at the start of the variable name.

        .. code-block:: html

            10th


        :octicon:`x-circle;1em;sd-text-danger;` **Invalid.** Variables must start with a letter or an underscore character.

        .. code-block:: html

            float

        :octicon:`x-circle;1em;sd-text-danger;` **Invalid.** Technically this works, but should not be done since float is a keyword in Python.

        .. code-block:: html

            10%

        :octicon:`x-circle;1em;sd-text-danger;` **Invalid.** Variables can only contain alpha-numeric characters (a-z, A-Z, 0-9) and underscores.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

      new_years = '1st January'
      print(New_years)

    A.

      .. code-block:: html

        1st January

    B.

      .. code-block:: html

        New_years

    C.

      .. code-block:: html

        new_years

    D.

      It will result in an error


    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. It will result in an error

        .. This program will result in an error saying the variable ``New_years`` has not been defined. This is because Python is case sensitive. The variable ``new_year`` on line 1 is spelt with a lower case ``n`` and Python does not treat it the same as ``New_years`` on line 2 which has a capital ``N``.

        *Solution is locked*
