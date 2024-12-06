.. role:: python(code)
   :language: python

Pseudocode
====================

Sometimes it can be useful to write algorithms in code form without the syntax of a specific language. We can do this using **pseudocode**.

The way in which we represent ``if``-``elif``-``else`` statements as follows. This is an example with 3 conditions.

.. code-block:: html
    
    IF condition A THEN
        process 1
    ELSEIF condition B THEN
        process 2
    ELSEIF condition C THEN
        process 3
    ELSE
        process 4
    ENDIF

Here's an example!

**Python code**

.. code-block::

    x = 1

    if x < 0:
        print('x is a negative number')
    elif x > 0:
        print('x is a positive number')
    else:
        print('x is 0!')

**Pseudocode**

.. code-block:: markdown

    IF x < 0 THEN
        Display 'x is a negative number'
    ELSEIF x > 0 THEN
        Display 'x is a positive number'
    ELSE
        Display 'x is 0!'
    ENDIF

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Which of the following provides the pseudocode that corresponds to the following Python program?

    .. code-block::

        weather = 'rainy'

        if weather == 'rainy':
            print('Take an umbrella!')

    A. 

      .. code-block:: markdown

        IF weather == rainy:
            Display 'Take an umbrella'

    B. 

      .. code-block:: markdown

        IF 'Take an umbrella'
            weather == 'rainy'
        ENDIF

    C. 

      .. code-block:: markdown

        ELSEIF weather == 'rainy'
            Display 'Take an umbrella'
        ENDELSE

    D. 

      .. code-block:: markdown

        IF weather == 'rainy' THEN
            Display 'Take an umbrella'
        END IF

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. code-block:: markdown

            IF weather == rainy:
                Display 'Take an umbrella'

        :octicon:`x-circle;1em;sd-text-danger;` **Invalid.** Uses ``:`` instead of ``THEN`` and missing ``ENDIF`` at the end.

        .. code-block:: markdown

            IF 'Take an umbrella'
                weather == 'rainy'
            ENDIF

        :octicon:`x-circle;1em;sd-text-danger;` **Invalid and Incorrect.** Here the condition and the process have been swapped. The ``IF`` is also missing the ``THEN``.

        .. code-block:: markdown

            ELSEIF weather == 'rainy'
                Display 'Take an umbrella'
            ENDELSE

        :octicon:`x-circle;1em;sd-text-danger;` **Invalid.** The first condition should be an ``IF`` not an ``ELSEIF``. The closing tag should be ``ENDIF`` instead of ``ENDELSE``

        .. code-block:: markdown

            IF weather == 'rainy' THEN
                Display 'Take an umbrella'
            END IF

        :octicon:`issue-closed;1em;sd-text-success;` **Correct.**

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    Which of the following provides the pseudocode that corresponds to the algorithm illustrated below? 

    .. image:: img/7_question2.png
        :width: 250
        :align: center

    A. 

      .. code-block:: markdown

        IF light == 'green' THEN
            Display 'GO!'
        ELSEIF light == 'yellow' THEN
            Display 'Slow down!'
        ELSEIF light == 'red' THEN
            Display 'Stop!'
        ENDIF

    B. 

      .. code-block:: markdown

        IF light == 'green' THEN
            Display 'GO!'
        ELSEIF light == 'yellow' THEN
            Display 'Slow down!'
        ELSE
            Display 'Stop!'
        ENDIF

    C. 

      .. code-block:: markdown

        IF light == 'green' THEN
            Display 'GO!'
        ELSE
        IF light == 'yellow' THEN
            Display 'Slow down!'
        ELSE
        IF light == 'red' THEN
            Display 'Stop!'
        ELSE

    D. 

      .. code-block:: markdown

        IF light == 'green' THEN
            Display 'GO!'
        ENDIF
        IF light == 'yellow' THEN
            Display 'Slow down!'
        ENDIF
        IF light == 'red' THEN
            Display 'Stop!'
        ENDIF

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        D. 

            .. code-block:: markdown

                IF light == 'green' THEN
                    Display 'GO!'
                ENDIF
                IF light == 'yellow' THEN
                    Display 'Slow down!'
                ENDIF
                IF light == 'red' THEN
                    Display 'Stop!'
                ENDIF


        A few things to note:

        * This program only uses ``IF`` statements.

        * Each ``IF`` needs an ``ENDIF`` closing tag

        Here's the corresponding code:

        .. code-block::

            light = input('What colour is the traffic light? ')

            if light == 'green':
                print('GO!')
            if light == 'yellow':
                print('Slow down!')
            if light == 'red':
                print('Stop!')

.. dropdown:: Code challenge: Starting Player
    :color: warning
    :icon: star

    The following algorithm is used to pick a starting player. Both players roll a die and whoever rolls the largest number gets to start. If it's a tie, then the younger player starts. If it's a tie again then player 2 starts.

    .. code-block:: markdown

        IF roll1 > roll2 THEN
            Display 'Player 1 starts'
        ELIF roll2 > roll1 THEN
            Display 'Player 2 starts'
        ELSE
            IF age1 < age2 THEN
                Display 'Player 1 starts'
            ELSE
                Display 'Player 2 starts'

    Write the Python code that corresponds to the given pseudocode.

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. code-block::

            roll1 = 3
            roll2 = 4
            age1 = 10
            age2 = 12

            if roll1 > roll2:
                print('Player 1 starts')
            elif roll2 > roll1:
                print('Player 2 starts')
            else:
                if age1 < age2:
                    print('Player 1 starts')
                else:
                    print('Player 2 starts')