Editing the Page and Elements
=============================

Now that you know how to find elements in the DOM, it’s time to learn how to edit and
manipulate them. JavaScript provides several ways to update the content, attributes, and
structure of a web page.

Updating Content with innerHTML
-------------------------------

The ``innerHTML`` property allows you to get or set the HTML content of an element. You
can use it to add, update, or completely replace the content inside an element.

**Example**

.. code-block:: html

    <div id="example">This is the original text.</div>

    <script>
        const element = document.getElementById("example");
        element.innerHTML = "<strong>This is the updated text!</strong>";
    </script>

Updating Attributes
-------------------

You can update an element’s attributes by setting the corresponding directly or use
``setAttribute``.

**Direct Property Access**

.. code-block:: javascript

    element.id = "newId";
    element.href = "https://example.com";

**setAttribute(attribute, value)**

The first parameter is a string corresponding to the attribute to set and the second is
the new value.

.. code-block:: javascript

    element.setAttribute("class", "highlight");
    element.setAttribute("src", "image.jpg");

**Example**

.. code-block:: html

    <img id="myImage" src="old.jpg" alt="Old Image">

    <script>
        const image = document.getElementById("myImage");
        image.setAttribute("src", "new.jpg"); // Updates the src attribute
        image.alt = "New Image"; // Updates the alt attribute directly
    </script>

Styling Elements
----------------

The ``style`` property allows you to directly modify an element’s CSS styles. You can
change colors, sizes, margins, and more.

**Example**

.. literalinclude:: ../../_static/examples/interactivity/css_snippet.html
    :language: html

.. grid::

    .. grid-item-card::

        .. raw:: html

            <iframe class="sd-w-100" height="260px" src="../../_static/examples/interactivity/css_full.html"></iframe>

Creating and Adding Elements
----------------------------

You can dynamically create new elements and add them to the DOM using
``document.createElement()`` and ``appendChild()``.

**Example**

This example adds a new ``<li>`` element with the text "Item 3" is added to the end of
the list.

.. code-block:: html

    <ul id="myList">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>

    <script>
        const newItem = document.createElement("li"); // Create a new <li> element
        newItem.textContent = "Item 3"; // Add text to the new element

        const list = document.getElementById("myList");
        list.appendChild(newItem); // Add the new <li> to the list
    </script>

Removing Elements
-----------------

To remove an element, use the parentElement.removeChild(childElement) method.

**Example**

This example removes the ``<li>`` with the text "Item 2" from the list.

.. code-block:: html

    <ul id="myList">
        <li>Item 1</li>
        <li id="removeMe">Item 2</li>
    </ul>

    <script>
        const list = document.getElementById("myList");
        const itemToRemove = document.getElementById("removeMe");

        list.removeChild(itemToRemove); // Remove the second <li>
    </script>
