.. role:: python(code)
   :language: python

Representing Numbers in Binary
==============================

Decimal (base 10)
-----------------

When dealing with number day-to-day we use the decimal system. This uses the digits 0-9. How does this work?

Let's take the number **34 078** as an example and fill it into the table below.

.. list-table:: 
   :header-rows: 1

   * - | :math:`10^4` 
       | :math:`10 000`
     - | :math:`10^3`
       | :math:`1000`
     - | :math:`10^2`
       | :math:`100`
     - | :math:`10^1`
       | :math:`10`
     - | :math:`10^0`
       | :math:`1`
   * - **3** 
     - **4** 
     - **0** 
     - **7** 
     - **8** 

The way we interpret the number 34 078 is that it is

:math:`(\mathbf{3} \times 10^4) + (\mathbf{4} \times 10^3) + (\mathbf{0} \times 10^2) + (\mathbf{7} \times 10^1) + (\mathbf{8} \times 10^0) = \mathbf{34\,078}`

or alternatively

:math:`(\mathbf{3} \times 10\,000) + (\mathbf{4} \times 1\,000) + (\mathbf{0} \times 100) + (\mathbf{7} \times 10) + (\mathbf{8} \times 1) = \mathbf{34\,078}`

Binary (base 2)
---------------

When computers store information they do so using the binary system. Information is transferred using binary digits, or bits. Typically  we think of computer storage in terms of bytes, where a byte is equal to 8 bits.

Bits are mainly represented using digits 1 and 0, which can also represent values such as True/False and On/Off. 

The binary system differs from the decimal system in that it operates in based 2 rather than base 10.

Binary to Decimal
~~~~~~~~~~~~~~~~~

**Example**

Let's take the number 10101 as an example and fill it into the table below.

.. list-table:: 
   :header-rows: 1

   * - | :math:`2^4` 
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
     - **1** 
     - **0** 
     - **1** 

The way we interpret the binary number 10101 is

:math:`(\mathbf{1} \times 2^4) + (\mathbf{0} \times 2^3) + (\mathbf{1} \times 2^2) + (\mathbf{0} \times 2^1) + (\mathbf{1} \times 2^0) = \mathbf{21}`

or alternatively

:math:`\mathbf{1} \times 16) + (\mathbf{0} \times 8) + (\mathbf{1} \times 4) + (\mathbf{0} \times 2) + (\mathbf{1} \times 1) = \mathbf{21}`

**Example**

We can store much larger numbers by going to higher powers of 2. 

Let's take the number 10011101, and again fill it out in a table.

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


The way we interpret the binary number 10011101 is

:math:`(\mathbf{1} \times 2^7) + (\mathbf{0} \times 2^6) + (\mathbf{0} \times 2^5) + (\mathbf{1} \times 2^4) + (\mathbf{1} \times 2^3) + (\mathbf{1} \times 2^2) + (\mathbf{0} \times 2^1) + (\mathbf{1} \times 2^0) = \mathbf{157}`

or alternatively

:math:`(\mathbf{1} \times 128) + (\mathbf{0} \times 64) + (\mathbf{0} \times 32) + (\mathbf{1} \times 16) + (\mathbf{1} \times 8) + (\mathbf{1} \times 4) + (\mathbf{0} \times 2) + (\mathbf{1} \times 1) = \mathbf{157}`

Decimal to Binary
~~~~~~~~~~~~~~~~~

Converting from the decimal system is a bit more challenging. Below is the algorithm used to convert a decimal number :math:`n` to its binary representation.

.. code-block:: text

   Let n be a decimal integer

   Find x where x is the largest value for which 2^x <= n

   Let b represent the binary representation of n
   
   For i = x, ..., 0
   
        If 2^x <= n>
   
            Next digit in b is 1
   
            Update n to be n - 2^x
   
        Else
   
            Next digit in b is 0

**Example**

Suppose :math:`n = \textcolor{blue}{21}`. The highest value of :math:`x` for which :math:`2^x <= 21` is :math:`x = 4`. :math:`2^4 = 16`. :math:`16 <= 21`.

