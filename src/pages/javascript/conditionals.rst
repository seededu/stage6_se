Conditionals
============

Conditionals allow your program to make decisions based on certain conditions. They are
essential for creating dynamic and responsive behavior in your code. This page
introduces boolean expressions and conditional statements like ``if``, else if, and
else.

Boolean Expressions
-------------------

A boolean expression is a statement that evaluates to either true or false. These
expressions are the foundation of conditionals and are created using comparison
operators and logical operators.

    ======== ============================= ======================= =========
    Operator Description                   Example                 Result
    ======== ============================= ======================= =========
    ``==``   Equal to                      ``10 == 10``            ``true``
    ``!=``   Not equal to                  ``"apple" != "orange"`` ``true``
    ``===``  Strictly equal (type matters) ``5 === "5"``           ``false``
    ``!==``  Strictly not equal            ``5 !== "5"``           ``true``
    ``<``    Less than                     ``3 < 7``               ``true``
    ``>``    Greater than                  ``10 > 20``             ``false``
    ``<=``   Less than or equal to         ``8 <= 8``              ``true``
    ``>=``   Greater than or equal to      ``12 >= 15``            ``false``
    ======== ============================= ======================= =========

Logical Operators
-----------------

Logical operators combine boolean expressions to evaluate complex conditions:

    ======== =========== ======================= =========
    Operator Description Example                 Result
    ======== =========== ======================= =========
    ``&&``   Logical AND ``(5 < 10) && (2 > 1)`` ``true``
    ``||``   Logical OR  ``(1 > 3) || (2 > 1)``  ``true``
    ``!``    Logical NOT ``!(5 > 3)``            ``false``
    ======== =========== ======================= =========

Try these examples yourself!

.. code-block:: javascript

    console.log(15 > 10);
    console.log(8 === "8");
    console.log((4 < 6) && (7 > 3));
    console.log((10 !== 10) || true);

Equal vs. Strictly Equal
------------------------

In JavaScript, you have two ways to compare values for equality: ``==`` (equal) and
``===`` (strictly equal).

**Equal (==)**

- Compares values only, ignoring the data type.
- Performs type conversion, meaning it converts one or both values to the same type
  before comparing them.

Example:

.. code-block:: javascript

    console.log(5 == "5");  // true (string "5" is converted to number 5)
    console.log(0 == false); // true (false is converted to 0)

**Strictly Equal (===)**

- Compares both value and type.
- Does not perform type coercion, so the values must be of the same type to be
  considered equal.

.. code-block:: javascript

    console.log(5 === "5");  // false (number 5 is not the same type as string "5")
    console.log(0 === false); // false (0 is a number, false is a boolean)

**Which Should You Use?**

Always prefer === unless you specifically need to allow type coercion because it makes
comparisons more predictable and avoids potential bugs caused by type conversions.

if
--

The ``if`` statement is used to execute a block of code only if a condition is true.

Syntax:

.. code-block:: javascript

    if (condition) {
        // Code to run if condition is true
    }

- The ``if`` keyword signals the start of the if statement
- The condition (expression) to be evaluated is inside a pair of parentheses ``()``.
- If the condition evaluates to ``true`` then the code inside the braces ``{}`` is run
- You can put as many lines of code inside the braces as you like!

.. note::

    Unlike normal statements you don't need to end an ``if`` with a semicolon ``;``. The
    braces ``{}`` denote a :term:`block statement`, which contains one or more
    statements inside of it. Block statements do not require a semicolon at the end.

Example:

.. code-block:: javascript

    let temperature = 35;

    if (temperature > 30) {
        console.log("It's a hot day.");
    }

.. code-block:: html

    It's a hot day.

else
----

The ``else`` statement provides an alternative block of code to run if the condition is
false.

Syntax:

.. code-block:: javascript

    if (condition) {
        // Code to run if condition is true
    } else {
        // Code to run if condition is false
    }

Example:

.. code-block:: javascript

    let temperature = 25;

    if (temperature > 30) {
        console.log("It's a hot day.");
    } else {
        console.log("It's a pleasant day.");
    }

.. code-block:: html

    It's a pleasant day.

else if
-------

The ``else if`` statement allows you to check multiple conditions in sequence. The first
condition that evaluates to true will execute its block, and the rest are ignored.

Syntax:

.. code-block:: javascript

    if (condition1) {
        // Code to run if condition1 is true
    } else if (condition2) {
        // Code to run if condition2 is true
    } else {
        // Code to run if none of the above conditions are true
    }

Example:

.. code-block:: javascript

    let score = 75;

    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: F");
    }

.. code-block:: html

    Grade: C

Multiple Conditions
-------------------

You can use logical operators like ``&&`` and ``||`` to check multiple conditions within
a single if or else if statement.

Example:

.. code-block:: javascript

    let inventory = 15;
    let isSaleActive = true;

    if (inventory > 0 && isSaleActive) {
        console.log("Items are available for purchase.");
    } else {
        console.log("Items are not available for purchase.");
    }

.. code-block:: html

    Items are available for purchase.

Nesting Conditions
------------------

Because you can put regular JavaScript inside block statements, you can nest if
statements inside other if statements for more complex logic.

Example:

.. code-block:: javascript

    let isMember = true;
    let discountThreshold = 25;
    let totalPurchase = 20;

    if (isMember) {
        if (totalPurchase >= discountThreshold) {
            console.log("You get a 10% discount!");
        } else {
            let difference = discountThreshold - totalPurchase;
            console.log(`Spend $${difference} more to get a discount.`);
        }
    } else {
        console.log("Sign up for membership to get discounts.");
    }

.. code-block:: html

    Spend $5 more to get a discount.

Glossary
--------

.. glossary::

    Block statement
        A block statement is used to denote a sequence of statements. A block statement begins and ends with a pair of
        curly braces.
