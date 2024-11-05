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


.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

      name = 'Steve'
      print('Hello')
      print(name)

    * 

      .. code-block:: python

        Hello

    * 

      .. code-block:: python

        Steve

    * 

      .. code-block:: python

        Hello
        name

    * 

      .. code-block:: python

        Hello
        Steve


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
