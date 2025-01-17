Overview
=============================

ORM (Object-Relational Mapping) is a programming technique that connects your Python classes to tables in a relational
database. Instead of writing raw SQL to interact with your data, you can work directly with Python objects. Think of it
as a translator that turns your Python method calls into SQL queries behind the scenes. This helps you focus on what
your program should do, rather than how to speak the database's language!

Why Use an ORM?
---------------------

1. **Simplicity**: ORM code is plain or Python so you don't need to learn a second language such as SQL.

2. **Readability**: Mixing Python and SQL often makes the code hard to read as queries can be long and complex. Using
   an ORM makes your code easier to read.

3. **Security**: Since ORM handles the details of database queries, theres less chance of security issues such as SQL
   injection or accidentally exposing the wrong data to the user.

4. **Flexibility**: When using an ORM you can more easily change the type of database that holds your data since the
   database queries are handled by the ORM, rather than manual queries which might be database specific. Most ORMs
   support many database types.

5. **Model Changes**: Using an ORM helps manage changes to your database definitions. For example, if you change a
   column definition, or add a new column, an ORMs can automatically perform these changes to the database for you.
   automatically keep database tables in synchronisation with your

Generally ORMs save developers time and effort. However, using an ORM is not without downsides. By adding another
layer of software between your code and the database your queries may be slightly slower than if you had written
manually them yourself. Fortunately most ORMs allow you to write raw SQL in these edge cases.

Example
---------------------

