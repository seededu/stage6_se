.. role:: python(code)
   :language: python

ASCII
=====

ASCII (American Standard Code for Information Interchange) is a standard for representing text in computers. Each character is mapped to an integer that can also be represented in binary using 7 bits or as a 2-character hexadecimal number. 

.. list-table:: 
   :header-rows: 1

   * - 
     - Decimal
     - Hexadecimal
     - Binary
   * - A
     - 65
     - 41
     - 01000001
   * - B
     - 66
     - 42
     - 01000010
   * - C
     - 67
     - 43
     - 01000011
   * - D
     - 68
     - 44
     - 01000100
   * - E
     - 69
     - 45
     - 01000101
   * - F
     - 70
     - 46
     - 01000110
   * - G
     - 71
     - 47
     - 01000111
   * - H
     - 72
     - 48
     - 01001000
   * - I
     - 73
     - 49
     - 01001001
   * - J
     - 74
     - 4a
     - 01001010
   * - K
     - 75
     - 4b
     - 01001011
   * - L
     - 76
     - 4c
     - 01001100
   * - M
     - 77
     - 4d
     - 01001101
   * - N
     - 78
     - 4e
     - 01001110
   * - O
     - 79
     - 4f
     - 01001111
   * - P
     - 80
     - 50
     - 01010000
   * - Q
     - 81
     - 51
     - 01010001
   * - R
     - 82
     - 52
     - 01010010
   * - S
     - 83
     - 53
     - 01010011
   * - T
     - 84
     - 54
     - 01010100
   * - U
     - 85
     - 55
     - 01010101
   * - V
     - 86
     - 56
     - 01010110
   * - W
     - 87
     - 57
     - 01010111
   * - X
     - 88
     - 58
     - 01011000
   * - Y
     - 89
     - 59
     - 01011001
   * - Z
     - 90
     - 5a
     - 01011010

.. list-table:: 
   :header-rows: 1

   * - 
     - Decimal
     - Hexadecimal
     - Binary
   * - a
     - 97
     - 61
     - 01100001
   * - b
     - 98
     - 62
     - 01100010
   * - c
     - 63
     - 43
     - 01100011
   * - d
     - 100
     - 64
     - 01100100
   * - e
     - 101
     - 65
     - 01100101
   * - f
     - 102
     - 66
     - 01100110
   * - g
     - 103
     - 67
     - 01100111
   * - h
     - 104
     - 68
     - 01101000
   * - i
     - 105
     - 69
     - 01101001
   * - j
     - 106
     - 6a
     - 01101010
   * - k
     - 107
     - 6b
     - 01101011
   * - l
     - 108
     - 6c
     - 01101100
   * - m
     - 109
     - 6d
     - 01101101
   * - n
     - 110
     - 6e
     - 01101110
   * - o
     - 111
     - 6f
     - 01101111
   * - p
     - 112
     - 70
     - 01110000
   * - q
     - 113
     - 71
     - 01110001
   * - r
     - 114
     - 72
     - 01110010
   * - s
     - 115
     - 73
     - 01110011
   * - t
     - 116
     - 74
     - 01110100
   * - u
     - 117
     - 75
     - 01110101
   * - v
     - 118
     - 76
     - 01110110
   * - w
     - 119
     - 77
     - 01110111
   * - x
     - 120
     - 78
     - 01111000
   * - y
     - 121
     - 79
     - 01111001
   * - z
     - 122
     - 7a
     - 01111010

In Python you can obtain the decimal number corresponding to a given letter using ``ord()``.

.. exec_code::
    :language: python

   print(ord('A'))

You can then find the corresponding english character for a given decimal number using ``chr()``. 

.. exec_code::
    :language: python

    print(chr(65))

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    What character does the binary number 01110000 represent?

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **p**

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What character does the hexadecimal number 58 represent?

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    What is the binary number 01001111 as a hexadecimal number?

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    What is the hexadecimal number 6f as a binary number?

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 5
    :open:
    :color: info
    :icon: question

    How do you represent the character 'G' in binary?

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 6
    :open:
    :color: info
    :icon: question

    How do you represent the character 'z' in hexadecimal?

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*