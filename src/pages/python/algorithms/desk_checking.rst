Desk Checking
=============

Desk checking is a way of manually verifying that an algorithm works. First we
start by identifying all variables in the algorithm then we create a table
where each column corresponds to each variable. For each line of the program we
check the value of each variable. When starting off it can be helpful to align
each row of the table with each line of the program. If the program is meant to
output (display/return) some value then we may also keep track of the output.

Example 1
---------

Consider the following algorithm. The goal is to swap the values in the
variables ``x`` and ``y``. *We've included the line numbers in the example
below*.

.. code-block:: text

    1    BEGIN swap
    2        Get x
    3        Get y
    4        x = y
    5        y = x
    6    END swap

**Perform a desk check on this algorithm using x = 3 and y = 9 as inputs**.
Note that if the program is successful then at the end of the program ``x = 9``
and ``y = 3``.

**Setting up the table**

1. Identify the variables. In this case there are two variables ``x`` and ``y``
   so our table will have two columns, one for each variable.
2. Identify if the program has outputs. In this case there are no outputs.

Here's what our table looks like:

.. list-table::
    :header-rows: 1

    - - :math:`x`
      - :math:`y`
    - - |
      - |
    - - |
      - |
    - - |
      - |
    - - |
      - |
    - - |
      - |
    - - |
      - |

**Filling in the table**

What we'll do is go through the algorithm line by line and complete the table.
We only fill values in the table if the variable has been updated by the
algorithm

**lines 1-2:** We update ``x`` with our input value 3

.. code-block:: text

    1    BEGIN swap
    2        Get x

.. list-table::
    :header-rows: 1

    - - :math:`x`
      - :math:`y`
    - - 3
      - |
    - - |
      - |
    - - |
      - |
    - - |
      - |
    - - |
      - |
    - - |
      - |

**line 3:** We update ``x`` with our input value 9

.. code-block:: text

    3        Get y

.. list-table::
    :header-rows: 1

    - - :math:`x`
      - :math:`y`
    - - 3
      - |
    - - |
      - 9
    - - |
      - |
    - - |
      - |
    - - |
      - |
    - - |
      - |

**line 4:** We only update ``x``

.. code-block:: text

    4        x = y

.. list-table::
    :header-rows: 1

    - - :math:`x`
      - :math:`y`
    - - 3
      - |
    - - |
      - 9
    - - 9
      - |
    - - |
      - |
    - - |
      - |
    - - |
      - |

**lines 5-6:** We only update ``y``

.. code-block:: text

    5        y = x
    6    END swap

.. list-table::
    :header-rows: 1

    - - :math:`x`
      - :math:`y`
    - - 3
      - |
    - - |
      - 9
    - - 9
      - |
    - - |
      - 9
    - - |
      - |
    - - |
      - |

As you can see, at the end of this algorithm we end up with ``x = 9`` and ``y =
9`` where we actually wanted ``x = 9`` and ``y = 3``. We can verify that this
algorithm doesn't work by also running the code!

.. exec_code::
    :language: python

    x = 3
    y = 9
    x = y
    y = x
    print(x)
    print(y)

Example 2
---------

Consider the following algorithm. The purpose of the algorithm is to keep
reading in integers from the user. If the integer is positive the algorithm
displays *Stay positive!* and if the integer is negative the algorithm displays
*Don't be negative!*. The program should exit if the user enters the integer 0.

**Perform a desk check on this algorithm using -3, -1, 4, -3 0 as your input.**

.. code-block:: text

     1     BEGIN
     2         Get n
     3         WHILE n is not 0
     4             IF n > 0
     5                 Display "Stay positive!"
     6             ELSE
     7                 Display "Don't be negative!"
     8                 Get n
     9             END IF
    10        END WHILE
    11    END

**Setting up the table**

- Identify the variables. In this case there is only one variable ``n`` so our
  table will have a column for ``n``.
- Identify if the program has outputs. In this case there are outputs so we'll
  have another column for our outputs.

Here's what our table looks like:

.. list-table::
    :header-rows: 1

    - - n
      - Output
    - - |
      - |
    - - |
      - |
    - - |
      - |
    - - |
      - |

**Filling in the table**

**lines 1-2:** We update ``n`` with our first input value -3

.. code-block:: text

    1     BEGIN
    2         Get n

.. list-table::
    :header-rows: 1

    - - n
      - Output
    - - -3
      - |
    - - |
      - |
    - - |
      - |
    - - |
      - |

**lines 3 - 10:** First we check that ``n`` is not 0, which it is not, so we
enter the loop. Then we check if ``n > 0``. It is not so we enter the ``ELSE``
branch.

.. code-block:: text

     3         WHILE n is not 0
     4             IF n > 0
     5                 Display "Stay positive!"
     6             ELSE
     7                 Display "Don't be negative!"
     8                 Get n
     9             END IF
    10        END WHILE

