.. role:: js(code)
   :language: javascript

Front End Frameworks
========================

Building a responsive website from scratch can be a lot of work. Fortunately, front-end frameworks like Bootstrap can
make your life much easier! They provide pre-designed styles, responsive layouts, and powerful components that allow
you to create beautiful, functional websites without starting from zero.

In this page, we’ll dive into `Bootstrap 5 <https://getbootstrap.com>`_, one of the most popular front-end frameworks,
and show you how to use it effectively.

What Are Front-End Frameworks?
---------------------------------

A front-end framework is a collection of pre-written CSS and JavaScript that simplifies the process of designing and
building websites. Instead of writing styles and scripts from scratch, you can use a framework to:

- Create responsive designs effortlessly.
- Add stylish components like buttons, modals, and navigation bars with minimal effort.
- Save time and focus on your website’s content and functionality.

Getting Started
---------------------------------

To use Bootstrap, you need to include its CSS and JavaScript files in your project. The easiest way to do this is by
using a Content Delivery Network (CDN).

Adding Bootstrap to Your Project
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Add the following ``<link>`` and ``<script>`` tags to the <head> and just before the closing <body> tag of your HTML
file:

.. code-block:: html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bootstrap Example</title>
        <!-- Bootstrap CSS -->
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet">
    </head>
    <body>
        <!-- Content goes here -->

        <!-- Bootstrap JavaScript Bundle -->
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js">
        </script>
    </body>
    </html>

Bootstrap's Grid System
---------------------------------

The grid system is one of Bootstrap’s most powerful features. It divides your webpage into rows and columns, making it
easy to create responsive layouts.

Key Concepts:

- A page is divided into 12 columns per row.
- You define how many columns an element should take up.
- Bootstrap automatically adjusts the layout based on the screen size.

**Example**

Explanation

- The `.row` creates a horizontal row.
- Each `.col-4` takes up 4 of the 12 available columns, creating a 3-column layout.
- On smaller screens, the columns automatically stack vertically.

.. code-block:: html

    <div class="container">
        <div class="row">
            <div class="col-4" style="background-color: lightblue;">Column 1</div>
            <div class="col-4" style="background-color: lightgreen;">Column 2</div>
            <div class="col-4" style="background-color: lightcoral;">Column 3</div>
        </div>
    </div>

Responsive Design and Breakpoints
------------------------------------

Bootstrap’s grid is responsive by default, but you can customize how it behaves at different screen sizes using
breakpoints. Breakpoints are predefined widths that let you control the layout for specific device sizes.

**Breakpoints in Bootstrap**

When using classes such as ``col-4``, you can optionally specify the breakpoint by appending one of the class infixes
defined in the table below.

By default, or without the infix, the breakpoint is defined at the "Extra small" level e.g. ``col-12`` defines a 12
column width at the extra small breakpoint, while ``col-lg-4`` defines a 4 column width at the large breakpoint.

It is good practice to define your layout, i.e. assign classes, for each breakpoint size that you anticipate.

 =================== ============= ============
  Breakpoint          Class infix   Dimensions
 =================== ============= ============
  Extra small         None          <576px
  Small               sm            ≥576px
  Medium              md            ≥768px
  Large               lg            ≥992px
  Extra large         xl            ≥1200px
  Extra extra large   xxl           ≥1400px
 =================== ============= ============

**Example**

Explanation:

- On extra-small screens, each ``.col-12`` spans the full width.
- On medium screens, each ``.col-md-6`` spans half the row.
- On large screens, each ``.col-lg-4`` spans one-third of the row.

.. code-block:: html

    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4" style="background-color: lightblue;">Box 1</div>
            <div class="col-12 col-md-6 col-lg-4" style="background-color: lightgreen;">Box 2</div>
            <div class="col-12 col-lg-4" style="background-color: lightcoral;">Box 3</div>
        </div>
    </div>

Styling
------------------------------------

Bootstrap comes with tons of prebuilt CSS classes that save you time when styling your webpage.

.. hint::

    For a full listing of the classes and components please refer directly to the Bootstrap 5 documenation here
    https://getbootstrap.com/docs/5.3/getting-started/introduction/

Classes
^^^^^^^^^^^^^^^^^^

Below are some of the most commonly used classes to give you an idea of what's possible.

**Typography Classes**

Bootstrap provides many common text styles as classes

- ``text-center``: Centers text.
- ``fw-bold``: Makes text bold.
- ``text-muted``: Applies a lighter text color.

**Button Classes**

Adding buttons with different meanings is straight forward with the ``btn`` classes.

- ``btn`` and ``btn-primary``: Create a button with a primary style.
- ``btn-danger``, ``btn-success``: Use other prebuilt button styles.

**Spacing Classes**

Bootstrap provides consistent spacing through their ``m`` and ``p`` classes for margins and padding.

- ``m-3``: Adds margin to all sides.
- ``p-4``: Adds padding to all sides.
- ``mt-2``: Adds margin to the top only.

Example

.. code-block:: html

    <div class="container">
        <h1 class="text-center fw-bold">Welcome to Bootstrap!</h1>
        <button class="btn btn-primary m-3">Primary Button</button>
        <button class="btn btn-danger">Danger Button</button>
        <p class="text-muted mt-3">This is some muted text.</p>
    </div>

Components
^^^^^^^^^^^^^^^^^^

One of the most exciting features of Bootstrap is its wide range of prebuilt components. These components save you
time and effort by providing ready-made, customizable elements like cards and forms.

**Cards**

Cards are a versatile component for displaying content in a structured, visually appealing way. For example you might
use cards to present products on a store website.

Example

.. code-block:: html

    <div class="card" style="width: 18rem;">
        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Placeholder Image">
        <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">This is a simple card example using Bootstrap.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

Explanation:

- The ``card`` class styles the container.
- Additional classes like ``card-title`` and ``card-text`` format the content inside the card.
- The ``card-img-top`` class ensures the image sits nicely at the top of the card.

**Forms**

Forms are an essential part of any website. Using the bootstrap form components and classes allows you to make them
responsive.

Example

.. code-block:: html

    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

Explanation:

- The ``form-control`` class styles ``input`` fields.
- The ``form-label`` and ``form-text`` classes apply professional styling.





