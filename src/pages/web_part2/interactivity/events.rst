Events
======

Events are web developers can program responses to things like clicks, typing,
or even the page loading. JavaScript lets you "listen" for these events and
react to them with your code.

An event is any interaction that happens in the browser, like:

- Clicking a button.
- Moving your mouse.
- Typing in an input box.
- The page finishing loading.

Programmers can create an "event handler" function that will run when an event
fires.

Event Properties
----------------

The simplest way to listen for an event is by assigning a function to an
element’s event property, such as ``onclick``.

**Example: Click Event**

In this example the ``onclick`` property of the button is set to a function
that triggers an alert.

.. code-block:: html

    <button id="myButton">Click Me!</button>

    <script>
        const button = document.getElementById("myButton");

        button.onclick = function() {
            alert("Button clicked!");
        };
    </script>

Event Listeners
---------------

For more flexibility, use the ``addEventListener()`` method. It lets you add
multiple event handlers to the same element.

**Syntax**

.. code-block:: javascript

    element.addEventListener(eventType, eventHandler);

**Example: Click Event with addEventListener**

Both event listener functions are triggered when the button is clicked.

.. code-block:: html

    <button id="myButton">Click Me!</button>

    <script>
        const button = document.getElementById("myButton");

        button.addEventListener("click", function() {
            alert("First event listener!");
        });

        button.addEventListener("click", function() {
            console.log("Second event listener triggered!");
        });
    </script>

Removing Event Listeners
------------------------

If you no longer need an event listener, you can remove it using
``removeEventListener()``.

**Example**

.. code-block:: javascript

    function handleClick() {
        console.log("Button clicked!");
    }

    button.addEventListener("click", handleClick);

    // Later in the code
    button.removeEventListener("click", handleClick);

Common Events
-------------

Here are some events you’ll frequently use:

**Mouse Events**

``click``: Fires when an element is clicked.

.. code-block:: javascript

    button.addEventListener("click", () => {
        console.log("Button clicked!");
    });

``mouseover``: Fires when the mouse pointer moves over an element.

.. code-block:: javascript

    button.addEventListener("mouseover", () => {
        console.log("Mouse over the button!");
    });

``mouseout``: Fires when the mouse pointer leaves an element.

.. code-block:: javascript

    button.addEventListener("mouseout", () => {
        console.log("Mouse left the button!");
    });

**Keyboard Events**

``keydown``: Fires when a key is pressed down.

.. code-block:: javascript

    document.addEventListener("keydown", (event) => {
        console.log(`Key pressed: ${event.key}`);
    });

``keyup``: Fires when a key is released.

.. code-block:: javascript

    document.addEventListener("keyup", (event) => {
        console.log(`Key released: ${event.key}`);
    });

Special Event Types
-------------------

Some events are specific to the browser or document life cycle.

**DOMContentLoaded**

Fires when the HTML is fully loaded and parsed (but before external resources
like images are loaded).

.. code-block:: javascript

    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM is fully loaded!");
    });

**load**

Fires when the entire page (including images, stylesheets, etc.) has finished
loading.

.. code-block:: javascript

    window.addEventListener("load", () => {
        console.log("Page is fully loaded!");
    });

**resize**

Fires when the browser window is resized.

.. code-block:: javascript

    window.addEventListener("resize", () => {
        console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`);
    });
