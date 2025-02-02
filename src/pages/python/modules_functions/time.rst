.. role:: python(code)
   :language: python

Time
====

The ``time`` module is another useful module. It can be used to add pauses in a program, or it can be used to time how long it takes for a program to run.

To use the time library, we import it with:

.. code-block:: python

    import time

Adding Pauses to a Program
--------------------------

You can add a pause to a program using ``time.sleep()``

.. code-block:: text

    time.sleep(seconds)

Where *seconds specifies* how long the program will pause for. Here is an example.

.. code-block:: python

    import time

    for i in range(3):
        print('tick')
        time.sleep(1)
    print('BOOM!')

Timing a Program
----------------

The function ``time.time()`` tells us the current unix time (time since 00:00:00 UTC on 1 January 1970) in seconds.

.. code-block:: python

    import time

    print(time.time())

To measure the time it takes for our code to run, we check the time at the start of our code and then check the time at the end of our code. The difference in these times tells us how much time has elapsed in seconds.

.. code-block:: python

    import time

    start = time.time()
    1 + 1
    end = time.time()

    print(end - start)

Here it takes approximately ``5e-07`` seconds for the program to run. The ``e-07`` is scientific notation for :math:`\times10^{-7}`, which means it takes about half a microsecond for this program to run.

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Write a program that waits a random number of seconds (up to 10) before it says *Surprise!*.

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        .. code-block:: python

            import random
            import time

            wait = random.randrange(11)
            time.sleep(wait)
            print('Surprise!')

        ``random.randrange(11)`` will randomly select an integer from 0 (included) to 11 (not included) and store this integer in the variable ``wait``. The program will then wait that many seconds before printing *Surprise!* 

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    Which of the following best describes the code shown below.

    .. code-block:: python

        import random
        import time

        r = random.random()
        while r > 0.1:
            print('Keep digging...')
            time.sleep(1)
            r = random.random()
        print('Gold!')

    A. It simulates digging for gold. The user has a 10% chance of finding gold each second. The program will stop once the user finds gold.

    B. It simulates digging for gold. Every 0.1 seconds it will attempt to dig for gold. The program will stop once the user finds gold.

    C. It simulates digging for gold. Every 1 second the program will find gold. It will continue digging indefinitely.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*       

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Which of the following programs do you think will take longer?

    **Program 1**

    .. exec_code::
        :language: python

        for i in range(-10000, 10000, 2000):
            print(i)

    **Program 2**

    .. exec_code::
        :language: python

        for i in range(-10000, 10000):
            if i % 2000 == 0:
                print(i)

    You'll notice that both programs give the same output.

    A. Program 1 takes longer to execute than program 2.

    B. Program 2 take longer to execute than program 1.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*      

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    Write a program that will tell you how long it takes in seconds to perform the following calculation.

    .. code-block:: python

        total = 1
        for i in range(1, 100):
            total = total * i

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*    

.. dropdown:: Code challenge: Factorial Time!
    :color: warning
    :icon: star

    Write a program to see how long it takes for Python to calculate $5000!$. Print your answer in seconds to 6 decimal places. 

    Your output should look like this (with the X's replaced by numbers):

    .. code-block:: text

        Time: X.XXXXXX (s)

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: Quick Maths
    :color: warning
    :icon: star

    Write a program that will give the user 10 random multiplication questions from the standard multiplication tables (up to 12 x ...). The program won't move onto the next question until the user gets the first question right. The program will then print out the time (in seconds to 1 decimal place) it took the user to complete the test.

    For this exercise you must:

    * generate the random numbers using random.randrange(1, 13)

    * get the start and end time using time.time()

    **Example 1:** The user gets all of the questions correct.

    .. code-block:: text

        What is 1 x 5? 5
        What is 4 x 4? 16
        What is 12 x 5? 60
        What is 1 x 5? 5
        What is 8 x 10? 80
        What is 10 x 9? 90
        What is 4 x 2? 8
        What is 5 x 5? 25
        What is 7 x 1? 7
        What is 10 x 7? 70
        Your time was: 11.4 seconds


    **Example 2:** The user makes an incorrect guess on the third question and two incorrect guesses on the second last question.

    .. code-block:: text

        What is 11 x 1? 11
        What is 5 x 11? 55
        What is 8 x 2? 15
        16
        What is 10 x 5? 50
        What is 10 x 9? 90
        What is 6 x 11? 66
        What is 10 x 3? 30
        What is 9 x 8? 72
        What is 8 x 5? 32
        45
        40
        What is 9 x 1? 9
        Your time was: 17.6 seconds

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: 5 Seconds
    :color: warning
    :icon: star

    How good are you at estimating 5 seconds?

    Your program should ask the user *How good are you at estimating 5 seconds?*. It should then tell the user to *Press enter to start* and then *Press enter to end*. The program should time how long it takes between the user pressing the enter key and tell the user the amount of time that has elapsed in seconds to 4 decimal places. 

    For this exercise you must:

    * get the start and end time using ``time.time()``

    **Example:** The user presses the enter key after the Press enter to start and Press enter to end messages. 

    .. code-block:: text

        How good are you at estimating 5 seconds?
        Press enter to start
        Press enter to end
        Time elapsed: 4.6148 seconds