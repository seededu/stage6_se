Printing
========

One of the first things you'll want to do in JavaScript is display information on the
console.

JavaScript provides a simple method to print messages to the console: ``console.log()``.

Try running the code below and play around with the message.

.. code-block:: javascript

    console.log("Hello from JavaScript!");

The syntax for ``console.log()`` is:

.. code-block:: javascript

    console.log(message);

Where:

- ``console.log`` must be lowercase
- ``message`` is the object to be printed, for example a string.

More Examples!
--------------

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

Common Printing Mistakes
------------------------

**Strings require quotes**: The following will cause an error.

.. code-block:: javascript

    console.log(Hello);

**Missing Parentheses**: The following will cause an error.

.. code-block:: javascript

    console.log "Hello";

**Typos**: JavaScript is case-sensitive, so ``Console.log()`` or ``console.Log()`` will
not work. The following will cause an error.

.. code-block:: javascript

    Console.log("Hello")

.. code-block:: javascript

    console.Log("Hello")

Why Do We Use console.log()?
----------------------------

When learning JavaScript, you might wonder why we use the full ``console.log()`` instead
of just a simpler, single function like ``print`` in Python.

In JavaScript the console or terminal is represented by the globally available object
``console``, which has many ways to show information. For example:

- ``console.log()``: displays general information.
- ``console.warn()``: displays a warning message.
- ``console.error()``: displays an error message.

The different types of printing reflect common situations that a browser encounters,
such as a web developer using a deprecated function on a page, which might be presented
as a warning. Likewise if something on the page isn't compliant or crashes it should be
shown as an error on the console.
