List Operations
===============

We can add items to the end of our list by appending them. To do this we use the
``.append()`` method.

Here is the syntax used for appending:

``list.append(item)``

Here is an example where `'bee'` is added to the *end* of the list.

.. exec_code::
    :language: python

    animals = ['lion', 'caterpillar', 'elephant']
    animals.append('bee')
    print(animals)

Conveniently, we can perform operations on lists. Here are a few examples:

- ``len(list)``: Find the number of items in a list

  .. exec_code::
      :language: python

      a = [-3, 4, 6, 1]
      print(len(a))

- ``min(list)``, ``max(list)``: Find the minimum/maximum value in a list of numbers

  .. exec_code::
      :language: python

      a = [-3, 4, 6, 1]
      print(min(a))
      print(max(a))

- ``sum(list)``: Calculate the sum of all the values in a list of numbers

  .. exec_code::
      :language: python

      a = [-3, 4, 6, 1]
      print(sum(a))

``print(information_you_want_to_display)``.

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

      fruits = ['apples', 'bananas', 'pears']
      fruits.append('oranges')
      fruits.append('watermelons')
      print(fruits)

    A.

      .. code-block:: markdown

        ['apples', 'bananas', 'pears']

    B.

      .. code-block:: markdown

        ['apples', 'bananas', 'pears', 'watermelons']

    C.

      .. code-block:: markdown

        ['apples', 'bananas', 'pears', 'oranges', 'watermelons']

    D.

      .. code-block:: markdown

        ['apples', 'bananas', 'pears', 'watermelons', 'oranges']

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        :octicon:`x-circle;1em;sd-text-danger;` ``['apples', 'bananas', 'pears']``

        :octicon:`x-circle;1em;sd-text-danger;` ``['apples', 'bananas', 'pears', 'watermelons']``

        :octicon:`issue-closed;1em;sd-text-success;` ``['apples', 'bananas', 'pears', 'oranges', 'watermelons']``

        :octicon:`x-circle;1em;sd-text-danger;` ``['apples', 'bananas', 'pears', 'watermelons', 'oranges']``

        In this example ``append`` is used twice. Each time it's used a new element is added to the list. First ``'oranges'`` is added and then ``'watermelons'`` is added.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

      fruits = ['apples', 'bananas', 'pears']
      print(len(fruits))

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. **3**

        .. ``len`` tells you the number of elements in a list. In this case there are 3 elements in the list which is why ``len(fruits)`` is 3.

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

      numbers = [7, 2, -1, 3, 9]
      print(min(numbers))

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. **-1**

        .. ``min`` will give you the minimum value in a list. -1 is the minimum value in the list so the result is -1.

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

      numbers = [7, 2, -1, 3, 9]
      print(sum(numbers))

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. **20**

        .. ``sum`` will give you the sum of all the values in the given list. In this case 7 + 2 -1 + 3 + 9 = 20, so the result is 20.

        *Solution is locked*

.. dropdown:: Code challenge: Another Thing To do
    :color: warning
    :icon: star

    You have been provided with a to-do list.

    .. code-block:: python

      todo = ['Buy carrots', 'Wash car', 'Study for quiz']

    Write a program that allows the user to add an item to the to-do list. Then print the newly modified list.

    Here are some examples of how your code should run.

    **Example 1**

    .. code-block:: markdown

      What else do you need to do? Cook dinner
      ['Buy carrots', 'Wash car', 'Study for quiz', 'Cook dinner']

    **Example 2**

    .. code-block:: markdown

        What else do you need to do? Empty bins
        ['Buy carrots', 'Wash car', 'Study for quiz', 'Empty bins']

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block::

        ..   todo = ['Buy carrots', 'Wash car', 'Study for quiz']

        ..   task = input('What else do you need to do? ')
        ..   todo.append(task)
        ..   print(todo)

        *Solution is locked*
