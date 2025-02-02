.. role:: python(code)
   :language: python

Common While Loop Errors
========================

Infinite While Loop
-------------------

One of the easiest mistakes to make with a ``while`` loop is having a condition that is *always* ``True``. This results in an infinite ``while`` loop!

For example:

.. code-block:: python

   i = 0
   while i < 3:
      print(i)

**What's happening here?**

We can see that the condition we have set for our ``while`` loop is ``i < 3``. 

At the **first** iteration ``i = 0``. This means the condition is ``True``. We execute the code block: 

.. code-block:: python
   
   print(i)

This means that we output:

.. code-block:: python
   
   0

At the **second** iteration ``i = 0``. **This is because we did not update i**. This means the condition is ``True``. Again, we execute the code block and we output:

.. code-block:: python

   0

At the **third** iteration ``i = 0``, at the **fourth** iteration ``i = 0``, and so on.  **This is because we never updated i**. This results in the loop never ending!

Not initialising your iteration variable
----------------------------------------

If you forget to initialise your iteration variable you'll get a **NameError** (A variable of the specified name cannot be found).

See what happens when you run the following code.

.. code-block:: python

   while i < 3:
      print(i)
      i = i + 1

The code above produces the following error message.

.. code-block:: text

   Traceback (most recent call last):
      File "/home/main.py", line 1, in <module>
         while i < 3:
               ^
      NameError: name 'i' is not defined. Did you mean: 'id'?

* The error message tells us the error is on ``line 1`` and comes from the ``while i < 3:``. 

* It also tells us that we have a **NameError**, which means a variable hasn't been defined. In this case it's the variable ``i``. The program is trying to check whether ``i`` is less than 3, but ``i`` does not exist.

Incorrect indentation
---------------------

It's important that you get the indentation correct. Anything that is *inside* the loop, i.e. the code that is repeated, should be *indented*.

If nothing is indented you will get an **IndentationError** (The indentation is not syntactically valid).

.. code-block:: python

   i = 0
   while i < 3:
   print(i)
   i = i + 1

.. code-block:: text

    File "/home/main.py", line 3
      print(i)
      ^
   IndentationError: expected an indented block after 'while' statement on line 2

You can also get an **IndentationError** if your indentation isn't consistent. In the example below ``line`` 3 has 5 spaces in front of it while ``line 4`` only has 4 spaces in front of it. The number of spaces in front of these lines need to be the same.

.. code-block:: python

   i = 0
   while i < 3:
       print(i)
      i = i + 1

.. code-block:: text

     File "/home/main.py", line 4
      i = i + 1
               ^
   IndentationError: unindent does not match any outer indentation level

.. dropdown:: Question 1
   :open:
   :color: info
   :icon: question

   Which of the following code snippets will result in the output

   .. code-block:: text

      0
      1
      2

   A. 

    .. code-block:: python

      i = 0
      while i < 3:
         print(i)

   B. 

    .. code-block:: python

      i = 0
      while i < 3:
         print(i)
         i = i + 1

   C. 

    .. code-block:: python

      i = 0
      while i < 3:
         print(i)
         i = i + 1

   D. 

    .. code-block:: python

      while i < 3:
      print(i)
         i = i + 1

   .. dropdown:: Solution
      :class-title: sd-font-weight-bold
      :color: dark

      .. code-block:: python

         i = 0
         while i < 3:
            print(i)

      :octicon:`x-circle;1em;sd-text-danger;` **Incorrect.**  Will result in an infinite loop.

      .. code-block:: python

         i = 0
         while i < 3:
            print(i)
            i = i + 1

      :octicon:`issue-closed;1em;sd-text-success;` **Correct.**

      .. code-block:: python

         i = 0
         while i < 3:
             print(i)
            i = i + 1

      :octicon:`x-circle;1em;sd-text-danger;` **Incorrect.** This results in an **IndentationError** because the indentation of ``line 3`` doesn't match the indentation of ``line 4``.



      .. code-block:: python

         while i < 3:
         print(i)
            i = i + 1

      :octicon:`x-circle;1em;sd-text-danger;` **Incorrect.** This results in an **IndentationError** because the line directly below where the ``while`` loop is defined (``line 2``) is not indented.

