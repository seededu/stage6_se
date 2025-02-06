Functions
=========

A function is a reusable block of code designed to perform a specific task. You can
think of it as a "mini-program" within your program. Functions make your programs more
organised, efficient, and easier to debug.

The basic syntax for defining a function in JavaScript is:

.. code-block:: javascript

    function functionName(parameters) {
        // Code to execute

        return value;
    }

- ``function``: The keyword used to define a function.
- ``functionName``: The name of the function. You choose this name and use it to call
  the function later.
- ``parameters``: Input values passed to the function. It is optional to define these.
- ``{ }``: The block statement containing the set of statements to execute when the
  function is called.
- ``return``: They keyword to specify the end of the function and return value.
- ``value``: The returned value e.g. one of the variables defined in the function or
  some expression.

Examples
--------

**Example 1: A Simple Function**

.. code-block:: javascript

    function greet() {
        console.log("Hello, world!");
    }

    greet(); // Calling the function

.. code-block:: html

    Hello, world!

**Example 2: Function with Parameters**

Parameters allow you to pass values into the function when calling it.

.. code-block:: javascript

    function greetUser(name) {
        console.log(`Hello, ${name}!`);
    }

    greetUser("Alice"); // Prints: Hello, Alice!
    greetUser("Bob");   // Prints: Hello, Bob!

**Example 3: Function with a Return Value**

Functions can return a value using the return keyword.

.. code-block:: javascript

    function addNumbers(a, b) {
        return a + b;
    }

    let result = addNumbers(5, 3);

    console.log(result); // Prints: 8

Default Parameters
------------------

You can provide default values for parameters in case no value is passed during the
function call.

Example:

.. code-block:: javascript

    function greet(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }

    greet();           // Prints: Hello, Guest!
    greet("Charlie");  // Prints: Hello, Charlie!

Scope in Functions
------------------

Functions create their own scope, meaning variables defined inside a function are not
accessible outside of it.

**Example: Local Scope**

.. code-block:: javascript

    function showMessage() {
        let message = "Hello, local scope!";
        console.log(message);
    }
    showMessage(); // Prints: Hello, local scope!
    // console.log(message); // Error: message is not defined

**Example: Global Scope**

Variables declared outside any function are part of the global scope.

.. code-block:: javascript

    let globalMessage = "I am global!";

    function showMessage() {
        console.log(globalMessage);
    }
    showMessage(); // Prints: I am global!

Functions as Values
-------------------

Functions can be assigned to variables, passed as arguments, or returned from other
functions. This is a common pattern with built in JavaScript functions and other
libraries.

**Example: Assigning Functions to Variables**

A function called ``sayHello`` is defined. The function reference is assigned to the
variable ``x``, which we can call.

.. code-block:: javascript

    function sayHello() {
        console.log("Hello!");
    };

    let x = sayHello;

    x();

**Example: Passing Functions as Arguments**

The ``repeat`` function will call the passed ``action`` function ``n`` times.

.. code-block:: javascript

    function repeat(action, n) {
        for (let i = 0; i < n; i++) {
            action();
        }
    }

    function printMsg() {
        console.log("Repeating...");
    }

    repeat(printMsg, 3);

Anonymous Functions
-------------------

Functions without a name are called anonymous functions. They are often used as
arguments to other functions.

**Syntax**

.. code-block::

    function (parameters) {
        // Code to execute
    }

**Example**

We are passing an anonymous function (which logs This message appears after 2 seconds)
to the ``setTimeout`` function. This means that after 2000 milliseconds have elapsed the
anonymous function will be called.

.. code-block:: javascript

    setTimeout(function() {
        console.log("This message appears after 2 seconds.");
    }, 2000);

Arrow Functions
---------------

Arrow functions provide a shorter syntax for writing anonymous functions. They are
especially useful for simple operations. We're introducing them here because you will
often see them when reading other people's code.

**Syntax**

.. code-block::

    (parameters) => {
        // Code to execute
    }

**Example: Set Timeout**

We can rewrite the previous example as:

.. code-block:: javascript

    setTimeout(
        () => {console.log("This message appears after 2 seconds.");},
        2000
    );

**Example: Assigning arrow function to a variable**

In the example below the function is still anonymous but assigned to a variable so that
we can reference it.

.. code-block:: javascript

    const multiply = (a, b) => {
        return a * b;
    };

    console.log(multiply(4, 5));