Inside the ``ELSE`` branch we see that we display (i.e. output) *Don't be
negative!*.

.. code-block:: text

    7                 Display "Don't be negative!"

.. list-table::
    :header-rows: 1

    - - n
      - Output
    - - -3
      - |
    - - |
      - Don't be negative!
    - - |
      - |
    - - |
      - |

Then we update ``n`` with our second input value of -1.

.. code-block:: text

    8                 Get n

.. list-table::
    :header-rows: 1

    - - n
      - Output
    - - -3
      - |
    - - |
      - Don't be negative!
    - - -1
      - |
    - - |
      - |

Now we've reached the end of the ``IF`` statement and ``WHILE`` loop.

.. code-block:: text

     9             END IF
    10        END WHILE

So we start again back at the top of the ``WHILE`` loop!

**lines 3 - 10:** First we check that ``n`` is not 0, which it is not, so we
enter the loop. Then we check if ``n > 0``. It is not so we enter the ``ELSE``
branch.

.. code-block:: text

     3         WHILE n is not 0
     4             IF n > 0
     5                 Display "Stay positive!"
     6             ELSE
     7                 Display "Don't be negative!"
     8                 Get n
     9             END IF
    10        END WHILE

Inside the ``ELSE`` branch we see that we display (i.e. output) *Don't be
negative!*.

.. code-block:: text

    7                 Display "Don't be negative!"

.. list-table::
    :header-rows: 1

    - - n
      - Output
    - - -3
      - |
    - - |
      - Don't be negative!
    - - -1
      - |
    - - |
      - Don't be negative!

Then we update ``n`` with our second input value of 4.

.. code-block:: text

    8                 Get n

.. list-table::
    :header-rows: 1

    - - n
      - Output
    - - -3
      - |
    - - |
      - Don't be negative!
    - - -1
      - |
    - - |
      - Don't be negative!
    - - 4
      - |

Again we've reached the end of the ``IF`` statement and ``WHILE`` loop.

.. code-block:: text

    9             END IF
    10        END WHILE

So we start again back at the top of the WHILE loop!

**lines 3 - 10:** First we check that ``n`` is not 0, which it is not, so we
enter the loop. Then we check if ``n > 0``. This time it is, so we enter the
``IF`` branch.

.. code-block:: text

     3         WHILE n is not 0
     4             IF n > 0
     5                 Display "Stay positive!"
     6             ELSE
     7                 Display "Don't be negative!"
     8                 Get n
     9             END IF
    10        END WHILE

Inside the ``IF`` branch we see that we display (i.e. output) *Stay positive!*.

.. code-block:: text

    5                 Display "Stay positive!"

.. list-table::
    :header-rows: 1

    - - n
      - Output
    - - -3
      - |
    - - |
      - Don't be negative!
    - - -1
      - |
    - - |
      - Don't be negative!
    - - 4
      - |
    - - |
      - Stay positive!

Again we've now reached the end of the ``IF`` statement and ``WHILE`` loop.

.. code-block:: text

    6             ELSE
    7                 Display "Don't be negative!"
    8                 Get n
    9             END IF
    10        END WHILE

So we start again back at the top of the ``WHILE`` loop!

**lines 3 - 10:** First we check that ``n`` is not 0, which it is not, so we
enter the loop. Then we check if ``n > 0``. This time it is, so we enter the
``IF`` branch.

.. code-block:: text

     3         WHILE n is not 0
     4             IF n > 0
     5                 Display "Stay positive!"
     6             ELSE
     7                 Display "Don't be negative!"
     8                 Get n
     9             END IF
    10        END WHILE

Inside the ``IF`` branch we see that we display (i.e. output) *Stay positive!*.

.. code-block:: text

    5                 Display "Stay positive!"

.. list-table::
    :header-rows: 1

    - - n
      - Output
    - - -3
      - |
    - - |
      - Don't be negative!
    - - -1
      - |
    - - |
      - Don't be negative!
    - - 4
      - |
    - - |
      - Stay positive!
    - - |
      - Stay positive!

Again we've now reached the end of the ``IF`` statement and ``WHILE`` loop.

But hang on... We haven't updated ``n``. This program is going to keep
displaying *Stay positive!*. Our table will look like this:

.. list-table::
    :header-rows: 1

    - - n
      - Output
    - - -3
      - |
    - - |
      - Don't be negative!
    - - -1
      - |
    - - |
      - Don't be negative!
    - - 4
      - |
    - - |
      - Stay positive!
    - - |
      - Stay positive!
    - - |
      - Stay positive!
    - - |
      - Stay positive!
    - - |
      - :math:`\vdots`

We've entered into an infinite loop!
