Responsive Web Design
=====================

Responsive web design ensures that your website looks great and works well on
all devices, whether it’s a widescreen desktop, a tablet, or a smartphone.
Instead of designing separate versions of a website for each device, a
responsive website adapts to any screen size seamlessly.

Let's take a look at how to detect and respond to different device sizes. On
the following pages, we'll look at how to use frameworks to simplify this
process for us.

Flexbox and Grids
-----------------

When building responsive web designs, you must be able to control how elements
are arranged and spaced on a page. CSS provides two powerful tools for creating
layouts: Flexbox and Grid. These layout systems allow you to structure your
page while making it adaptable to different screen sizes.

You don’t have to pick one over the other. Many modern layouts use Grid for the
overall structure and Flexbox for arranging smaller components within the grid
items.

Flexbox
~~~~~~~

Flexbox, short for Flexible Box Layout, is a one-dimensional layout system.
It’s perfect for arranging items in a row or a column and controlling their
alignment, spacing, and order.

Key concepts:

- Flexbox works along a single axis (horizontal or vertical).
- Flexbox automatically adjusts item sizes and spacing to fit the container.

.. hint::

    For greater detail we recommend reading
    https://css-tricks.com/snippets/css/a-guide-to-flexbox/, which contains
    great visualisations to help understand Flexbox layouts.

**Example**

In the example below:

- The ``.container`` uses ``display: flex`` to enable Flexbox.
- ``justify-content: pace-around`` evenly spaces the items horizontally.
- ``align-items: center`` aligns the items vertically in the middle of the
  container.

.. code-block:: html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Flexbox Example</title>
        <style>
            .container {
                display: flex; /* Enables Flexbox */
                justify-content: space-around; /* Distributes items evenly */
                align-items: center; /* Centers items vertically */
                height: 200px;
                background-color: lightgray;
            }

            .item {
                width: 100px;
                height: 100px;
                background-color: lightblue;
                text-align: center;
                line-height: 100px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>
    </body>
    </html>

Grid
~~~~

Grid layout is a two-dimensional layout system, meaning it can handle both rows
and columns simultaneously. It’s ideal for creating complex layouts like entire
webpages or sections with rows and columns.

Key concepts:

- Grid allows precise control over rows, columns, and gaps.
- Grid simplifies layout tasks that would require nested containers with
  Flexbox.
- Grid Supports responsive design.

**Example**

In the example below:

- The ``.grid-container`` uses ``display: grid`` to enable Grid.
- ``grid-template-columns: 1fr 1fr 1fr`` divides the container into 3
  equal-width columns.
- ``gap: 10px`` adds spacing between the grid items.

.. code-block:: html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Grid Example</title>
        <style>
            .grid-container {
                display: grid; /* Enables Grid */
                grid-template-columns: 1fr 1fr 1fr; /* Creates 3 equal columns */
                gap: 10px; /* Adds space between items */
                background-color: lightgray;
                padding: 10px;
            }

            .grid-item {
                background-color: lightgreen;
                text-align: center;
                padding: 20px;
            }
        </style>
    </head>
    <body>
        <div class="grid-container">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
        </div>
    </body>
    </html>

Detecting the Device Display Size
---------------------------------

Websites use CSS Media Queries to detect the size of the user’s screen. Media
queries allow you to apply different styles based on the device’s width,
height, or even orientation (portrait or landscape).

**Example: Media Query for Different Screen Sizes**

In this example:

- On small screens (e.g., smartphones), the .box element takes up 100% of the
  width and has a light blue background.
- On medium screens (e.g., tablets), it takes up 50% of the width and turns
  light green.
- On large screens (e.g., desktops), it takes up 30% of the width and changes
  to coral.

.. code-block:: html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Responsive Example</title>
        <style>
            /* Default styles for all devices */
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                margin: 20px;
            }

            .box {
                width: 100%;
                padding: 20px;
                background-color: lightblue;
                margin: 10px auto;
            }

            /* Styles for devices wider than 768px (tablets and up) */
            @media (min-width: 768px) {
                .box {
                    width: 50%;
                    background-color: lightgreen;
                }
            }

            /* Styles for devices wider than 1200px (desktops) */
            @media (min-width: 1200px) {
                .box {
                    width: 30%;
                    background-color: coral;
                }
            }
        </style>
    </head>
    <body>
        <div class="box">Responsive Box</div>
    </body>
    </html>

Adjusting Content Size and Layout
---------------------------------

Responsive design isn't just about changing colours or widths — it’s also about
rearranging content to fit smaller or larger screens.

Adjusting Font Sizes
~~~~~~~~~~~~~~~~~~~~

Smaller devices often require larger, more readable fonts. Media queries can
help you adjust font sizes based on the screen width.

**Example**

.. code-block:: html

    <style>
        body {
            font-size: 16px; /* Default font size */
        }

        @media (max-width: 600px) {
            body {
                font-size: 14px; /* Smaller font for small screens */
            }
        }

        @media (min-width: 1200px) {
            body {
                font-size: 18px; /* Larger font for large screens */
            }
        }
    </style>

Adjusting Layouts
~~~~~~~~~~~~~~~~~

Using flexbox or CSS grid, you can rearrange content dynamically. For example,
a three-column layout might stack into a single column on smaller screens.

**Example**

In this example:

- On larger screens, the .box elements are arranged in a three-column layout.
- On smaller screens, the boxes stack vertically, one on top of the other.

.. code-block:: html

    <style>
        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .box {
            flex: 1 1 calc(33.33% - 10px); /* Three-column layout */
            background-color: lightgray;
            padding: 20px;
            text-align: center;
        }

        @media (max-width: 600px) {
            .box {
                flex: 1 1 100%; /* Stack items vertically on small screens */
            }
        }
    </style>
    <div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
    </div>

The Viewport Meta Tag
---------------------

You might have noticed the meta tag in the header of the earlier example. This
tag tells the browser how to display and scale your webpage on devices with
different screen sizes, especially on mobile devices.

Without the viewport meta tag, browsers will assume a fixed width for the
webpage, often around 980px, regardless of the device's actual screen size.
This assumption made sense in the early days of the web when most users
accessed sites on desktop computers, but it causes problems on modern devices
with smaller screens.

Without the viewport meta tag you might face the following issues:

1. **Incorrect Scaling on Mobile Devices**, where the browser shrinks the
   entire webpage to fit its fixed width into the screen.
2. **Malfunction of Responsive Layouts**, since without the viewport meta tag,
   the browser may not correctly interpret responsive styles, and your
   responsive design won’t work as intended.

**Meta Viewport Tag - Parameter Explanation**

.. code-block:: html

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

1. ``width=device-width``:

   - Sets the width of the viewport to match the screen width of the device.
   - For example:

     - On a phone with a 360px-wide screen, the viewport will also be 360px
       wide.
     - This allows media queries to apply styles based on the actual screen
       size.

2. ``initial-scale=1.0``:

   - Sets the initial zoom level of the webpage.
   - A value of 1.0 means the page will not be zoomed in or out when it first
     loads.
   - Without this attribute, the browser may zoom out to fit a larger virtual
     viewport, making content appear tiny.
