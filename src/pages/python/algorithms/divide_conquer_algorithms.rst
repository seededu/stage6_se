Applying Divide and Conquer Algorithms
======================================

**Recall**

Divide and conquer algorithms are a class of algorithms that solve problems by taking the following approach:

    Take a problem and beak it down into smaller problems of the same type. These subproblems are then solved independently, usually in parallel (i.e. at the same time), after which their solutions can be combined to solve the original problem.

Typically divide and conquer algorithms adhere to the following structure:

1. **Divide.** The problem is divided into smaller subproblems.

2. **Conquer.** Each subproblem is solved.

3. **Combine.** The results of each subproblem are combined to solve the original problem.

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    Suppose you had a jigsaw puzzle and a lot of class mates. Describe how you could apply a divide and conquer approach to solve your jigsaw puzzle. You should explicitly think about how you would apply the divide, conquer and combine steps.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    Suppose you had a haystack with 100 needles in it and a lot of friends. Describe how you could apply a divide and conquer approach to find all the needles. You should explicitly think about how you would apply the divide, conquer and combine steps.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Study the following algorithm ``mystery``, which takes as input the integers ``x`` and ``y``. Determine and describe its purpose.

    .. code-block:: text

        BEGIN mystery(x, y)
    
            if y = 1 THEN
                return x
            ENDIF
            
            IF y is even THEN
                RETURN mystery(x, y/2) * mystery(y/2)
            ELSE
                RETURN mystery(x, (y-1)/2) * mystery((y+1)/2)
            ENDIF

        END mystery(x, y)

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*