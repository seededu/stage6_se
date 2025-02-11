Selectors
=========

Applying styling to individual elements will quickly become tedious when you
have a complicated document. For example, if you need to change the colour of
headings, you will need to search through the document to find all headings and
replace the colour value.

For this reason, CSS selectors were created so that software engineers could
define the style for each element in a single location. This follows a common
software engineering principle known as "Don't Repeat Yourself" or :term:`DRY`
for short.

Selectors allow software engineers to specify exactly which elements are to be
affected by the style based on the element type, id or class.

General Syntax
--------------

Selectors are a way of specifying which page elements a style should be applied
to. The syntax for selectors is the selector followed by a block of CSS
declarations enclosed in curly braces

The syntax is:

.. code-block:: css

    selector {
       property1: value1;
       property2: value2;
    }

where ``selector`` is a a reference to a particular element. The formatting is
optional, in fact you can write it on a single line, but this is the
conventional way of writing CSS.

Element Selectors
-----------------

All elements of the same type can be have a style applied to them by using the
name of the element as the selector.

An example to change all paragraphs, ``<p>`` to use a particular font size and
colour is:

.. code-block:: css

    p {
       font-size: 32px;
       color: red;
    }

In this case the selector is ``p``, which refers to the paragraph element or
``<p>`` tag.

Internal CSS
------------

Internal CSS is written within a ``<style>`` tag inside the ``<head>``` section
of an HTML document and applies styles to the whole page.

You may place as many different selectors inside the ``<style>`` tag as you
like.

In the example below styles will be applied to all first level headings and
paragraphs.

.. literalinclude:: ../../_static/examples/css/internal.html
    :language: html
    :caption: index.html

.. grid::

    .. grid-item-card::

        .. raw:: html

            <iframe src="../../_static/examples/css/internal.html"></iframe>

External CSS
------------

Your CSS might become quite lengthy and hard to manage. To keep your HTML
simple you can define the CSS in a separate file with a ``.css`` extension. To
include the styles defined in this file it is linked using a ``<link>`` tag.
You need to specify how the linked file is **rel**\:spelling:ignore:`ated` to
the HTML, in this case we have a stylesheet, which specifies the formatting.
Then we specify the **h**\:spelling:ignore:`ypertext`
**ref**\:spelling:ignore:`erence`, i.e the name of the ``.css``.

Example of external CSS definition. You can flick through the HTML and CSS
tabs.

.. tab-set::

    .. tab-item:: HTML

       .. literalinclude:: ../../_static/examples/css/external/external.html
          :language: html
          :caption: index.html

    .. tab-item:: CSS

       .. literalinclude:: ../../_static/examples/css/external/style.css
          :language: css
          :caption: index.html

.. grid::

    .. grid-item-card::

        .. raw:: html

            <iframe src="../../_static/examples/css/external/external.html"></iframe>

Glossary
--------

.. glossary::

    DRY
       Don't Repeat Yourself is a programming principle that encourages writing code in
       a way that avoids duplication. Instead of repeating the same code in multiple
       places, you write it once and reuse it whenever needed.
