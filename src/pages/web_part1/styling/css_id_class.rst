Using IDs and Classes
=====================

Element IDs
-----------

Every HTML element can have an associated unique identifier. This is useful for when you
wish to uniquely style a single element on your page.

Element IDs are assigned using the ``id`` attribute, which must be unique within the
HTML document.

Here is an example:

.. code-block:: html

    <h1 id="special">My special heading</h1>

    <p id="para1">This is a <span id="large-text">paragraph</span> of text.</p>

In the example there are three id's assigned:

- ``special`` to the first level heading ``<h1>``
- ``para1`` to the paragraph ``<p>``
- ``large-text`` to the text in span ``<span>``

**Rules for IDs:**

- ids are case sensitive
- ids must contain at least one character
- ids cannot start with a number
- ids must not contain whitespaces e.g. spaces and tabs

ID Selectors
------------

To select based on id, use a ``#`` followed by the id as the selector e.g.

.. code-block:: css

    #id {
       property1: value1;
       property2: value2
    }

An example:

.. literalinclude:: ../../_static/examples/css/id_selector_full.html
    :language: html

.. grid::

    .. grid-item-card::

        .. raw:: html

            <iframe class="sd-w-100" height="200px" src="../../_static/examples/css/id_selector_full.html"></iframe>

Element Classes
---------------

HTML elements can optionally belong to one or more classes. This is commonly used in
combination with element selectors so that you can create differently styled versions of
each element. For example, you may want two different heading styles.

Classes are assigned using the ``class`` attribute, which can be repeated throughout the
HTML document and even applied to elements of different types.

Here's an example:

.. code-block:: html

    <p class="main-para">This is a paragraph of text.</p>

    <p class="quote-para">Talk is cheap. Show me the code.</p>

In the example there are two classes named, applied to different paragraphs:

- ``main-para``
- ``quote-para``

**Rules for Classes:**

- class names are case sensitive

Class Selectors
---------------

To select based on class, use a ``.`` followed by the class name as the selector e.g.

.. code-block:: css

    .class {
       property1: value1;
       property2: value2
    }

Have a look at the example below.

.. literalinclude:: ../../_static/examples/css/class_selector_full.html
    :language: html

.. grid::

    .. grid-item-card::

        .. raw:: html

            <iframe class="sd-w-100" height="300px" src="../../_static/examples/css/class_selector_full.html"></iframe>

A few things to note:

- Anything in the ``coloured`` class is red
- Anything in the ``quote`` class is italicised and centered
- The phrase "The Circle of Life" is in *both* the ``coloured`` and ``quote`` class so
  it is red, italicised and centered

To limit the class to specific element types place the element type before the ``.`` In
the example below only ``<p>`` elements with ``class="quote-para"`` will be
center-aligned.

.. literalinclude:: ../../_static/examples/css/tag_class_selector_full.html
    :language: html

.. grid::

    .. grid-item-card::

        .. raw:: html

            <iframe class="sd-w-100" height="200px" src="../../_static/examples/css/tag_class_selector_full.html"></iframe>
