.. role:: python(code)
   :language: python


Additional Challenges
=====================

.. dropdown:: Code challenge: Python's Awesome!
    :color: warning
    :icon: star

    You have been provided with some code. 
    
    .. code-block:: python

        Print('Python's awesome!')
    
    The code should say Python's awesome! However, the code has some bugs!

    Debug this code!

    The output of your program should look like this:

    .. code-block:: html

        Python's awesome!

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: 

        ..     print("Python's awesome!")

        *Solution is locked*

.. dropdown:: Code challenge: 30% off!
    :color: warning
    :icon: star

    Today is your lucky day! Your favourite store is having a sale where everything is discounted by 30%! However, the discount isn't applied until checkout.

    Write a program that asks the user for the original price and then gives the discounted price to 2 decimal places.
    
    **Example 1**

    .. code-block::

        Enter the price ($): 10
        $7.00
    
    **Example 2**
    
    .. code-block::

        Enter the price ($): 79.99
        $55.99

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: 

        ..     price = float(input('Enter the price ($): '))
        ..     print('${:.2f}'.format(price - price * 0.3))

        .. The key things to remember in this solution are:

        .. ``input()`` values are always strings. You will need to convert price to a float.

        .. ``{:.2f}`` will convert the discounted price to 2 decimal places.

        *Solution is locked*

.. dropdown:: Code challenge: Favourite Foods
    :color: warning
    :icon: star

    Write a program that asks for the user's top 3 favourite foods and then returns the results as per the examples below.

    **Example 1**

    .. code-block::

        What are your 3 favourite foods?
        chocolate
        ice cream
        cake
        Your top 3 favourite foods are:
        1. chocolate
        2. ice cream
        3. cake

    **Example 2**

    .. code-block::

        What are your 3 favourite foods?
        pasta
        eggs
        mushrooms
        Your top 3 favourite foods are:
        1. pasta
        2. eggs
        3. mushrooms

    **Example 3**

    .. code-block::

        What are your 3 favourite foods?
        pineapples
        peaches
        lemons
        Your top 3 favourite foods are:
        1. pineapples
        2. peaches
        3. lemons

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: 

        ..     print("What are your 3 favourite foods?")

        ..     first = input()
        ..     second = input()
        ..     third = input()

        ..     print("Your top 3 favourite foods are:")
        ..     print("1. {}".format(first))
        ..     print("2. {}".format(second))
        ..     print("3. {}".format(third))

        .. You can obtain user input without displaying a message by leaving the input() brackets empty.

        *Solution is locked*