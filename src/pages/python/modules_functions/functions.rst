Functions
=========

So far we have used a lot of Python functions. You might have noticed that functions use
parentheses ``()``, e.g. the ``print()`` function or the ``input()`` function.

We'll now see that we can write our own functions! Functions are very useful for

- **Reusing** blocks of code
- **Isolating** parts of your program, which can make testing and debugging easier as
  each function can be tested individually
- **Composing** programs as the logic and structure of the program can be broken down
  into smaller tasks that are easier to solve
- **Readability** as functions generally result in less code which can make your program
  easier to read

Functions are defined using the following syntax

.. code-block:: text

    def function_name(parameter_1, parameter_2, ... parameter_n):
        # code to execute
        return result

Take note of the following:

- ``def`` is a keyword which signifies that this is a function definition
- ``function_name`` is chosen by you and follows the same naming rules as variables
- each ``parameter_i`` has a name chosen by you and is available as a variable in the
  function
- functions don't necessarily need to be provided a parameter
- ``:`` is placed after the parameter list
- the function's code block must be *indented* (just like we do for if statements and
  loops)
- ``return`` signifies that the next thing will be "given back" to the caller

**Example 1: One parameter**

Here is a simple function called ``greet`` that constructs a greeting. This function
returns a string with *Hello <name>*.

.. exec_code::
    :language: python

    def greet(name):
        return 'Hello {}'.format(name)

    print(greet('Alison'))

This function meets the following specifications. Note that function and variable names
are formatted in grey and the variable types are given in brackets.

- Name: ``greet``
- Parameters: ``name (string)``
- Return: greeting message (``string``)

**Example 2: Two parameters**

Here is an add function, which takes 2 parameters, ``x`` and ``y``. When you use the
function you need to provide it two values. The first value that is provided to the
function will be saved under the variable name ``x`` and the second value will be saved
under the variable name ``y``.

.. exec_code::
    :language: python

    def add(x, y):
        return x + y

    print(add(2, 4))

**Example 3: Two parameters**

Note that the order of the parameters matter. Here our divide function will divide ``x``
by ``y``. So ``divide(2, 4)`` gives 2/4 while ``divide(4, 2)`` gives 4/2.

.. exec_code::
    :language: python

    def divide(x, y):
        return x/y

    print(divide(2, 4))
    print(divide(4, 2))

This function meets the following specifications.

- Name: ``divide``
- Parameters: ``x`` (``int`` or ``float``), ``y`` (``int`` or ``float``)
- Return: ``x`` divided by ``y`` (``float``)

**Example 4: No parameters**

Functions don't always need parameters. Here is an example of a function that gives us a
list of students. Note that we still need the parentheses!

.. exec_code::
    :language: python

    def get_class_list():
        return ['Alice', 'Bob', 'Charlie', 'David']

    print(get_class_list())

This function meets the following specifications.

- Name: ``get_class_list``
- Parameters: ``None``
- Return: ``x`` divided by ``y`` (``float``)

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

        def power(x, exponent):
            y = x**exponent
            return y

        z = power(2, 3)
        print(z)

    A.

     .. code-block:: python

        6

    B.

     .. code-block:: python

        23

    C.

     .. code-block:: python

        8

    D.

     .. code-block:: python

        9

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **C.**

        The ``power`` function takes two parameters, ``x`` and ``exponent``. ``power(2, 3)`` means that ``x = 2`` and ``exponent = 3``. ``x**exponent`` will then be ``2**3``, which is 2 to the power of 3. This means the result we return is 8.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    Which of the following best describes the purpose of the function given below.

    .. code-block:: python

        import random

        def five_tosses():
            tosses = []
            for i in range(5):
                r = random.random()
                if r < 0.5:
                    tosses.append('Heads')
                else:
                    tosses.append('Tails')
            return tosses

    A. This program simulates 5 random coin tosses for a fair coin. The results will be stored in a list containing the values ``'Heads'`` or ``'Tails'``. The program will give a **different** result each time.

    B. This program simulates 5 random coin tosses for a fair coin. The results will be stored in a list containing the values ``'Heads'`` or ``'Tails'``. The program will give **the same** result each time.

    C. This program simulates 5 random coin tosses for a fair coin. The results will be stored in a list containing the values ``0`` or ``1`` to indicate (0 for heads and 1 for tails). The program will give a **different** result each time.

    D. This program simulates 5 random coin tosses for a fair coin. The results will be stored in a list containing the values ``0`` or ``1`` to indicate (0 for heads and 1 for tails). The program will give **the same** result each time.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Consider the function below.

    .. code-block:: python

        def calculate(x, y, z):
            return x + y - 2*z

    Which of the following will return 8? *Select all that apply.*

    A.

     .. code-block:: python

        calculate(8, 8, 4)

    B.

     .. code-block:: python

        calculate(2, 6, 0)

    C.

     .. code-block:: python

        calculate(2, 5, 3)

    D.

     .. code-block:: python

        calculate(5, 7, 2)

    E.

     .. code-block:: python

        calculate(0, 10, 1)

    F.

     .. code-block:: python

        calculate(7, 3, 4)

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    What's wrong with the following code snippet?

    .. code-block:: python

        def multiply(a, b, c)
            return a * b * c

        print(multiply(2, 4, 7))

    A. This will result in a **IndentationError** because ``line 2`` should not be indented

    B. This will result in a **SyntaxError** because ``line 1`` should have a ``:`` at the end

    C. This will result in a **NameError** because the function ``multiply`` hasn't been imported

    D. This will result in a **ValueError** because the variables ``a``, ``b`` and ``c`` have not been defined

    E. This will result in a **TypeError** because the variables ``a``, ``b`` and ``c`` are strings, not integers

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 5
    :open:
    :color: info
    :icon: question

    Write a function that converts temperature in Celsius to Fahrenheit.

    The conversion formula is as follows:

    :math:`T_{\text{Fahrenheit}} = T_{\text{Celsius}}\times \cfrac{9}{5}+ 32`

    **Function specification**

    * name: ``celsius_to_fahrenheit``

    * parameters: ``temperature`` (``int`` or ``float``)

    * return: temperature in Fahrenheit (``float``)

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*
