Booleans
========

A Boolean is another variable type (like integers, floats and string). A Boolean can be
a ``True`` or a ``False``.

.. exec_code::
    :language: python

    x = True
    y = False

    print(type(x))

``True`` and ``False`` are keywords. They need to be capitalised. The following code
will return a NameError. This is because Python doesn't recognise true as a keyword
(note it hasn't turned purple). The program is looking for ``true`` to be defined
somewhere in the code, but it can't find it.

.. code-block:: python

    x = true

Computers store boolean values as 0's or 1's.

- 0 for False
- 1 for True

This means you can convert between booleans and integers. Have a look at the examples
below.

.. exec_code::
    :language: python

    print(int(True))

    print(bool(0))

Booleans are also often used in datasets to represent categorical data with two options.
Here is an example of a student attendance sheet.

======= ========
Name    Attended
======= ========
Alice   1
Bob     0
Charlie 1
David   1
======= ========

1 indicates the student went to class and 0 indicates the student did not attend class.
