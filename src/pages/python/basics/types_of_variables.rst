Types of Variables
==================

Python has different types of variables. We'll look at a couple of common ones
here.

Numeric Variables
-----------------

Two of the most commonly used numeric variables are integers and floats. These
are types of **real** numbers.

- **integer**: a whole number

  - ``x = 5``
  - ``num = 21``

- **float**: a decimal number

  - ``cost = 1.50``
  - ``pi = 3.14159``

Text Variables
--------------

- **string**: text

  - ``name = 'steve'``
  - ``message = "great job"``

.. note::

    You can use either single quotes ``' '`` or double quotes ``" "`` to
    indicate a string as long as you start and end with the same type.

- **char**: a single character

  - ``letter = 'a'``
  - ``symbol = '@'``

.. note::

    Python does not distinguish between characters and strings and will treat a
    single character as a string. But other languages will treat them
    differently!

Checking Variable Types
-----------------------

If you want to know the type of a certain variable, we can use the ``type``
function.

.. exec_code::
    :language: python

    print(type(3))
    print(type(3.0))
    print(type('3'))
