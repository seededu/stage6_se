Templating
==========

As we've seen in previous examples, it's possible to return HTML code directly
from a route function, but this approach quickly becomes difficult to manage.
Imagine writing the same HTML structure repeatedly, or trying to change the
layout of multiple pages - it can become a real headache! Instead of writing
HTML inside our Python code, Flask allows us to use templates.

Templates make it possible to separate the HTML structure from the logic in our
Python code. Flask uses the `Jinja2
<https://jinja.palletsprojects.com/en/3.1.x/>`_ templating engine, which allows
us to create dynamic HTML pages by inserting Python-like logic (loops,
variables, etc.) into the HTML.

Jinja
-----

Jinja is a powerful templating language for Python. It allows you to embed
variables, use control structures like loops, and create reusable layouts.
Here's an example of how Jinja works:

.. code-block:: python
    :linenos:
    :emphasize-lines: 4, 7

    from jinja2 import Template

    # Create a Jinja2 template
    template = Template("Hello, {{ name }}!")

    # Render the template with a value for "name"
    rendered = template.render(name="John")
    print(rendered)

Explanation:

- Line 4: A template is created with a placeholder for the ``name`` variable.
- Line 7: The template is :term:`rendered<Render>` with the value ``"John"``
  passed to ``name``, and it outputs: ``"Hello, John!"``.

Jinja Syntax
------------

The `Template Designer Documentation
<https://jinja.palletsprojects.com/en/3.1.x/templates/>`_ provided by Jinja
outlines the syntax available inside Jinja templates including:

- variables
- filters
- loops

Templates in Flask
------------------

Flask looks for template files inside a folder called `templates` in your
project. Instead of returning HTML directly, you can load and render templates
using the ``render_template()`` function.

**Complete Example**

Let's see how we can use templates in the movie reviews website to display the
list of movies.

Project structure:

.. code-block:: text
    :emphasize-lines: 5
    :caption: Directory structure

    movie-reviews
    │
    ├── app.py
    ├── movies.db
    └── templates
        └── index.html

.. tab-set::

    .. tab-item:: Server

         .. code-block:: python
             :caption: app.py
             :linenos:
             :emphasize-lines: 15, 16

             from flask import Flask, render_template
             from sqlalchemy import create_engine, text

             app = Flask(__name__)

             # Connect to the database
             engine = create_engine('sqlite:///movies.db')

             @app.route('/')
             def home():
                 # SQL query to select all movies
                 query = text("SELECT * FROM reviews")
                 result = engine.execute(query).fetchall()

                 # Render the template and pass the result
                 return render_template('index.html', movies=result)

             app.run(debug=True)

         Explanation:

         *   :python:`render_template()` is used to:

             *   load the ``index.html`` file from the ``templates``` folder,
             *   pass the query :python:`result` to the template engine, named
                 :python:`movies` inside the template context.

    .. tab-item:: Template

         This is the ``index.html`` template file inside the ``templates`` folder:

         .. code-block:: html
             :caption: index.html
             :linenos:
             :emphasize-lines: 9-11

             <!DOCTYPE html>
             <html lang="en">
                 <head>
                     <title>Movie Reviews</title>
                 </head>
                 <body>
                     <h1>Movie Reviews</h1>
                     <ul>
                         {% for movie in movies %}
                             <li>{{ movie[1] }} ({{ movie[2] }}) - Score: {{ movie[5] }}</li>
                         {% endfor %}
                     </ul>
                 </body>
             </html>

         Explanation:

         *   Lines 9-11: The ``for`` loop iterates over each movie and displays its
             title, year, and score using Jinja2 syntax.

Extending Templates
-------------------

Flask templates can be extended to create a base layout that other pages can
inherit. This is useful when you have common elements like headers or footers
across multiple pages.

.. tab-set::

    .. tab-item:: Child Template

        .. code-block:: html
            :caption: index.html
            :linenos:
            :emphasize-lines: 1

            {% extends 'base.html' %}

            {% block title %}Home - Movie Reviews{% endblock %}

            {% block content %}
                <ul>
                    {% for movie in movies %}
                        <li>{{ movie[1] }} ({{ movie[2] }}) - Score: {{ movie[5] }}</li>
                    {% endfor %}
                </ul>
            {% endblock %}

        Explanation:

        *   ``{% extends 'base.html' %}`` makes ``index.html`` inherit the layout from
            ``base.html``.
        *   ``{% block title %}`` overrides the title from the base template.
        *   ``{% block content %}`` is overridden to display the list of movies.


    .. tab-item:: Base Template

        .. code-block:: html
            :caption: base.html
            :linenos:

            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <title>{% block title %}Movie Reviews{% endblock %}</title>
                </head>
                <body>
                    <header>
                        <h1>Welcome to the Movie Reviews Website</h1>
                    </header>

                    <div class="content">
                        {% block content %}{% endblock %}
                    </div>
                </body>
            </html>

        Explanation:

        *   ``{% block title %}`` and ``{% block content %}`` are placeholders that
            child templates can override.

Static Files in Templates
-------------------------

As we saw previously in :doc:`/web_part1/server_intro/flask_static`, Flask
serves static files like CSS, JavaScript, or images from a folder called
``static``.

We manually specified the path to a stylesheet. For example:

.. code-block:: html

    <link rel="stylesheet" type="text/css" href="/static/css/styles.css">

However this path will change if we change ``static_url_path`` when we create
the ``Flask`` object. To make sure that we correctly reference the path to
static files we can use the ``url_for`` template function.

Here's a simple example:

.. code-block:: html

    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">

**Complete Example**

Project structure:

.. code-block:: text
    :emphasize-lines: 6
    :caption: Directory structure

    movie-reviews
    │
    ├── app.py
    ├── movies.db
    ├── static
    │   └── style.css
    └── templates
        ├── base.html
        └── index.html

.. tab-set::

    .. tab-item:: Template

        .. code-block:: html
            :caption: base.html
            :linenos:
            :emphasize-lines: 5

            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <title>{% block title %}Movie Reviews{% endblock %}</title>
                    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
                </head>
                <body>
                    <header>
                        <h1>Welcome to the Movie Reviews Website</h1>
                    </header>

                    <div class="content">
                        {% block content %}{% endblock %}
                    </div>
                </body>
            </html>

        Explanation:

        *   Line 5: ``{{ url_for('static', filename='style.css') }}`` generates the
            correct URL to the ``style.css`` file.
        *   Now, the custom styles from ``style.css`` will be applied to all pages that
            use the ``base.html`` layout.


    .. tab-item:: CSS

        .. code-block:: css
            :caption: style.css
            :linenos:

                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                }

                h1 {
                    color: #333;
                }

                ul {
                    list-style-type: none;
                }

                li {
                    margin-bottom: 10px;
                }

Glossary
--------

.. glossary::

    Render
        Rendering templates is the process of combining a predefined HTML template with
        dynamic data on the server to generate a complete web page that is then sent to
        the user's browser. This allows for content to change while maintaining the
        same layout and structure.
