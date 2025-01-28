.. role:: python(code)
   :language: python

Indexing
=====================

We can access the items of a list using indexing. This means that we can give Python a number, and it will retrieve the item sitting at that location. 

Here is the syntax used for indexing:

:python:`list[index]`.

Now unlike us humans who start counting at 1,

**Python indexing starts at 0!**

This isn't unique to Python. Many other languages use 0 indexing.

Below we show you the index corresponding to each item in the list months.

.. exec_code::

    # index:    0      1      2      3      4      5      6      7      8       9     10      11
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    print(months[1])

Since Python starts indexing at 0, ``months[0]`` will give us the first month and ``month[1]`` will gives us the second month and so on.

We can also use indexing to extract a range of items. We use the square brackets ``[]`` as before and we also specify the start index followed by the end index.

:python:`list[start:end]`

Note:

* The start index is *inclusive*

* The end index is *exclusive*

Here is an example. We start at month 2 (March) and go up to, but *not including*, month 7 (August).

.. exec_code::

    # index:    0      1      2      3      4      5      6      7      8       9     10      11
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    print(months[2:7])

If you omit the *start* index, you will automatically start at index 0.

.. exec_code::

    # index:    0      1      2      3      4      5      6      7      8       9     10      11
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    print(months[:7])

If you omit the *end* index, you will automatically end at the last item in the list. Here is an example.

.. exec_code::

    # index:    0      1      2      3      4      5      6      7      8       9     10      11
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    print(months[5:])

You can also index from the end of the list by using negative indices. Here is an example. 

.. exec_code::

    # negative index:
    #          -12    -11    -10    -9     -8     -7     -6     -5     -4      -3     -2     -1
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    print(months[-3])

Note: the last item in the list starts at -1 whereas the first item in the list starts at 0.

Index Errors
------------
If you try to access an index that does not exist you will get an *IndexError*. See what happens when you run the following code.

.. code::

    # index:    0      1      2      3      4      5      6      7      8       9     10      11
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    print(months[12])

.. code:: text

    Traceback (most recent call last):
      File "/home/main.py", line 3, in <module>
          print(months[12])
                ~~~~~~^^^^
      IndexError: list index out of range
      
This is a common error as often we forget to account for the fact that Python indexing starts at 0.

.. dropdown:: Question 1 
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

        days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
        print(days[3])

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **Thur**

        ``days[3]`` will print the **fourth** item in the list, which is ``'Thur'``.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    Consider the following list.

    .. code-block:: python

        days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

    Which would give the following output:

    .. code-block:: markdown

        ['Tue', 'Wed']

    A. 

      .. code-block:: python

        print(days[1:2])

    B. 

      .. code-block:: python

        print(days[1:3])

    C. 

      .. code-block:: python

        print(days[:2])

    D. 

      .. code-block:: python

        print(days[2])

    E. 

      .. code-block:: python
        
        print(days[-2])

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: python
        
        ..     print(days[1:3])

        .. Remember that the start index is *inclusive* and the last index is *exclusive*. This means that we start at index 1 and go up to, but not including index 3, which means we get ``['Tue', 'Wed']``.

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question
    
    What do you think the output of the following code will be?

    .. code-block:: python

        days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
        print(days[:3])

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: python

        ..     ['Mon', 'Tue', 'Wed']

        .. If the start index is not included, the default start is 0. Remember that the start index is *inclusive* and the last index is *exclusive*. This means that we start at index 0 and go up to, but not including index 3, which means we get ``['Mon', 'Tue', 'Wed']``.

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question
    
    What do you think the output of the following code will be?

    .. code-block:: python

        days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
        print(days[-4:])

    .. dropdown:: :material-regular:`lock;1.5em` olution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: python

        ..     ['Mon', 'Tue', 'Wed']

        .. With negative indices, the *last* item is ``-1`` and then you start counting backwards. If the end index is not included, you will automatically get to the end of the list. This means that we start at index **-4** and go to the end of the list. This means we get ``['Thur', 'Fri', 'Sat', 'Sun']``.

        *Solution is locked*

.. dropdown:: Question 5
    :open:
    :color: info
    :icon: question
    
    Consider the following list.

    .. code-block:: python

        days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

    Which of the following will correspond to Saturday? *Select all that apply.*

    .. code-block:: python

        days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
        print(days[-4:])

    A. 

      .. code-block:: python

        days[-2]

    B. 

      .. code-block:: python

        days[5:6]

    C. 

      .. code-block:: python

        days[-2:-1]

    D. 

      .. code-block:: python

        days[5]

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. :octicon:`issue-closed;1em;sd-text-success;` ``days[-2]``

        .. :octicon:`issue-closed;1em;sd-text-success;` ``days[5:6]``

        .. :octicon:`issue-closed;1em;sd-text-success;` ``days[-2:-1]``

        .. :octicon:`issue-closed;1em;sd-text-success;` ``days[5]``

        .. One thing that you'll notice is that when you index one value, you're extracting out a single value, so ``days[-2]`` and ``days[5]`` will extract out a single element, in this case ``'Sat'``, whereas when you select out a range of values you will get a list because there's potential that you may retrieve multiple elements.

        *Solution is locked*

.. dropdown:: Code challenge: Item Number
    :color: warning
    :icon: star

    You have been provided with a shopping list.

    .. code-block:: python

        shopping_list = ['carrots', 'avocado', 'chocolate', 'toothpaste', 'tomatoes']

    Write a program that allows the user to check an item at a specified index in the shopping list.

    Here are some examples of how your code should run.

    **Example 1**

    .. code-block:: markdown

        Enter an index: 0
        You need to buy carrots

    **Example 2**

    .. code-block:: markdown

        Enter an index: 2
        You need to buy chocolate

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: 

        ..     shopping_list = ["carrots", "avocado", "chocolate", "toothpaste", "tomatoes"]

        ..     index = int(input("Enter an index: "))
        ..     print("You need to buy {}".format(shopping_list[index]))

        *Solution is locked*

.. dropdown:: Code challenge: What Month Is It?
    :color: warning
    :icon: star

    You have been given the following list to start with.

    .. code-block:: python

        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    Write a program that asks the user for a month as an integer and then displays the name of the month.

    **Example 1**

    .. code-block:: markdown

        Enter a month: 1
        January

    **Example 2**

    .. code-block:: markdown
    
        Enter a month: 6
        June

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block::

        ..     months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        ..     month = int(input('Enter a month: '))
        ..     print(months[month - 1])
        
        .. The key things to remember in this solution are:

        .. * ``input()`` values are always strings. You will need to convert month to an integer.

        .. * Don't forget that *Python indexing starts at 0!* This means that even though January is month 1, it is at index 0! Including month -1 will convert the month to the appropriate index.

        *Solution is locked*