Data Dictionaries
=================

Records are a very efficient way to store information, but without context as to what each entry refers to they can become useless. For example, what do the following records store?

.. code-block:: text

    Fiji, 0.9, 0.4, 0.1
    New Zealand, 5.2, 7.3, 5.4 
    Indonesia, 277.5, 8.6, 3.9
    Malaysia, 34.3, 7.6, 11.9
    Papua New Guinea, 10.33, 1.3, 1.7

Clearly it's something about countries, but without further information it can be almost impossible to work out what information is stored. 

To avoid this problem we typically create a **data dictionary** to describe the entries in the records. Data dictionaries can store all sorts of information, but typically they include: the name of the data, the type of the data stored, how much space is required to store the data, a brief description of the data and sometimes an example entry.

For example, here is a data dictionary for the above data:

.. list-table:: 
   :header-rows: 1

   * - Data item
     - Data type
     - Storage size
     - Description
     - Example
   * - CountryName
     - String
     - 40 bytes
     - Name of the country
     - Fiji
   * - Population 
     - Float
     - 8 bytes
     - Population of the country in millions
     - 0.9
   * - Exports
     - Float
     - 8 bytes
     - Australian exports to country in billions
     - 0.4
   * - Imports
     - Float
     - 8 bytes
     - Australian import to country in billions
     - 0.1

Depending on your dataset or the purpose of your data dictionary you may include more information. In addition to the columns shown in the table above you may also include:

* **Format for display:** How the data will be shown. E.g.

  * date: YYYY/MM/DD

  * date-time: DD/MM/YY hh:mm:ss
  
  * price: $XX.XX
  
  * number: XX

Not every cell in a data dictionary will necessarily be filled out as some might not be applicable. These can be filled with an N/A or left blank.

How Many Bytes Does My Data Take Up?
------------------------------------

There are a number of factors in the implementation of code (if the data is stored in a database) or file format (if the data is stored in a file) so typically there isn't a precise answer for how much space your data takes up. For example the decimal number 8 is 1000 in binary and the decimal number 5000 is 1001110001000 in binary.  However as a rule of thumb:

* Strings take up 1 byte per character

* Integers take up 4 bytes

* Floats take up 8 bytes

* Booleans take up 1 byte

* Date and time data types take up 4 bytes

Note that for strings you need to specify how many bytes your string could take up and should typically make it a little larger than you think is reasonable. For example, "Saint Vincent and the Grenadines" is the longest country name you are likely to encounter and has 32 characters, so 40 bytes is chosen for the size. However, sizes a little larger than this (e.g. 50 or 75 bytes) would also be fine choices, but choices larger than 200 bytes are likely excessive.

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What data type should be used to store a surname?

    A. String
    
    B. Integers

    C. Float

    D. Boolean

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **A.**

        Names should be stored as strings so you can store characters.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What data type should be used to store the number of plants in a garden?

    A. String
    
    B. Integers

    C. Float

    D. Boolean

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    What data type should be used to store whether a student has taken an exam?

    A. String
    
    B. Integers

    C. Float

    D. Boolean

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    Order the following variables from smallest to large in terms of the amount of memory required to store them. The variable requiring the least bytes should be at the top and the variable with the most bytes should be at the bottom.

    * A boolean which identifies whether an item has already been paid for or not.

    * A string containing the blurb of a book.

    * A float containing a person's weight in kilograms.

    * An integer which tells you the number of lollipops left in a jar. 

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*