Next we'll iterate through values :math:`x = 4, 3, 2, 1, 0`.

:math:`2^4 = \textcolor{red}{16}`.  :math:`16 <= \textcolor{blue}{21}` is **True**, so the next digit in :math:`b` is 1 and update :math:`n` to be :math:`\textcolor{blue}{21} - \textcolor{red}{16} = \textcolor{blue}{5}`.

:math:`2^3 = \textcolor{red}{8}`. :math:`8 <=  \textcolor{blue}{5}` is **False**, so the next digit in :math:`b` is 0.

:math:`2^2 = \textcolor{red}{4}`. :math:`4 <=\textcolor{blue}{5}` is **True**, so the next digit in :math:`b` is 1 and update :math:`n` to be :math:`\textcolor{blue}{5} - \textcolor{red}{4} = \textcolor{blue}{1}`.

:math:`2^1 = \textcolor{red}{2}`. :math:`2 <= \textcolor{blue}{1}` is **False**, so the next digit in :math:`b` is 0.

:math:`2^0 = \textcolor{red}{1}`. :math:`1 <= \textcolor{blue}{1}` is **True**, so the next digit in $b$ is 1 and update :math:`n` to be :math:`\textcolor{blue}{1} - \textcolor{red}{1} = \textcolor{blue}{0}`.

Hence the binary representation of 21 is 10101. Another way to think about it is that you want to put 1's and 0's in the empty boxes such that if there is a 1 in the box, you add the values in the boxes above to get to 21. 

.. list-table:: 
   :header-rows: 1

   * - | :math:`2^4` 
       | :math:`16`
     - | :math:`2^3`
       | :math:`8`
     - | :math:`2^2`
       | :math:`4`
     - | :math:`2^1`
       | :math:`2`
     - | :math:`2^0`
       | :math:`1`
   * - |
     - 
     - 
     -
     - 


i.e.

.. list-table:: 
   :header-rows: 1

   * - | :math:`2^4` 
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
     - **1** 
     - **0** 
     - **1** 

**Example**

Suppose :math:`n = \textcolor{blue}{157}`. The highest value of :math:`x` for which :math:`2^x <= 157` is :math:`x = 7`. :math:`2^7 = 128`. :math:`128 <= 157`.

Next we'll iterate through values :math:`x = 7, 6, 5, 4, 3, 2, 1, 0`.

:math:`2^7 = \textcolor{red}{128}`.  :math:`128 <= \textcolor{blue}{157}` is **True**, so the next digit in $b$ is 1 and update $n$ to be :math:`\textcolor{blue}{157} - \textcolor{red}{128} = \textcolor{blue}{29}`.

:math:`2^6 = \textcolor{red}{64}`. :math:`64 <= \textcolor{blue}{29}` is **False**, so the next digit in :math:`b` is 0.

:math:`2^5 = \textcolor{red}{32}`. :math:`32  <=  \textcolor{blue}{29}` is **False**, so the next digit in :math:`b` is 0.

:math:`2^4 = \textcolor{red}{16}`.  :math:`16 <= \textcolor{blue}{29}` is **True**, so the next digit in :math:`b` is 1 and update :math:`n` to be :math:`\textcolor{blue}{29} - \textcolor{red}{16} = \textcolor{blue}{13}`.

:math:`2^3 = \textcolor{red}{8}`.  :math:`8 <= \textcolor{blue}{13}` is **True**, so the next digit in :math:`b` is 1 and update $n$ to be :math:`\textcolor{blue}{13} - \textcolor{red}{8} = \textcolor{blue}{5}`.

:math:`2^2 = \textcolor{red}{4}`. :math:`4 <= \textcolor{blue}{5}` is **True**, so the next digit in :math:`b` is 1 and update $n$ to be :math:`\textcolor{blue}{5} - \textcolor{red}{4} = \textcolor{blue}{1}`.

:math:`2^1 = \textcolor{red}{2}`. :math:`2 <= \textcolor{blue}{1}` is **False**, so the next digit in :math:`b` is 0.

