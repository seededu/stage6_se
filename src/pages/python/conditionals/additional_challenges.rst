.. role:: python(code)
   :language: python


Additional Challenges
=====================

.. dropdown:: Code challenge: Days Until Christmas
    :color: warning
    :icon: star

    It's December! That means it's almost Christmas. 

    Write a program that asks the user for the day of the month. Your program should either say how many sleeps until Christmas. Note that on the 24th there is only one sleep until Christmas so your program should not say 1 sleeps until Christmas, because it's grammatically incorrect. If it's the 25th of December your program should say Merry Christmas!. 

    You program will only be given values 1-25 inclusive.

    **Example 1**

    .. code-block:: markdown

        Today's date: 10
        15 sleeps until Christmas
    
    **Example 2**

    .. code-block:: markdown

        Today's date: 24
        1 sleep until Christmas
    
    **Example 3**

    .. code-block:: markdown

        Today's date: 25
        Merry Christmas!

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block::

        ..     day = int(input("Today's date: "))

        ..     if day == 24:
        ..         print('1 sleep until Christmas')
        ..     elif day < 24:
        ..         print('{} sleeps until Christmas'.format(25 - day))
        ..     else:
        ..         print('Merry Christmas!')

        *Solution is locked*

.. dropdown:: Code challenge: pH Scale
    :color: warning
    :icon: star

    The following algorithm is used to interpret a pH scale.

    .. code-block:: markdown

        IF ph == 7 THEN
            Display 'neutral'
        ELIF ph > 4.5 and ph < 7 THEN
            Display 'acidic'
        ELIF ph < 4.5 THEN
            Display 'very acidic'
        ELIF ph > 7 and ph < 10.5 THEN
            Display 'alkaline'
        ELSE
            Display 'very alkaline'
        ENDIF

    Write the Python code that corresponds to the given pseudocode.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: 

        ..     ph = float(input('What is the pH? '))

        ..     if ph == 7:
        ..         print('neutral')
        ..     elif ph > 4.5 and ph < 7:
        ..         print('acidic')
        ..     elif ph < 4.5:
        ..         print('very acidic')
        ..     elif ph > 7 and ph < 10.5:
        ..         print('alkaline')
        ..     else:
        ..         print('very alkaline')

        *Solution is locked*

.. dropdown:: Code challenge: Algorithm Implementation
    :color: warning
    :icon: star

    Implement the algorithm illustrated in the diagram below in Python. **Pay close attention to the indentation**.

    .. image:: img/6_question3.png
        :width: 700
        :align: center

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        ..     .. code-block:: 

        ..         x = 'X'
        ..         y = True
        ..         z = 2

        ..         if x == 'Y' or z < 4:
        ..             if y:
        ..                 print('A')
        ..             else:
        ..                 print('B')
        ..             if z < 0:
        ..                 print('C')
        ..                 print('D')
        ..         elif z == 2 and z == 'X':
        ..             print('E')
        ..         else:
        ..             print('F')
        ..         print('G')
        
        .. Things to note:

        .. * The ``True`` branch of the first ``if`` statements contains an ``if``-``else`` statement corresponding to the condition ``y`` and an ``if`` statement corresponding to the condition ``z < 0``. 

        .. * This means that the ``elif`` and ``else`` part of the first ``if`` statement join back *after* the ``if``-``else`` and ``if`` statements.

        .. * The ``print('G')`` is not inside the ``if``-``elif``-``else`` statement, so it is not indented.

        *Solution is locked*

.. dropdown:: Code challenge: Simple Calculator
    :color: warning
    :icon: star

    Write a program to act as a simple calculator. The program will ask the user for two numbers, x and y (these can be floats). It will then ask the user for an operation and return the corresponding calculation.

    .. list-table:: 
        :widths: 50 50 
        :header-rows: 1

        * - Operation
          - Calculation
        * - add
          - :math:`x + y`
        * - subtract
          - :math:`x - y`
        * - multiply
          - :math:`x \times y`
        * - divide
          - :math:`x/y`

    If the user gives an operation that is not on the list your program should output *Error! Unknown operation.*

    The program will then print the result to two decimal places.

    **Example 1**

    .. code-block:: markdown

        x: 2
        y: 4
        Operation: add
        6.00

    **Example 2**

    .. code-block:: markdown

        x: 9
        y: 2
        Operation: divide
        4.50

    **Example 3**

    .. code-block:: markdown
            
        x: 6
        y: 2
        Operation: power
        Error! Unknown operation.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: 

        ..     x = float(input('x: '))
        ..     y = float(input('y: '))
        ..     operation = input('Operation: ')

        ..     if operation == 'add':
        ..         print('{:.2f}'.format(x+y))
        ..     elif operation == 'subtract':
        ..         print('{:.2f}'.format(x-y))
        ..     elif operation == 'multiply':
        ..         print('{:.2f}'.format(x*y))
        ..     elif operation == 'divide':
        ..         print('{:.2f}'.format(x/y))
        ..     else:
        ..         print('Error! Unknown operation.')

        *Solution is locked*

