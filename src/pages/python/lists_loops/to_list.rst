Converting To Lists
===================

It is often useful to convert variables in Python to a list so you can perform
list operations. This can be achieved using ``list()``.

``list(iterable)``

Only iterables can be converted to a list. An iterable is a sequence of values
you can go through.

**Example:** Convert a string to a list. This will create a list of characters
that make up the given string.

.. exec_code::
    :language: python

    text = 'Hello World!'
    print(list(text))

If we want to create a list of strings rather than characters we can use the
``.split()`` method.

The string is the text that you want to convert to a list and the separator is
used to identify how the string should be broken up into different elements.

**Example:** Splitting on a space.

.. exec_code::
    :language: python

    text = 'Red Orange Green Blue'
    print(text.split(' '))

The separator you use doesn't have to be a character, it can be a string.

**Example:** Splitting on a comma and a space.

.. exec_code::
    :language: python

    weekdays = 'Monday, Tuesday, Wednesday, Thursday, Friday'
    print(weekdays.split(', '))

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

        numbers = '12345678910'
        print(list(numbers))


    A.

    .. code-block:: python

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    B.

    .. code-block:: python

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0]

    C.

    .. code-block:: python

        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

    D.

    .. code-block:: python

        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0']

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        Python will treat numbers as a *string*. This means when it is convert to a list using ``list()`` it will create a list of *characters*. This means:

        * The elements of the new list will be *characters*, not *integers*

        * The last number, which is 10 will not be treated as a single number it will be broken up into the characters '1' and '0'.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

        fruits = 'apples,bananas,pears'
        list_fruits = fruits.split(',')
        print(list_fruits[1])

    A.

    .. code-block:: python

        a

    B.

    .. code-block:: python

        p

    C.

    .. code-block:: python

        ,

    D.

    .. code-block:: python

        apples

    E.

    .. code-block:: python

        bananas

    F.

    .. code-block:: python

        pears

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code challenge: String to List
    :color: warning
    :icon: star

    Suppose you had the following string.

    ``months = 'Jan-Feb-Mar-Apr-May-Jun-Jul-Aug-Sep-Oct-Nov-Dec'``

    Write a program to convert this string into a list and prints the result. Your output should look like this:

    ``['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']``

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code challenge: Shopping List
    :color: warning
    :icon: star

    Write a program that asks the user what they need to buy from the shops and converts this into a list of items. You can assume the user separates each item with a space.

    **Example 1**

    .. code-block:: text

        What do you need to buy? spaghetti tomatoes basil burrata
        ['spaghetti', 'tomatoes', 'basil', 'burrata']

    **Example 2**

    .. code-block:: text

        What do you need to buy? flour eggs milk sugar
        ['flour', 'eggs', 'milk', 'sugar']

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code challenge: Secret Message
    :color: warning
    :icon: star

    You want to send your friend a secret message. A simple way to do this is to put a jumble of characters between each letter you want to send. For example, if you want to send the message hello you might scramble this by placing the string ``"qmcsyd"`` between each letter. This means your secret message would look like this:

    .. code-block:: text

        hqmcsydeqmcsydlqmcsydlqmcsydo

    Write a program to decode this secret message. Your program should ask for the encrypted message and also for the string they used to scramble the message. You program should then return the decoded message.

    **Example 1**

    .. code-block:: text

        secret message: hqmcsydeqmcsydlqmcsydlqmcsydo
        scramble string: qmcsyd
        hello

    **Example 2**

    .. code-block:: text

        secret message: tkiblosekhkiblosekekiblosekrkiblosekekiblosek kiblosekakiblosekrkiblosekekiblosek kiblosekckiblosekokiblosekokiblosekkkiblosekikiblosekekiblosekskiblosek kiblosekikibloseknkiblosek kiblosektkiblosekhkiblosekekiblosek kiblosekckiblosekukiblosekpkiblosekbkiblosekokiblosekakiblosekrkiblosekd
        scramble string: kiblosek
        there are cookies in the cupboard

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*
