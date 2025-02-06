The Hexadecimal System
======================

The hexadecimal system works in base 16. This means it uses the digits 0-9 and the
letters a-f.

.. list-table::
    :header-rows: 1

    - - :math:`0`
      - :math:`1`
      - :math:`2`
      - :math:`3`
      - :math:`4`
      - :math:`5`
      - :math:`6`
      - :math:`7`
      - :math:`8`
      - :math:`9`
      - :math:`10`
      - :math:`11`
      - :math:`12`
      - :math:`13`
      - :math:`14`
      - :math:`15`
    - - :math:`0`
      - :math:`1`
      - :math:`2`
      - :math:`3`
      - :math:`4`
      - :math:`5`
      - :math:`6`
      - :math:`7`
      - :math:`8`
      - :math:`9`
      - a
      - b
      - c
      - d
      - e
      - f

        Conversion between the hexadecimal system and decimal system works much the same
        way as conversions between the binary and decimal systems.

Hexadecimal to Decimal
----------------------

**Example**

Let's take the number 6d as an example and fill it into the table below.

.. list-table::
    :header-rows: 1

    - - |   :math:`16^1`
        |   :math:`16`
      - |   :math:`16^0`
        |   :math:`1`
    - - **6**
      - **d**

The way we interpret the hexadecimal number 6d is

:math:`(\textbf{6}\times16^1) + (\textbf{d}\times16^0) = \textbf{109}`

or alternatively

:math:`(\textbf{6}\times16) + (\textbf{13}\times1) = \textbf{109}`

**Example**

Let's take the number 2f9a as an example and fill it into the table below.

.. list-table::
    :header-rows: 1

    - - |   :math:`16^3`
        |   :math:`4096`
      - |   :math:`16^2`
        |   :math:`256`
      - |   :math:`16^1`
        |   :math:`16`
      - |   :math:`16^0`
        |   :math:`1`
    - - **2**
      - **f**
      - **9**
      - **a**

The way we interpret the hexadecimal number 2f9a is

:math:`(\textbf{2}\times16^3) + (\textbf{f}\times16^2) + (\textbf{9}\times16^1) +
(\textbf{a}\times16^0) = \textbf{12186}`

or alternatively

:math:`(\textbf{2}\times4096) + (\textbf{15}\times256) + (\textbf{9}\times16) +
(\textbf{10}\times1) = \textbf{12186}`

What you may have noticed is that you can represented much larger numbers with fewer
characters in the hexadecimal system compared to the binary system.

Applications: Colours
---------------------

While computers don't 'think' using the hexadecimal system, programmers often use it
because it's easier for humans to read. 8 bits can be represented using just 2 digits in
the hexadecimal system. A common example is colours, which are often represented using
the hexadecimal system.

We often represent colours using RGB (red, green, blue) values, where were specify a
number between 0 and 255 for the amount of red, green and blue a colour has.

**Examples**

- Red would be represented as (255, 0, 0), which has maximum red, and no green and no
  blue
- Blue would be represented as (0, 0, 255), which has no red, no green, but maximum blue
- Purple could be represented as (100, 0, 100), which has no green, but equal amounts of
  red and blue
- White would be represented as (255, 255, 255), which is maximum red, green and blue

These RGB values are then often represented in hexadecimal with a 6-character number.
The first 2 characters indicate the amount of red, the middle 2 characters indicate the
amount of green and the last 2 characters indicate the amount of blue.

** Examples**

We would represent red using ff0000

.. list-table::
    :header-rows: 1

    - -
      - Red
      - Green
      - Blue
      - Final Representation
    - - Decimal
      - 255
      - 0
      - 0
      - (255, 0, 0)
    - - Hexadecimal
      - ff
      - 0
      - 0
      - ff0000

And we can represent purple using 640064

.. list-table::
    :header-rows: 1

    - -
      - Red
      - Green
      - Blue
      - Final Representation
    - - Decimal
      - 100
      - 0
      - 100
      - (100, 0, 100)
    - - Hexadecimal
      - 64
      - 0
      - 64
      - 640064

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What is the *largest* integer you can represent using 2 characters in the hexadecimal system? Give your answer as a decimal number.

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        The largest value you can represent using 2 characters in hexadecimal is ff.

        .. list-table::
           :header-rows: 1

           * - | :math:`16^1`
               | :math:`16`
             - | :math:`16^0`
               | :math:`1`
           * - **f**
             - **f**

        ff corresponds to :math:`(15 \times 16) + (15 \times 1)`, which is the decimal number 255. (This is equivalent to the binary number 11111111!)

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What is the hexadecimal number 7c2 as a decimal number?

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    The colour grey can be made using equal amounts of red, green and blue. Which of the following corresponds to a shade of grey? *Select all that apply.*

    A. ababab

    B. 388338

    C. 555555

    D. 2288ee

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code Challenge (Extension): Converting Between Hexadecimal and Decimal
    :color: warning
    :icon: star

    Write a module called conversions that can be used to convert from binary to hexadecimal and vice versa. You should be able to import functions from your module into your main script main.py. Your module should contain the following 2 functions.

    **Hexadecimal to binary specification**

    * name: ``hex_to_dec``

    * parameters: ``n`` (``str``)

    * return: n as a decimal number (``int``)

    **Binary to hexadecimal specification**

    * name: ``dec_to_hex``

    * parameters: ``n`` (``int``)

    * return: n as a hexadecimal number (``str``)

    **Example 1**

    .. code-block:: python

        import conversions

        print(conversions.bin_to_dec(10101))
        print(conversions.bin_to_dec(10011101))

    .. code-block:: text

        21
        157

    **Example 2**

    .. code-block:: python

        import conversions

        print(conversions.dec_to_bin(21))
        print(conversions.dec_to_bin(157))

    .. code-block:: text

        10101
        10011101

    **Example 3**

    .. code-block:: python

        import conversions

        for i in range(20):
            print(conversions.dec_to_hex(i))

    .. code-block:: text

        0
        1
        2
        3
        4
        5
        6
        7
        8
        9
        a
        b
        c
        d
        e
        f
        10
        11
        12
        13

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*
