.. role:: python(code)
   :language: python


Test Your Understanding
=======================

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Which of the following evaluates to ``True``? *Select all that apply*.

    A. 

      .. code-block:: python

        print(5%2 == 0)

    B. 

      .. code-block:: python

        print(5 < 2**2)

    C. 

      .. code-block:: python

        print(5 != 3)

    D. 

      .. code-block:: python

        print(3**2 == 8)

    .. dropdown:: Solution
      :class-title: sd-font-weight-bold
      :color: dark

      .. code-block:: python

        print(5%2 == 0)

      :octicon:`x-circle;1em;sd-text-danger;` **False.** ``%`` gives the remainder, so ``5%2`` is 1 because 5 divided by 2 leaves a remainder of 1. This is not 0.

      .. code-block:: python

        print(5 < 2**2)

      :octicon:`x-circle;1em;sd-text-danger;` **False.** ``2**2`` is read as '2 to the power of 2', i.e. :math:`2^2`, which is 4. 4 is not greater than 5.

      .. code-block:: python

        print(5 != 3)

      :octicon:`issue-closed;1em;sd-text-success;` **True.** 5 is not equal to 3.

      .. code-block:: python

        print(3**2 == 8)

      :octicon:`x-circle;1em;sd-text-danger;` **False.** ``3**2`` is read as '3 to the power of 2', i.e. :math:`3^2`, which is 9. 9 is not equal to 8.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What is wrong with the following code? *Select all that apply*.

    .. code-block:: python

      x = 5
      if x < 0
          print('x is less than 0')

    A. Missing ``:`` at the end of line 2.

    B. The third line should not be indented.

    C. ``if`` should be spelt ``If`` with a capital *i*.

    D. The first line should be ``x == 5``.

    .. dropdown:: Solution
      :class-title: sd-font-weight-bold
      :color: dark

      :octicon:`issue-closed;1em;sd-text-success;` A. Missing ``:`` at the end of line 2.

      :octicon:`x-circle;1em;sd-text-danger;` B. The third line should not be indented.

      :octicon:`x-circle;1em;sd-text-danger;` C. ``if`` should be spelt ``If`` with a capital *i*.

      :octicon:`x-circle;1em;sd-text-danger;` D. The first line should be ``x == 5``.


.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

      x = 'Python'
      y = 5

      if y > 7:
          print('A')
      elif x != 'Python':
          print('B')
      elif y < 10 and y**2 == 25:
          print('C')
      else:
          print('D')

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **C**

        In this example the first and second conditions are ``False``, but the third condition is ``True`` because ``y < 10`` is ``True`` and ``y**2 == 25`` is ``True`` since :math:`5^2 = 25`. This means the program outputs C.

        .. image:: img/6_question2.png
          :width: 700
          :align: center
