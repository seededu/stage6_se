.. role:: python(code)
   :language: python

Variables
====================

Introduction
--------------------

Python stores data in variables. To assign data to a variable we use the = sign.

For example,

.. code-block:: python

    x = 'Alison'

One way to think of variables is to treat them like a box. In the above example,
we have a box named x, and the box is storing the value 10.

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

  x = 'Alison'
  print(x)

Note that the variable x does not have quotes but the string 'Alison' does!

Types
--------------------

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
