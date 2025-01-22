.. role:: js(code)
   :language: javascript

Printing
====================

One of the first things you'll want to do in JavaScript is display information on the console.

JavaScript provides a simple method to print messages to the console: :js:`console.log()`.

Try running the code below and play around with the message.

.. code-block:: javascript

    console.log("Hello from JavaScript!");


The syntax for :js:`console.log()` is:

.. code-block:: javascript

    console.log(message);

Where:

- :js:`console.log` must be lowercase
- :js:`message` is the object to be printed, for example a string.

More Examples!
----------------

Printing Numbers

.. code-block:: javascript

    console.log(42);

Printing Variables - More about variables on the next pages!

.. code-block:: javascript

    let person = "Alice";
    console.log(person);

Combining Strings

.. code-block:: javascript

    console.log("I am " + 17 + " years old.");

Comments
--------------------

In the rest of this module we will use comments to help explain the code so let's look at how they work.

JavaScript supports two types of comments: single-line comments and multi-line comments. Comments allow you to add
notes or explanations to your code that are ignored when the program runs.

**Single-Line Comments**

These comments start with ``//`` and anything after that point is treated as a comment.

.. code-block:: javascript

    // This is a single-line comment
    let age = 16; // This comment explains the variable

**Multi-Line Comments**

These comments start with ``/*`` and end with ``*/``. They can span as many lines as you like.

.. code-block:: javascript

    /*
    This is a multi-line comment.
    It can explain a more complex piece of code.
    */
    
    let person = "Alice";

Common Printing Mistakes
-------------------------

**Don't forget quotes for strings**

.. code-block:: javascript

    console.log(Hello); // This will cause an error


**Missing Parentheses**

.. code-block:: javascript

    console.log "Hello"; // This will cause an error

**Typos**

JavaScript is case-sensitive, so :js:`Console.log()` or :js:`console.Log()` will not work.


Why Do We Use console.log()?
---------------------------------

When learning JavaScript, you might wonder why we use the full :js:`console.log()` instead of just a simpler, single
function like ``print`` in Python.

In JavaScript the console or terminal is represented by the globally available object :js:`console`, which has many
ways to show information. For example:

- :js:`console.log()`: displays general information.
- :js:`console.warn()`: displays a warning message.
- :js:`console.error()`: displays an error message.

The different types of printing reflect common situations that a browser encounters, such as a web developer using a
deprecated function on a page, which might be presented as a warning. Likewise if something on the page isn't compliant
or crashes it should be shown as an error on the console.



