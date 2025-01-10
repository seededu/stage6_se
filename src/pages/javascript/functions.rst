.. role:: js(code)
   :language: javascript

Functions
=============

A function is a reusable block of code designed to perform a specific task. You can think of it as a "mini-program"
within your program. Functions make your programs more organized, efficient, and easier to debug.

The basic syntax for defining a function in JavaScript is:

.. code-block:: javascript

    function functionName(parameters) {
        // Code to execute

        return value;
    }


- ``function``: The keyword used to define a function.
- ``functionName``: The name of the function. You choose this name and use it to call the function later.
- ``parameters``: Input values passed to the function. It is optional to define these.
- ``{ }``: The block statement containing the set of statements to execute when the function is called.
- ``return``: They keyword to specify the end of the function and return value.
- ``value``: The returned value e.g. one of the variables defined in the function or some expression.

Examples
-------------------

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
---------------------

You can provide default values for parameters in case no value is passed during the function call.

Example:

.. code-block:: javascript

    function greet(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }

    greet();           // Prints: Hello, Guest!
    greet("Charlie");  // Prints: Hello, Charlie!

Scope in Functions
---------------------

Functions create their own scope, meaning variables defined inside a function are not accessible outside of it.

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


Arrow Functions
-------------------

Introduced in ES6, arrow functions provide a shorter syntax for writing functions. They are especially useful for
simple operations. We're introducing them here because you will often see them when reading other people's code.

**Syntax**

.. code-block:: javascript

    const functionName = (parameters) => {
        // Code to execute
    };

**Example**

.. code-block:: javascript

    const multiply = (a, b) => {
        return a * b;
    };

    console.log(multiply(4, 5)); // Prints: 20

Functions as Values
-------------------

Functions can be assigned to variables, passed as arguments, or returned from other functions. This is a common pattern
with built in JavaScript functions and other libraries.

**Example: Assigning Functions to Variables**

.. code-block:: javascript

    const sayHello = function() {
        console.log("Hello!");
    };

    sayHello(); // Prints: Hello!

**Example: Passing Functions as Arguments**

The ``repeat`` function will call the passed ``action`` function ``n`` times.

.. code-block:: javascript

    function repeat(action, n) {
        for (let i = 0; i < n; i++) {
            action();
        }
    }

    repeat(() => console.log("Repeating..."), 3);

Anonymous Functions
-------------------

Functions without a name are called anonymous functions. They are often used as arguments to other functions.

**Example**

.. code-block:: javascript

    setTimeout(function() {
        console.log("This message appears after 2 seconds.");
    }, 2000);

In this case we are passing an anonymous function to the :js:`setTimeout` function. This means that after `2000`
milliseconds have elapsed the anonymous function will be called.