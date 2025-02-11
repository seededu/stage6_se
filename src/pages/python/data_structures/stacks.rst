Stacks
======

A **stack** is a simple yet powerful data structure that follows the **LIFO**
principle: **Last In, First Out**. This means the last item added to the stack
is the first one to be removed, much like a stack of books on a desk. When you
add a book, you place it on top of the stack, and when you want a book you must
first pick up the top-most book from the stack.

Stacks see a lot of use in programming languages as the way computers execute
functions makes use of stacks. If you call too many functions you can run into
a stack overflow error (in Python this is called a **RecursionError**) which is
where the common code help discussion board Stack Overflow gets its name. They
are so key to programming languages that they date back to the birth of
computer science, first being introduced by Alan Turing in 1946.

Key Operations in a Stack
-------------------------

Stacks have two key operations:

- **Push:** Adds an item to the top of the stack.
- **Pop:** Removes and returns the item at the top of the stack.

In a stack these are the only ways to access elements. This is quite different
to arrays where you can simply alter a value in the middle without interacting
with the other elements.

There are two other operations which are often also implemented:

- **Peek:** Returns the item at the top of the stack without removing it.
- **Is Empty:** Checks if the stack is empty.

How They Work
-------------

Imagine you're stacking books on a table:

- When you add a book, it goes on top of the pile (Push).
- When you take a book, you grab the one on top (Pop).
- You can glance at the title of the top book without removing it (Peek).
- You can look to see if there is anything on the table (Is Empty).

In programming, stacks are often used in scenarios like undoing operations in
text editors.

By maintaining order and ensuring the most recently added element is accessed
first, stacks provide an efficient and logical way to manage certain types of
data.

Stacks in Python
----------------

Python has no native implementation of stacks, so if you wish to use stacks you
have to implement them yourself. We will do this in the next exercise using a
list to keep track of the elements in the stack, treating the end of the list
as the top of the stack.

If you want to add an element to the end of a list you can use ``.append()``:

.. exec_code::
    :language: python

    word_list = ['The', 'cat', 'in', 'the']
    word_list.append('hat')
    print(word_list)

If you want to remove an element from the end of a list you can use ``.pop()``:

.. exec_code::
    :language: python

    word_list = ['The', 'cat', 'in', 'the', 'hat']
    end_of_list = word_list.pop()
    print(end_of_list)
    print(word_list)

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Which of the following is **not** something you can do simply with a stack?

    A. Add an element to the top of a stack.

    B. Remove an element from the top of the stack.

    C. Check if the stack is empty.

    D. Change the value of an element in the middle of the stack.

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **D.**

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    Which of the following best describes the way data interact with a stack?

    A. First in, first out.

    B. Last in, first out.

    C. Last in, last out.

    D. First in, last out.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    What do you expect the output of the following program will be?

    .. code-block:: python

        colours = ['red', 'yellow', 'pink', 'green']
        print(colours.pop())

    A. red

    B. yellow

    C. pink

    D. green

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    Consider the following program.

    .. code-block:: python

        stack = ['Emu', 'Koala', 'Platapus']
        stack.pop()
        stack.append('Echidna')
        stack.append('Dingo')
        stack.pop()
        stack.append('Crocodile')
        stack.append('Quokka')
        stack.append('Kangaroo')
        stack.pop()
        stack.pop()

    What would the stack look like *after* the program has run?

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code challenge: Create A Stack
    :color: warning
    :icon: star

    Implement the ``push()``, ``pop()``, ``peek()`` and ``is_empty()`` functions in a module called ``stack``.

    **Push specification** (written in ``stack.py``)

    * name: ``push``

    * parameters: ``stack`` (``list``), value (``int`` or ``float`` or ``str``)

    * return: stack (``list``)

    **Pop specification** (written in ``stack.py``)

    * name: ``pop``

    * parameters: stack (``list``)

    * return: stack (``list``), value (``int`` or ``float`` or ``str``)

    ** Peek specification** (written in ``stack.py``)

    * name: ``peek``

    * parameters: stack (``list``)

    * return: value at top of stack (``int`` or ``float`` or ``str``)

    **Is Empty specification** (written in ``stack.py``)

    * name: ``is_empty``

    * parameters: stack (``list``)

    * return: whether the stack is empty, True if it is empty, False otherwise (``bool``)

    **Example** (running from ``main.py``)

    .. code-block:: python

        import stack

        fruits = []

        print(stack.is_empty(fruits))

        fruits = stack.push(fruits, 'Apricot')
        fruits = stack.push(fruits, 'Apple')

        print(fruits)

        print(stack.peek(fruits))

        fruits, item = stack.pop(fruits)
        print(item)

        print(fruits)

    .. code-block:: text

        True
        ['Apricot', 'Apple']
        Apple
        Apple
        ['Apricot']
