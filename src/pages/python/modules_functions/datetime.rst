``datetime``
============

The `datetime <https://docs.python.org/3/library/datetime.html>`_ module is
very handy when working with dates and times.

Date
----

We can import date from the datetime module.

.. code-block:: text

    from datetime import date

This will allow us to create date objects, which we can treat as a new type of
Python variable specifically used for handling dates. We create a date object
as follows:

.. code-block:: text

    date(year, month, day)

.. exec_code::
    :language: python

    from datetime import date

    d = date(2025, 1, 31) # 31st of January 2024
    print(d)

We can extract the year, month and day of a date using ``.year``, ``.month``
and ``.day`` respectively.

.. exec_code::
    :language: python

    from datetime import date

    d = date(2025, 1, 31) # 31st of January 2024
    print(d.year)
    print(d.month)
    print(d.day)

We can also extract out the day of the week. ``.weekday()`` will return an
integer where Monday is 0 and Sunday is 6. We can then use this to index a
list.

.. exec_code::
    :language: python

    from datetime import date

    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    d = date(2025, 1, 31) # 31st of January 2024

    print(days[d.weekday()])

Time
----

We can import time from the datetime module.

.. code-block:: text

    from datetime import time

This will allow us to create time objects using the following (in 24 hour
time):

.. code-block:: text

    time(hour, minute, second)

We can also access the hour, minute and second using ``.hour``, ``.minute`` and
``.second``.

.. exec_code::
    :language: python

    from datetime import time

    t = time(17, 35, 20)
    print(t)
    print(t.hour)
    print(t.minute)
    print(t.second)

``datetime``
------------

``datetime`` objects combine the functionality of ``date`` and ``time``
objects. To import this we use

.. code-block:: text

    from datetime import datetime

We can create a ``datetime`` object using

.. code-block:: text

    datetime(year, month, day, hour, minute, second)

.. exec_code::
    :language: python

    from datetime import datetime

    dt = datetime(2025, 1, 31, 17, 35, 20)
    print(dt)

Just like with the ``date`` and ``time`` objects we can extract out the year,
month, day, day of the week, hour minute and second.

.. exec_code::
    :language: python

    from datetime import datetime

    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    dt = datetime(2025, 1, 31, 17, 35, 20)
    print(dt.year)
    print(dt.month)
    print(dt.day)
    print(days[dt.weekday()])
    print(dt.hour)
    print(dt.minute)
    print(dt.second)

We can also obtain the current date and time.

.. exec_code::
    :language: python

    from datetime import datetime
    print(datetime.now())

``timedelta``
-------------

``timedelta`` objects allow us to measure a change in time.

.. code-block:: text

    from datetime import timedelta

Often the Greek symbol delta (:math:`\Delta`) is used to indicate a change in a
quantity, which in our case will be time. When creating a ``timedelta`` object
you can specify days, second, minutes, hours or weeks, all of which are
optional and by default each is 0. This allows us to increment times.

.. code-block:: text

    timedelta(days=days, seconds=seconds, minutes=minutes, hours=hours, weeks=weeks)

For example, we can add '5 days and 2 hours' to the 31st of January 2025 at
17:35:20, which gets us to the :spelling:ignore:`5th` of February 2025 at
19:35:20.

.. exec_code::
    :language: python

    from datetime import datetime, timedelta

    dt = datetime(2025, 1, 31, 17, 35, 20)
    delta = timedelta(days=5, hours=2)

    print(dt + delta)

``timedelta`` objects only allow you to extract days ``.days`` and seconds
``.seconds`` (of the time component). This means that to obtain hours, minutes
and seconds you need to perform a calculation.

To obtain hours, we need to take the seconds, divide by 60 to get minutes and
then divide by 60 to get the number of hours. This is equivalent to dividing by
3600. We then need to round down. We can round down by performing integer
division which uses a ``//``. This performs a division and truncates the result
to an integer.

To obtain minutes, we convert the seconds to minutes by dividing by 60. But
then we only want remainder of minutes that didn't contribute to a full hour.
Since an hour is 60 minutes, we then perform ``% 60``.

