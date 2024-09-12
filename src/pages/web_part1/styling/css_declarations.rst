.. role:: html(code)
   :language: html

.. role:: css(code)
   :language: css

Declarations
======================

Syntax
----------

Styling an element is performed by using a CSS declaration, which consists of property-
value pairs, seperated by semi-colons.

For example the syntax for two properties with values is:

.. code-block:: css

    property1: value1; property2: value2;


Properties
----------

CSS defines many properties which can be adjusted. These range from changing the style 
of text such as the font used, font size, font colour all the way to complex masking
or setting style dynamically based on whether the cursor is hovering over the element.

Some examples of valid properties and associated values are:

* :css:`color: red;` - set the font colour to `CSS Red <https://www.w3.org/wiki/CSS/Properties/color/keywords>`_.
* :css:`font-size: 14px;` - set the font size to 14 pixels tall.
* :css:`text-align: right;` - right align any text within the tag.

.. hint::

    The links below will be helpful in learning about available properties and their
    associated values.

    * https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index
    * https://www.w3.org/Style/CSS/all-properties.en.html


Inline Styling
--------------

Inline CSS is written directly inside an HTML tag using the `style` attribute.

In the example below the font size is set to 64 pixels tall.

.. code-block:: html

    <p style="font-size: 64px; color: red;">
        Big RED text
    </p>

.. topic:: Preview

    .. raw:: html

        <div style="background-color: white;">
            <p style="font-size:32px;color:red !important;">
                Big RED text
            </p>
        </div>

Cascading
----------

A powerful feature of CSS is that they are :term:`cascading`, which means that a style
defined by a parent tag, is applied to all children until it is overwritten. This 
cascading of styles is applied until the last child tag.

In the example below, the child :html:`<b>` tag overwrites the colour of the 
parent :html:`<p>.`

.. code-block:: html

    <p style="color: red !important;">
        Some <b style="color: black">really</b> important warning!
    </p>

.. topic:: Preview

    .. raw:: html

        <div style="background-color: white;">
            <p style="color: red !important;">
                Some <b style="color: black">really</b> important warning!
            </p>
        <div>

Glossary
--------

.. glossary::
   Cascading
      TODO

   Property
      TODO

   Value
      TODO
