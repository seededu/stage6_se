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

.. literalinclude:: ../../_static/examples/css/big_red_snippet.html
  :language: html

.. grid::

    .. grid-item-card::

        .. raw:: html

            <iframe class="sd-w-100" height="100px" src="../../_static/examples/css/big_red_full.html"></iframe>


Cascading
----------

A powerful feature of CSS is that they are :term:`cascading`, which means that a style
defined by a parent tag, is applied to all children until it is overwritten. This 
cascading of styles is applied until the last child tag.

In the example below, the child :html:`<b>` tag overwrites the colour of the 
parent :html:`<p>.`

As shown in the example below the :html:`<span>` tag is a generic tag than can be used to 
select a section of the document. Here the child :html:`<span>` tag overwrites the 
colour of the parent :html:`<p>`. Note that the font size doesn't change because that 
hasn't been overwritten.

.. literalinclude:: ../../_static/examples/css/cascading_snippet.html
  :language: html

.. grid::

    .. grid-item-card::

        .. raw:: html

            <iframe class="sd-w-100" height="260px" src="../../_static/examples/css/cascading_full.html"></iframe>

Glossary
--------

.. glossary::
    Cascading
        Cascading refers to the way styles are applied in a specific order of 
        importance. If multiple styles conflict, CSS follows rules to decide which one 
        to apply. For example, styles in a more specific rule or applied later will 
        usually override earlier ones.

    Property
        A CSS property is an aspect of an element that you want to style, like ``color``, 
        ``font-size``, or ``margin``. It defines what part of the element you are 
        customizing.

    Value
        A CSS value is the setting you give to a property. For instance, if the 
        property is color, the value might be ``blue`` or ``#0000FF``, telling the 
        browser what color to use for the text.

