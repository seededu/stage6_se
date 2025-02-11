Draw a Box: Algorithm
=====================

Problem Description
-------------------

Write a program that asks the user for an integer :math:`n` and then prints a
square box where the edges of the box are of length :math:`n` (as shown in the
examples below).

**Example 1:** :math:`n=1`

.. code-block:: text

    n: 1
    + - +
    |   |
    + - +

**Example 2:** :math:`n=2`

.. code-block:: text

    n: 2
    + - - +
    |     |
    |     |
    + - - +

**Example 3:** :math:`n=5`

.. code-block:: text

    n: 5
    + - - - - - +
    |           |
    |           |
    |           |
    |           |
    |           |
    + - - - - - +

Note:

- There is a space between each ``-`` in the top and bottom edge. This means
  there are :math:`n` dashes and :math:`n+1` spaces between each ``+`` on the
  top and bottom edges, i.e. :math:`2n+1` characters.
- There are :math:`2n+1` spaces between each ``|`` for the vertical edges.

Class/Homework Exercises
------------------------

What you need:

- Blank A4 or A3 paper - a couple of sheets per group
- Pens - one for each student

Using pen and paper complete the following questions. If this is being
completed as a class activity it is recommended that students work in groups.

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    First let's focus on drawing the top and bottom edges of the squares. Think about how you would create a subroutine called ``horizontal(n)`` which will display a horizontal edge. This subroutine should be a **procedure**, which means it's a function that doesn't have a return value.

    **Example:** :math:`n=1`

    .. code-block:: text

        + - +

    **Example:** :math:`n=5`

    .. code-block:: text

        + - - - - - +

    Draw a flowchart to represent this subroutine. Your answer must use iteration.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    Write the pseudocode that corresponds to the flowchart you drew for Question 1.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Now let's focus on drawing the side edges of the square. For each row in the square there are :math:`2n+1` spaces between each ``|``. Think about how you would create a subroutine called ``vertical(n)`` which will display one row for the vertical edges. This subroutine should be a procedure, which means it's a function that doesn't have a return value.

    **Example:** :math:`n = 1`, 3 spaces between each ``|``

    .. code-block:: text

        |   |

    **Example:** :math:`n = 5`, 11 spaces between each ``|``

    .. code-block:: text

        |           |

    Draw a flowchart to represent this subroutine. Your answer must use **iteration**.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    Write the pseudocode that corresponds to the flowchart you drew for Question 3.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 5
    :open:
    :color: info
    :icon: question

    Now let's put it all together. Think about how you would write the main program, which uses ``horizontal(n)`` and ``vertical(n)`` to  read in a number :math:`n` from the user and then display a box of the appropriate size.

    **Example 1:** :math:`n=1`

    .. code-block:: text

        n: 1
        + - +
        |   |
        + - +

    **Example 2:** :math:`n=2`

    .. code-block:: text

        n: 2
        + - - +
        |     |
        |     |
        + - - +


    **Example 3:** :math:`n=5`

    .. code-block:: text

        n: 5
        + - - - - - +
        |           |
        |           |
        |           |
        |           |
        |           |
        + - - - - - +

    Draw a flowchart to represent your main program. Your answer must call ``horizontal(n)`` and ``vertical(n)``.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 6
    :open:
    :color: info
    :icon: question

    Write the pseudocode that corresponds to the flowchart you drew for Question 5.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 7
    :open:
    :color: info
    :icon: question

    Consider the entire algorithm you have put together to to solve the *Draw a Box* problem. Which of the following are used in the algorithm? *Select all that apply*.

    A. Sequence

    B. Selection

    C. Iteration

    D. Subroutine

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*
