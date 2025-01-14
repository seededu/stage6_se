.. role:: js(code)
   :language: javascript

Window, Document and Elements
================================

The DOM specifies two key objects available in your JavaScript to represent the content on the page. They are the:

- ``window``
- ``document``

These objects are globally available to any JavaScript on a page. These objects are managed by the browser's JavaScript
runtime.

Though these objects you can access each  ``element`` on the page. Let's take a look at all three objects!

Window Object
-------------------------------

The ``window`` object is the global object in the browser that represents the browser window or tab where your
webpage is displayed. It provides access to the browser's features and environment, as well as being the top-level
object that contains the ``document`` object.

The Window object provides a wide range of properties and methods to:

- Interact with the browser itself
- Handle browser-specific features like alerts, prompts, and timers.

**Examples**

1. ``location``

The ``location`` object provides information about the current URL and allows you to redirect or reload the page.

.. code-block::

    console.log(window.location.href); // Prints the current URL

    // Redirect to another page
    window.location.href = "https://example.com";

2. ``navigator``

The ``navigator`` object provides information about the user’s browser and operating system.

.. code-block::

    console.log(window.navigator.userAgent); // Prints browser details

3. ``innerWidth`` and ``innerHeight``

Get the width and height of the browser window’s viewport.

.. code-block::

    console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);

Document Object
-------------------------------

The ``document`` object is the entry point to the page contents. It represents the entire HTML document and provides
methods and properties to interact with the webpage. Like the ``window`` object it is globally available.

From the ``document`` object you can:

- find specific elements on the page
- read page metadata such as the title and URL
- add modify and remove elements
- register as a listen for events on the page

.. hint::

   We will look at finding elements in more detail on the following pages!

**Examples**

1. Getting and setting the document title

.. code-block::

    console.log(document.title); // Prints the current page title
    document.title = "New Title"; // Changes the title

2. Accessing the body element

.. code-block::

    console.log(document.body); // Prints the contents of the body element

Elements
-------------------------------

The content of the page is made of individual ``element`` objects, arranged in a tree structure. Each page element
has its own type but inherits a set of common properties and methods.

For example a ``<div>`` element is an instance of ``HTMLDivElement``, which inherits from ``HTMLElement``, which in
turn inherits from ``Element``. The chain of inheritance looks like this:

.. code-block::

    Node → Element → HTMLElement → HTMLDivElement

**Examples**

The Element class provides a range of common properties all elements inherit. These include:

1. ``id``: Gets or sets the unique id of the element.

.. code-block:: javascript

    const element = document.getElementById("example");
    console.log(element.id); // Prints: "example"

2. ``className``: Gets or sets the class attribute as a string.

.. code-block:: javascript

    element.className = "new-class";

3. ``tagName``: Returns the tag name of the element in uppercase.

.. code-block:: javascript

    console.log(element.tagName); // Prints: "DIV"



