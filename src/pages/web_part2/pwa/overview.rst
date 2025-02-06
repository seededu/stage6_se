Progressive Web Apps
====================

What Are PWAs?
--------------

Progressive Web Apps (PWAs) are a modern approach to building applications that provide
native application like experiences using web technology. They combine the reach of the
web with features that are traditionally associated with native apps, like offline
functionality, fast load times, and the ability to be installed on a user’s device.

One of the major advantages of PWAs is that they re-use the existing browser engine so
that you don't need to download a large application.

.. attention::

    PWAs follow a loose collection of specifications and are not widely supported by
    browsers.

**Similar Technologies**

There are competing alternatives to PWAs such as `Electron
<https://www.electronjs.org>`_, which is used by Discord and Slack amongst others. They
share some similarities with PWAs but often differ in that they bundle a browser engine
with the application.

Examples of PWAs
----------------

- https://open.spotify.com/: A lightweight, web version of Spotify, which is locally
  installable.
- https://music.youtube.com/: The youtube music site is designed as an app which can be
  run in the browser or locally.
- https://m.uber.com/: Uber provides a PWA version of their native apps to support a
  variety of devices.

When you visit any of the above examples with a PWA compatible browser such as Google
Chrome, you will be prompted to download and install it as a local application.

Principles of PWAs
------------------

PWAs are built on three main principles:

- Progressive Enhancement:

  - The app should work on any device with a compatible browser, but modern browsers
    will provide enhanced functionality.
  - For example, older browsers might not support offline capabilities, but the app
    should still function.

- Responsive Design:

  - The layout and functionality of the app should adapt to different devices and screen
    sizes, from phones to desktops.

- Connectivity Independence:

  - The app should function, at least partially, even when the user has no internet
    connection.

Comparison of App Types
-----------------------

The table below summarises the differences in usage and features between native apps,
traditional web apps, and PWAs.

====================== ========================== ========================= =========================
Feature                Native Apps                Traditional Web Apps      PWAs
====================== ========================== ========================= =========================
Installation           Download from app store    No installation needed    Add to home screen from
                                                                            browser
Offline Support        Full offline functionality Limited or none           Works offline using
                                                                            caching
Performance            Optimised for the device   Browser-dependent         Native app-like
Updates                Via app store              Manual updates by user    Automatic updates via the
                                                                            web
Cross-Platform Support Platform-specific builds   Universal across browsers Universal via modern
                                                                            browsers
====================== ========================== ========================= =========================

Technology of PWAs
------------------

Progressive Web Apps (PWAs) efficiently utilize the browser engine that is already
installed on a user's device. Instead of bundling a separate rendering engine, PWAs rely
on the capabilities of the user's preferred browser to interpret and execute the
application's code. Using an existing browser engine means that PWAs are typically
smaller in size than native applications and work cross platform.

.. figure:: img/pwa-environment.svg
    :width: 480
    :align: center

    PWA, traditional web apps and native apps compared. Image from `Mozilla
    <https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app>`_.

The figure above visualises the difference in interaction between software layers for
PWAs, traditional web apps and native apps (platform-specific). The operating system
controls the lifecycle of native apps and they are closely coupled together. Native apps
often make use of operating system specific functionality, which means that they require
more development effort to create cross platform software.

On the other hand PWAs the app interacts with the browser engine, using web technologies
rather than operating system specific functionality. This means that PWAs will generally
work cross platform without any design or development effort.

PWA Requirements
----------------

PWAs must provide or comply with the following, the first two will be explained on the
following pages:

1. **Web App Manifest**

   - A JSON file that describes the app’s metadata (e.g., name, icons, theme color),
     which are used to present the PWA to users like a native app.

2. **Service Workers**

   - Background scripts that enable caching, offline functionality, and background
     tasks.

3. **HTTPS**

   - All PWAs must be served over HTTPS to ensure security and protect user data.

Further Reading
---------------

We recommend the following resources:

1. `What is a progressive web app? (Mozilla)
   <https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app>`_
