Objects
=======

Objects provide a way to organise data and functionality. They are used to represent
real-world entities, group related data together, and enable object-oriented
programming.

In JavaScript an object is a collection of properties, where each property is a
key-value pair. The values can be any type, including numbers, strings, arrays,
functions, or even other objects.

Defining an Object
------------------

**Syntax**

You can define an object using curly braces ``{}`` containing a sequence of property and
value pairs that represent the properties and methods. We will look at methods in a
later section.

.. code-block:: javascript

    let objectName = {
        property1: value1,
        property2: value2,
        ...
        propertyN: valueN,
    };

where

- ``objectName`` is the variable name holding the object
- ``property1`` is the name of the first property
- ``value1`` is the value associated with ``property1``

**Example**

.. code-block:: javascript

    let person = {
        name: "Alice",
        age: 25,
        isStudent: true
    };

    console.log(person);

.. code-block:: html

    { name: 'Alice', age: 25, isStudent: true }

Accessing Object Properties
---------------------------

You can access object properties using dot or bracket notation.

**Dot Notation**

.. code-block:: javascript

    console.log(person.name); // Prints: Alice

**Bracket Notation**

Use this when the property name is dynamic or contains special characters.

.. code-block:: javascript

    console.log(person["age"]); // Prints: 25

Adding and Modifying Properties
-------------------------------

You can add properties to and modify the value of existing properties of an object.

**Add a Property**

.. code-block:: javascript

    person.city = "Sydney";
    console.log(person); // { name: 'Alice', age: 25, isStudent: true, city: 'Sydney' }

**Modify a Property**

.. code-block:: javascript

    person.age = 26;
    console.log(person.age); // Prints: 26

Methods in Objects
------------------

A method is a function stored as a property of an object.

**Example**

.. code-block:: javascript

    let car = {
        brand: "Toyota",
        start: function() {
            console.log("The car has started.");
        }
    };

    car.start();

.. code-block:: html

    The car has started.

Classes
-------

A class is a template for creating objects. It defines properties and methods that the
objects will have.

**Syntax**

.. code-block:: javascript

    class ClassName {
        constructor(parameter1, parameter2) {
            this.property1 = parameter1;
            this.property2 = parameter2;
        }

        method1() {
            // Code here
        }

        method2() {
            // Code here
        }
    }

Where

- ``ClassName`` is the name of the class you are defining
- ``constructor`` is the method that is called when an instance of the class, i.e. an
  object, is created.
- ``parameters`` are a list of parameters passed to the constructor
- ``method1`` and ``method2`` are method definitions

**Example**

.. code-block:: javascript

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.alive = True
        }

        greet() {
            console.log(`Hello, my name is ${this.name}.`);
        }
    }

    let alice = new Person("Alice", 25);
    console.log(alice.name); // Prints: Alice
    alice.greet(); // Prints: Hello, my name is Alice.

Classes: A Thin Wrapper
-----------------------

In JavaScript, classes provide a way to create and organise objects, but at their core,
they are essentially a thin wrapper around JavaScript’s built-in object and prototype
system.

JavaScript has always been object-oriented, even before the introduction of the class
keyword in ES6. Classes were introduced to make object creation and inheritance more
readable and familiar for developers coming from other languages like Java or Python.

**Best Practices**

- Use plain objects for simple, ad-hoc data structures or when flexibility is required.
- Use classes when you need to enforce structure, create reusable blueprints, or handle
  complex inheritance.
