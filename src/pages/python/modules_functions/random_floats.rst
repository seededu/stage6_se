Random Floats and Using Probabilities
=====================================

Sometimes we want an event to occur with a specific probability. This can be
achieved using ``random.random()``. This function produces a random float
between 0 (inclusive) and 1 (not inclusive), i.e. we will get a value :math:`r`
where :math:`0 \leq r < 1`.

.. code-block:: python

    import random

    print(random.random())

We can then check whether the random value is less than or equal to :math:`p`,
the probability with which we want the event to occur.

For example, we can write a program to generate weather conditions, which is
common in a lot of games. Our simple program will say that it's sunny 80% of
the time and say that it's rainy 20% of the time.

.. code-block:: python

    import random

    r = random.random()
    if r < 0.8:
        print("sunny")
    else:
        print("rainy")

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Which of the following values could you obtain after running the following program? *Select all that apply.*

    .. code-block:: python

        import random

        r = random.random()
        print(r*10)

    A.

     .. code-block:: python

        0

    B.

     .. code-block:: python

        1

    C.

     .. code-block:: python

        10

    D.

     .. code-block:: python

        0.5

    E.

     .. code-block:: python

        0.368479

    F.

     .. code-block:: python

        7.8

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        ``r = random.random()`` will produce a random float between 0 (included) and 1 (not included). Since these values get multiplied by 10, we end up with values between 0 (included) and 10 (not included).

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    Write a program that will generate floats between -1 (included) and 1 (not included), i.e. will print :math:`r` where :math:`-1 \leq r < 1`.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Which of the following best describes the purpose of the code shown below.

    .. code-block:: python

        import random

        r = random.random()
        if r < 0.6:
            print('Heads')
        else:
            print('Tails')

    A. The program simulates a fair coin which will present **Heads 50%** of the time and **Tails 50%** of the time.

    B. The program simulates an unfair coin which will present **Heads 60%** of the time and **Tails 40%** of the time.

    C. The program simulates an unfair coin which will present **Heads 40%** of the time and **Tails 60%** of the time.

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    Write a program that simulates a loaded dice with the following probabilities.

    * 1, 2, 3, 4, 5 each appear 15% of the time

    * 6 appears 25% of the time

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code challenge: Fitness Wheel
    :color: warning
    :icon: star

    Write a program that allows the user to spin the fitness wheel!

    .. image:: img/fitness_wheel.png
        :width: 400
        :align: center

    The program should display

    * *10 sit ups* 12.5% of the time

    * *5 star jumps* 12.5% of the time

    * *10 squats* 12.5% of the time

    * *20 second plank* 12.5% of the time

    * *3 push ups* 12.5% of the time

    * *2 lunges per leg* 12.5% of the time

    * *30 second rest!* 25% of the time

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*
