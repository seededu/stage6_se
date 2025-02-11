Variables in URLs
=================

In this section, we'll explore how Flask allows us to create dynamic web pages
by passing variables through URLs. This is useful when we want our web pages to
display different content depending on the value passed in the URL.

Basic Example
-------------

Let's start with a simple example where we'll use Flask to display a message
that includes a variable from the URL.

.. code-block:: python

    from flask import Flask

    app = Flask(__name__)


    @app.route("/<name>")
    def greet(name):
        return "Hello, {}!".format(name)


    app.run(debug=True, port=5000)

Explanation

- Defining the route:

  - The ``@app.route('/<name>')`` decorator tells Flask that when someone
    visits a URL that matches ``/<name>``, the `greet()` function should be
    executed.
  - ``<name>`` is a placeholder in the URL that acts as a variable. Whatever
    value the user types in place of ``<name>`` will be passed to the
    ``greet()`` function.

- Route function:

  - The function ``greet(name)`` accepts ``name`` as a parameter. Flask
    automatically extracts the value from the URL and passes it to the
    function.
  - We return a simple message that includes the ``name`` variable, which will
    be displayed on the web page.

Review Page
-----------

Now let's take a look at how we can use this concept in our "Movie Reviews"
website. We'll create a page that shows all the information for a movie review
based on its ``id``. The ``id`` is passed as a variable in the URL.

For example, visiting http://127.0.0.1:5000/movie/2 would display the details
of "Barbie."

.. tab-set::

    .. tab-item:: Server

        .. code-block:: python
            :caption: app.py
            :linenos:

            from flask import Flask, render_template
            from sqlalchemy import create_engine, text

            app = Flask(__name__)

            # Connect to the database
            engine = create_engine('sqlite:///movies.db')
            connection = engine.connect()

            @app.route('/movie/<int:movie_id>')
            def movie_page(movie_id):
                # Get the movie review by its ID
                query = text("SELECT * FROM reviews WHERE id={}".format(movie_id))
                result = connection.execute(query).fetchall()

                if len(result) > 0:
                    # Take first (hopefully the only) result
                    movie = result[0]
                    return render_template('movie_page.html', movie=movie)
                else:
                    return "Movie not found", 404

            app.run(debug=True, port=5000)

    .. tab-item:: Template

        .. code-block:: html
            :caption: movie_page.html
            :linenos:

            <!DOCTYPE html>
            <html>
                <head>
                    <title>{{ movie[1] }}</title>
                </head>
                <body>
                    <p><a href="/">Home</a></p>
                    <hr>

                    <h1>{{  movie[1] }} ({{ movie[2] }})</h1>
                    <p><b>Genre:</b> {{ movie[3] }}</p>
                    <p><b>Review Date:</b> {{ movie[4] }}</p>
                    <p><b>Score:</b> {{ movie[5] }}/10</p>
                    <p><b>Review:</b> {{ movie[6] }}</p>
                </body>
            </html>

Explanation

- Defining the Route:

  - The ``@app.route('/movie/<int:movie_id>')`` decorator registers a route
    where ``movie_id`` is an integer variable that will be extracted from the
    URL.
  - When someone visits ``/movie/1``, Flask will extract the value ``1`` and
    pass it to the ``movie_page()`` function as ``movie_id``.

- Function Logic:

  - Inside the ``movie_page()`` function, we use `movie_reviews.get(movie_id)`
    to retrieve the movie data that matches the given ``id``. If a movie with
    that ``id`` exists, it returns the corresponding data. If not, it returns a
    404 error with message ``"Movie not found"``.

- Rendering the Template:

  - The ``render_template('movie_page.html', movie=movie)`` line uses Flask's
    template engine to render an HTML page and pass the movie data to it.

Complete Example
----------------

Project structure:

.. code-block:: text

    ├── app.py
    ├── movies.db
    └── templates
        └── index.html
        └── movie_page.html

.. tab-set::

    .. tab-item:: Server

         .. code-block:: python
             :caption: app.py
             :linenos:

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

             @app.route('/movie/<int:movie_id>')
             def movie_page(movie_id):
                 # Get the movie review by its ID
                 query = text("SELECT * FROM reviews WHERE id={}".format(movie_id))
                 result = connection.execute(query).fetchall()

                 if len(result) > 0:
                     # Take first (hopefully the only) result
                     movie = result[0]
                     return render_template('movie_page.html', movie=movie)
                 else:
                     return "Movie not found", 404

             app.run(debug=True, port=5000)

    .. tab-item:: Home Page

         .. code-block:: html
             :caption: index.html
             :linenos:

             <!DOCTYPE html>
             <html lang="en">
                 <head>
                     <title>Movie Reviews</title>
                 </head>
                 <body>
                     <h1>Movie Reviews</h1>
                     <ul>
                         {% for movie in movies %}
                             <li><a href="/movie/{{ movie[0]}}">{{ movie[1] }} ({{ movie[2] }}) - Score: {{ movie[5] }}</a></li>
                         {% endfor %}
                     </ul>
                 </body>
             </html>

         Explanation:

         *   For each movie, we link to the corresponding movie page

    .. tab-item:: Movie Page

         .. code-block:: html
             :caption: movie_page.html
             :linenos:

             <!DOCTYPE html>
             <html>
                 <head>
                     <title>{{ movie[1] }}</title>
                 </head>
                 <body>
                     <h1>{{  movie[1] }} ({{ movie[2] }})</h1>
                     <p><strong>Genre:</strong> {{ movie[3] }}</p>
                     <p><strong>Review Date:</strong> {{ movie[4] }}</p>
                     <p><strong>Score:</strong> {{ movie[5] }}/10</p>
                     <p><strong>Review:</strong> {{ movie[6] }}</p>
                 </body>
             </html>
