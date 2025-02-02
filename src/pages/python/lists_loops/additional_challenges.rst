.. role:: python(code)
   :language: python

Additional Challenges
=====================

.. dropdown:: Code challenge: Last Letter
    :color: warning
    :icon: star

    Write a program which asks the user for a word and then displays the last letter.

    **Example 1**

    .. code-block:: text

        Enter a word: rainbow
        w

    **Example 2**

    .. code-block:: text

        Enter a word: sunshine
        e

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: Fibonacci
    :color: warning
    :icon: star

    The Fibonacci sequence is:

    :math:`1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...`


    The first two terms are defined to be:

    :math:`F_1 = 1, F_2 = 1`

    With all remaining terms defined as:

    :math:`F_n = F_{n-1} + F_{n-2}`

    Write a program which asks for a term :math:`n`, and then outputs the corresponding Fibonacci term :math:`F_n`.

    **Example**

    *8 is the 6th term in the Fibonacci sequence.*

    .. code-block:: text

        Which term? 6
        8



    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: Validate Password
    :color: warning
    :icon: star

    For security reasons it's good to have a strong password. Ideally we want passwords that:

    * Are 8 characters or more

    * Have at least one upper case and one lower case letter

    * Contain a number

    Write a program that rates a user's password based on the following rules.

    * If 0 criteria are met the password is *weak*

    * If 1 criterion is met the password is *fair*

    * If 2 criteria are met the password is *strong*

    * If all 3 criteria are met the password is *very strong*

    **Example 1:**  Password is weak because it's less than 8 characters, only contains lower case characters and does not contain a number.

    .. code-block:: text

        Enter password: secret
        weak

    **Example 2:** Password is strong because it contains more than 8 letters and a number, but does not contain an upper case character.

    .. code-block:: text

        Enter password: n3v3rgu355
        strong

    **Example 3:** Password is fair because it contains more than 8 letters

    .. code-block:: text

        Enter password: pyth@nprogramming
        fair

    **Example 4:** Password is very strong because it meets all 3 criteria

    .. code-block:: text

        Enter password: tAn57a4Fl
        very strong

    .. hint:: You can use in to check whether a password contains a particular character.

        .. code-block:: python

            password = 'secret'

            print('a' in password) # False, since 'secret' doesn't contain the letter 'a'
            print('s' in password) # True, since 'secret' contains the letter 's'

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: Make A Mountain
    :color: warning
    :icon: star

    Write a program that constructs a mountain out of ``*``'s!

    The program should read in integers from the user until the user enters a blank link. The program should then construct a mountain using the integers as mountain heights from left to right.



    **Example 1:** The first *column* has **1** ``*``, the second *column* has **2** ``*``'s and the third column has **3** ``*``'s

    .. code-block:: text

        1
        2
        3

        *
        **
        ***

    **Example 2:** Each *column* has 2, 2, 4, 3, 2 ``*``'s respectively.

    .. code-block:: text

        2
        2
        4
        3
        2

        *  
        ** 
        *****
        *****

    **Example 3:** Each column has 1, 2, 0, 1, 2, 4, 3, 3, 2, 3, 1 ``*``'s respectively.

    .. code-block:: text

        1
        2
        0
        1
        2
        4
        3
        3
        2
        3
        1

            *     
            *** * 
        *  ****** 
        ** ********

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*