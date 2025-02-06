Pseudocode
==========

We can write our control structures such as loops in a form using pseudocode
which allows us to write out a program without worrying about syntax. Sometimes
the symbols and keywords used in pseudocode will vary depending on the
convention you are using, but the idea is that pseudocode should be easy to
humans to read.

While loops
-----------

We write ``while`` loops using pseudocode as follows

.. code-block:: text

    WHILE condition is true
        process
    ENDWHILE

Here is an example

**Python code**

.. code-block:: python

    i = 0
    while i < 3:
        print(i)
        i = i + 1  # increment i by 1

**Pseudocode**

.. code-block:: text

    i = 0
    WHILE i < 3
        Display i
        i = i + 1
    ENDWHILE

Here is another example

**Python code**

.. code-block:: python

    colour = input("Enter a colour: ")

    while colour != "red":
        print("That is not red!")
        colour = input("Enter a colour: ")

**Pseudocode**

.. code-block:: text

    Display 'Enter a colour: '
    Get colour
    WHILE guess <> 'red'
        Display 'That is not red!'
        Display 'Enter a colour: '
        Get colour
    ENDWHILE

Note that ``<>`` can be used to indicate not equal and is equivalent to using
``!=``.

For loops
---------

We write ``for`` loops using pseudocode as follows

.. code-block:: text

    FOR variable = start TO finish STEP increment
        process
    NEXT variable

Here is an example

**Python code**

.. code-block:: python

    for i in range(3):
        print(i)

**Pseudocode**

.. code-block:: text

    FOR i = 0 TO 2 STEP 1
        Display i
    NEXT i

Not that for ``For`` loops in pseudocode, the loop *includes* the start and end
values. This means that ``FOR i = 0 TO 2 STEP 1`` means that ``i`` takes the
values 0, 1 and 2.

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Which of the following programs corresponds to the pseudocode shown below?

    .. code-block:: text

        FOR i = 10 TO 0 STEP -2
            Display i
        NEXT i

    A.

     .. code-block:: python

        for i in range(10):
            print(i)

    B.

     .. code-block:: python

        for i in range(10, 0):
            print(i)

    C.

     .. code-block:: python

        for i in range(10, 0, -2):
            print(i)

    D.

     .. code-block:: python

        for i in range(10, -1, -2):
            print(i)

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **D.**

        In pseudocode, the start and end values are *inclusive*. This means ``i`` will take the values 10, 8, 6, 4, 2 and 0 for ``FOR i = 10 TO 0 STEP -2``. The corresponding ``for`` loop in Python requires ``i`` starting at 0, going to but not including -1 in steps of 2 (up to and including -2) also works. The other options in the ``for`` loops presented here only go up to but do not include 0.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    Construct the pseudocode that corresponds to the following Python program.

    .. code-block:: python

        colours = ['red', 'yellow', 'pink', 'green', 'purple', 'orange', 'blue']

        i = 0
        while i < len(colours):
            print(colours[i])
            i = i + 1

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Which of the following best describes the purpose of the pseudocode algorithm given below.

    .. code-block:: text

        Create list a
        Create list b
        Create emplty list c

        FOR i = 0 TO Length(a) - 1 STEP 1
            Append a[i] to c
            NEXT i

        FOR i = 0 TO Length(b) -1 STEP 1
            Append b[i] to c
            NEXT i

        Display c

    A. It adds all the elements in the list ``a`` to the corresponding elements in the list ``b`` and stores the result in ``c``. E.g. if a is the list ``[7, 1, 3]`` and ``b`` is the list ``[-1, 5, 8]`` then ``c`` will be the list ``[6, 6, 11]``.


    B. It adds all the elements in the lists ``a`` and ``b`` and stores the result in ``c``. E.g. if ``a`` is the list ``[7, 1, 3]`` and ``b`` is the list ``[-1, 5, 8]`` then ``c`` will be the integer ``23``.


    C. It concatenates (joins) the lists ``a`` and ``b`` and stores the result in ``c``.  E.g. if ``a`` is the list ``[7, 1, 3]`` and ``b`` is the list ``[-1, 5, 8]`` then ``c`` will be the list ``[7, 1, 3, -1, 5, 8]``.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*
