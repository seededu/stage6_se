Dictionaries
============

A **dictionary** (mostly unrelated to a data dictionary which we saw earlier)
is a versatile data structure that allows you to store data as **key-value
pairs**. It is similar to a real-world dictionary where you look up a word (the
key) to find its definition (the value).

Dictionaries are:

- **Structured with key-value pairs**. Each dictionary consists of a unique key
  and its associated values. Keys must be **unique**.
- **Unordered**. There is no innate order for the key-value pairs in a
  dictionary. In recent versions of Python dictionaries will maintain the order
  which the key-value pairs were inserted, but this is not true in other
  languages.
- **Mutable**. Unlike records, you can add, remove or modify entries after the
  dictionary is created.
- **Efficiently accessed**. Dictionaries are typically optimised for the fast
  retrieval based on their keys. In Python this is achieved by implementing
  them as a hash map, which is a data structure you'll learn about later.

Creating A Dictionary
---------------------

To create a dictionary in python you can use braces (i.e. ``{}``). Elements in
the dictionary are key value pairs where the key and pair are separated by a
colon ``:`` and elements are separated by a comma ``,``. The format of a
dictionary is as follows

.. code-block:: text

    dictionary = {key_1:value_1,
                    ...
                key_n:value_n}

Here's an example

.. code-block:: python

    wattle_high_school = {
        "Name": "Wattle High School",
        "Students": 84,
        "Motto": "Aliquam libero sit amet!",
    }

We can create an empty dictionary just using braces by themselves, i.e. ``{}``
the same way we can make an empty list with ``[]`` and an empty tuple with
``()``.

Accessing And Modifying A Dictionary
------------------------------------

Accessing values from a dictionary is easy! Simply provide a **key as an
index**:

.. exec_code::
    :language: python

    wattle_high_school = {'Name': 'Wattle High School',
                          'Students': 84,
                          'Motto': 'Aliquam libero sit amet!'}

    print(wattle_high_school['Students'])

To add or modify a key-value pair we access the element we want and overwrite
it.

.. code-block:: text

    dictionary[key] = value

.. exec_code::
    :language: python

    wattle_high_school = {'Name': 'Wattle High School',
                          'Students': 84,
                          'Motto': 'Aliquam libero sit amet!'}

    # Add a key-value pair
    wattle_high_school['Colours'] = 'Green and yellow'
    print(wattle_high_school['Colours'])

    # Modify a key-value pair
    wattle_high_school['Students'] = 88
    print(wattle_high_school['Students'])

To delete a key-value pair we use ``del`` and access the element we want to
delete.

.. code-block:: text

    del dictionary[key]

.. exec_code::
    :language: python

    wattle_high_school = {'Name': 'Wattle High School',
                          'Students': 84,
                          'Motto': 'Aliquam libero sit amet!'}

    # Remove a key-value pair
    del wattle_high_school['Motto']

    print(wattle_high_school)

Dictionaries are typically used in cases where you want to represent structured
data (like a record) but you want mutability or in cases in which you want to
track relationships between quantities (e.g. your contacts list).

There are also a few functions which allow you to iterate through the
dictionary.

- ``.keys()`` will give you a list of keys (in a random order)
- ``.values()`` will give you a list of values (in a random order)
- ``.items()`` will give you a list of key-value tuples (in a random order)

.. exec_code::
    :language: python

    wattle_high_school = {'Name': 'Wattle High School',
                          'Students': 84,
                          'Motto': 'Aliquam libero sit amet!'}
    print(wattle_high_school.keys())
    print(wattle_high_school.values())
    print(wattle_high_school.items())

You can use any of these to iterate through the dictionary.

**With .keys()**

.. exec_code::
    :language: python

    wattle_high_school = {'Name': 'Wattle High School',
                          'Students': 84,
                          'Motto': 'Aliquam libero sit amet!'}
    for key in wattle_high_school.keys(): # for key in wattle_high_school also works
        print(key)

**With .values()**

.. exec_code::
    :language: python

    wattle_high_school = {'Name': 'Wattle High School',
                          'Students': 84,
                          'Motto': 'Aliquam libero sit amet!'}
    for value in wattle_high_school.values():
        print(value)

**With .items()**

.. exec_code::
    :language: python

    wattle_high_school = {'Name': 'Wattle High School',
                         'Students': 84,
                         'Motto': 'Aliquam libero sit amet!'}
    for key, value in wattle_high_school.items():
        print('{}: {}'.format(key, value))

Dictionary Errors
-----------------

If you try to access a dictionary element using a key that does not exist, you
will get a **KeyError**.

.. code-block:: python

    wattle_high_school = {
        "Name": "Wattle High School",
        "Students": 84,
        "Motto": "Aliquam libero sit amet!",
    }
    print(wattle_high_school["Address"])

