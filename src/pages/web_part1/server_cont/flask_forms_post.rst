Forms - Part 2
==============

In this section, we'll learn how to make HTML forms that send the form data
using a HTTP ``POST`` request and how Flask handles such form submissions.
We'll also cover how to handle file uploads.

Forms that use ``POST`` requests send data in the body of the request and are
used for forms that submit data for the web server to retain or file uploads.

Forms that use ``POST`` requests are commonly used for:

- Login and registration pages
- Adding or updating data (e.g., reviews, blog posts, comments)

Form Example
------------

Here's a HTML form that collects a user's name and email:

.. code-block:: html
    :linenos:
    :emphasize-lines: 8

    <!DOCTYPE html>
    <html>
        <head>
            <title>Simple Form</title>
        </head>
        <body>
            <h1>Contact Form</h1>
            <form action="/submit" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>

                <input type="submit" value="Submit">
            </form>
        </body>
    </html>

Explanation

- Form Element

  - ``<form action="/submit" method="POST">`` creates a form that submits data
    to the ``/submit`` URL using the POST method.

- Input Fields

  - ``<input type="text" id="name" name="name">`` creates a text input for the
    user's name.
  - ``<input type="email" id="email" name="email">`` creates an email input.

- Submit Button

  - ``<input type="submit" value="Submit">`` creates a button to send the form
    data to the server when clicked.

Handling Form Data
------------------

Here's how to handle the form data in Flask:

.. code-block:: python

    from flask import Flask, request

    app = Flask(__name__)

    @app.route("/submit", methods=["POST"])
    def submit_form():
        name = request.form["name"]
        email = request.form["email"]
        return f"Name: {name}, Email: {email}"


    app.run(debug=True, port=5000)

Explanation

- Route Definition

  - The route ``/submit`` listens for POST requests. We specify this with
    ``methods=['POST']`` so Flask knows this endpoint will handle form
    submissions.

- Accessing Form Data

  - ``request.form['name']`` and ``request.form['email']`` access the submitted
    form data. The ``request.form`` dictionary contains the data sent by the
    form.

- Returning a Response

  - The form data is displayed back to the user by returning a string with the
    name and email values.

Example: New Movie Review
-------------------------

Let's build a form for adding a new movie review to our "Movie Reviews"
website. We'll create a form page to submit data such as the movie title,
release year, genre, review score, and review text. The review date will be
automatically set.

Importantly we will need two route functions in our Flask app for the form:

- the first to return the form HTML
- the second to process the form data

Project structure:

.. code-block:: text
    :caption: Directory structure

    movie-reviews
    │
    ├── app.py
    ├── movies.db
    └── templates/
        ├── index.html
        └── new_review.html

.. tab-set::

    .. tab-item:: Server

        .. code-block:: python
            :caption: app.py
            :linenos:

            from flask import Flask, request, redirect, url_for, render_template
            from sqlalchemy import create_engine, text
            from datetime import datetime

            app = Flask(__name__)

            # Connect to the database
            engine = create_engine('sqlite:///movies.db')
            connection = engine.connect()

            @app.route('/add_review', methods=['GET'])
            def show_form():
                return render_template('add_review.html')

            @app.route('/add_review', methods=['POST'])
            def add_review():
                # Get data from the form
                title = request.form['title']
                release_year = request.form['release_year']
                genre = request.form['genre']
                review_score = request.form['review_score']
                review_text = request.form['review_text']

                review_date = datetime.now().strftime("%Y-%m-%d")

                # Insert the review into the "database"
                insert_statement = '''
                    INSERT INTO reviews (title, release_year, genre, review_date, review_score, review_text)
                    VALUES ('{}', {}, '{}', {}, {}, '{}');
                '''.format(title, release_year, genre, review_date, review_score, review_text)

                # Execute the SQL query
                connection.execute(text(insert_statement))

                # Redirect to the form page
                return redirect(url_for('add_review'))

            app.run(debug=True, port=5000)

    .. tab-item:: Review Form

        .. code-block:: html
            :caption: add_review.html
            :linenos:

            <!DOCTYPE html>
            <html>
                <head>
                    <title>Add Movie Review</title>
                </head>
                <body>
                    <h1>Add a New Movie Review</h1>
                    <form action="/add_review" method="POST">
                        <label for="title">Movie Title:</label>
                        <input type="text" id="title" name="title"><br><br>

                        <label for="release_year">Release Year:</label>
                        <input type="number" id="release_year" name="release_year"><br><br>

                        <label for="genre">Genre:</label>
                        <input type="text" id="genre" name="genre"><br><br>

                        <label for="review_score">Review Score (1-10):</label>
                        <input type="number" id="review_score" name="review_score"><br><br>

                        <label for="review_text">Review Text:</label><br>
                        <textarea id="review_text" name="review_text"></textarea><br><br>

                        <input type="submit" value="Submit Review">
                    </form>
                </body>
            </html>

Explanation

