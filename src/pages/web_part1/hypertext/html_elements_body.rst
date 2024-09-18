.. role:: html(code)
   :language: html

Body Elements
====================

The elements inside the body tag are placed in the order in which they are defined.

In the example below the vertical order of elements from top to bottom is the same
as the order they are defined: heading, paragraph and paragraph.

.. code-block:: html

   <h1>Main Heading</h1>

   <p>This is the first paragraph.</p>

   <p>This is the second paragraph.</p>


Block Elements
-----------------------

Block elements occupy the full width of the page and each one starts on a new line. 
Block elements help structure your content by organising it into sections, making it 
easier to read and navigate.

Common block elements include:

* :html:`<div>` for generic divisions or sections of a page
* :html:`<p>` for paragraphs
* :html:`<h1>`, :html:`<h2>`, etc for headings
* :html:`<ul>`, :html:`<ol>` for unordered and ordered lists
* :html:`<li>`, for list elements

Here are two list examples:

.. code-block:: html

   <ul>
      <li>First item</li>
      <li>Second item</li>
   </ul>

   <ol>
      <li>First item</li>
      <li>Second item</li>
   </ol>

.. note::
    
    We will learn more about the definition of block elements, their attributes, 
    behaviours and customisation in :doc:`/web_part1/styling/index`.

Inline elements
-----------------------

Inline elements are treated as part of the content of document text. In contrast to 
block elements they only take up as much space as needed and don't start on a 
new line. These elements allow you to style and add functionality to 
specific parts of your content, like making certain words bold or turning text into 
clickable links.

**Inline elements must be placed within an enclosing block element.**

Examples of inline elements include links:

* :html:`<a>` for anchors or hyperlinks
* :html:`<em>` for *italicised* text
* :html:`<b>` for **bold** text

Multimedia
-----------------------

Multimedia elements are used to display images, videos, and other media types on a 
webpage. These elements enhance your content by adding visual and interactive 
elements that engage users.

Examples of multimedia elements:

* :html:`<img>` for images
* :html:`<video>` for videos
* :html:`<audio>` for audio

Here is an example image. We specify ``src``, which is a URL of an image. The 
height specifies the height of the image in pixels.

.. code-block::

   <img src="/_images/chicken.jpg", width="400">


.. figure:: img/chicken.jpg
    :width: 400
    :align: center

    Mrs Weasley


Tables
-----------------------


Table elements allow you to organise data in rows and columns. The main tags used for 
tables include:

* :html:`<table>` to create the table, 
* :html:`<tr>` to define a row
* :html:`<th>` for table header cells, and 
* :html:`<td>` for individual data cells. 

The :html:`<td>` and :html:`<th>` tags are non-void elements and you can nest other 
tags within them.

Here's an example table 

.. code-block:: html

   <table>
      <tr>
         <th>Student Name</th>
         <th>Exam Score</th>
      </tr>
      <tr>
         <td>Stephen</td>
         <td>75</td>
      </tr>
      <tr>
         <td>Alison</td>
         <td>95</td>
      </tr>
   </table>

which would appear as

.. list-table::
   :widths: 25 25
   :header-rows: 1

   * - Student Name
     - Exam Score
   * - Stephen
     - 75
   * - Alison
     - 95

Glossary
--------

.. glossary::