.. dropdown:: Code challenge: HSC Bands
    :color: warning
    :icon: star

    Write a program that asks for the user's mark, and then states their corresponding HSC band.

    .. list-table:: 
        :widths: 50 50 
        :header-rows: 1

        * - Mark
          - Grade
        * - 0 - 49
          - Band 1
        * - 50 - 59
          - Band 2
        * - 60 - 69
          - Band 3
        * - 70 - 79
          - Band 4
        * - 80 - 89
          - Band 5
        * - 90 - 100
          - Band 6

    Here are some examples of how your code should run.

    **Example 1**
    
    .. code-block:: markdown

        Enter your mark: 63
        Band 3

    **Example 2**

    .. code-block:: markdown

        Enter your mark: 82
        Band 5

    **Example 3**

    .. code-block:: markdown

        Enter your mark: 24
        Band 1

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block:: python

        ..     mark = int(input('Enter your mark: '))

        ..     if mark < 50:
        ..         print('Band 1')
        ..     elif mark < 60:
        ..         print('Band 2')
        ..     elif mark < 70:
        ..         print('Band 3')
        ..     elif mark < 80:
        ..         print('Band 4')
        ..     elif mark < 90:
        ..         print('Band 5')
        ..     else:
        ..         print('Band 6')

        *Solution is locked*

.. dropdown:: Code challenge: Tennis Calls
    :color: warning
    :icon: star

    Write a program that converts tennis points to the umpire's call. It's a little confusing but here are how the first four points are scored. 

    .. list-table:: 
        :widths: 50 50 
        :header-rows: 1
        :width: 50

        * - 0
          - Love
        * - 1
          - 15
        * - 2
          - 30
        * - 3
          - 40

    Examples:

    * Score: 2-0 :math:`\rightarrow` 30-Love.

    * Score: 2-3 :math:`\rightarrow` 30-40.

    Once is on 4 points or more it gets even more complicated. Here are the call rules.

    .. list-table:: 
        :widths: 50 50 
        :header-rows: 1
        :width: 50

        * - Score
          - Call
        * - Player 1 and Player 2 have the same score
          - Deuce
        * - Player 1 score > Player 2 score
          - Advantage player 1
        * - Player 1 score < Player 2 score
          - Advantage player 2

    Examples:

    * Score: 5-5 :math:`\rightarrow` Deuce.

    * Score: 4-5 :math:`\rightarrow` Advantage player 2.

    To win, a player has to have at least 3 points, and then has to have 2 points more than their opponent.

    * Score: 3-1 :math:`\rightarrow` Game. Player 1 wins.

    * Score: 4-2 :math:`\rightarrow` Game. Player 1 wins.

    * Score 5-7 :math:`\rightarrow` Game. Player 2 wins.

    Write a program that asks for the tennis scores of two plays and outputs the umpire's call.

    **Example 1**

    .. code-block:: markdown
    
        Player 1: 1
        Player 2: 1
        15-15

    **Example 2**

    .. code-block:: markdown

        Player 1: 3
        Player 2: 2
        40-30

    **Example 3**

    .. code-block:: markdown

        Player 1: 4
        Player 2: 4
        Deuce.

    **Example 4**

    .. code-block:: markdown

        Player 1: 5
        Player 2: 3
        Game. Player 1 wins.
    
    **Example 5**

    .. code-block:: markdown

        Player 1: 7
        Player 2: 6
        Advantage player 1.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. .. code-block::

        ..     p1 = int(input('Player 1: '))
        ..     p2 = int(input('Player 2: '))

        ..     if p1 >= 4 or p2 >=4:
        ..         if p1 == p2:
        ..             print('Deuce.')
        ..         elif p1 == p2 + 1:
        ..             print('Advantage player 1.')
        ..         elif p2 == p1 + 1:
        ..             print('Advantage player 2.')
        ..         elif p1 == p2 + 2:
        ..             print('Game. Player 1 wins.')
        ..         else:
        ..             print('Game. Player 2 wins.')
        ..     else:
        ..         if p1 >= 3 and p1 > p2 + 1:
        ..             print('Game. Player 1 wins.')
        ..         elif p2 >= 3 and p2 > p1 + 1:
        ..             print('Game. Player 2 wins.')
        ..         else:
        ..             if p1 == 0:
        ..                 call1 = 'Love'
        ..             elif p1 == 1:
        ..                 call1 = '15'
        ..             elif p1 == 2:
        ..                 call1 = '30'
        ..             else:
        ..                 call1 = '40'
        ..             if p2 == 0:
        ..                 call2 = 'Love'
        ..             elif p2 == 1:
        ..                 call2 = '15'
        ..             elif p2 == 2:
        ..                 call2 = '30'
        ..             else:
        ..                 call2 = '40'
        ..             print('{}-{}'.format(call1, call2))

        *Solution is locked*