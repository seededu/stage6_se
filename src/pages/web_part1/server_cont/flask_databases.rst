.. role:: python(code)
   :language: python

Databases
====================

Imagine you're building a personal movie review website. You need a place to store information about the movies you review—things like the title, release year, your review score, and what you thought of the movie. A database is perfect for this because it helps store, organize, and retrieve all of this data in a structured way.

In this tutorial, we’ll use a Flask web app connected to a database through SQLAlchemy Core. You’ll learn how to connect to a database, display movies from it, list the most recent reviews, and show the top-rated movies, all using `session.execute` with raw SQL queries.



---

### First Example: Home Page Showing a List of Movies

#### Concept: Displaying Data from a Database
In this example, we’ll display a list of all movies from our database on the home page. We’ll use `session.execute` to run a raw SQL query that selects all movies.

#### Code Example:
```python
from flask import Flask, render_template
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)

# Connect to the database
engine = create_engine('sqlite:///movies.db')
Session = sessionmaker(bind=engine)
session = Session()

@app.route('/')
def home():
    # SQL query to select all movies
    query = text("SELECT * FROM movies")
    result = session.execute(query).fetchall()

    return render_template('home.html', movies=result)

if __name__ == '__main__':
    app.run(debug=True)
```

#### Code Breakdown:
- **Session**: We use the `session.execute` method to run raw SQL queries directly.
- **Querying all movies**: The query `"SELECT * FROM movies"` selects all rows and columns from the `movies` table.
- **Rendering the movies**: The results are passed to the `home.html` template to be displayed as a list on the webpage.

Here’s what the `home.html` template might look like:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Reviews</title>
</head>
<body>
    <h1>Movie Reviews</h1>
    <ul>
        {% for movie in movies %}
        <li>{{ movie.title }} ({{ movie.release_year }}) - Score: {{ movie.review_score }}</li>
        {% endfor %}
    </ul>
</body>
</html>
```

---

### Second Example: Showing Most Recently Reviewed Movies

#### Concept: Ordering Data by Date
Now, we want to display the most recently reviewed movies first on the home page. We’ll modify the SQL query to sort the results by `review_date` in descending order.

#### Code Example:
```python
from sqlalchemy import text

@app.route('/')
def home():
    # SQL query to select movies, ordered by review date (most recent first)
    query = text("SELECT * FROM movies ORDER BY review_date DESC")
    result = session.execute(query).fetchall()

    return render_template('home.html', movies=result)
```

#### Code Breakdown:
- **Ordering by review date**: The query `"SELECT * FROM movies ORDER BY review_date DESC"` sorts the movies by the `review_date` column in descending order.
- **Fetching and displaying the results**: We use `session.execute(query)` to run the query and fetch the results.

This query ensures that the most recent movie reviews are shown first.

---

### Third Example: Showing the Top 10 Movies

#### Concept: Limiting Results and Sorting by Review Score
In this example, we’ll display the top 10 highest-rated movies, sorted by their `review_score`. We’ll modify the SQL query to limit the number of results and order them by score.

#### Code Example:
```python
@app.route('/top')
def top_movies():
    # SQL query to select the top 10 movies, ordered by review score
    query = text("SELECT * FROM movies ORDER BY review_score DESC LIMIT 10")
    result = session.execute(query).fetchall()

    return render_template('top.html', movies=result)
```

#### Code Breakdown:
- **Ordering by review score**: The query `"SELECT * FROM movies ORDER BY review_score DESC LIMIT 10"` sorts the movies by `review_score` in descending order.
- **Limiting results**: The `LIMIT 10` part ensures that only the top 10 movies are returned.
- **Rendering the top 10 movies**: The result is passed to a template (`top.html`) to display the top-rated movies.

Here’s the `top.html` template to display the top 10 movies:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top 10 Movies</title>
</head>
<body>
    <h1>Top 10 Movies</h1>
    <ul>
        {% for movie in movies %}
        <li>{{ movie.title }} ({{ movie.release_year }}) - Score: {{ movie.review_score }}</li>
        {% endfor %}
    </ul>
</body>
</html>
```

---

### Conclusion

Using SQLAlchemy Core with Flask, combined with raw SQL queries through `session.execute` and `text`, allows us to directly control and execute SQL in a flexible way. In this tutorial, we learned how to:
1. Connect to a database and run basic queries using SQLAlchemy sessions.
2. Display all movies on a webpage.
3. Show the most recent reviews by ordering results.
4. Display the top 10 highest-rated movies.

This approach gives you fine control over your database interactions, making it perfect for dynamic web apps that manage structured data efficiently!