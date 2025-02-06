JavaScript in HTML
==================

Like CSS, there are three main ways to use JavaScript in a webpage:

1. Event attributes
2. Inline
3. External

We will cover each approach and discuss their use cases.

Event Attributes
----------------

Event attributes (officially "event handler attributes") allow you to write
JavaScript code directly within an HTML element using event-specific attributes
like ``onclick``, ``onmouseover``, or ``onchange``. When the specified event
occurs, the JavaScript code inside the attribute is executed.

Example

.. code-block:: html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Event Attributes</title>
    </head>
    <body>
        <button onclick="alert('Button clicked!')">Click Me</button>
    </body>
    </html>

In this example:

The ``onclick`` attribute contains JavaScript code that shows an alert box when
the button is clicked.

You can find a full list of the available event attributes here
https://html.spec.whatwg.org/multipage/dom.html#global-attributes

It's not very common to use event attributes because:

- it violates the principle of separating content (HTML) and behavior
  (JavaScript)
- it makes the code harder to read and understand, especially when the
  JavaScript is complex
- it scatters the logic of the page across multiple HTML elements

Inline
------

Inline JavaScript is written within ``<script>`` tags directly on the HTML
page. The script can be placed in the ``<head>`` or ``<body>`` sections. This
approach centralizes the JavaScript code but keeps it in the same file as the
HTML.

Example

.. code-block:: html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Inline JavaScript</title>
        <script>
            function showMessage() {
                alert('Hello from Inline JavaScript!');
            }
        </script>
    </head>
    <body>
        <button onclick="showMessage()">Click Me</button>
    </body>
    </html>

In this example:

- The JavaScript function ``showMessage()`` is defined in the ``<script>`` tag
  in the ``<head>`` section.
- The ``onclick`` attribute calls this function when the button is clicked.

This approach is suitable for small projects where you want to keep HTML and
JavaScript in one file. One major downside is that the code is not reusable if
the same script is needed across multiple pages.

External
--------

External JavaScript is written in a separate ``.js`` file and linked to the
HTML document using a ``<script>`` tag with a ``src`` attribute.

Example

.. code-block:: html
    :caption: index.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>External JavaScript</title>
        <script src="script.js"></script>
    </head>
    <body>
        <button onclick="showMessage()">Click Me</button>
    </body>
    </html>

.. code-block:: javascript
    :caption: script.js

    function showMessage() {
        alert('Hello from External JavaScript!');
    }

In this example:

- The JavaScript code is stored in a separate file named ``script.js``.
- The HTML file references the ``script.js`` file using the ``<script>`` tag
  with the ``src`` attribute.
- The ``showMessage()`` function is called when the button is clicked.

This approach is suited to large or multi-page projects where scripts are
reused across multiple pages. It keeps the JavaScript JavaScript separate from
HTML, making both easier to read and maintain. However it requires managing
multiple files.
