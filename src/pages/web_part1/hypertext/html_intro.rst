.. |base_url| replace:: replacement *text*

HTML
====

HTML (Hypertext Markup Language) is the main language used to create and
structure web pages. Web pages are the main content of the world wide web,
which is the main public hypertext network used today.

Your First HTML Document
------------------------

Below is an example of a simple HTML document.

.. literalinclude:: ../../_static/examples/html/hello_world.html
    :language: html
    :caption: index.html

.. grid::

    .. grid-item-card::

        .. raw:: html

            <iframe class="sd-w-100" height="200px" src="../../_static/examples/html/hello_world.html"></iframe>

Web Browser
-----------

A :term:`web browser` is a software application that transforms HTML documents
into interactive pages. Web browsers are available on most modern computing
devices including desktop, laptop and mobile devices. It is likely that you are
using a web browser right now to read this text.

Examples of web browsers (sorted by market share [1]_ ):

- Chrome
- Safari
- Firefox
- Opera

At the core of a web browser contains is the :term:`engine`, which is
responsible for interpreting HTML and :term:`rendering` it into a visual form,
along with any multimedia to be embedded such as images.

HTML Standard
-------------

.. note::

    You can find the latest standard here https://html.spec.whatwg.org.

HTML is standardised by the World Wide Web Consortium (W3C) and the Web
Hypertext Application Technology Working Group (Web Hypertext Application
Technology Working Group) to make sure that web pages work the same way across
different web browsers and devices.

The HTML standard is important because, without a set of common rules, every
browser might interpret HTML or display page content differently. Imagine if
one browser showed a website with all the images out of order, while another
browser made the text really small. The HTML standard creates a consistent and
reliable experience for everyone using the web.

The standard is also important for software engineers who are writing HTML. The
standard sets rules for how HTML should be written. Software engineers must
follow these rules to make sure their site looks and functions properly for
everyone, no matter what browser they're using.

HTML Document Structure
-----------------------

Tags
~~~~

The main building block of HTML are :term:`tags <tag>`, which define how to
display different parts of a webpage. Each tag is written inside angle
brackets, like this: ``<tag>``. A HTML page is a hierarchy of tags, with tags
nesting inside each other.

Most tags come in pairs with an opening tag, like ``<p>``, and a closing tag,
like ``</p>``. The closing tag is almost the same as the opening tag, but it
has a forward slash / before the name. Everything between the opening and
closing tags is affected by them.

Example of the paragraph, ``<p></p>``, tag:

.. code-block:: html

    <p>This is a paragraph of text.</p>

Example of a heading, ``<h1></h1>``, tag:

.. code-block:: html

    <h1>This is a heading.</h1>

.. hint::

    Further detail about tags can be found on :doc:`html_elements_tags`.

DOCTYPE declaration
~~~~~~~~~~~~~~~~~~~

All HTML documents start with a ``<!DOCTYPE>`` declaration. This is considered
different from a tag and does not have a matching closing tag. This declaration
is used to specify the version of HTML standard that the rest of the document
uses.

In most cases, you will want to use the HTML5 standard, which is indicated with
the declaration

.. code-block:: html

    <!DOCTYPE html>

html tag
~~~~~~~~

Next are the ``<html></html>`` tags, which wraps around the rest of the
document, including the head and body tags.

.. code-block:: html

    <html>
        <!-- Document content goes here -->
    </html>

head tag
~~~~~~~~

The head section, declared with ``<head></head>`` tags, contains information
about the webpage that is not directly visible to users. This section includes
things like the title of the page (which shows up in the browser window or
tab), links to external files like CSS for styling, and meta tags that help
search engines understand the page.

Example:

.. code-block:: html

    <head>
        <title>My Awesome Webpage</title>
        <link rel="stylesheet" href="styles.css">
    </head>

.. note::

    We will learn more about the options available in
    :doc:`/web_part1/styling/index`.

body tag
~~~~~~~~

The body section, declared with ``<body></body>`` tags, contains everything
that you actually see on the webpage, such as text, images, buttons, and links.
This is where the main content of your webpage goes.

Example:

.. code-block:: html

    <body>
        <h1>Welcome to My Webpage!</h1>
        <p>This is a paragraph of text.</p>
        <img src="image.jpg" alt="A cool picture">
    </body>

Comments
~~~~~~~~

It is common programming practice to document or explain pieces of code using
comments, which are lines in code that are ignored by the interpreter or
compiler.

HTML also supports comments

.. code-block:: html

    <!--This is a single line comment -->

    <!--
        This is a multi-line comment.
        Every line in this comment is ignored by the browser engine.
        <p>Even valid HTML is ignored such as this paragraph!</p>
    -->

A Complete Example
------------------

.. hint::

    Try this example yourself and change the text. Use the refresh function of
    your browser to see changes as you make them.

.. literalinclude:: ../../_static/examples/html/intro_complete.html
    :language: html
    :caption: index.html

.. grid::

    .. grid-item-card::

        .. raw:: html

            <iframe class="sd-w-100" height="200px" src="../../_static/examples/html/intro_complete.html"></iframe>

Glossary
--------

.. glossary::

    Web browser
        A web browser is a software application that transforms HTML documents into
        interactive visual representations.

    Engine
        The :term:`web browser` engine is software for interpreting HTML and
        :term:`rendering` it into a visual form, along with any multimedia to be embedded
        such as images.

    Rendering
        Rendering is the process by which a web browser interprets HTML, CSS, and
        JavaScript code to display a webpage on your screen. It turns the code into
        the visible elements you interact with, like text, images, and buttons.

    Tag
        A tag is a piece of code that tells the browser how to display content. Tags
        usually come in pairs: an opening tag (like ``<p>``) to start the element and a
        closing tag (like ``</p>``) to end it. Together, they define the start and end
        of a page element.

References
----------

.. [1] https://gs.statcounter.com/browser-market-share
