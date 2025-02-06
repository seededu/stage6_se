Programs, Statements and Expressions
====================================

JavaScript programs are built from statements and expressions, the core components that
define what your program does and how it behaves. This page will explain what statements
and expressions are and how they differ.

What is a Statement?
--------------------

A statement is a complete instruction that JavaScript executes.

Examples of statements:

.. code-block:: javascript

    let person = "Alice"; // Declares a variable and assigns a value
    console.log(person);  // Prints the value of 'name' to the console

Semicolons
----------

In JavaScript, the semicolon (``;``) is used to signal the end of a statement. It helps
the JavaScript engine know where one instruction ends and the next begins.

Example:

.. code-block:: javascript

    let greeting = "Hello"; // Correctly ended with ;
    let greeting = "Hello"  // Incorrect

Although JavaScript has a feature called Automatic Semicolon Insertion (ASI) that tries
to add missing semicolons for you, relying on it can lead to unexpected errors. It’s a
good habit to include semicolons explicitly.

Expressions
===========

An expression is a piece of code that produces a value. Expressions can be as simple as
a number or more complex like a calculation.

Examples of expressions:

.. code-block:: javascript

    5 + 3        // Produces the value 8
    "x" + "y"    // Produces the value "xy"
    Math.sqrt(9) // Produces the value 3

Expressions can be used inside statements. For example:

.. code-block:: javascript

    let result = 5 + 3;    // The expression '5 + 3' is part of the statement
    console.log(result);   // 'result' is an expression that evaluates to 8

Multiple Statements on One Line
===============================

You can write multiple statements on the same line if you separate them with semicolons:

.. code-block:: javascript

    let a = 1; let b = 2; console.log(a + b);

However, for readability, it’s better to write one statement per line.
