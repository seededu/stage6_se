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

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. code-block::

            day = int(input("Today's date: "))

            if day == 24:
                print('1 sleep until Christmas')
            elif day < 24:
                print('{} sleeps until Christmas'.format(25 - day))
            else:
                print('Merry Christmas!')

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

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. code-block:: 

            ph = float(input('What is the pH? '))

            if ph == 7:
                print('neutral')
            elif ph > 4.5 and ph < 7:
                print('acidic')
            elif ph < 4.5:
                print('very acidic')
            elif ph > 7 and ph < 10.5:
                print('alkaline')
            else:
                print('very alkaline')

.. dropdown:: Code challenge: Algorithm Implementation
    :color: warning
    :icon: star

    Implement the algorithm illustrated in the diagram below in Python. **Pay close attention to the indentation**.

    .. image:: img/6_question3.png
        :width: 700
        :align: center

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. code-block:: 

            x = 'X'
            y = True
            z = 2

            if x == 'Y' or z < 4:
                if y:
                    print('A')
                else:
                    print('B')
                if z < 0:
                    print('C')
                    print('D')
            elif z == 2 and z == 'X':
                print('E')
            else:
                print('F')
            print('G')
    
    Things to note:

    * The ``True`` branch of the first ``if`` statements contains an ``if``-``else`` statement corresponding to the condition ``y`` and an ``if`` statement corresponding to the condition ``z < 0``. 

    * This means that the ``elif`` and ``else`` part of the first ``if`` statement join back *after* the ``if``-``else`` and ``if`` statements.

    * The ``print('G')`` is not inside the ``if``-``elif``-``else`` statement, so it is not indented.