.. role:: python(code)
   :language: python


Test Your Understanding
=======================

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Which of these variables have **valid** names? *Select all that apply.*

    A. 

      .. code-block:: python

        lucky_number = 3

    B. 

      .. code-block:: python

        price($) = 2.78

    C. 

      .. code-block:: python

        4th_place = 'John'

    D. 

      .. code-block:: python

        sigma2 = 10

    .. dropdown:: Solution
      :class-title: sd-font-weight-bold
      :color: dark

      Remember that variables

      Must start with a letter or an underscore character

      Can only contain alpha-numeric (a-z, A-Z, 0-9) characters and underscores

      .. code-block:: python

        lucky_number = 3

      :octicon:`issue-closed;1em;sd-text-success;` **Valid.**

      .. code-block:: python

        price($) = 2.78

      :octicon:`x-circle;1em;sd-text-danger;` **Invalid.**  This contains the characters ``($)`` which are not allowed.

      .. code-block:: python

        4th_place = 'John'

      :octicon:`x-circle;1em;sd-text-danger;` **Invalid.**  Variables must start with a letter or an underscore character.


      .. code-block:: python

        sigma2 = 10

      :octicon:`issue-closed;1em;sd-text-success;` **Valid.**

.. dropdown:: Question 2
  :open:
  :color: info
  :icon: question

  What is the type of the variable ``x``?

  .. code-block:: python

    x = 3.3

  A. integer

  B. float
  
  C. string

  D. list

  .. dropdown:: Solution
      :class-title: sd-font-weight-bold
      :color: dark

      float

.. dropdown:: Question 3
  :open:
  :color: info
  :icon: question

  What would you expect to be the output of the following code?

  .. code-block:: python

    cost = '1.25'
    quantity = 3
    print('Total cost: ${}'.format(cost * quantity))

  A. 

    .. code-block::

        Total cost: $1.251.251.25

  B.

    .. code-block::

        Total cost: $3.75

  C.

    .. code-block::

        Traceback (most recent call last): 
          File "main.py3", line 3, in  <modlue>
            print("Total cost: ${}".format(cost * quantity)) 
        TypeError: can't multiply sequence by non-int of type 'str'

  .. dropdown:: Solution
      :class-title: sd-font-weight-bold
      :color: dark
      
      Total cost: $1.251.251.25

      Here ``cost`` is a string and when a string is multiplied by an integer it causes the string to be repeated. So ``cost * qunatity`` results in ``1.251.251.25``, which is likely not what the code intends. 

.. dropdown:: Question 4
  :open:
  :color: info
  :icon: question

  What is the value of ``x``?

  .. code-block::

    x = 2**2 + 2

  .. dropdown:: Solution
      :class-title: sd-font-weight-bold
      :color: dark

      6

      This is equivalent to :math:`2^2 + 2`.