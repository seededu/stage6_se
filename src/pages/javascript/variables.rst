Variables
=========

Variables allow you to store information and use it throughout your program. In
this section, you’ll learn how to define and use variables in JavaScript,
understand common data types, and explore key concepts like naming conventions,
``typeof``, and the difference between ``let`` and ``const``.

Defining Variables
------------------

In JavaScript, you define variables using the ``let`` keyword. The syntax looks
like this:

.. code-block:: javascript

    let variableName = value;

- ``let`` is the keyword that tells JavaScript you’re creating a variable.
- ``variableName`` is the name you give the variable.
- ``=`` is the assignment operator
- ``value`` is the data you want to store in the variable.

Example:

.. code-block:: javascript

    let age = 16; // A variable named 'age' storing the number 16
    let person = "Stevie"; // A variable named 'name' storing the string "Stevie"

You can also define a variable without giving it an initial value:

.. code-block:: javascript

    let favoriteColor;

This creates a variable called favoriteColor with no value assigned to it yet.
We'll come back to this idea later!

Using Variables
---------------

Once a variable is defined, you can use it in your code:

.. code-block:: javascript

    let greeting = "Hello";
    console.log(greeting); // Prints: Hello

You can also update the value of a variable:

.. code-block:: javascript

    let score = 10;
    score = 20; // Updating the value of 'score' to 20
    console.log(score); // Prints: 20

Common Data Types
-----------------

Variables in JavaScript can store different types of data. Here are the three
most common:

**String**

Text enclosed in quotes (single or double)

.. code-block:: javascript

    let message = "Welcome!";

**Number**

Numeric values (both integers and decimals)

.. code-block:: javascript

    let price = 19.99;

**Boolean**

Represents :js`true` or ``false`` values, which are lowercase.

.. code-block:: javascript

    let isLoggedIn = true;

Checking Data Types
-------------------

You can use the ``typeof`` operator to check the type of a variable:

.. code-block:: javascript

    let example = "Hello";
    console.log(typeof example); // Prints: string

.. code-block:: javascript

    let number = 42;
    console.log(typeof number); // Prints: number

You can also use ``typeof`` like a function e.g

.. code-block:: javascript

    let example = "Hello";
    console.log(typeof(example)); // Prints: string

Variable Naming
---------------

When naming variables, you must follow these rules:

- Variable names can only include letters, numbers, underscores (_), or dollar
  signs ($).
- Variable names must start with a letter, underscore, or dollar sign.
- Variable names cannot be reserved keywords (e.g., ``let``, ``const``,
  ``if``).

Examples of valid variable names:

.. code-block:: javascript

    let userName;
    let $amount;
    let _isAvailable;

Invalid variable names:

.. code-block:: javascript

    let 123name; // Cannot start with a number
    let let;     // 'let' is a reserved keyword

CamelCase Convention
--------------------

JavaScript developers often use the `camelCase
<https://en.wikipedia.org/wiki/Camel_case>`_ naming convention for variable
names:

- The first word starts with a lowercase letter.
- Each subsequent word starts with an uppercase letter.

Examples:

.. code-block:: javascript

    let firstName;
    let totalScore;
    let isUserLoggedIn;

let vs const
------------

Aside from ``let``, you can also define variables with ``const``, which is
short for "constant". Variables defined with ``const`` are used when the
variable's value should not change.

Example:

.. code-block:: javascript

    const PI = 3.14;
    PI = 3.15; // This will cause an error

undefined and null
------------------

JavaScript has two special values to represent variables with no meaningful
data:

**undefined**

A variable is ``undefined`` when it is declared but not assigned a value.

.. code-block:: javascript

    let x;
    console.log(x); // Prints: undefined

**null**

null is explicitly assigned to represent "no value."

.. code-block:: javascript

    let y = null;
    console.log(y); // Prints: null
