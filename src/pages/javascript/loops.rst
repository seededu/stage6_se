Loops
=====

Loops allow you to repeat a block of code multiple times. They are especially
useful when working with arrays, processing data, or performing repetitive
tasks. JavaScript offers several types of loops, each suited to different
scenarios.

for Loop
--------

A ``for`` loop repeats a block of code a specific number of times.

Syntax:

.. code-block:: javascript

    for (initialisation; condition; increment/decrement) {
        // Code to run in each iteration
    }

Explanation:

- initialisation: Sets the starting point for the loop (e.g., ``let i = 0``).
- condition: Specifies when the loop should stop (e.g., ``i < 5``).
- increment/decrement: Updates the loop variable (e.g., ``i++``).

.. note::

    The increment/decrement expression of a ``for`` loop often uses in place
    increment ``++`` or decrement ``--`` operators. These add or subtract ``1``
    from the value of the operand, e.g. ``i``.

**Examples**

Print numbers from 1 to 5

.. code-block:: javascript

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

.. code-block:: html

    1
    2
    3
    4
    5

Iterate through an array

.. code-block:: javascript

    let colors = ["red", "green", "blue"];
    for (let i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }

.. code-block:: html

    red
    green
    blue

Count backward from 10 to 1:

.. code-block:: javascript

    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }

.. code-block:: html

    10
    9
    ...
    2
    1

while Loop
----------

The while loop repeats a block of code as long as a condition is true. Use it
when the number of iterations isn't fixed or known beforehand.

Syntax:

.. code-block:: javascript

    while (condition) {
        // Code to run while condition is true
    }

**Examples**

Print numbers from 1 to 5

.. code-block:: javascript

    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }

.. code-block:: html

    1
    2
    3
    4
    5

Stop when a random number exceeds 0.8

.. code-block:: javascript

    while (true) {
        let random = Math.random();
        console.log(random);
        if (random > 0.8) {
            break; // Exit the loop
        }
    }

Looping Over Objects
--------------------

The ``for...of`` loop is designed for iterating over iterable objects, such as
arrays, strings, or sets. This style of loop makes your life easier because it
handles stepping through the elements for you.

Syntax:

.. code-block:: javascript

    for (element of iterable) {
        // Code to run for each element
    }

**Examples**

Iterate over an array

.. code-block:: javascript

    let fruits = ["apple", "banana", "cherry"];
    for (let fruit of fruits) {
        console.log(fruit);
    }

.. code-block:: html

    apple
    banana
    cherry

Iterate over a string

.. code-block:: javascript

    let word = "hello";
    for (let letter of word) {
        console.log(letter);
    }

.. code-block:: html

    h
    e
    l
    l
    o
