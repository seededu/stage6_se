from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'

db = SQLAlchemy(app)

# Define the Book model
class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    author = db.Column(db.String(100), nullable=False)
    publication_date = db.Column(db.String(10))
    genre = db.Column(db.String(50))


# Create the database if it doesn't exist
with app.app_context():
    db.create_all()

@app.route('/')
def home():
    # Query all books (empty for now)
    books = Book.query.all()
    return render_template('index.html', books=books)

@app.route('/add', methods=['POST'])
def add_book():
    title = request.form.get('title')
    author = request.form.get('author')
    publication_date = request.form.get('publication_date')
    genre = request.form.get('genre')
    
    new_book = Book(
        title=title,
        author=author,
        publication_date=publication_date,
        genre=genre
    )
    db.session.add(new_book)
    db.session.commit()
    
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True, reloader_type='stat', port=5000)
