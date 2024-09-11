.. role:: html(code)
   :language: html

.. role:: css(code)
   :language: css

Using ID and Class
============================

Element ID
------------

Every HTML element can have an associated unique identifier. This is useful for when 
you wish to uniquely style a single element on your page.

Element IDs are assigned using the ``id`` attribute, which must be unique within the
HTML document.

Here is an example:

.. code-block:: html

   <h1 id="heading1">This is a paragraph of text.</h1>

   <p id="para1">This is a <strong id="bolded-text">paragraph</strong> of text.</p>

In the example there are three id's assigned:

* ``heading1`` to the first level heading :html:`<h1>`
* ``para1`` to the paragraph :html:`<p>`
* ``bolded-text`` to the strong text :html:`<strong>`

**Rules for IDs:**

* ids are case sensitive
* ids must contain at least one character
* ids cannot start with a number
* ids must not contain whitespaces e.g. spaces and tabs

ID Selectors
------------------------

To select based on id, use a ``#`` followed by the id as the selector e.g.

.. code-block:: css

   #id {
      property1: value1;
      property2: value2
   }

An example:

.. code-block:: html
   :caption: index.html

   <html>
      <head>
         <style>
            #heading1 {
               text-align: center;
            }
         </style>
      <head>

      <body>

         <h1 id="heading1">My Business Website</h1>

      </body>
   </html>


Element Class
------------------------

HTML elements can optionally belong to one or more classes. This is commonly used in 
combination with element selectors so that you can create differently styled versions of 
each element. For example, you may want two different heading styles. 

Classes are assigned using the ``class`` attribute, which can be repeated throughout 
the HTML document and even applied to elements of different types. 

Here's an example:

.. code-block:: html

    <p class="main-para">This is a paragraph of text.</p>

    <p class="quote-para">Talk is cheap. Show me the code.</p>

In the example there are two classes named, applied to different paragraphs:

* ``main-para``
* ``quote-para``

**Rules for Classes:**

* class names are case sensitive

Class Selectors
------------------------

To select based on class, use a ``.`` followed by the class nam,e as the selector e.g.

.. code-block:: css

   .class {
      property1: value1;
      property2: value2
   }

In the example below you can see how the second paragraph belongs to two classes,
which contribute different aspects of the styling, which are italics and center text 
alignment.

.. code-block:: html
   :caption: index.html

   <html>
      <head>
         <style>
            .main-para {
               text-align: left;
            }

            .italic {
                font-style: italic;
            }

            .quote-para {
               text-align: center;  
            }
         </style>
      <head>

      <body>
        <p class="main-para">This is a paragraph of text.</p>
        <p class="quote-para italic">Talk is cheap. Show me the code.</p>
      </body>
   </html>

To limit the class to specific element types place the element type before the `.` In 
the example below only :html:`<p>` elements with ``class="quote-para"`` will be 
center-aligned.

.. code-block:: css

    p.quote-para {
        text-align: center;  
    }

Grouping Selectors
------------------------

In cases where you want to apply the same styling to multiple selectors you can group 
them up as shown in the example below using commas to separate each selector:

.. code-block:: css

    h1, h2, p {
        text-align: center;
        color: red;
    }

Descendant Selector
------------------------

To limit the scope of a selector to a particular parent tag you can use the descendant 
selector syntax which is a sequence of selectors separated by whitespace.

The example below selects all :html:`<p>` elements nested inside :html:`<div>` 
elements, including further descendents.

.. code-block:: css

    div p {
        background-color: yellow;
    }

Child Selector
------------------------

To limit the scope of a selector to the immediate content of a parent element you can 
use a child selector, which is a sequence of selectors sepearated by right angle 
brackets.

The following example selects all :html:`<p>` elements that are immediate children of 
a :html:`<div>` element.

.. code-block:: css

    div > p {
        background-color: yellow;
    }




