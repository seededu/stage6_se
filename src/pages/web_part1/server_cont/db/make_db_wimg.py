from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, Date, text
import pandas as pd
from datetime import datetime
import os

# Check if 'movies.db' exists and delete it if found
db_path = 'movies_wimg.db'
if os.path.exists(db_path):
    os.remove(db_path)
    print(f"{db_path} has been deleted.")
else:
    print(f"{db_path} does not exist, proceeding to create a new database.")

# Define the SQLite database and table schema
engine = create_engine(f'sqlite:///{db_path}', echo=True)

connection = engine.connect()

connection.execute(text("""
    CREATE TABLE reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        release_year INTEGER NOT NULL,
        genre TEXT,
        review_date DATE,
        review_score INTEGER,
        review_text TEXT,
        poster_image_path TEXT
    );
"""))

# Read the CSV file with movie data
df = pd.read_csv('reviews.csv')

# Insert data using connection.execute and formatted strings

for index, row in df.iterrows():
    # Convert review_date to a datetime object if it exists
    review_date = 'NULL'
    if pd.notna(row['review_date']):
        review_date = f"'{datetime.strptime(str(row['review_date']), '%Y-%m-%d').date()}'"
    
    # Use formatted string to create the insert SQL query
    insert_statement = f"""
    INSERT INTO reviews (title, release_year, genre, review_date, review_score, review_text)
    VALUES (
        '{row['title'].replace("'", "''")}', 
        {row['release_year']}, 
        '{row['genre']}', 
        {review_date}, 
        {row['review_score']}, 
        '{row['review_text'].replace("'", "''")}'
    );
    """
    # Execute the SQL query
    connection.execute(text(insert_statement))


# Commit the transaction to save the changes
connection.commit()

# Close the connection
connection.close()

print("Data has been successfully inserted into the database.")
