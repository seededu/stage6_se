Sequential Files
================

A **sequential file** is a type of file where data is stored in sequence, i.e.
one record after another. This organisation is simple and commonly used for
storing and processing data that will be accessed in order, or in which the
access order isn't important.

Key Features
------------

- **Ordered Storage:** Data is written and stored in a specific sequence.
- **Linear access:** Data is accessed sequentially, i.e., starting from the
  beginning and moving through each record in turn.

For example, if the list library books in the previous challenge were saved to
a file, we could use a sequential file. Sequential files are often used for
things like logs and data backups.

Opening and Closing Files
-------------------------

We open and close files in Python using ``open`` and ``close``.

.. code-block:: python

    variable = open(filepath, mode)
    variable.close()

It's really important you remember to close your file at the end otherwise
there is a risk that your might accidentally corrupt your file and your data
won't be saved properly!

The ``mode`` you use when opening a file will depend on what you want to do
with the file. We use:

- ``'r'`` to read from the file
- ``'a'`` to append to the end of the file
- ``'w'`` which writes to the file by overwriting any contents the file
  previously had

Writing To A File
-----------------

We can write to a file using ``write``, which will write a single line to a
file. Note that we use ``\n`` at the end of each line to insert a **newline
character**. For example:

.. code-block:: python

    f = open("filename.txt", "a")

    f.write("New entry.\n")
    f.write("Second entry.\n")

    f.close()

Here we open the file using ``'a'`` so that we don't overwrite existing data.

Reading From A File
-------------------

We can read from a file a number of ways.

- ``readline`` allows you to read in one line at a time and gives you each line
  as a string
- ``readlines`` allows you to read in the remaining lines into a list of
  strings
- ``read`` reads the entire file into a string.

Consider the following files ``notes.txt``.

.. code-block:: text

    Beautiful is better than ugly.
    Explicit is better than implicit.
    Simple is better than complex.
    Complex is better than complicated.
    Flat is better than nested.

We can read from this line by line and print each line as we go. Let's just
read the first two lines.

.. code-block:: python

    f = open("/course/notes.txt", "r")
    line1 = f.readline()
    print(line1)
    line2 = f.readline()
    print(line2)
    f.close()

Note that there is an extra newline! This is because line 1 contains
``'Beautiful is better than ugly.\n'``, i.e. it has a newline character built
in. This means when it gets printed we end up with extra lines. This is the
same with the second line.

.. code-block:: python

    print("Beautiful is better than ugly.\n")
    print("Explicit is better than implicit.\n")

If we want to read multiple lines in at once we can do so with ``readlines``.
This will read all of the remaining lines in the file into a **list**.

.. code-block:: python

    f = open("/course/notes.txt", "r")
    lines = f.readlines()
    f.close()
    print(lines)

You can access the lines from this list in the usual way you work with lists.
For example, we can loop through all of the lines.

.. code-block:: python

    f = open("/course/notes.txt", "r")
    lines = f.readlines()
    f.close()

    for i in lines:
        print(i)

The final option we have is to use ``read``, which reads in the entire file as
a single string.

.. code-block:: python

    f = open("/course/notes.txt", "r")
    text = f.read()
    f.close()

    print(text)

With Open
---------

Often it can be easy to forget to ``close`` your file. So an alternative is to
use:

.. code-block:: text

    with open(filepath, mode) as variable:
        # code that executes while the file is open

Note that the code you run while the file is open is **indented**. At the end
of the indented code block the file will automatically close.

.. code-block:: python

    with open("/course/notes.txt", "r") as f:
        line1 = f.readline()
        remaining = f.readlines()

    print(line1)
    print(remaining)

Note that **readlines** only reads the remaining lines.

File Errors
-----------

If you try to open a file that does not exist you will get a
**FileNotFoundError**. In this example the file ``missing.txt`` doesn't exist.

.. code-block:: python

    f = open("missing.txt", "r")
    f.close()

If you open the file using the wrong mode, e.g. if you try to *read* a file in
*write* mode you will get an OSError.

.. code-block:: python

    with open("/course/notes.txt", "w") as f:
        line = f.readline()

Pseudocode
----------

Reading from files often appears in pseudocode. Keywords that are often
associated with file usage in pseudocode are:

- ``Open``, to open a file
- ``Read``, to read the contents of a file (this will be line by line for
  sequential files)
- ``Write``, to write information to a file
- ``Close``, to close the file at the end

You'll also see ``EOF``, which means **End of File**, which can be used to tell
you when you're at the end of the file. Here is an example of some pseudocode
that reads in lines from the file ``notes.txt``, stores each line in the
variable ``line`` and then displays each line.

.. code-block:: text

    Open notes.txt for input
    Read line from notes.txt
    WHILE not at EOF
        Display line
        Read line from notes.txt
    ENDWHILE
    Close notes.txt

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Which of the following opens ``secret_stuff.txt`` in Python so that you can read it? *Select all that apply.*

    A.

     .. code-block:: python

        with open('secret_stuff.txt', 'a') as f:

    B.

     .. code-block:: python

        with open('filename.txt', 'w') as f:

    C.

     .. code-block:: python

        with open('filename.txt', 'a') as f:

    D.

     .. code-block:: python

        with open('secret_stuff.txt', 'r') as f:

    E.

     .. code-block:: python

        f = open('secret_stuff.txt', 'r')

    F.

     .. code-block:: python

        f = open('secret_stuff.txt', 'w')

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        To read from the file ``secret_stuff.txt`` you need:

        * The correct filename secret_stuff.txt

        * To specify read mode using 'r'

        Both

        ``with open('secret_stuff.txt', 'r') as f:``

        and

        ``f = open('secret_stuff.txt', 'r')``

        will work, but if you use the second option don't forget to close the file with ``f.close()`` when you are done!

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What does the following code do?

    .. code-block:: python

        with open('file.txt', 'w') as f:
            f.write('ABC\n')

    A. *Reads* ``ABC\n``  from file

    B. *Writes* ``ABC\n`` to file

    C. It will results in a **FileNotFoundError**

    D. It will result in an **OSError**

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*
