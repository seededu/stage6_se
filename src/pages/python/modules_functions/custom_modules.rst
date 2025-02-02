.. role:: python(code)
   :language: python

Custom Modules
==============

There are lots of Python modules that exist for us to use. E.g. ``math``, ``random``, ``time`` and ``datetime`` modules.

But if we want to write our own custom functions we can actually write our own modules! We just need to create a Python file:

.. code-block:: text

   module.py


where we write all of our functions. We can then import this as we would with our usual modules.

.. code-block:: text

   import module

To use a function in our module, we use:

.. code-block:: text

   module.function()

.. dropdown:: Code Challenge: Rectangle Properties
    :color: warning
    :icon: star

    Write a module called ``rectangle`` that can be used to calculate properties of rectangles. You should be able to import functions from you module into your main script. Your module should contain the following 3 functions.

    **Area specification** (written in ``rectangle.py``)

    Formula for the area of a rectangle

    :math:`\text{area} = \text{width} \times \text{height}`

    * name: ``area``

    * parameters: ``width`` (``int`` or ``float``), ``height`` (``int`` or ``float``)

    * return: the area of the rectangle (``int`` or ``float``)

    **Perimeter specification** (written in ``rectangle.py``)

    Formula for the perimeter of a rectangle

    :math:`\text{perimeter} = 2\times\text{width} + 2 \times \text{height}`

    * name: ``perimeter``

    * parameters: ``width`` (``int`` or ``float``), ``height`` (``int`` or ``float``)

    * return: the perimeter of the rectangle (``int`` or ``float``)

    **Diagonal specification** (written in ``rectangle.py``)

    Formula for the diagonal of a rectangle

    :math:`\text{diagonal} = \sqrt{\text{width}^2 + \text{height}^2}`

    * name: ``perimeter``

    * parameters: ``width`` (``int`` or ``float``), ``height`` (``int`` or ``float``)

    * return: the perimeter of the rectangle (``int`` or ``float``)

    **Examples** (running from ``main.py``)

    .. code-block:: python

        import rectangle

        print(rectangle.area(2, 10))
        print(rectangle.perimeter(5, 7))
        print(rectangle.diagonal(3, 4))

    .. code-block:: text

        20
        24
        5.0

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code Challenge: Intergalactic
    :color: warning
    :icon: star

    Write a program that calculates an object's weight in *Newtons* on the surface of:

    * Earth, and

    * another planet,

    to four decimal places.

    Your project must consists of two files:

    1. ``intergalactic.py`` - takes care of input/output and running the program

    2. ``physics.py`` - holds functions for the calculations

    **Acceleration specification**  (written in ``physics.py``)

    Formula for acceleration due to gravity on a planet's surface

    :math:`a = \frac{G m}{r^2}`

    where :math:`G = 6.67430\times10^{-11}` is the gravitational constant and :math:`m`` and :math:`r`` are the mass and radius of the planet respectively.

    * name: ``acceleration``

    * parameters: ``planet_mass`` (``float`` expected - kg), ``planet_radius`` (``float`` expected - m)

    * return: acceleration due to gravity on the planet's surface (``float``)

    **Weight specification**  (written in ``physics.py``)

    Formula for calculating weight from object's mass and acceleration

    :math:`w = mg`

    where :math:`w`` is the weight of the object in Newtons, :math:`m`` is the mass of the object in kg and :math:`a`` is the acceleration due to gravity on the planet. By default :math:`a = 9.80665` m/s/s.

    * name: ``weight``

    * parameters: ``object_mass`` (``float`` expected - kg), ``planet_acceleration`` (``default=9.80665``,``float`` expected - m/s/s)

    * return: object's weight (float)

    In your ``intergalactic.py`` file you should write a program that asks the user for an objects mass, planet's mass and planet's radius. Your program should then tell the user the weight of the given object on Earth and the weight on the specified planet to 4 decimal places.

    **Example 1** (running from ``intergalactic.py``)

    .. code-block:: text

        Object's mass (kg): 100
        Other planet's mass (kg): 0.642e24
        Other planet's radius (m): 3396000
        Weight on Earth (Newtons): 980.6650
        Weight on other Planet (Newtons): 371.5398

    **Example 2** (from ``intergalactic.py``)

    .. code-block:: text

        Object's mass (kg): 50
        Other planet's mass (kg): 1.898e27
        Other planet's radius (m): 7.1492e7
        Weight on Earth (Newtons): 490.3325
        Weight on other Planet (Newtons): 1239.2446


    .. hint:: We can represent very small numbers or very large numbers using scientific notation. ``eX`` is used to represented :math:`\times 10^{X}`. For example ``1e-3`` is equivalent to :math:`1 \times 10^{-3}` and ``5e2`` is equivalent to :math:`5\times10^{2}`. Python can automatically convert string representations of these values to floats.

        Floats can convert strings with scientific notation.

        .. exec_code::
            :language: python

            x = '1e-3'
            print(float(x))

            y = '5e2'
            print(float(y))

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*