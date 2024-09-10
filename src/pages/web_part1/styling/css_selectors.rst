.. role:: html(code)
   :language: html

.. role:: css(code)
   :language: css

Selectors
======================

Applying styling to individual elements will quickly become tedious when you have
a complicated document. For example, if you need to change the color of headings, you 
will need to search through the document to find all headings and replace the colour 
value.

For this reason, CSS selectors were created so that software engineers could define the 
style for each element in a single location. This follows a common software engineering 
principle known as "Don't Repeat Yourself" or :term:`DRY` for short.

Selectors allow software engineers to specify exactly which elements are to be affected 
by the style based on the element type, id or class.

General Syntax
--------------

Selectors are a way of specifying which page elements a style should be applied to. The 
syntax for selectors is the selector followed by a block of CSS declarations enclosed 
in curly braces

The syntax is:

.. code-block:: css

   selector {
      property1: value1;
      property2: value2
   }

where ``selector`` is a a reference to a particular element. The formatting is optional, 
in fact you can write it on a single line, but this is the conventional way of writing
CSS. 

Element Selectors
-----------------

All elements of the same type can be have a style applied to them by using the name of 
the element as the selector.

An example to change all paragraphs, :html:`<p>` to use a particular font size and 
color is:

.. code-block:: css

   p {
      font-size: 32px;
      color: red;
   }

In this case the selector is ``p``, which refers to the paragraph element or 
:html:`<p>` tag.

Internal CSS
------------

Internal CSS is written within a :html:`<style>` tag inside the :html:`<head>`` section 
of an HTML document and applies styles to the whole page.

You may place as many different selectors inside the :html:`<style>` tag as you like.

In the example below styles will be applied to all first level headings and 
paragraphs.

.. code-block:: html
   :caption: index.html

   <html>
      <head>
         <style>
            h1 {
               text-align: center;
            }

            p {
               color: red;
            }
         </style>
      <head>

      <body>

         <h1>My Business Website</h1>

         <p>Here's some inspiring text!</p>

      </body>
   </html>

External CSS
------------

Your CSS might become quite lenghty and hard to manage. To keep your HTML simple you 
can define the CSS in a separate file with a ``.css`` extension. To include the styles
defined in this file it is linked using a :html:`<link>` tag.

Example of external CSS definition:

.. code-block:: css
   :caption: style.css

   h1 {
      text-align: center;
   }

   p {
      color: red;
   }

.. code-block:: html
   :caption: index.html

   <html>
      <head>
         <link rel="stylesheet" href="style.css">
      <head>

      <body>

         <h1>My Business Website</h1>

         <p>Here's some inspiring text!</p>

      </body>
   </html>

Glossary
--------

.. glossary::
   DRY
      TODO

