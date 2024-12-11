.. role:: python(code)
   :language: python


Lists
=====================

In Python, a list allows us to store a collection of items in a particular order.

Here is an example of a to do list that you might have.

* Buy carrots

* Wash car

* Study for quiz

We would create this in Python with the following:

.. code-block:: 

   todo = ['Buy carrots', 'Wash car', 'Study for quiz']
   print(todo)

* A list is defined by square brackets ``[]``

* Items in a list are separated by commas ``,``

Lists can also store numbers.

.. code-block:: 

   numbers = [1, 2, 3, 4]
   print(numbers)

In fact, you can actually store lots of different variable types in a list.

.. code-block:: 

   items = [1, 'hi', 2.25]
   print(items)

A list is actually another type of variable.

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Which of the following correctly creates a list of colours?

    A. 

      .. code-block:: python

        colours = 'pink', 'orange', 'purple'

    B. 

      .. code-block:: python

        colours = ['red', 'yellow', 'black']

    C. 

      .. code-block:: python

        colours = ['green' 'blue']

    D. 

      .. code-block:: python

        colours = ('white', 'red')

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. code-block:: python

          colours = 'pink', 'orange', 'purple'

        :octicon:`x-circle;1em;sd-text-danger;` **Not a list.** You'll notice that the square brackets are missing. The program still runs, but colours will not be a list (it'll be something called a tuple).

        .. code-block:: python

          colours = ['red', 'yellow', 'black']

        :octicon:`issue-closed;1em;sd-text-success;` **Is a list.**

        .. code-block:: python

          colours = ['green' 'blue']

        :octicon:`issue-opened;1em;sd-text-warning;` **Is a list, but exhibits unexpected behaviour.** Notice that the commas are missing. This means that Python automatically joins the strings together so you have a list with the 'colour' greenblue rather than a list with the colours green and blue.


        .. code-block:: python

          colours = ('white', 'red')

        :octicon:`x-circle;1em;sd-text-danger;` **Not a list.** You'll notice that this used circular brackets. This means that colours will not be a list (it'll be something called a tuple).

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What would the output of the following code be?

    .. code-block::

      list1 = ['red', 'green', 'blue']
      list2 = ['red', 'blue', 'green']

      print(list1 == list2)

    .. dropdown:: Solution
      :class-title: sd-font-weight-bold
      :color: dark

      **False.**
      
      The order of the elements in the list matter. A list is only the same as another list if all the elements are the same and also in the same order.
