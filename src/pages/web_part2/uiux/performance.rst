Performance
===========

Imagine visiting a website that takes forever to load. Frustrating, right? You might
even give up and click away. That’s why performance is a critical part of User
Experience (UX)—no matter how beautiful or well-designed a website is, if it’s slow,
users won’t stick around.

Why is Performance a UX Issue?
------------------------------

Performance affects how users perceive and interact with your website. A slow website
can lead to:

- Frustration: Users don’t want to wait; they expect fast results.
- Higher Bounce Rates: Studies show that users are likely to leave if a page takes more
  than 3 seconds to load.

Think of performance as the foundation of a great user experience. If your website is
quick and responsive, users are more likely to enjoy their visit.

Evaluating Page Performance
---------------------------

Before fixing performance issues, you need to measure how your website is performing.
Luckily, there are tools that make this easy.

Browser Developer Tools
~~~~~~~~~~~~~~~~~~~~~~~

Modern browsers like Chrome, Firefox, Safari and Edge include powerful developer tools.
These tools allow you to debug websites and monitor how the browser loads each web page,
down to individual files and even page elements.

.. note::

    Each browser provides a slightly different set of tools and user interface. In this
    section we will focus on Google Chrome's developer tools because it is the most
    commonly used web browser.

Google Chrome and Lighthouse
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Within Chrome's developer tools is a module called "Lighthouse" that provides a report
on many aspects of your website, including the page load performance.

To learn how to use Lighthouse watch the video or read the instructions below. Note that
the video refers to the "Audit" page, which has been renamed "Lighthouse".

.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/5fLW5Q5ODiE?si=DnEfZhhWejbWieic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Instructions**

1. Open Developer Tools:

   - In Chrome, right-click anywhere on the page and select Inspect, or press Ctrl +
     Shift + I (Windows) or Cmd + Option + I (Mac).

2. Use the “Lighthouse” Tool:

   - Click the Lighthouse tab.
   - Select the type of test (e.g., desktop or mobile).
   - Click Generate Report.

Improving Page Load Time
------------------------

Once you've identified areas for improvement in your website's performance you can apply
optimisations to reduce page load times. You can optimise the front end and back end of
your website and each will have varying types and degree of impact.

This section describes some simple and common optimisation techniques and is not
exhaustive.

Front-End Optimisation
~~~~~~~~~~~~~~~~~~~~~~

**Minify CSS, JavaScript, and HTML**

Minifying means to remove unnecessary spaces, comments, and formatting to reduce file
sizes. Tools like UglifyJS or online minifiers can do this for you.

.. code-block:: html

    <!-- Before -->
    <style>
        body {
            background-color: white;
            margin: 0;
        }
    </style>

    <!-- After (minified) -->
    <style>body{background-color:white;margin:0;}</style>

**Reduce HTTP Requests**

Every CSS file, JavaScript file, and image is made as separate HTTP request, each with
its own overhead. To speed up the page load you can combine files or inline CSS and
JavaScript.

**Use Lazy Loading**

You can delay loading images or content until they are needed such as when they scroll
into view.

This is achieved by adding the ``loading="lazy"`` attribute to images:

.. code-block:: html

    <img src="image.jpg" loading="lazy" alt="Example">

Back-End Optimisation
~~~~~~~~~~~~~~~~~~~~~

**Compress Images**

Large images take longer to download than small images and slow down websites. Make sure
your images are an appropriate resolution, file size and format for their purpose. In
some cases it might be helpful to compress the images or save to modern formats like
WebP instead of older formats like JPEG.

**Transfer Compressed Files**

With HTTP you can transfer compressed files, which are uncompressed by the browser. This
can reduce the download time, especially for large files. Commonly gzip compression is
used.

This feature is available to be configured for most web servers. To enable it with
Flask, use the `flask-compress <https://github.com/colour-science/flask-compress>`_
extension.

**Instruct the Browser to Cache Resources**

With HTTP the server can set the ``cache-control`` response header that instruct the
browser to cache static files like images or CSS on the user's device so they don’t have
to be reloaded on every visit.

**Server-Side Caching**

Within the web-server code itself responses to requests or database queries can be
cached to avoid regenerating them for every user.

For example, using the `flask-caching
<https://flask-caching.readthedocs.io/en/latest/>`_ extension you can cache your route
or view functions with a decorator that specifies how long to cache the result for.

In the example below, the return value from ``index`` route is cached for 60 seconds.
This means that any request to this route within a 60 seconds period will use the
pre-computed value, which can speed up the page response time and your server can handle
a larger number of requests.

.. code-block:: python

    @app.route("/")
    @cache.cached(timeout=60)
    def index():
        return render_template("index.html")
