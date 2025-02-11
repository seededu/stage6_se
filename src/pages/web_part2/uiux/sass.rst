CSS Preprocessors
=================

A CSS preprocessor is a scripting language that extends the capabilities of
standard CSS. It allows developers to write styles more efficiently by offering
features such as variables, nested rules, functions (mixins), and more. The
preprocessor then compiles these enhanced styles into standard CSS that
browsers can understand.

Motivation
----------

Imagine you have a website with several CSS files, and a specific shade of blue
(#3498db) is used for headings, buttons, and links across these files. If your
client decides to change this colour to a different shade (say #2980b9), you
would need to:

1. Open each CSS file.
2. Search for every instance of #3498db.
3. Replace it with the new colour #2980b9.

This process can be error-prone and time-consuming, especially for larger
projects with many files and uses of that colour. There's also a risk of
missing some instances or inadvertently changing values that shouldn't be
updated.

Sass
----

Sass (Syntactically Awesome Style Sheets) is one of the most popular CSS
preprocessors. It extends CSS with powerful features, making stylesheets easier
to write, maintain, and scale.

With Sass, you can define a variable for your commonly used colour once, and
then use that variable throughout your stylesheets.

Example
~~~~~~~

The example below contains a snippet of Sass code where variables are defined,
which will be substituted when compiled.

.. code-block:: css

    // Define variables
    $primary-color: #3498db;
    $font-stack: Helvetica, sans-serif;

    // Use variables in style rules
    body {
      font-family: $font-stack;
      color: $primary-color;
    }

When compiled, this Sass code converts to:

.. code-block:: css

    body {
      font-family: Helvetica, sans-serif;
      color: #3498db;
    }

Bootstrap and Sass
------------------

Bootstrap 5 is built using Sass, providing extensive customisation options. By
integrating Sass with Bootstrap 5, you can override Bootstrap variables and
customise the design to fit your project.

The general approach to integrating Bootstrap and Sass is to:

1. Create a SCSS (Sass CSS) file, which is a text file that

   1. contains your variables and CSS definitions
   2. imports the Bootstrap Sass source

2. Compile the SCSS file
3. Reference the compiled CSS in your HTML files or templates

Example
~~~~~~~

.. note::

    For this section, we will assume that Sass has been installed. You can
    follow the instructions here to install Sass https://sass-lang.com/install/

1. Create a SCSS file

.. code-block:: css

    // Override Bootstrap default variables before importing Bootstrap
    $primary: #e74c3c; // Custom primary colour

    // Import Bootstrap's Sass source
    @import "../node_modules/bootstrap/scss/bootstrap";

    // Additional custom styles can be added here

2. Compile your Sass file to CSS:

.. code-block:: css

    sass scss/custom.scss css/custom.css

3. Link the compiled CSS in your HTML:

.. code-block:: html

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="css/custom.css" />
      <title>Bootstrap 5 with Sass</title>
    </head>
    <body>
      <h1>Hello, world!</h1>
      <!-- Bootstrap components and custom content here -->
    </body>
    </html>
