Top-down and Bottom-up Design
=============================

Software design can be approached in two major ways: **top-down** and **bottom-up**. Each has its own advantages, limitations, and typical use cases.

Top-Down Design
---------------

The top-down design method begins with a high-level view of the system. The overall problem is subdivided into broad components, and each of these components is then further broken down into more detailed modules or functions. This process continues until all parts are small enough to be implemented and tested.

The process of repeatedly breaking down a system design or development into more detail is called **refinement**.

Often top-down design starts with designing a core or central control function.

**Example**

Suppose you want to design a text-based Python calculator. 

With a top-down design and development approach you might first outline a single ``main()`` function with **placeholder** functions:

* Displays a menu of operations (add, subtract, multiply, divide).

* Reads user input for the chosen operation.

* Asks for the numbers involved.

* Calls the appropriate function to perform the calculation.

* Displays the result.

Which might look like:

.. code-block:: python

    print('Welcome to SimpleCalc!')

    operation = get_operation()

    number1, number2 = get_two_numbers()

    result = process(operation, number1, number2)

    print('The result is {}'.format(result))

So far, we've designed the flow of data, functions and their parameters. From here in our design process we can successively add functionality by specifying the individual functions.

For example we might specify the ``process`` function 

.. code-block:: python

    def process(operation_str, number1 number2):

    if operation == 'add':
        result = add(number1, number2)
    elif operation == 'subtract':
        result = subtract(number1, number2)
    elif operation == 'multiply':
        result = multiply(number1, number2)
    elif operation == 'divide':
        result = divide(number1, number2)
    else:
        result = None

    return result

Afterwards we are left to define the functions ``add``, ``subtract`` and the other functions in our program.

Bottom-Up Design
----------------

The bottom-up design method starts with the **lowest-level** modules (or utilities) and gradually combines them to form larger systems. Rather than beginning with a central control function, developers focus on creating reusable components that can be integrated later.

**Example**

Imagine you are building a library for text-manipulation tools. Instead of planning the entire toolset from the start, you might create small, general-purpose functions first, then integrate them into a larger application. This means that if you want to add functionality later, they can be more easily assembled from your existing functions.

You might start by defining a function like the one below:

.. code-block:: python

    def remove_all(text, chars):
        for c in chars:
            text = text.replace(c, '') # replaces c with an empty string
        return text

Then we can re-use this function when adding more functionality to our library. In the example below the functions ``remove_punctuation`` and ``remove_digits`` rely on the base function we defined earlier.

.. code-block:: python

    def remove_all(text, chars):
        for c in chars:
            text = text.replace(c, '')
        return text

    def remove_punctuation(text):
        punctuation = '.,!?;:\'\"-()[]{}'
        return remove_all(text, punctuation)

    def remove_digits(text):
        digits = '0123456789'
        return remove_all(text, digits)

When to Choose Which Approach?
------------------------------

* **Top-Down** is helpful when you have a good grasp of the overall requirements and want to define how the system flows from the start. It’s also handy for new systems where the “big picture” is clear.

* **Bottom-Up** excels when you already have or are building a set of reusable modules (libraries or frameworks) that can be stitched together. It’s also useful for rapid prototyping, where building small, testable components first can guide the final design.

In practice, many software development projects use **a hybrid** approach—some aspects are outlined from the top, while existing libraries or incremental components are integrated from the bottom.

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Which best describes the **top-down** software design approach?

    A. First build small, reusable utility functions and then combine them into a bigger system.

    B. Start with an overall idea of the system, then break it down into smaller parts.

    C. Develop all components in parallel and integrate at the end.

    D. Use iterative, test-driven development for each module.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    True or False, In the bottom-up approach, a main control module is typically defined first to orchestrate all submodules.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Give one advantage of using a bottom-up approach in Python specifically.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*