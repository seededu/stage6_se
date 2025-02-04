.. role:: js(code)
   :language: javascript

Strings
===========

Strings are one of the most common data types in JavaScript, used to store and manipulate text. This page will
introduce you to defining strings, combining them, working with quotes, using common string methods, and formatting
text with template literals.

Defining Strings
---------------------

A string is a sequence of characters, such as letters, numbers, symbols, or spaces, enclosed in quotes.

JavaScript allows you to define strings using either single or double quotes.

**Single quotes**

.. code-block:: javascript

    let singleQuoteString = 'Hello, world!';

**Double quotes**

.. code-block:: javascript

    let doubleQuoteString = "Hello, world!";

Both single and double quotes work the same way, but you should be consistent in your code.

String Concatenation
----------------------

You can combine (or concatenate) strings using the + operator.

.. code-block:: javascript

    let firstName = "Alice";
    let lastName = "Johnson";
    let fullName = firstName + " " + lastName;
    console.log(fullName); // Prints: Alice Johnson

Nesting Quotes
----------------------

Sometimes, you need to include quotes inside a string. Use the opposite type of quote for the string and the nested quotes.

Example:

.. code-block:: javascript

    let sentence = "She said, 'JavaScript is fun!'";
    console.log(sentence); // Prints: She said, 'JavaScript is fun!'

If you must use the same type of quote, use a backslash (``\``) to escape the nested quotes:

.. code-block:: javascript

    let sentence = 'She said, "JavaScript is fun!"';
    let escapedSentence = 'It\'s a great day for coding.';
    console.log(escapedSentence); // Prints: It's a great day for coding.


Useful String Methods
----------------------

JavaScript strings come with built-in methods for performing common tasks. Here are some examples:

**Finding the Length of a String**

.. code-block:: javascript

    let greeting = "Hello, world!";
    console.log(greeting.length); // Prints: 13

**Accessing Characters with Indexing**

Strings are zero-indexed, meaning the first character is at position 0.

.. code-block:: javascript

    let word = "JavaScript";
    console.log(word[0]); // Prints: J
    console.log(word[4]); // Prints: S

**Splitting Strings**

You can split a string into an array of smaller strings using the split() method.

.. code-block:: javascript

    let sentence = "Learning JavaScript is fun!";
    let words = sentence.split(" "); // Splits by spaces
    console.log(words); // Prints: ['Learning', 'JavaScript', 'is', 'fun!']

**Converting to Upper or Lower Case**

.. code-block:: javascript

    let text = "JavaScript";
    console.log(text.toUpperCase()); // Prints: JAVASCRIPT
    console.log(text.toLowerCase()); // Prints: javascript

**Finding Substrings**

You can check if a string contains another string using includes().

.. code-block:: javascript

    let phrase = "I love programming!";
    console.log(phrase.includes("love")); // Prints: true


Template Literals
----------------------

Template literals make working with strings easier and more powerful. They use backticks (`````)
instead of quotes.

**Multiline Strings**

.. code-block:: javascript

    let multiline = `This is
    a string
    on multiple lines.`;
    console.log(multiline);


**Embedding Expressions**

You can insert variables or expressions directly into a string using ${}.

.. code-block:: javascript

    let person = "Alice";
    let age = 16;
    let message = `My name is ${person} and I am ${age} years old.`;
    console.log(message); // Prints: My name is Alice and I am 16 years old.


**Including Quotes Without Escaping**

.. code-block:: javascript

    let quote = `She said, "JavaScript is awesome!"`;
    console.log(quote);

Formatting Numbers
----------------------

When working with numbers, you can format them to a specific number of decimal places using the :js:`toFixed()` method.
The result is always returned as a string.

Example:

.. code-block:: javascript

    let price = 19.99;
    let formattedPrice = price.toFixed(1); // Keeps 1 decimal place
    console.log(formattedPrice); // Prints: 20.0

