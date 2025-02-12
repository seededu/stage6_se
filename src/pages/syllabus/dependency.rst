Knowledge Graph
===============

.. graphviz::

    digraph syllabus {
        graph [ dpi = 300 ];

        subgraph cluster_Programming {
            label = "Programming Fundamentals";

            "Variables";
            "Data Types";

            "char";
            "string";
            "real";
            "float"
            "integer";
            "date and time";

            "Variables" -> "Data Types";

            "Data Types" -> "char";
            "Data Types" -> "string";
            "Data Types" -> "real";
            "Data Types" -> "float"
            "Data Types" -> "integer";
            "Data Types" -> "date and time";

            "Type Conversion";
            "Data Types" -> "Type Conversion";

            "Printing";
            "User Input";

            "String Formatting";
            "string" -> "String Formatting";

            "Comments";

            "Boolean Values";

            "Boolean Operations";
            "Boolean Values" -> "Boolean Operations";

            "Comparisons";
            "Boolean Values" -> "Comparisons";

            "If Statements";
            "Boolean Values" -> "If Statements";
            "Comparisons" -> "If Statements";

            "Conditionals";

            "Loops";

            "Functions";

        }
    }


