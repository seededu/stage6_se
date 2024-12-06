.. role:: python(code)
   :language: python

Comparisons
====================

In Python, when we compare values, the results return a Boolean.

.. exec_code::
  :language: python

  x = 10
  print(x < 0)

We can compare values using the following operators:

* ``<`` less than

* ``>``  greater than

* ``<=`` less than or equal to

* ``>=`` greater than or equal to

* ``==`` check values are equal

* ``!=`` check values are not equal

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Does the following program return ``True`` or ``False``?

    .. code-block:: python
        
        x = 2
        print(x > 3)

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **False.** ``x`` is not greater than 3.

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    Does the following program return ``True`` or ``False``?

    .. code-block:: python
        
        x = 7.2
        print(x <= 7.2)

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **True.** ``x`` is equal to 7.2.

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Does the following program return ``True`` or ``False``?

    .. code-block:: python
        
        x = 2 + 4
        print(x == 6)

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **True.** ``x`` is equal to 6.

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    Does the following program return ``True`` or ``False``?

    .. code-block:: python
        
        x = 4*3
        print(x != 5)

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **True.** ``x`` is not equal to 5.

.. dropdown:: Question 5
    :open:
    :color: info
    :icon: question

    Does the following program return ``True`` or ``False``?

    .. code-block:: python
        
        x = 2**2
        print(x != 4)

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **False.** ``x`` is equal to 4.

.. dropdown:: Question 6
    :open:
    :color: info
    :icon: question

    Does the following program return ``True`` or ``False``?

    .. code-block:: python
        
        x = 10
        print((x - 1) % 3 == 0 )

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **True.** ``9 % 3`` is equal to 0 because 9 is divisible by 3 and doesn't leave a remainder.

.. dropdown:: Question 7
    :open:
    :color: info
    :icon: question

    Does the following program return ``True`` or ``False``?

    .. code-block:: python
        
        x = 'red'
        print(x == 'red')

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        **True.** ``x`` is equal to 'red'.