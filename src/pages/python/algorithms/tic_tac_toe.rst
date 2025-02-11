Peer Review: Tic Tac Toe (Naughts and Crosses)
==============================================

    Shown below is a student's implementation of Tic Tac Toe along with their
    documentation. As a class, complete a project peer review for this student.

Tic Tac Toe
-----------

Introduction
~~~~~~~~~~~~

Tic Tac Toe, also called naughts and crosses is a 2-player game. It involves a
board containing a 9x9 grid. The first player is assigned an 'x' symbol and the
second player is assigned a 'o' symbol. Each player takes a turn placing their
symbol on an unoccupied square in the grid. The first play to achieve 3 symbols
in a row wins the game.

Demonstration of the program
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The program will ask each user for their name. For example, we might have the
players Alice and Bob. User input is shown in bold.

.. code-block:: text

    Player 1: Alice
    Player 2: Bob

The first player will be allocated the symbol ``X`` and the second player will
be allocated the symbol ``O``. The program will then present the players with
the following board and ask player 1 where they would like to go.

.. code-block:: text

    0|1|2
    -----
    3|4|5
    -----
    6|7|8

Player 1 should enter the number corresponding to the location on the board
that they would like to place their symbol. Here is an example of Player 1
placing their marker in position 4. The updated board will then be displayed to
the players.

.. code-block:: text

    Player 1's turn. Where would you like to go? 4
    0|1|2
    -----
    3|X|5
    -----
    6|7|8

Players take in turns entering a position, until someone wins. Here is an
example.

.. code-block:: text

    Player 1 wins!
    O|O|2
    -----
    O|X|5
    -----
    X|X|X

Implementation
~~~~~~~~~~~~~~

**Storing Data**

The board is represented using a list. This was deemed suitable since there 9
squares in the board are fixed, so each grid square can be allocated to an
index of the list. Empty board squares contain their index value. This is so
that when the board is printed the players can see how each value they enter
maps to a square on the board. The list stores board configurations as strings,
even though the numbers for empty strings could be stored as integers. The
decision to use strings was so that the data type of the list was kept
consistent throughout the program since user symbols ``'X'`` and ``'O'`` are
stored as strings.

The choice to map each square on the board to a number was to improve game
play. It was decided that it was easier for players to enter just 1 number
rather than to have to specify a row and column each time.

**Algorithm**

At the start we need to read in the player information and set up the Tic Tac
Toe Board. Then, until someone wins we do the following:

- Ask the current player where they would like to place their symbol
- Update the board with the players symbol
- Check whether the player has won or not
- Then we switch players and display the updated board

When once of the players wins we display a congratulatory message. Here's the
pseudocode for the algorithm:

.. code-block:: text

    BEGIN
        Get p1_name
        Get p2_name

        board = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

        Display board

        win = False
        current_player = 0
        WHILE win is False
            Get location
            IF current_player is 0 THEN
                Update board location with 'X'
            ELSE
                Update board location with 'O'
            ENDIF

            IF a player has won THEN
                Display congratulations message
            ENDIF

            Display board
            Switch player

        ENDWHILE
    END

Code Submission
~~~~~~~~~~~~~~~

.. code-block:: python

    p1_name = input("Player 1: ")
    p2_name = input("Player 2: ")

    board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]

    print("{}|{}|{}".format(board[0], board[1], board[2]))
    print("-----")
    print("{}|{}|{}".format(board[3], board[4], board[5]))
    print("-----")
    print("{}|{}|{}".format(board[6], board[7], board[8]))

    win = False
    current_player = 0
    while win == False:
        location = int(
            input(
                "Player {}'s turn. Where would you like to go? ".format(current_player + 1)
            )
        )
        if current_player == 0:
            board[location] = "X"
        else:
            board[location] = "O"

        if board[0] == board[1] and board[1] == board[2]:
            win = True
        if board[3] == board[4] and board[4] == board[5]:
            win = True
        if board[6] == board[7] and board[7] == board[8]:
            win = True
        if board[0] == board[3] and board[3] == board[6]:
            win = True
        if board[1] == board[4] and board[4] == board[7]:
            win = True
        if board[2] == board[5] and board[5] == board[8]:
            win = True

        if win == True:
            print("Player {} wins!".format(current_player + 1))

        print("{}|{}|{}".format(board[0], board[1], board[2]))
        print("-----")
        print("{}|{}|{}".format(board[3], board[4], board[5]))
        print("-----")
        print("{}|{}|{}".format(board[6], board[7], board[8]))

        if current_player == 0:
            current_player = 1
        else:
            current_player = 0