.. exec_code::
    :language: python

    from datetime import datetime, timedelta

    sunrise = datetime(2025, 1, 30, 6, 15, 30)
    sunset = datetime(2025, 1, 31, 20, 2, 00)
    delta = sunset - sunrise
    hours = delta.seconds//3600
    minutes = (delta.seconds // 60) % 60

    print('Time difference: {}'.format(delta))
    print('Days: {}'.format(delta.days))
    print('Hours: {}'.format(hours))
    print('Minutes: {}'.format(minutes))

.. dropdown:: Question 1
    :open:
    :color: info
    :icon: question

    We have previously seen how hours and minutes can be extracted from a ``timedelta`` object. Which of the following would allow you to extract seconds?

    A.

     .. code-block:: python

        seconds = delta.seconds

    B.

     .. code-block:: python

        seconds = delta.seconds % 60

    C.

     .. code-block:: python

        seconds = delta.seconds % 3600

    D.

     .. code-block:: python

        seconds = (delta.seconds//3600) % 60

    E.

     .. code-block:: python

        seconds = (delta.seconds//60) % 3600

    .. dropdown:: Solution
        :class-title: sd-font-weight-bold
        :color: dark

        To obtain seconds, we want the remainder of seconds that didn't contribute to a full minute. Since a minute is 60 seconds, we perform ``% 60`` to obtain seconds.

        For example

        .. exec_code::
            :language: python

            from datetime import datetime, timedelta

            sunrise = datetime(2025, 1, 30, 6, 15, 30)
            sunset = datetime(2025, 1, 31, 20, 2, 00)
            delta = sunset - sunrise
            seconds = delta.seconds % 60

            print('Time difference: {}'.format(delta))
            print('Seconds: {}'.format(seconds))

.. dropdown:: Question 2
    :open:
    :color: info
    :icon: question

    What do you think the output of the following code will be?

    .. code-block:: python

        from datetime import time

        t = time(8, 10, 5)
        print('{}:{}'.format(t.hour, t.minute))

    A.

     .. code-block:: python

        8:10:5

    B.

     .. code-block:: python

        8:10

    C.

     .. code-block:: python

        10:5

    D.

     .. code-block:: python

        8
        10
        5

    E.

     .. code-block:: python

        20:10

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 3
    :open:
    :color: info
    :icon: question

    Write a program that would tell you which day of the week the 1st of January 2050 would be.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Question 4
    :open:
    :color: info
    :icon: question

    You have just put your clothes in the washing machine. It will take 3 hours and 15 minutes for the washing to finish. Write a program that will tell you when your washing will finish.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*

.. dropdown:: Code challenge: What Day Is Your Birthday?
    :color: warning
    :icon: star

    Write a program that lets the user check which day of the week their birthday will fall on for a given year. The user should enter their birthday in DD/MM (day/month) format and then specify a year. The program should then tell the user which day of the week their birthday will fall on for that year.

    **Example 1**

    .. code-block:: text

        Enter your birthday in the form DD/MM: 24/11
        Enter a year: 2025
        In 2025 your birthday will be on a Monday

    **Example 2**

    .. code-block:: text

        Enter your birthday in the form DD/MM: 09/06
        Enter a year: 2028
        In 2028 your birthday will be on a Friday

    You can assume you will be given a valid day, i.e. you won't be asked about the :spelling:ignore:`29th` of February on a non-leap year.

    .. dropdown:: :material-regular:`lock;1.5em` Solution
      :class-title: sd-font-weight-bold
      :color: dark

      *Solution is locked*

.. dropdown:: Code challenge: End Of Year Countdown
    :color: warning
    :icon: star

    Write a program that tells you how long you have to wait until next year. The output of your program should be formatted as follows with the ``X``'s replaced with appropriate numbers. The number of digits will vary depending on how long it is until the new year.

    .. code-block:: text

        XXX days XX hours XX minutes XX seconds until XXXX!

    For this exercise you must:

    * get the current time using ``now()`` from ``datetime.datetime``

    * Extension: Update the text so that if any of the values are 1 the following word becomes singular. E.g. instead of 1 hours it would say 1 hour. *

    .. dropdown:: :material-regular:`lock;1.5em` Solution
        :class-title: sd-font-weight-bold
        :color: dark

        *Solution is locked*