- HTML Form

  - The form collects details like the movie title, release year, genre, score,
    and review text.
  - When the form is submitted, it sends a POST request to ``/add_review``.

- Flask Handling

  - The ``add_review()`` function receives the form data, extracts it using
    ``request.form``, and adds the review to database.

- Redirecting

  - After the review is added, the user is redirected back to the form page to
    indicate success.

HTML Forms - Uploading Files
----------------------------

Here's an example of an HTML form that allows users to upload files:

.. code-block::

    <form action="/upload" method="POST" enctype="multipart/form-data">
        <label for="file">Choose a file:</label>
        <input type="file" id="file" name="file">
        <input type="submit" value="Upload">
    </form>

Explanation:

- The ``enctype="multipart/form-data"`` attribute is required for forms that
  handle file uploads.
- The ``<input type="file">`` element allows the user to choose a file to
  upload.

Handling File Data
------------------

When a file is uploaded, Flask uses the ``request.files`` dictionary to access
the file. Flask also allows you to save the file to the server.

.. code-block::

    from flask import Flask, request

    app = Flask(__name__)

    @app.route('/upload', methods=['POST'])
    def upload_file():
        if 'file' not in request.files:
            return "No file part"

        file = request.files['file']

        if file.filename == '':
            return "No selected file"

        # Save the file to the uploads directory
        file.save(f'uploads/{file.filename}')

        return f"File {file.filename} uploaded successfully!"

    app.run(debug=True, port=5000)

Explanation

- ``request.files['file']`` retrieves the uploaded file.
- ``file.save()`` saves the file to a specified directory on the server.

Example: Image Uploads
----------------------

To allow users to upload an image along with their movie review, we need to
modify both the form and the Flask code.

Project structure:

.. code-block:: text

    ├── app.py
    ├── movies.db
    └── templates/
        └── index.html
        └── new_review.html
    └── uploads/

.. tab-set::

    .. tab-item:: Server

        .. code-block:: python
            :caption: app.py
            :linenos:

            from flask import Flask, request, redirect, url_for
            from sqlalchemy import create_engine, text
            from datetime import datetime
            import os

            app = Flask(__name__)

            UPLOAD_FOLDER = 'uploads/'
            app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

            movie_reviews = []

            @app.route('/add_review', methods=['POST'])
            def add_review():
                # Get form data
                title = request.form['title']
                release_year = request.form['release_year']
                genre = request.form['genre']
                review_score = request.form['review_score']
                review_text = request.form['review_text']

                review_date = datetime.now().strftime("%Y-%m-%d")

                # Handle file upload
                if 'image' in request.files:
                    image = request.files['image']
                    if image.filename != '':
                        image_path = os.path.join(app.config['UPLOAD_FOLDER'], image.filename)
                        image.save(image_path)
                    else:
                        image_path = None
                else:
                    image_path = None

                # Insert the review into the "database"
                insert_statement = f'''
                    INSERT INTO reviews (title, release_year, genre, review_date, review_score, review_text, image_path)
                    VALUES ('{}', {}, '{}', {}, {}, '{}', '{}');
                '''.format(title, release_year, genre, review_date, review_score, review_text, image_path)

                # Execute the SQL query
                connection.execute(text(insert_statement))

                return redirect(url_for('add_review'))


            @app.route('/add_review', methods=['GET'])
            def show_form():
                return render_template('add_review.html')

            app.run(debug=True, port=5000)

    .. tab-item:: Review Form

        .. code-block:: html
            :caption: new_review.html
            :linenos:
            :emphasize-lines: 24,25,26

            <!DOCTYPE html>
            <html>
                <head>
                    <title>Add Movie Review</title>
                </head>
                <body>
                    <h1>Add a New Movie Review</h1>
                    <form action="/add_review" method="POST" enctype="multipart/form-data">
                        <label for="title">Movie Title:</label>
                        <input type="text" id="title" name="title"><br><br>

                        <label for="release_year">Release Year:</label>
                        <input type="number" id="release_year" name="release_year"><br><br>

                        <label for="genre">Genre:</label>
                        <input type="text" id="genre" name="genre"><br><br>

                        <label for="review_score">Review Score (1-10):</label>
                        <input type="number" id="review_score" name="review_score"><br><br>

                        <label for="review_text">Review Text:</label><br>
                        <textarea id="review_text" name="review_text"></textarea><br><br>

                        <!-- New file upload field -->
                        <label for="image">Upload Poster Image:</label>
                        <input type="file" id="image" name="image"><br><br>

                        <input type="submit" value="Submit Review">
                    </form>
                </body>
            </html>

Explanation

- The form now includes a file input field for uploading a movie poster.
- The ``add_review()`` function checks for the image, saves it in the
  ``uploads/`` folder, and stores the file path in the review data.

To store the image path in the database, the ``reviews`` table should have an
additional column, which can be achieved with the following SQL:

.. code-block::

    ALTER TABLE reviews ADD COLUMN poster_image_path TEXT;

You can download a version of the database with this change
:download:`movies.db <db/movies_wimg.db>`.
