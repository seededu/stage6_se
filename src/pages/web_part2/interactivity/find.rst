.. role:: js(code)
   :language: javascript

Finding Elements
====================

When working with the DOM, one of the first things you need to do is find specific elements on the page. JavaScript
provides several ways to locate elements.

getElementById
--------------------

Use ``getElementById()`` when you want to find a single element by its unique id. This is one of the fastest ways to
grab an element because ids are unique across the page.

**Example**

.. code-block:: html

    <h1 id="title">Hello, World!</h1>

    <script>
        const title = document.getElementById("title");
        console.log(title.textContent); // Prints:
    </script>

.. code-block::
    :caption: Output

    Hello, World!

querySelector
--------------------

Use ``querySelector()`` when you want to find the first element that matches a CSS selector. This method is very
flexible because it supports all CSS selectors.

**Example**

.. code-block:: html

    <p class="description">This is the first paragraph.</p>
    <p class="description">This is the second paragraph.</p>

    <script>
        const firstParagraph = document.querySelector(".description");
        console.log(firstParagraph.textContent);
    </script>

.. code-block::
    :caption: Output

    This is the first paragraph.

querySelectorAll
--------------------

Use ``querySelectorAll()`` when you want to find all elements that match a CSS selector. It returns a NodeList,
which is like an array (you can loop through it).
**Example**

.. code-block:: html

    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <script>
        const listItems = document.querySelectorAll("li");
        listItems.forEach(item => console.log(item.textContent));
        // Prints:

    </script>

.. code-block::
    :caption: Output

    Item 1
    Item 2
    Item 3


getElementsByClassName
----------------------------------------

Use ``getElementsByClassName()`` to find all elements with a specific class name. It returns an ``HTMLCollection``,
which is slightly different from an array but can still be looped through.

.. code-block:: html

    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>

    <script>
        const boxes = document.getElementsByClassName("box");
        for (let box of boxes) {
            console.log(box.textContent);
        }

    </script>

.. code-block::
    :caption: Output

    Box 1
    Box 2
    Box 3


getElementsByTagName
----------------------------------------

Use ``getElementsByTagName()`` to find all elements with a specific tag name, like ``<div>``, ``<p>``, or ``<button>``.
This also returns an ``HTMLCollection``.

.. code-block:: html

    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>

    <script>
        const paragraphs = document.getElementsByTagName("p");
        for (let paragraph of paragraphs) {
            console.log(paragraph.textContent);
        }

    </script>

.. code-block::
    :caption: Output

    Paragraph 1
    Paragraph 2
    Paragraph 3