Developing Software: Tic Tac Toe Example
========================================

There are lots of things that need to be considered when developing software. Below we'll explore different stages of software development for a simple scenario in which we want to develop a tic tac toe game.

Requirements Definition
-----------------------

The purpose of this first stage is to outline the project and understand the expectations, needs and constraints of the stakeholders. The stakeholders are parties involved with the project, e.g. your clients who might be selling your product, the end users and the software developers and designers on the project. At this stage it's important that you decide on the scope of the project, identify and mitigate risks and decide what the project priorities are, outline milestones, as well as consider accessibility requirements, e.g. should it be colour-blink friendly. There maybe some general technical specifications, e.g. you want the project implemented in Python, but the fine details will be considered at a later stage. The requirements definition should also outline what it looks like for the project to be successful. All of this information should be documented with all involved parties reviewing and agreeing to it so that there is a shared understanding of the goals and expectation of the project.

For example, if you were developing a tic tac toe game these are the types of things you might include in the requirements definition:

* Explanation of the core game play. Clarify whether it's meant to facilitate human-human games or human-computer games. Is the program meant to allow users to play multiple times? If so, does the program keep track of the total wins for each player?

* What should the interface look like? How should the players interact with the program?

* What are the project constraints? When does the game need to be developed by? What is the budget for hiring developers? Which programming language should be used to implement it? Which external libraries can be used?

* What are the key milestones of this project?

* What does a successful working project look like?

Determining Specifications
--------------------------

This stage involves translating high-level requirements outlined in the requirements definition into technical descriptions. For example, if you were developing a tic tac toe game, the requirements definition might say they want players to be able to enter their name. The specifications may then define requirements stating the minimum and maximum number of characters the name can be and what characters can be used, e.g. it may limit names to containing alphanumeric characters only.

The specifications may also provide comprehensive details for how the program should operate. For example, in tic tac toe, it might specifically outline all possible win scenarios for the tic tac toe game and it might also outline all valid/invalid moves. For example, a player removing their token ('X' or 'O') from the board in an invalid move. The specifications may also outline how errors should be handled

The specifications should serve as a reference for the the developers and designers working on the project.

Design
------

The design stage is crucial for determining how the software will operate and also what the interface might look like. At this stage you would think about how data should be represented or stored and the algorithms your program would implement.

**Software Design**

In a tic tac toe game you would need to think of the data structure you would use to represent a board configuration. You might use a list containing 9 elements corresponding to the 9 squares on the tic tac toe board. The element contains the corresponding index number for an empty square, otherwise it contains the symbol corresponding to a player's marker. For example, the list ``['0', '1', 'X', '3', 'O', 'X', '6', '7', 'O']``, would correspond to the board

.. code-block:: text

    0|1|X
    -----
    3|O|X
    -----
    6|7|O


For the tic tac toe game you might also draw flowcharts and write pseudocode outline the algorithm used to implement the game as well as any subroutines that will be implemented. All of the considerations that when into these decisions should also be explained in the documentation.

A useful tool during the design phase are Input Process Output (IPO) charts. This is a table can help you identify visualise problems and identify the process/algorithm you would need to solve it. For example, you might want to implement a subroutine that checks whether a player has won the game. First you start by filling in the output. This describes what you want the program to do.

.. list-table:: 
   :header-rows: 1
   :widths: 30 30 30

   * - Input
     - Process
     - Output
   * - |
     - |
     - **Boolean True/False.** True if one play has three tokens in a row, otherwise false.

Then you think about what information you would need to obtain this output. This information becomes your input. In this case, we would need to know the current board configuration.

.. list-table:: 
   :header-rows: 1
   :widths: 30 30 30

   * - Input
     - Process
     - Output
   * - **The board configuration** provided as a list
     - |
     - **Boolean True/False.** True if one play has three tokens in a row, otherwise false.

Finally you need to determine what processes will need to apply to the input(s) to obtain the output.

