Multi-Dimensional Arrays
========================

While a **one-dimensional array** is like a list of numbers arranged in a
single row, **multi-dimensional arrays** allow us to represent more complex
structures, like tables, grids, or even 3D spaces.

What are Multi-Dimensional Arrays?
----------------------------------

Multi-dimensional arrays, or lists of lists in Python, can be a little tricky
to get your head around. Using our chest of drawers analogy, it's like there
being another chest of drawers inside every drawer. Each "dimension" adds
another layer of organisation:

- **1D Array:** A simple row of numbers

.. code-block:: python

    array = [1, 2, 3, 4]

- **2D Array:** A table with rows and columns

.. code-block:: python

    array = [[1, 2], [3, 4]]

- **3D Array:** Tables with 3 axes, or tables stacked on top of each other,
  like pages in a book or squares layered into a cube (blue outer brackets,
  green inner brackets, brown innermost brackets)

.. code-block:: python

    array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10], [11, 12]], [[13, 14], [15, 16]]]

Note that we often add lines in to help us visualise our arrays, but Python
doesn't care whether the extra lines are there or now. For example, the
following arrays are equivalent.

.. code-block:: python

    array = [[1, 2], [3, 4]]

.. code-block:: python

    array = [[1, 2], [3, 4]]

2D arrays are used for things like tables, spreadsheets or black-and-white
images. 3D arrays are used for things like black-and-white video, colour images
(which combine a red, green and blue image) or simulations in physics and
engineering. 4D arrays can be used for things like colour video (like colour
images but with a time component).

Accessing Elements in Multi-Dimensional Arrays
----------------------------------------------

To access elements in a multi-dimensional array you can use nested arrays.
Let's first see how a 2D array works. Without the white space, we can write out
a 2D array like this:

.. code-block:: python

    array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

Let's index the first element of this array.

.. code-block:: python

    #       [element 0, element 1, element 2]
    array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    print(array[0])

The first element of this array is another array. If we want to index that
array we provide another index. Since ``array[0]`` gives us ``[1, 2, 3]``, to
obtain the second value of this array we use index ``[1]``.

.. code-block:: python

    array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    print(array[0][1])

In a 2D case, another way you can think of this is that you index the row,
followed by the column. For this example we'll add whitespace to our
formatting:

.. exec_code::
    :language: python

    array = [[1, 2, 3],
             [4, 5, 6],
             [7, 8, 9]]

    print('Row 0, Column 1:', array[0][1])

**Remember that Python indexing starts at 0!**

As you add more dimensions to the array, you can keep adding more and more
indices. Let's take a look at this example

.. exec_code::
    :language: python

    array = [[[1, 2, 3, 4],
              [5, 6, 7, 8]], # element 0

             [[9, 10, 11, 12],
              [13, 14, 15, 16]], # element 1

             [[17, 18, 19, 20],
              [21, 22, 23, 24]]] # element 2

    print(array[2])
    print(array[2][0])
    print(array[2][0][3])

``array[2]`` will give us the *third* element stored in array, i.e. element 2,
which is the 2D array

.. code-block:: text

    [[17, 18, 19, 20],
     [21, 22, 23, 24]]

We can then obtain the *first* element stored in this array i.e. element 0
``array[2][0]``, which is the first row. We get

.. code-block:: text

    [17, 18, 19, 20]

Finally we get the *fourth* element stored in this array, i.e. element 3
``array[2][0][3]``. We get

.. code-block:: text

    20

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    In the following array:

    .. code-block:: python

        array = [[5, 3, 2, 1],
                 [6, 4, 10, 12],
                 [11, 8, 7, 9],
                 [17, 13, 18, 20],
                 [15, 14, 19, 16]]

    Which number will be output from ``print(array[2][3])``?

    A. 4

    B. 7

    C. 8

    D. 9

    E. 10

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **D.**

        ``array[2]`` gets us the *third* row, i.e. ``[11, 8, 7, 9]`` and ``array[2][3]`` gets us the *fourth* column of the third row, which is 9.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    In the following array:

    .. code-block:: python

        array = [[5, 3, 2, 1],
                 [6, 4, 10, 12],
                 [11, 8, 7, 9],
                 [17, 13, 18, 20],
                 [15, 14, 19, 16]]

    Which answer will access the element containing 13?

    A. ``array[0][2]``

    B. ``array[3][4]``

    C. ``array[4][2]``

    D. ``array[3][1]``

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    In the following array:

    .. code-block:: python

        array = [[5, 3, 2, 1],
                 [6, 4, 10, 12],
                 [11, 8, 7, 9],
                 [17, 13, 18, 20],
                 [15, 14, 19, 16]]

    Which number will be output from ``print(array[4][0])``?

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    In the following array:

    .. code-block:: python

        array = [[[1, 2, 3, 4],
                  [5, 6, 7, 8]],

                 [[9, 10, 11, 12],
                  [13, 14, 15, 16]],

                 [[17, 18, 19, 20],
                  [21, 22, 23, 24]]]

    Which number will be output from ``print(array[0, 1, 2])``?

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code challenge: Use An Array To Store Temperature Values
    :color: warning
    :icon: star

    Create a 1D array to store the monthly maximum temperature in Sydney each month.

    .. image:: img/temperature.png
        :width: 400
        :align: center

    Your array should contain the following values:

    * 26

    * 26

    * 25

    * 23

    * 20

    * 17

    * 17

    * 18

    * 21

    * 22

    * 24

    * 25

    Print you array.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code challenge: Use An Array To Store An Image
    :color: warning
    :icon: star

    Create a 2D to represent the following image.

    .. image:: img/bee.png
        :width: 200
        :align: center

    Use 0 to represent a white pixel and a 1 to represent a black pixel. We have provided you a pixel grid of 0's to start with. Print your array.

    .. code-block:: text

        array = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*