.. code-block:: text

    Traceback (most recent call last):
        File "/home/main.py", line 4, in <module>
            print(wattle_high_school['Address'])
                ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
        KeyError: 'Address'

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What would be the output of the following program?

    .. code-block:: python

        schedule = {'start': '9:00am',
            'morning tea': '10:15am',
            'lunch': '12:50pm',
            'end': '3:25pm'}
        print(schedule['lunch'])

    A.

     .. code-block:: python


        {'start': '9:00am', 'morning tea': '10:15am', 'lunch': '12:50pm', 'end': '3:25pm'}

    B.

     .. code-block:: python

        {'lunch': '12:50pm'}

    C.

     .. code-block:: python

        12:50pm

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **C.**

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What is the state of the dictionary after the following code:

    .. code-block:: python

        fruits = {}

        fruits['Avocado'] = 'Tasty'
        fruits['Strawberry'] = 'Extra tasty'
        fruits['Kiwifruit'] = 'Green'

        fruits['Strawberry'] = 'Sometimes mouldy, makes you sick'

    A.

     .. code-block:: python


        {'Avocado': 'Tasty', 'Strawberry': 'Sometimes mouldy, makes you sick', 'Kiwifruit': 'Green'}

    B.

     .. code-block:: python

        {'Avocado': 'Tasty', 'Strawberry': 'Extra tasty', 'Kiwifruit': 'Green'}

    C.

     .. code-block:: python

        {'Avocado': 'Tasty', 'Strawberry': 'Extra tasty', 'Kiwifruit': 'Tasty'}

    D.

     .. code-block:: python

        {'Avocado': 'Green', 'Strawberry': 'Red', 'Kiwifruit': 'Green'}

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Consider the following code:

    .. code-block:: python

        dictionary = {1: 'Not prime', 2: 'Prime', 3: 'Prime', 4: 'Not prime', 5: 'Prime'}
        print(dictionary[3])

    What will be the output?

    A. Prime

    B. Not prime

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    What is the state of the dictionary after the following code:

    .. code-block:: python

        dictionary = {1: 'Not prime', 2: 'Prime', 3: 'Prime', 4: 'Not prime', 5: 'Prime'}
        del dictionary[4]

    A.

     .. code-block:: python

        {2: 'Prime', 3: 'Prime', 4: 'Not prime', 5: 'Prime'}

    B.

     .. code-block:: python

        {1: 'Not prime', 3: 'Prime', 4: 'Not prime', 5: 'Prime'}

    C.

     .. code-block:: python

        {1: 'Not prime', 2: 'Prime', 4: 'Not prime', 5: 'Prime'}
    D.

     .. code-block:: python

        {1: 'Not prime', 2: 'Prime', 3: 'Prime', 5: 'Prime'}

    E.

     .. code-block:: python

        {1: 'Not prime', 2: 'Prime', 3: 'Prime', 4: 'Not prime'}

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code challenge: Price Check
    :color: warning
    :icon: star

    Write some code to check the price of products in the supermarket.

    The prices of each item have been stored in a dictionary called ``products``.

    Your script must:

    1. Ask for the name of a product

    2. Return the price

    **Example 1**

    .. code-block:: text

        Enter an item name: Milk
        The cost of Milk is $1.99.


    **Example 2**

    .. code-block:: text

        Enter an item name: Oranges
        The cost of Oranges is $2.48.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: Grades
    :color: warning
    :icon: star

    Your teacher has asked you to write some code to make her marking easier.

    She wants a python script that collects student grades. The script must:

    1. Ask for a student ID

    2. If no student ID is provided, terminate, continuing to step 5.

    3. Ask for the associated grade

    4. Store the student name and grade as a key-value pair in a dictionary called ``data``

    5. Print out the number of grades entered

    6. Print out the final dictionary

    Student IDs are strings and grades are integers.

    **Example 1**

    .. code-block:: text

        Student ID: 1234
        Grade: 75
        Student ID: 8976
        Grade: 82
        Student ID:
        2 grades entered
        {'1234': '75', '8976': '82'}


    **Example 2**

    .. code-block:: text

        Student ID: 3584
        Grade: 65
        Student ID: 4585
        Grade: 84
        Student ID: 1365
        Grade: 74
        Student ID: 3696
        Grade: 91
        Student ID:
        4 grades entered
        {'3584': '65', '4585': '84', '1365': '74', '3696': '91'}

    .. hint:: You can use ``len`` to check the number of items in a dictionary.

        .. exec_code::
            :language: python

            fruits = {'Avocado': 'Tasty',
                      'Strawberry': 'Extra tasty'}
            print(len(fruits))

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: Update Grades
    :color: warning
    :icon: star

    You have been provided with a dictionary of students and grades.

    A remarking of the exams was done, so some of the marks require updating.

    Write some Python code that:

    1. Asks for a student ID.

    2. If no student ID is provided then terminate and proceed to step 6. Otherwise:

    3. Checks to see if the student ID exists in the dictionary. If the student does not exist in the dictionary, prints *Student does not exist. Terminating* and you should stop reading user input and proceed to step 6.

    4. Asks for the associated grade.

    5. Finds the corresponding key-value pair, and updates the grade of the student.

    6. Print out the updated data dictionary.

    Student IDs are strings and grades are integers.

    **Example 1**

    .. code-block:: text

        Student ID: 1234
        Grade: 89
        Student ID: 8976
        Grade: 80
        Student ID:
        {'1234': 89, '8976': 80, '4366': 62, '9832': 81, '8758': 90}


    **Example 2**

    .. code-block:: text

        Student ID: 4366
        Grade: 65
        Student ID: 5847
        Student does not exist. Terminating
        {'1234': 75, '8976': 89, '4366': 65, '9832': 81, '8758': 90}

    .. hint:: To check if an item is in a list of values, you can use the ``in`` and ``not in`` keywords. For example:

        .. exec_code::
            :language: python

            nums = [6, 0, 3, -2, 2]

            print(6 in nums)
            print(10 not in nums)

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: Dicrionaries Combined
    :color: warning
    :icon: star

    You have been provided with two existing dictionaries.

    Write a Python program to combine these two dictionaries so that the value in each key-value pair is a list containing the values from both dictionaries. The value from dict1 should be first in the list.

    Print out the combined dictionary.

    .. info:: You can assume each dictionary has the same keys.

    .. code-block:: python

        dict1 = {'Roger' : 8,
                 'Rafael' : 3,
                 'Andy' : 3,
                 'Novak' : 8}

        dict2 = {'Roger' : -2,
                 'Rafael' : 13,
                 'Andy' : 0,
                 'Novak' : 3}

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*
