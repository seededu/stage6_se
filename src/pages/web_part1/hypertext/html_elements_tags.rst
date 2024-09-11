.. role:: html(code)
   :language: html

Elements and Tags
====================

As mentioned earlier, the main building block of HTML are tags, which define how to 
display different parts of a webpage. Each tag is written inside angle brackets, 
like this: :html:`<tag>`. A HTML page is a hierarchy of tags, with tags nesting inside 
each other.

These tags represent page :term:`elements` and can be divided into two types:

* non-void elements
* void elements

Non-void elements
-----------------------

A non-void element consist of a an opening tag like :html:`<tag>`, content inside the 
tag and a closing tag, like  :html:`</tag>`. Closing tags are marked by the forward 
slash  :html:`/` before the name.

Example syntax of non-void element tag structure:

.. code-block:: html

    <tag>
        Tag content is placed between opening and closing tags
    </tag>

.. attention::
    

    Don't skip the end tag! Some browsers may attempt to repair tags when interpreting
    HTML, however this behaviour cannot be relied on.

    Find more details in the `standard <https://www.w3.org/TR/2011/WD-html-markup-20110
    113/syntax.html#syntax-elements>`_.


Void elements
-----------------------

Void elements are special and do not contain any content. A common example is the 
horizontal rule tag, which creates a thin horizontal line across the page.

In the example below, the :html:`<hr>` tag is used between sections on the page. Note 
that it doesn't require closing.

.. code-block:: html

    <p>This is the last paragraph in the section</p>

    <hr>

    <h2>Sub-heading</h2>

    <p>This is the first paragraph in a new section</p>

.. hint::
    
    Find more details in the `standard <https://www.w3.org/TR/2011/WD-html-markup-20110
    113/syntax.html#syntax-elements>`_.

Nesting Tags
-----------------------

Non-void element tags support nesting, meaning you can place one set of tags inside 
another. We call a tag that encloses other tags a :term:`parent`, while the tags inside 
it are the :term:`children`.

For example, if you want to make a word bold within a paragraph, you can do 
this:

.. code-block:: html

    <p>This is a <strong>bold</strong> word in a paragraph.</p>

This is valid because the :html:`<strong></strong>` tags are contained within the 
enclosing :term:`contents` of the :term:`parent` :html:`<p></p>` tags.

Every end tag must be contained within the :term:`contents` of the tag in which the 
starting tag is contained.

If you accidentally misnest the tags like this:

.. code-block:: html

    <p>This is a <strong>bold</p> word in a paragraph.</strong>

It becomes invalid, because the closing tag of :html:`</strong>` is outside the 
enclosing contents of the :html:`<p></p>` tags.

Tag Attributes
-----------------------

Tag attributes provide a mechanism for supplying more information, setting parameters
or customisation.

Key points:

* each tag defines its own set of attributes
* attributes are specified in the start tag only
* attributes are specified as name-value pairs
* attributes are not case sensitive, but lowercase is recommended
* you should enclose values in quote marks

Here's the general syntax of tag attributes, where each attribute has an associated 
value:

.. code-block:: html

    <tag attribute1="value1" attribute2="value2">
        The tag content
    </tag>

The anchor tag, :html:`<a>`, used to specify hyperlinks provides a good example of
attributes since the hyperlink is set by the `href` attribute.

.. code-block:: html

    <a href="https://google.com/">Let's go to Google!</a>


Tag Rules Summary
-----------------------

Tags must obey the following rules:

1. Non-void elements require opening and closing tags
2. Close tags within their nesting scope 
3. Some tags are self-closing
4. Tag names are not case-sensitive, but lowercase is recommended
5. Attributes should be properly used inside tags


Glossary
--------

.. glossary::
    Children
        TODO.

    Elements
        TODO.
    
    Contents
        TODO.
    
    Parent
        TODO