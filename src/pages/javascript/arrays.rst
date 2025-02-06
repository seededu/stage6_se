Arrays
======

An array is a sequence of items (called elements) stored in a specific order. Arrays can
hold any data type, including numbers, strings, booleans, and even other arrays.

Defining an Array
-----------------

You can create an array using square brackets

Syntax

.. code-block:: javascript

    [item0, item1, item2, ...., itemN]

- Start and end the array definition with square brackets ``[]``.
- Reference each item, e.g. variable or expression, in the desired order
- Separate each item with a comma ``,``

In the example below an array containing three strings is created, assigned to the
variable ``fruits`` and printed

.. code-block:: javascript

    let fruits = ["apple", "banana", "cherry"];
    console.log(fruits); // Prints: ["apple", "banana", "cherry"]

**Mixing Data Types**

You can put elements of different data types into a single array.

The example below shows mixing strings, numbers and booleans.

.. code-block:: javascript

    let myData = ["Hello World", 3.14, false];
    console.log(myData); // Prints: ["Hello World", 3.14, false]

Indexing
--------

Arrays are zero-indexed, meaning the first element is at position 0, the second is at
position 1, and so on. You can access any element using its index.

.. code-block:: javascript

    let colors = ["red", "green", "blue"];
    console.log(colors[0]);
    console.log(colors[2]);

.. code-block:: html

    red
    blue

Adding Elements
---------------

Let's look at the three main ways you can insert elements into an array.

**Add at the End**

To add to the end of an array, use the ``push`` array method.

.. code-block:: javascript

    let numbers = [10, 20, 30];
    numbers.push(40); // Adds 40 to the end
    console.log(numbers);

.. code-block:: html

    [10, 20, 30, 40]

**Add at the Start**

Adding at the start can be achieved with the ``unshift`` method, we'll see why it's
called that in a moment.

.. code-block:: javascript

    let animals = ["cat", "dog"];
    animals.unshift("rabbit"); // Adds "rabbit" at index 2
    console.log(animals);

.. code-block:: html

    ["rabbit", "cat", "dog",]

**Add at any Position**

Inserting at a given position can be achieved with the ``splice`` method.

The syntax is:

.. code-block:: javascript

    array.splice(start, deleteCount, item1, item2, ..., itemN);

where:

- ``array`` is the array you are modifying
- ``start`` is the index where the new element is to be placed
- ``deleteCount`` is the number of elements to remove after the ``start``, in case you
  want to replace/remove elements
- ``itemN`` are the new elements to insert

For inserting an element we usually set ``deleteCount`` to ``0``.

Example

.. code-block:: javascript

    let animals = ["cat", "dog"];
    animals.splice(2, 0, "rabbit"); // Adds "rabbit" at index 2
    console.log(animals);

.. code-block:: html

    ["cat", "rabbit", "dog"]

Removing Elements
-----------------

Like adding elements, we have a variety of ways to remove elements from arrays.

**Remove from the End**

The ``pop`` method removes the last element of an array.

.. code-block:: javascript

    let numbers = [1, 2, 3];
    numbers.pop(); // Removes 3
    console.log(numbers); // Prints: [1, 2]

**Remove from the Start**

The ``shift`` method removes the first element of an array. You can think of this like
shifting the array to the left and the element in the negative position is dropped.

.. code-block:: javascript

    let numbers = [1, 2, 3];
    numbers.shift(); // Removes 1
    console.log(numbers); // Prints: [2, 3]

**Remove from any Position**

The ``splice`` method can be used to remove one or more elements by ignoring the
``itemN`` parameters.

.. code-block:: javascript

    let fruits = ["apple", "banana", "cherry"];
    fruits.splice(1, 1); // Removes 1 element at index 1
    console.log(fruits); // Prints: ["apple", "cherry"]

    fruits.splice(1, 0, "orange"); // Inserts "orange" at index 1
    console.log(fruits); // Prints: ["apple", "orange", "cherry"]

Useful Methods
--------------

**Length of an Array**

The ``length`` attribute returns the number of elements in an array.

.. code-block:: javascript

    let fruits = ["apple", "banana", "cherry"];
    console.log(fruits.length); // Prints: 3

**Reverse an Array**

Use the ``reverse`` method to flip the order of elements in an array. This operation
happens in place, meaning that the original array is changed.

.. code-block:: javascript

    let numbers = [1, 2, 3];
    numbers.reverse();
    console.log(numbers); // Prints: [3, 2, 1]

**Joining Elements into a String**

You can join the elements into a single string with the ``join`` method. This method
takes a string parameter, which is used as the separator.

.. code-block:: javascript

    let words = ["JavaScript", "is", "fun"];
    console.log(words.join(" ")); // Prints: "JavaScript is fun"
