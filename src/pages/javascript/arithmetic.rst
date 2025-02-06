Arithmetic
==========

Arithmetic operations are the foundation of many programming tasks. They allow
you to perform calculations, manipulate numbers, and build more complex logic
in your programs.

Operators
---------

JavaScript provides several operators for performing arithmetic:

**Addition**

.. code-block:: javascript

    let sum = 5 + 3;
    console.log(sum); // Prints: 8

**Subtraction**

.. code-block:: javascript

    let difference = 10 - 4;
    console.log(difference); // Prints: 6

**Multiplication**

.. code-block:: javascript

    let product = 6 * 7;
    console.log(product); // Prints: 42

**Division**

.. code-block:: javascript

    let quotient = 20 / 5;
    console.log(quotient); // Prints: 4

**Modulus**

Finds the remainder when one number is divided by another.

.. code-block:: javascript

    let remainder = 10 % 3;
    console.log(remainder); // Prints: 1

**Power (Exponent)**

The first number is the base and the second number is the power. For example
you would read ``4**2`` as ‘4 to the power of 2’, i.e., which is 16.

.. code-block:: javascript

    let exponent = 4**2;
    console.log(exponent); // Prints: 16

Order of Operations (PEMDAS)
----------------------------

JavaScript follows the order of operations, also known as PEMDAS:

1. **P**\arentheses
2. **E**\xponents
3. **M**\ultiplication (and **m**\odulo) and **D**\ivision
4. **A**\ddition and **S**\ubtraction

**Example**: Multiplication happens before addition

.. code-block:: javascript

    let result = 5 + 2 * 3;
    console.log(result); // Prints: 11

**Example**: Parentheses are evaluated first

.. code-block:: javascript

    let resultWithParentheses = (5 + 2) * 3;
    console.log(resultWithParentheses); // Prints: 21

Special Cases
-------------

Dividing by Zero
~~~~~~~~~~~~~~~~

In JavaScript, dividing by zero results in Infinity or -Infinity for positive
and negative numbers, respectively.

.. code-block:: javascript

    console.log(5 / 0); // Prints: Infinity
    console.log(-5 / 0); // Prints: -Infinity

Not a Number (NaN)
~~~~~~~~~~~~~~~~~~

If an arithmetic operation involves invalid inputs (like dividing a string by a
number), JavaScript returns NaN (Not a Number).

.. code-block:: javascript

    console.log("hello" / 2); // Prints: NaN
