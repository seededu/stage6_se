.. role:: python(code)
   :language: python
   
Types of Variables
==================

Python has different types of variables. Here are some of the most commonly used
variables.

* **integer**: a whole number

  * :python:`x = 5`

  * :python:`num = 21`

* **float**: a decimal number

  * :python:`cost = 1.50`

  * :python:`pi = 3.14159`

* **string**: text

  * :python:`name = 'steve'`

  * :python:`message = "great job"`

.. note:: You can use either single quotes ``' '`` or double quotes ``" "`` to
  indicate a string as long as you start and end with the same type.

* **char**: a single character

  * :python:`letter = 'a'`

  * :python:`symbol = '@'`


.. note:: Python does not distinguish between characters and strings and will
  treat a single character as a string. But other languages will treat them
  differently!

If you want to know the type of a certain variable, we can use the
:python:`type` function.


.. exec_code::
  :language: python

  print(type(3))
  print(type(3.0))
  print(type('3'))
