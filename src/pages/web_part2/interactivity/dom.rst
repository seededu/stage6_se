.. role:: js(code)
   :language: javascript

Document Object Model
========================

The Document Object Model (DOM) provides a structured way to represent a web page in the browser, allowing web
developers to interact with and manipulate the content, structure, and style of a webpage using JavaScript.

What is the DOM?
------------------

The DOM is a tree-like representation of a webpage. It is created by the browser when it processes a HTML document,
where every element, attribute, and piece of text becomes a "node" in the tree.

Think of the DOM as a map of your webpage, making it easy to locate and interact with individual elements.

In the example below, a tree visualisation of the HTML content is provided.

.. code-block:: html
    :caption: index.html

    <!DOCTYPE html>
    <html>
        <head>
            <title>Sample Page</title>
        </head>
        <body>
            <h1>Hello, World!</h1>
            <p>This is an example of a simple webpage.</p>
        </body>
    </html>

.. code-block:: html
    :caption: DOM Tree for index.html

    html
    ├── head
    │   └── title
    └── body
        ├── h1
        └── p


What Can You Do with the DOM?
------------------------------------

Using JavaScript, the DOM allows you to:

1. Modify Content: Change text, images, or other elements on the page.
    Example: Replace "Hello, World!" with "Welcome to JavaScript!"

2. Add or Remove Elements: Dynamically create new elements or delete existing ones.
    Example: Add a new paragraph or remove a button.

3. Apply Styles Dynamically: Change the color, size, or other styles of elements.
    Example: Highlight a heading when it’s clicked.

4. React to User Input: Handle events like clicks, typing, or mouse movement.
    Example: Show a message when a button is clicked.

How Does the Browser Construct the DOM?
----------------------------------------

When a browser loads a webpage, it follows these steps to create the DOM:

1. **Read the HTML**: The browser reads the HTML file line by line.
2. **Parse the HTML**: Each tag is turned into a node and added to the DOM tree.
3. **Build the DOM Tree**: The browser connects all nodes into a hierarchical structure.
4. **Apply CSS**: The browser applies styles to the DOM tree.

At this point, JavaScript on the page can be run to interact with the page.

Example: HTML + JavaScript
----------------------------------------

Let’s look at an example where JavaScript interacts with the DOM to update a webpage dynamically.

.. literalinclude:: ../../_static/examples/interactivity/dom_example.html
  :language: html
  :caption: index.html

.. grid::

    .. grid-item-card::

        .. raw:: html

            <iframe class="sd-w-100" height="160px" src="../../_static/examples/interactivity/dom_example.html"></iframe>

Explanation:

- The HTML file includes:
    - A heading (``<h1>``) with an ID of title.
    - A paragraph (``<p>``) with an ID of description.
    - A button that calls the JavaScript function ``updateContent()`` when clicked.
- The ``updateContent()`` function:
    - Finds the ``<h1>`` and ``<p>`` elements using ``document.getElementById()``.
    - Updates the text content of these elements.