.. dropdown:: Question 2
   :open:
   :color: info
   :icon: question

   Will the following two programs produce the same output?

   **Program 1**

   .. code-block:: python

      i = 0
      while i < 3:
         print(i)
         i = i + 1
      print(i)

   **Program 2**

   .. code-block:: python

      i = 0
      while i < 3:
         print(i)
         i = i + 1
         print(i)

   .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Question 3
   :open:
   :color: info
   :icon: question

   What is wrong with the following code?

   .. code-block:: python

      i = 0
      while i < 3:
         print(i)
          print(2*i)
         i = i + 1

   A. The indentation on ``line 4`` does not match the indentation on ``line 3`` and ``line 5``.

   B. The iteration variable ``i`` has not been initialised.

   C. The indentation on ``line 5`` is incorrect. It should not be indented.

   D. This code will result in an infinite loop.

   .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Question 4
   :open:
   :color: info
   :icon: question

   Which of the following result in an infinite loop? *Select all that apply.*

   A. 

    .. code-block:: python

      i = 0
      while i < 3:
         print(i)
         i = 0

   B. 

    .. code-block:: python

      i = 0
      while i < 3:
         print(i)

   C. 

    .. code-block:: python

      i = 0
      while i < 3:
         print(i)
      i = i + 1

   D. 

    .. code-block:: python

      i = 0
      while i < 3:
         i = i + 1
         print(i)

   
   .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: Forever i
   :color: warning
   :icon: star

   You have been provided with some code. However, the code has some bugs!

   .. code-block:: python

      i = 0
      while i < 5:
         print('i')

   Debug this code!

   The output of the program should look like this:

   .. code-block:: text

      0
      1
      2
      3
      4

   .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: Count Up
   :color: warning
   :icon: star

   Write a program that reads in an integer, and counts from 0 up to that integer.

   **Example 1**

   .. code-block:: text

      Enter a number: 3
      0
      1
      2
      3

   **Example 2**

   .. code-block:: text

      Enter a number: 5
      0
      1
      2
      3
      4
      5

   .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: Baby Shark
   :color: warning
   :icon: star

   Write a program that asks the user for the number of baby sharks and then prints

   .. code-block:: text

      Baby shark, doo, doo, doo, doo, doo, doo
      the number of times specified. The program should finish by printing

   .. code-block:: text
      Baby shark!
   
   Here are some examples of how your program should run.

   **Example 1**

   .. code-block:: text

      How many baby sharks? 3
      Baby shark, doo, doo, doo, doo, doo, doo
      Baby shark, doo, doo, doo, doo, doo, doo
      Baby shark, doo, doo, doo, doo, doo, doo
      Baby shark!

   **Example 2**

   .. code-block:: text

      How many baby sharks? 8
      Baby shark, doo, doo, doo, doo, doo, doo
      Baby shark, doo, doo, doo, doo, doo, doo
      Baby shark, doo, doo, doo, doo, doo, doo
      Baby shark, doo, doo, doo, doo, doo, doo
      Baby shark, doo, doo, doo, doo, doo, doo
      Baby shark, doo, doo, doo, doo, doo, doo
      Baby shark, doo, doo, doo, doo, doo, doo
      Baby shark, doo, doo, doo, doo, doo, doo
      Baby shark!

   .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: Double Until 10000
   :color: warning
   :icon: star

   Write a program that starts with 1 and continues to double it until it hits a number greater than 10000. Your program should print each value that is under 10000.

   The first 5 lines of your output should look like this:

   .. code-block:: text

      1
      2
      4
      8
      16

   .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: Double Until...
   :color: warning
   :icon: star

   Write a program that asks the user for a number :math:`n`. Your program should then start with 1 and continue doubling it until it reaches :math:`n` or greater. Your program should then print out the number of times it had to double the starting number to reach :math:`n`.

   **Example 1:** :math:`1 \rightarrow 2 \rightarrow 4`

   .. code-block:: text

      n: 4
      You have to double 2 times to reach 4

   Starting with 1 you double it once and you get 2, then you double it again to get 4. So you have to double it 2 times to get 4. (Count the number of arrows in :math:`1 \rightarrow 2 \rightarrow 4`.)

   **Example 2:** :math:`1 \rightarrow 2 \rightarrow 4 \rightarrow 8 \rightarrow 16`

   .. code-block:: text

      n: 16
      You have to double 4 times to reach 16

   There are 4 arrows in :math:`1 \rightarrow 2 \rightarrow 4 \rightarrow 8 \rightarrow 16`, so you have to double 4 times to reach 16.


   **Example 1:** :math:`1 \rightarrow 2 \rightarrow 4 \rightarrow 8 \rightarrow 16 \rightarrow 32 \rightarrow 64`

   .. code-block:: text

      n: 50
      You have to double 6 times to reach 50

   This time there are 6 arrows, so you have to double 6 times to reach 50 or more.

   .. hint::

      While you're writing your program you might want to keep track of your doubled number by printing it out as you go. E.g. for example 1 your output might look like this:

      .. code-block:: text

         n: 4
         1
         2
         4
         You have to double 2 times to reach 4


      Once you're happy that your code works you can delete this print statement.

   .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*