.. list-table:: 
   :header-rows: 1
   :widths: 30 30 30

   * - Input
     - Process
     - Output
   * - **The board configuration** provided as a list
     - **Check for the same token in:** each row, each column, each diagonal
     - **Boolean True/False.** True if one play has three tokens in a row, otherwise false.


You can continue to refine this chart by adding in more steps.

.. list-table:: 
   :header-rows: 1
   :widths: 30 40 30

   * - Input
     - Process
     - Output
   * - **The board configuration** provided as a list e.g. ``board = ['0', '1', 'X', '3', 'O', 'X', '6', '7', 'O']``
     - **Check for the same token in:** each row ``board[0] == board[1] == board[2]``, ``board[3] == board[4] == board[5]``, ``board[6] == board[7] == board[8]`` each column ``board[0] == board[3] == board[6]``, ``board[1] == board[4] == board[7]``, ``board[2] == board[5] == board[8]`` each diagonal ``board[0] == board[4] == board[9]``, ``board[2] == board[4] == board[6]``
     - **Boolean True/False.** True if one play has three tokens in a row, otherwise false.

You can use your IPO chart to help you design your algorithms.

**Interface Design**

Often you will need to design what your final product will look like. This often includes drawing wireframes or sketches, deciding what navigation buttons might look like, selecting fonts and choosing colour schemes. For example, you might choose to host your tic tac toe game online with an interface where plays can drag and drop tokens onto a board. You would need to design what this site might look like, which includes and is not limited to: layout, colours, artistic styles, navigation, text fonts, animations. You could even include sound effects.

Development
~~~~~~~~~~~

At the development stage the project is converted into code. At this stage you'll need to consider which programming language and platform or IDE will be used, as well as how the project will be backed up, which often involves using a version control system. 

As the software is being written it's also important to be mindful that the code should be written for maximum readability, which includes implementing good programming practices like using descriptive variable names and adding comments when necessary. 

Integration
~~~~~~~~~~~

The integration stage involves combining the project with other existing projects and that they integrate seamlessly. For example, if you have a games website which hosts various games a player can choose from, you may need to integrate your tic tac toe game into this site. You will need to ensure that the all aspects of the site still work fits together without any issues. There may be additional software that you would need to write to do this. For example, the games site might keep track of each player's favourite games, and you would need to ensure that tic tac toe could be added to a player's list of favourite games.

Testing and Debugging
~~~~~~~~~~~~~~~~~~~~~

The goal of the testing and debugging stage is to identify and fix all possible errors that might arise from your project. At this stage you will want to check **boundary values** and what happens when the program is given **faulty or abnormal data**. If your program is behaving in unexpected ways, it can often be useful to apply **desk checking** to help you identify and solve bugs. Depending on your project you may also want to perform stress testing, .e.g simulating lots of simultaneous users or users making lots of requests, and you may also want to perform security tests.

When testing a tic tac toe game the main thing you would be testing is whether or not the game works. You can play through a couple of times to simulate normal game play, but then you will want to 'break the game', e.g. providing invalid inputs or illegal moves so you can see how your program responds. You may also want to invite a small number of players (beta testing) to test your game and report and issues or bugs they may encounter.

Installation
~~~~~~~~~~~~

At the installation stage you will need to ensure that your program can be deployed and run seamlessly on other devices and/or platforms. This includes determining what platforms your program might run on, e.g. maybe it only runs on desktops but won't work on a phone. Maybe it runs on the web but is only supported by some browsers.

For a tic tac toe game implemented only in Python, installation will largely involve copying the relevant .py files across and running the main script.

Maintenance
~~~~~~~~~~~

Even once your have finalised and released your program it will undoubtedly require ongoing maintenance. This is because other softwares your program integrates with are constantly undergoing upgrades to become more efficient or to address security issues. As these other softwares update you will also need to ensure your program stays up to date. Over time bugs may also surface that you will have to fix.

In addition, it's also possible that you will want to make improvements and upgrades to your program by extending its functionality. For example, in a tic tac toe game you might want to introduce a human-computer mode where a human plays against the computer.