:math:`2^0 = \textcolor{red}{1}`. :math:`1 <= \textcolor{blue}{1}` is **True**, so the next digit in :math:`b` is 1 and update :math:`n` to be :math:`\textcolor{blue}{1} - \textcolor{red}{1} = \textcolor{blue}{0}`.

Hence the binary representation of 157 is 100110101.

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

.. note:: There are only 10 types of people in this world. Those who understand binary and those who don't!

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Suppose you wanted to convert the binary number 110001101 to decimal. Which fills out the following tables correctly?

    .. list-table:: 
       :header-rows: 1

       * - | :math:`2^8` 
           | :math:`256`
         - | :math:`2^7`
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
       * - |
         -
         -  
         -  
         -  
         -  
         -  
         -  
         - 
        
    A. 
        
     .. list-table:: 
       :header-rows: 1

       * - | :math:`2^8` 
           | :math:`256`
         - | :math:`2^7`
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
         - **1**
         - **1** 
         - **0**
         - **0**
         - **0**
         - **1** 
         - **1**

    B. 
        
     .. list-table:: 
       :header-rows: 1

       * - | :math:`2^8` 
           | :math:`256`
         - | :math:`2^7`
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
         - **1**
         - **0** 
         - **1**

    C. 
        
     .. list-table:: 
       :header-rows: 1

       * - | :math:`2^8` 
           | :math:`256`
         - | :math:`2^7`
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
       * - **0**
         - **1**
         - **0**
         - **1** 
         - **0** 
         - **0** 
         - **1** 
         - **1** 
         - **1** 

    D. 
        
     .. list-table:: 
       :header-rows: 1

       * - | :math:`2^8` 
           | :math:`256`
         - | :math:`2^7`
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
         - **1**
         - **0** 
         - **0** 
         - **0** 
         - **1** 
         - **1** 
         - **0**  
         - **1**

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **D.**

        To correctly fill out the table, we just want to write our binary number 110001101 along the bottom row with one digit in each box.


.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What is the binary number 110001101 as a decimal number?

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Consider the decimal number :math:`38`. What is the highest value of :math:`x` for which :math:`2^x <= 38>`?

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    What is the binary representation of the decimal number 38?

    .. list-table:: 
       :header-rows: 0

       * - :math:`2^8` 
         - :math:`2^7`
         - :math:`2^6`
         - :math:`2^5`
         - :math:`2^4`
         - :math:`2^3`
         - :math:`2^2`
         - :math:`2^1`
         - :math:`2^0`
       * - :math:`256`
         - :math:`128`
         - :math:`64`
         - :math:`32`
         - :math:`16`
         - :math:`8`
         - :math:`4`
         - :math:`2`
         - :math:`1`

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code Challenge (Extension): Converting Between Binary and Decimal
    :color: warning
    :icon: star

    Write a module called conversions that can be used to convert from binary to decimal and vice versa. You should be able to import functions from your module into your main script main.py. Your module should contain the following 2 functions.

    **Binary to decimal specification**  (written in ``conversions.py``)

    * name: ``bin_to_dec``

    * parameters: ``n`` (``int``)

    * return: ``n`` as a decimal number (``int``)

    **Decimal to binary specification** (written in ``conversions.py``)

    * name: ``dec_to_bin``

    * parameters: ``n`` (``int``)

    * return: ``n`` as a binary number (``int``)

    **Example 1** (running from ``main.py``)

    .. code-block:: python

        import conversions

        print(conversions.bin_to_dec(10101))
        print(conversions.bin_to_dec(10011101))

    .. code-block:: text

        21
        157

    **Example 2** (running from ``main.py``)

    .. code-block:: python

        import conversions

        print(conversions.dec_to_bin(21))
        print(conversions.dec_to_bin(157))

    .. code-block:: text

        10101
        10011101

    **Example 3** (running from ``main.py``)

    .. code-block:: python

        import conversions

        for i in range(10):
            print(conversions.dec_to_bin(i))

    .. code-block:: text

        0
        1
        10
        11
        100
        101
        110
        111
        1000
        1001

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*