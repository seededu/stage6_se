.. role:: html(code)
   :language: html

HTML
====================

HTML (Hypertext Markup Language) is the main language used to create and structure web 
pages. Web pages are the main content of the world wide web, which is the main public
hypertext network used today.

Your First HTML Document
------------------------

Below is an example of a simple HTML document.

.. code-block:: html
    :caption: index.html
    :linenos:

    <!DOCTYPE html>    
    <html>
        <title>My First HTML Document</title>
        <p>Hello World!</p>
    </html>

.. hint::

   Using a text editor paste the following HTML into a new document and
   save as ``index.html``. Open this file with your web browser.


Web Browser
-----------------------

A :term:`web browser` is a software application that transforms HTML documents into 
interactive pages. Web browsers are available on most modern computing devices 
inlcuding desktop, laptop and mobile devices. It is likely that you are using a web 
browser right now to read this text.

Examples of web browsers (sorted by market share [1]_):

* Chrome
* Safari
* Firefox
* Opera

At the core of a web browser contains is the :term:`engine`, which is responsible for 
interpreting HTML and :term:`rendering` it into a visual form, along with any multimedia
to be embded such as images.

.. warning::

    TODO: ADD IMAGE HERE SHOWING RELATIONSHIP BETWEEN BROWSER, ENGINE AND HTML FILE


HTML Standard
-------------

.. note::

    You can find the latest standard here `<https://html.spec.whatwg.org>`_.


HTML is standardized by the World Wide Web Consortium (W3C) and the Web Hypertext 
Application Technology Working Group (Web Hypertext Application Technology Working 
Group) to make sure that web pages work the same way across different web browsers and 
devices.

The HTML standard is important because, without a set of common rules, every browser 
might interpet HTML or display page content differently. Imagine if one browser showed 
a website with all the images out of order, while another browser made the text really 
small. The HTML  standard creates a consistent and reliable experience for everyone 
using the web.

The standard is also important for software engineers who are writing HTML. The 
standard sets rules for how HTML should be written. Software engineers must follow 
these rules to make sure their site looks and functions properly for everyone, no 
matter what browser they're using.

HTML Document Structure
-----------------------

Tags
^^^^^^^^^^^^^^^^^^^

The main building block of HTML are tags, which define how to display different parts 
of a webpage. Each tag is written inside angle brackets, like this: :html:`<tag>`.
A HTML page is a hierarchy of tags, with tags nesting inside each other.

Most  tags come in pairs with an opening tag, like :html:`<p>`, and a closing tag, like 
:html:`</p>`. The closing  tag is almost the same as the opening tag, but it has a 
forward slash / before the name. Everything between the opening and closing tags is 
affected by them.

Example of the paragraph, :html:`<p></p>`, tag:

.. code-block:: html

    <p>This is a paragraph of text.</p>


.. hint::

   Further detail about tags can be found on :doc:`tags_html`.

DOCTYPE declaration
^^^^^^^^^^^^^^^^^^^

All HTML documents start with a :html:`<!DOCTYPE>` declaration. This is 
considered different from a tag and does not have a matching closing tag. This 
declaration is used to specify the version of HTML standard that the rest of the 
document uses.

In most cases, you will want to use the HTML5 standard, which is indicated with the 
declaration

.. code-block:: html

    <!DOCTYPE html>

html tag
^^^^^^^^^^^^^^^^^^^

Next are the :html:`<html></html>` tags, which wraps around the rest of the document,
including the head and body tags.

.. code-block:: html

    <html>
        <!-- Document content goes here -->
    </html>


head tag
^^^^^^^^^^^^^^^^^^^

The head section, declared with :html:`<head></head>` tags, contains information about 
the webpage that is not directly visible to users. This section includes things like 
the title of the page (which shows up in the browser window or tab), links to external 
files like CSS for styling, and meta tags that help search engines understand the page. 

Example:

.. code-block:: html

    <head>
        <title>My Awesome Webpage</title>
        <link rel="stylesheet" href="styles.css">
    </head>

.. note:: 

    We will learn more about the options available in :doc:`/web/interactivity/index`.


body tag
^^^^^^^^^^^^^^^^^^^

The body section, declared with :html:`<body></body>` tags, contains everything that 
you actually see on the webpage, such as text, images, buttons, and links. This is 
where the main content of your webpage goes.

Example:

.. code-block:: html

    <body>
        <h1>Welcome to My Webpage!</h1>
        <p>This is a paragraph of text.</p>
        <img src="image.jpg" alt="A cool picture">
    </body>


Comments
^^^^^^^^^^^^^^^^^^^

It is common programming practice to document or explain pieces of code using comments,
which are lines in code that are ignored by the interpreter or compiler.

HTML also supports comments 

.. code-block:: html

    <!--This is a single line comment -->

    <!--
        This is a multi-line comment.
        Every line in this comment is ignored by the browser engine.
        <p>Even valid HTML is ignored such as this paragraph!</p>
    -->



A Complete Example
-----------------------

.. hint::

   Try this example yourself and change the text. Use the refresh function of your 
   browser to see changes as you make them.


.. code-block:: html
    :caption: index.html
    :linenos:

    <!DOCTYPE html>    
    <html>
        <head>
            <title>My Awesome Webpage</title>
        </head>
        <body>
            <h1>Welcome to My Webpage!</h1>
            <p>This is a paragraph of text.</p>
            <ol>
                <li>List item 1</li>
                <li>List item 2</li>
            </ol>
        </body>
    </html>

.. warning::

    TODO: ADD IMAGE HERE DIAGRAMMING DOCUMENT STRUCTURE



Glossary
--------

.. glossary::
    Web browser
        A web browser is a software application that transforms HTML documents into 
        interactive visual representations.

    Engine
        The :term:`web browser` engine is software for interpreting HTML and 
        :term:`rendering` it into a visual form, along with any multimedia to be embded 
        such as images. 

    Rendering
        The process of transforming HTML into a visual form.
    


References
-----------------------

.. [1] https://gs.statcounter.com/browser-market-share