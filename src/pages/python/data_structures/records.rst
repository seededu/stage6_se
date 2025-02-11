Records
=======

A **record** is a data structure that allows you to store a fixed number of related pieces of information together as a single entity. Each piece of information in a record is called a **field**, and every field typically represents a specific attribute or property of the entity being described and fields do not have to have the same type (unlike arrays).

Think of a record like a form you might fill out at a doctor's office. The form contains fields such as your name, age, phone number, and address. All these fields together describe one entity—you. Similarly, in programming, a record groups together related data into a structured format, making it easier to organise and work with.

Records in Python
-----------------

In Python, a simple and efficient way to represent records is by using **tuples**. We can create a tuple the same way we create a list but a tuple uses parentheses ``()``. A tuple is an immutable sequence of elements (meaning that once the tuple is created it can't be modified), and its fixed structure makes it a great choice for representing records with a defined set of fields. Each position in the tuple corresponds to a specific field.

For example, suppose you want to represent a student record with their name, age, and the subjects they are taking. You can use a tuple like this:

.. code-block:: python

    student = ('Alex', 17, ['English', 'Maths', 'Software Engineering', 'Drama', 'Textiles'])

Here:

* The first field ``'Alex'`` represents the student's name.

* The second field ``17`` represents their age.

* The third field ``['English', 'Maths', 'Software Engineering', 'Drama', 'Textiles']`` represents the subjects they are taking.

To get values out of a tuple in Python we can index them the same as we do lists:

.. code-block:: python

    student = ('Jordan', 17, ['English', 'Maths', 'Software Engineering', 'Drama', 'Textiles'])

    # Accesses name
    print(student[0])

    # Accesses age
    print(student[1])

    # Accesses subjects
    print(student[2])

    # Accesses first subject
    print(student[2][0])

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    How many elements can a record have?

    A. 1

    B. 2-10

    C. 10-100

    D. As many as you want

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **D.**

        Records can have any number of elements, but all records of the same type must have the same number of elements.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    Which of the following are a key feature of records?

    A. Curly brackets, i.e. ``{}``

    B. Immutability

    C. Containing at least one string

    D. All records must be unique

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    How do you get the 14 out of this record:

     .. code-block:: python

        record = (13, 14, 15, 16)

    A. ``record[-1]``

    B. ``record[0]``

    C. ``record[1]``

    D. ``record[2]``

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code challenge: Catalogue A Library
    :color: warning
    :icon: star

    Paige, a librarian, contacts you and asks you to write some code capable of cataloguing every book in their library. Paige asks that you store each book as a record since the details should never change and store the records as a list which may be updated as books are added or removed from the library.

    Here is an example of a book

    .. code-block:: text

        harry_potter = (9780747532699, "Harry Potter and the Philosopher's Stone", 'Fiction - Children')

    Your task is to write one function which adds a record to the list and another which removes a record from the list, as specified below. These functions should be written in ``library.py``.

    **Add_book specification** (written in ``library.py``)

    * name: ``add_book``

    * parameters: books (``list``), ISBN (``int``), title (``str``), genre (``str``)

    * return: list of records with the new book added (``list``)

    **Remove_book specification** (written in ``library.py``)

    * name: ``remove_book``

    * parameters: books (``list``), ISBN (``int``), title (``str``), genre (``str``)

    * return: list of books with the book matching the provided details removed (``list``)

    **Example** (running from ``main.py``)

    .. code-block:: python

        import library

        books = [(9780007348695, 'The Cat In The Hat', 'Fiction - Children'),
                (9780747532699, "Harry Potter and the Philosopher's Stone", 'Fiction - Children')]

        books = library.add_book(books, 9780520201798, 'Frankenstein', 'Fiction - Horror')
        books = library.remove_book(books, 9780007348695, 'The Cat In The Hat', 'Fiction - Children')
        print(books)

    .. code-block:: text

        [(9780747532699, "Harry Potter and the Philosopher's Stone", 'Fiction - Children'), (9780520201798, 'Frankenstein', 'Fiction - Horror')]

    .. hint:: You can delete an element from a list using ``.remove(item).`` Here is an example

        .. exec_code::
            :language: python

            animals = ['lion', 'caterpillar', 'elephant', 'bee']
            animals.remove('elephant') 
            print(animals)
