.. role:: python(code)
   :language: python

Random Integers
===============

It is often useful for computer programs to be able to produce random results. For example, games and numerical simulations involve elements of randomness. Randomness can be achieved using a random number generator. In Python, we can create random numbers using the `random <https://docs.python.org/3/library/random.html>`_  module. We will need to import the module at the start of our program to use it.

.. code-block:: text

    import random

We can generate random integers using ``random.randrange()``, which is very similar to the ``range()`` function. The structure of the random.``randrange()`` function is:

.. code-block:: text

    random.randrange(end)

.. code-block:: text

    random.randrange(start, end)

.. code-block:: text

    random.randrange(start, end, step_size)


.. note:: The start value is *included* while the end value is *excluded* and the *start*, *end*, and *step_size* must be *integers*.

**Example random.randrange(end):** By default the start value is 0, so this will generate random number between 0 and end, but does not include the end value. Try running the code below *multiple times*. You will find it will give you 0, 1 or 2.

.. code-block:: python

    import random
    print(random.randrange(3))

**Example random.randrange(start, end):** This will generate random integers between the specified start and end values but does not include the end value. The code below will give you either a 5, 6 or 7.

.. code-block:: python

    import random
    print(random.randrange(5, 8))

**Example random.randrange(start, end, step_size):** This will generate random integers between the specified start and end values, counting up by the specified step. It will not include the end value. The code below will give you either 10, 12, 14, 16 or 18.

.. code-block:: python

    import random
    print(random.randrange(10, 20, 2))

Generating integers allows us to randomly select from lists. For example, the code below will allow us to randomly select a starting player.

.. code-block:: python

    import random

    players = ['Alice', 'Bob']
    i = random.randrange(len(players)) # len(players) is 2, so this will randomly generate either 0 or 1

    print(players[i])

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Which of the following values could you obtain after running the following program? *Select all that apply.*

    .. code-block:: python

        import random

        print(random.randrange(5))

    A. 0

    B. 1

    C. 2

    D. 3

    E. 4

    F. 5

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **A. B. C. D. E.**

        When only one value is specified ``random.randrange()`` will return integers between 0 up to but not including the end value. In this example, the end value is 5, which means the program will return values 0, 1, 2, 3 and 4.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    Write a program that will randomly assign a players to the red, blue or green team. Each time the program runs it should display either ``red``, ``green`` or ``blue`` with equal likelihood.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    You live at 25 Welcome Street. You want to set yourself a reminder each week to drop in and say hi to your neighbours on your side of the street. You're friends with the residents from 21 to 35. Write a program that randomly selects a neighbour to say hi to. 

    Your program should output

    .. code-block:: text

        Say hi to X!

    where ``X`` is a randomly generated house number from 21 to 35 inclusive. Note that your program should never select 25 (since it's silly to say hi to yourself) and your program should only select odd numbered houses as your side of the street is odd.

    Why won't the following program work?

    .. code-block:: python

        import random

        r = random.randrange(21, 37, 2)

        if r == 25:
            r = random.randrange(21, 37, 2)

        print('Say hi to {}!'.format(r))

    A. ``r = random.randrange(21, 37, 2)`` will randomly select a neighbour from 21, 23, 25, 27, 29, 31, 33, 35 and 37, and we don't want to select house 37.

    B. ``r = random.randrange(21, 37, 2)`` will randomly select a neighbour from 21 to 36 (inclusive) and we don't want to select even numbered houses.

    C. This program can select 25, which is silly since we don't want to say hi to ourselves.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    You live at 25 Welcome Street. You want to set yourself a reminder each week to drop in and say hi to your neighbours on your side of the street. You're friends with the residents from 21 to 35. Write a program that randomly selects a neighbour to say hi to. Your program should output

    .. code-block:: text

        Say hi to X!
    
    where ``X`` is a randomly generated house number from 21 to 35 inclusive. Note that your program should never select 25 (since it's silly to say hi to yourself) and your program should only select odd numbered houses as your side of the street is odd.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 5
    :open:
    :color: info
    :icon: question

    The random module comes equipped with lots of functions. Read the `SQLAlchemy <https://docs.python.org/3/library/random.html>`_  to work out what ``random.shuffle`` does. Which of the options below best describes what the following program does. 

    .. code-block:: python

        import random

        students = ['Archie', 'Betty', 'Veronica', 'Jughead', 'Reggie']
        random.shuffle(students)

        print('Order of student presentation: ')
        for i in students:
            print(i)

    A. ``random.shuffle()`` will shuffle the order of the ``students`` list, but since the new list isn't saved this program will always have the students present in the order: Archie, Betty, Veronica, Jughead, Reggie.

    B. ``random.shuffle()`` will shuffle the order of the ``students`` list and select students randomly from the list 5 times, since there are 5 students. It is possible for the same student to be selected multiple times and for a student to not be selected at all.

    C. ``random.shuffle()`` will shuffle the order of the ``students`` list and will randomly allocate an order for the students to present in. The order will be different every time and each student will be chosen exactly once.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*