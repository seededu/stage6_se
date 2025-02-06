Two's Complement
================

Two's Complement

Thus far, we have only looked at representing positive numbers, but often we will want
to represent negative numbers. This can be tricky using bits as we can only work with
0's and 1's.

A common way of representing positive and negative numbers in binary is using two's
complement. In this system, the first bit in the sequence is the most significant bit.
This value is treated as a negative number. These are shown in the tables below in
:math:`\textcolor{red}{\text{red}}`.

.. list-table::
    :header-rows: 0

    - - :math:`\textcolor{red}{-2^4}`
      - :math:`2^3`
      - :math:`2^2`
      - :math:`2^1`
      - :math:`2^0`
    - - :math:`\textcolor{red}{-16}`
      - :math:`8`
      - :math:`4`
      - :math:`2`
      - :math:`1`

.. list-table::
    :header-rows: 0

    - - :math:`\textcolor{red}{-2^7}`
      - :math:`2^6`
      - :math:`2^5`
      - :math:`2^4`
      - :math:`2^3`
      - :math:`2^2`
      - :math:`2^1`
      - :math:`2^0`
    - - :math:`\textcolor{red}{-128}`
      - :math:`64`
      - :math:`32`
      - :math:`16`
      - :math:`8`
      - :math:`4`
      - :math:`2`
      - :math:`1`

From here, conversion between decimal and binary works much the same way.

**Example**

Let's take the number 10101 as an example and fill it into the table below.

.. list-table::
    :header-rows: 1

    - - |   :math:`\textcolor{red}{-2^4}`
        |   :math:`\textcolor{red}{-16}`
      - |   :math:`2^3`
        |   :math:`8`
      - |   :math:`2^2`
        |   :math:`4`
      - |   :math:`2^1`
        |   :math:`2`
      - |   :math:`2^0`
        |   :math:`1`
    - - :math:`\textcolor{red}{\textbf{1}}`
      - :math:`\textbf{0}`
      - :math:`\textbf{1}`
      - :math:`\textbf{0}`
      - :math:`\textbf{1}`

:math:`(\textcolor{red}{\mathbf{1} \times -16}) + (\mathbf{0} \times 8) + (\mathbf{1}
\times 4) + (\mathbf{0} \times 2) + (\mathbf{1} \times 1) = \mathbf{-11}`

Note that this is different to the result we obtained using the standard binary system
in which 10101 represented the decimal number 21.

A cool property of using two's complement is you can toggle between positive and
negative values by **flipping bits**, i.e. 1's becomes 0's and 0's become 1's and **then
adding 1**. Flipping all the bits in 10101 results in 01010, adding 1 then gives us
01011. Filling out the table gives us

.. list-table::
    :header-rows: 1

    - - |   :math:`\textcolor{red}{-2^4}`
        |   :math:`\textcolor{red}{-16}`
      - |   :math:`2^3`
        |   :math:`8`
      - |   :math:`2^2`
        |   :math:`4`
      - |   :math:`2^1`
        |   :math:`2`
      - |   :math:`2^0`
        |   :math:`1`
    - - :math:`\textcolor{red}{\textbf{0}}`
      - :math:`\textbf{1}`
      - :math:`\textbf{0}`
      - :math:`\textbf{1}`
      - :math:`\textbf{1}`

:math:`(\textcolor{red}{\mathbf{0} \times -16}) + (\mathbf{1} \times 8) + (\mathbf{0}
\times 4) + (\mathbf{1} \times 2) + (\mathbf{1} \times 1) = \mathbf{11}`

A quick note on addition in binary
----------------------------------

First think about how addition in the decimal system works. You add corresponding digits
together and then if the digit exceeds 9, you carry 1 over into the next column.

For example, when we add 39 and 2, 9+2 gives us 11, so we carry the
:math:`\textcolor{red}{1}` over into the tens column.

.. list-table::
    :header-rows: 1

    - - |
        |   :math:`+`
      - |   :math:`3^\textcolor{red}{1}`
        |
      - |   :math:`9`
        |   :math:`2`
    - -
      - :math:`4`
      - :math:`1`

Addition in binary works much the same way, but we carry 1 over if the digit exceeds 1.

For example

.. list-table::
    :header-rows: 1

    - - |
        |   :math:`+`
      - |   :math:`1^\textcolor{red}{1}`
        |
      - |   :math:`0^\textcolor{red}{1}`
        |   :math:`1`
      - |   :math:`1`
        |   :math:`1`
    - - :math:`1`
      - :math:`0`
      - :math:`0`
      - :math:`0`

If you want to verify this, 101 + 11 = 1000 in binary is 5 + 3 = 8 in decimal.

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What is the *smallest* integer a byte (8 bits) can represent using binary (without using two's complement)? Give your answer as a decimal number.

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        The smallest value you can represent in standard binary using 8 bits is 00000000, which is the decimal number 0.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What is the *largest* integer a byte (8 bits) can represent using binary (without using two's complement)? Give your answer as a decimal number.

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        The largest value you can represent in standard binary using 8 bits is 11111111.

        .. list-table::
           :header-rows: 1

           * - | :math:`2^7`
               | :math:`128`
             - | :math:`2^6`
               | :math:`64`
             - | :math:`2^5`
               | :math:`32`
             - | :math:`2^4`
               | :math:`16`
             - | :math:`2^3`
               | :math:`8`
             - | :math:`2^2`
               | :math:`4`
             - | :math:`2^1`
               | :math:`2`
             - | :math:`2^0`
               | :math:`1`
           * - **1**
             - **0**
             - **0**
             - **1**
             - **1**
             - **1**
             - **0**
             - **1**

        1111111 corresponds to 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1, which is the decimal number 255.

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    What is the *smallest* integer a byte (8 bits) can represent using two's complement? Give your answer as a decimal number. *Hint! This will be the most negative number you can represent.*

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    What is the *largest* integer a byte (8 bits) can represent using two's complement? Give your answer as a decimal number.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 5
    :open:
    :color: info
    :icon: question

    Using two's complement, what decimal number does 11010000 represent?

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 6
    :open:
    :color: info
    :icon: question

    Given that 01100110 using two's complement corresponds to the decimal number 102, how is -102 represented using two's complement?

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 7
    :open:
    :color: info
    :icon: question

    Given that 11011000 in two's complement corresponds to the decimal number -40, how is 40 represented using two's complement?

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code Challenge (Extension): Two's Complement
    :color: warning
    :icon: star

    Write a module called ``binary`` that can be used to obtain the negative value associated with a binary string represented using two's complement. You should be able to import the functions from your module into your main script ``main.py``. Your module should contain the following two functions.

    **Bit flip specification** (written in ``binary.py``)

    * name: ``bit_flip``

    * parameters: ``binary_string`` (``str``)

    * return: corresponding bit-flipped binary string (``str``)


    **Add one specification** (written in ``binary.py``)

    * name: ``add_one``

    * parameters: ``binary_string`` (``str``)

    * return: the resultant binary string after adding 1 (``str``)

    **Example**

    .. code-block:: python

        import binary

        print(binary.bit_flip('1010'))
        print(binary.add_one('0101'))

    .. code-block:: text

        0101
        0110

    In your ``main.py`` file you should write a program that asks the user for a binary number and then returns the negative of that number using two's complement.

    **Example 1**

    .. code-block:: text

        Enter a binary number: 1010
        The negative of that number using two's complement is: 0110


    **Example 2**

    .. code-block:: text

        Enter a binary number: 01011001
        The negative of that number using two's complement is: 10100111

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*
