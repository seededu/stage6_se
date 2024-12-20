.. role:: python(code)
   :language: python


List Joins
==========

When we print lists they'll be displayed using square brackets with list items separated by commas. 

.. code-block:: python

  todo = ['Buy carrots', 'Wash car', 'Study for quiz']
  print(todo)

Sometimes we want to display list items differently. To help us, we can use the ``.join()`` method. This allows us to join all the elements in a list together with a specified separator.

Here is the syntax for joining:

:python:`separator.join(list)`

Here is an example where we use the separator ``', '`` ( a comma followed by a space).

.. exec_code::
  :language: python

  todo = ['Buy carrots', 'Wash car', 'Study for quiz']
  print(', '.join(todo))

You'll notice that the separate only goes *between* list items and doesn't appear at the start or at the end. 

.. image:: img/joins.png
    :width: 400
    :align: center

Here is another example where use use ``'\n'`` (a newline character).

.. exec_code::
  :language: python

  todo = ['Buy carrots', 'Wash car', 'Study for quiz']
  print('\n'.join(todo))

Note that ``.join()`` can only be used on lists containing strings. The following will result in an error since the list elements are *integers*.

.. code-block:: python
  
	numbers = [7, 4, -1, 3]
	print(', '.join(numbers))

.. code-block:: markdown

	Traceback (most recent call last):
		File "/home/main.py", line 2, in <module>
			print(', '.join(numbers))
						^^^^^^^^^^^^^^^^^^
	TypeError: sequence item 0: expected str instance, int found

.. dropdown:: Question 1
  :open:
  :color: info
  :icon: question

  What do you think the output of the following code will be?

  .. code-block:: python

    letters = ['a', 'b', 'c', 'd', 'e']
    print('-'.join(letters))

  A. 

    .. code-block:: markdown

      -a-b-c-d-e-

  B. 

    .. code-block:: markdown

      a-b-c-d-e

  C. 

    .. code-block:: markdown

      -a-b-c-d-e

  D. 

    .. code-block:: markdown

      a-b-c-d-e-

  .. dropdown:: Solution
    :class-title: sd-font-weight-bold
    :color: dark

    :octicon:`x-circle;1em;sd-text-danger;` ``-a-b-c-d-e-``

    :octicon:`issue-closed;1em;sd-text-success;` ``a-b-c-d-e``

    :octicon:`x-circle;1em;sd-text-danger;` ``-a-b-c-d-e``

    :octicon:`x-circle;1em;sd-text-danger;` ``a-b-c-d-e-``

    Here we use ``'-'`` as the separator. This will only appear *between* each element of the list after they are joined, i.e. it won't appear on either end.

.. dropdown:: Question 2
  :open:
  :color: info
  :icon: question

  What do you think the output of the following code will be?

  .. code-block:: python

    days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
    print('| ' + ' | '.join(days) + ' |')

  A. 

    .. code-block:: markdown

      Mon|Tue|Wed|Thur|Fri|Sat|Sun

  B. 

    .. code-block:: markdown

      |Mon|Tue|Wed|Thur|Fri|Sat|Sun|

  C. 

    .. code-block:: markdown

      Mon | Tue | Wed | Thur | Fri | Sat | Sun

  D. 

    .. code-block:: markdown

      | Mon | Tue | Wed | Thur | Fri | Sat | Sun |

  .. dropdown:: Solution
    :class-title: sd-font-weight-bold
    :color: dark

    :octicon:`x-circle;1em;sd-text-danger;` ``Mon|Tue|Wed|Thur|Fri|Sat|Sun``

    :octicon:`x-circle;1em;sd-text-danger;` ``|Mon|Tue|Wed|Thur|Fri|Sat|Sun|``

    :octicon:`issue-closed;1em;sd-text-success;` ``Mon | Tue | Wed | Thur | Fri | Sat | Sun``

    :octicon:`x-circle;1em;sd-text-danger;` ``| Mon | Tue | Wed | Thur | Fri | Sat | Sun |``

    There are 3 components to our print statement.

    * First we have ``'| '`` 

    * Next we have ``' | '.join(days)``

    * Finally we have  ``' |'`` 

    .. image:: img/join_concat.png
        :width: 400
        :align: center

    This results in ``| Mon | Tue | Wed | Thur | Fri | Sat | Sun |``

.. dropdown:: Question 3
  :open:
  :color: info
  :icon: question

  Which of the following code snippets would result in the output

  .. code-block:: markdown

    5... 4... 3... 2... 1

  A. 

    .. code-block::

      numbers = [5, 4, 3, 2, 1]
      print('...'.join(numbers))

  B. 

    .. code-block::

      numbers = [1, 2, 3, 4, 5]
      print('...'.join(numbers))

  C. 

    .. code-block::

      numbers = ['5', '4', '3', '2', '1']
      print('...'.join(numbers))

  D. 

    .. code-block::

      numbers = ['5', '4', '3', '2', '1']
      print('... '.join(numbers))

  .. dropdown:: Solution
      :class-title: sd-font-weight-bold
      :color: dark

      .. code-block::

        numbers = [5, 4, 3, 2, 1]
        print('...'.join(numbers))

      :octicon:`x-circle;1em;sd-text-danger;` **Incorrect.** You cannot join list items that are not strings.

      .. code-block::

        numbers = [1, 2, 3, 4, 5]
        print('...'.join(numbers))

      :octicon:`x-circle;1em;sd-text-danger;` **Incorrect.** You cannot join list items that are not strings.

      .. code-block::

        numbers = ['5', '4', '3', '2', '1']
        print('...'.join(numbers))

      :octicon:`x-circle;1em;sd-text-danger;` **Incorrect.** This is missing a space after the ``'...'``.

      .. code-block::

        numbers = ['5', '4', '3', '2', '1']
        print('... '.join(numbers))

      :octicon:`issue-closed;1em;sd-text-success;` **Correct.**

.. dropdown:: Code challenge: Charm Bracelet
    :color: warning
    :icon: star

    You have been provided with a list of charms. Each charm is provided in Unicode that corresponds to your emoji.

    .. code-block::

      charms = ['\U0001F517', '\U0001F3B1', '\U0001F9F8', '\U0001F369', '\U0001F3A0', '\U0001FA9D']


    For example, you can print the 8-ball emoji using the following.

    .. exec_code::
      :language: python

      print('\U0001F3B1')

    Write a program that joins each emoji with ``' ------- '`` (7 dashes with a space at the start and the end). This will form a charm bracelet with a link and hook at the ends of either bracelet. Print the charm bracelet. It should look like this:

    .. code-block:: markdown

      🔗 ------- 🎱 ------- 🧸 ------- 🍩 ------- 🎠 ------- 🪝

    .. dropdown:: Solution
      :class-title: sd-font-weight-bold
      :color: dark

      .. code-block::

        charms = ['\U0001F517', '\U0001F3B1', '\U0001F9F8', '\U0001F369', '\U0001F3A0', '\U0001FA9D']

        print(' ------- '.join(charms))
        