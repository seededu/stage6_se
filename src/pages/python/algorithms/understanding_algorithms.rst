Understanding Algorithms
========================

You'll often be faced with new algorithms and it is an important skill for you to be able to read through the algorithm and figure out what the algorithm is meant to do. Have a go at trying to understand the algorithms given below.

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Determine the purpose of the algorithm given below. Note that :math:`n` is expected to be a positive integer.

    .. code-block:: text

        BEGIN 
            Get n
            total = 0
            i = 0
            WHILE total <= n
                i = i + 1
                total = total + i
            ENDWHILE 
            largest = i - 1
            Display largest
        END

    A. It sums all positive integers between 0 and :math:`n`, e.g. if :math:`n=5` this program would output :math:`1 + 2 + 3 + 4 + 5 = 15`.

    B. It sums all positive integers between 0 and up to but not including :math:`n`, e.g. if :math:`n=5` this program would output :math:`1 + 2 + 3 + 4 = 10`.

    C. It finds the number ``largest`` such that the sum of positive integers between 0 and ``largest`` does not exceed :math:`n`, e.g. if :math:`n=11` this program would output 4 because :math:`1 + 2 + 3 + 4` is the sum of consecutive integers that gets you closest to 11 without exceeding 11.

    D. It finds the number ``largest`` such that :math:`i-1` still gives you a value less than or equal to :math:`n`.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What are the inputs and outputs of the algorithm provided below?

    .. code-block:: text

        1    BEGIN
        2        Get word
        3        reverse = ''
        4        FOR i = 0 TO Length(word) - 1
        5            Append word[-i-1] to reverse
        6        NEXT i
        7        IF word = reverse THEN
        8            Display "It's the same forwards and backwards!"
        9        ENDIF
        10    END

    A. 

        **Input:** ``word``, which given the description is expected to be a single word represented as a string.

        **Output:** the string *"It's the same forwards and backwards!"*

    B. 

        **Input:** ``word``, which given the description is expected to be a single word represented as a string and ``reverse``, which is an empty string.

        **Output:** the string *"It's the same forwards and backwards!"*

    C. 

        **Input:** ``word``, which given the description is expected to be a single word represented as a string.

        **Output:** the boolean value ``True``/``False``, depending whether the condition on line 7 is ``True`` or ``False`` and the string *"It's the same forwards and backwards!"*

    D. 

        **Input:** ``word``, which given the description is expected to be a single word represented as a string and ``reverse``, which is an empty string.

        **Output:** the boolean value ``True``/``False``, depending whether the condition on line 7 is ``True`` or ``False`` and the string *"It's the same forwards and backwards!"*

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Determine the purpose of the algorithm provided below.

    .. code-block:: text

        1    BEGIN
        2        Get word
        3        reverse = ''
        4        FOR i = 0 TO Length(word) - 1
        5            Append word[-i-1] to reverse
        6        NEXT i
        7        IF word = reverse THEN
        8            Display "It's the same forwards and backwards!"
        9        ENDIF
        10    END

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    Determine the purpose of the algorithm provided below.

    .. code-block:: text

        1    BEGIN locate_max(array)
        2        max_index = [0]
        3        max_value = array[0]
        4        i = 1
        5        WHILE i < Length(array)
        6             IF array[i] > max_value THEN
        7                 max_index = i
        8                 max_value = array[i]
        9             ELSEIF array[i] = max_value THEN
        10                 Append i to max_index
        11             ENDIF 
        12             i = i + 1
        13        ENDWHILE
        14        RETURN max_index
        15    END locate_max(array)

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 5
    :open:
    :color: info
    :icon: question

    Determine the purpose of the algorithm provided below.

    .. code-block:: text

        1    BEGIN fibonacci(n)
        2        IF n <= 2 THEN
        3            RETURN 1
        4        ELSE
        5            RETURN fibonacci(n-1) + fibonacci(n-2)
        6        ENDIF
        7    END fibonacci(n)

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*