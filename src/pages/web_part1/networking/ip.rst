Internet Layer
===========================================

In this section, you will learn how computers communicate with each other over the 
internet and how data is reliably sent from one place to another. Specifically, we will 
explore key concepts such as data packets, internet protocol (IP), addressing and packet 
routing. These topics are important because 
they form the foundation of how the internet works. Whether you're streaming a video, 
sending a message, or browsing a website, these technologies are used, ensuring your 
data gets where it needs to go.

By the end of this section, you will be able to explain:

*   How data is split into packets and sent across the internet
*   What IP addresses are and how they identify devices
*   How packets travel from one device to another
*   How TCP ensures data is delivered reliably and in the right order

Data Packets
---------------------

When data is sent over the internet, it is broken down into smaller pieces called 
:term:`data packets`. These packets can be thought of as individual envelopes 
containing parts of a larger message. For example, if you send an image to a friend, 
that image is divided into many smaller packets before being sent. Each packet is then 
sent independently across the internet.

Once the packets arrive at their destination, they are reassembled into the original 
data, just like putting together the pieces of a puzzle. This method is faster and more 
reliable than sending the entire image in one go. If a packet is lost or damaged during 
transmission, only that packet needs to be re-sent, not the whole image.

Internet Protocol (IP)
------------------------

:term:`Internet Protocol` is the set of rules that governs how data is sent and
received over the internet. Every device that communicates on the internet uses IP to 
exchange data packets. IP is the implementation of of the internet layer. The most 
common version of IP today is :term:`IPv4`, which uses addresses that look like this: 
``192.168.0.1``.

IP is responsible for labeling each packet with important information, including:

*   The **source** :term:`IP address` (where the packet is coming from)
*   The **destination** :term:`IP address` (where the packet is going)

Addressing
^^^^^^^^^^^^^^^^^^^

Just like homes have addresses so the postal service knows where to deliver mail, 
computers and other devices on the internet have IP addresses. An :term:`IP address` 
is a unique series of numbers assigned to each device connected to the internet. This 
address allows devices to find and communicate with each other.

For example, when you visit a website like `google.com.au <google.com.au>`_, your 
computer is actually communicating with a server (a computer that provides web 
services) that has a specific IP address. While you don't see the IP address because 
you typed the domain name (like google.com), behind the scenes, your computer sends 
data to the server's IP address, and the server sends the webpage back to your 
computer's IP address.

Local and Public IP Addresses
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

At home or school, your devices (like your phone, tablet, or laptop) likely have 
**local IP addresses**. These are addresses that are only used within your local 
network. When your data needs to go out onto the internet, it first passes through your 
router, which has a **public IP address** that identifies your entire network on the 
internet.

For example:

*   Your computer might have the local IP address ``192.168.0.10`` inside your home 
    network.
*   When you visit a website, your router has a public IP address like ``203.0.113.5``, 
    which is used to send data out to the internet and bring it back to your device.

This system allows multiple devices on your local network to share one public 
IP address when they access the internet.

Packet Routing
^^^^^^^^^^^^^^^^^^^

After data packets are labeled with IP addresses, they need to find their way from the 
sender to the receiver. This is where :term:`packet routing` comes in. Routers are 
devices that sit between different parts of the internet and make sure that data 
packets are forwarded along the correct path. Think of routers like traffic signals 
that help direct cars (packets) through the streets (internet) to reach their 
destination.

Packets don't always take the same route. Just like a car can take different roads to 
get to the same place, packets can travel through different routers on their way to 
their destination. Each router looks at the destination IP address on a packet and 
decides which path will be the fastest or most efficient.

Even if some parts of the internet are slow or busy, routers will find the best 
available route to ensure your data arrives as quickly as possible.

Glossary
------------------------------------

.. glossary::

    Internet Protocol
         Internet Protocol is a set of rules that governs how data is sent and received 
         over the internet, using IP addresses to ensure data reaches the correct 
         destination.

    IP
        See :term:`Internet Protocol`

    IPv4
         IPv4 (Internet Protocol version 4) is the most commonly used version of IP, 
         which assigns unique addresses to devices using a format of four numbers 
         separated by dots (e.g., ``192.168.1.1``).

    IP Address
        An IP address is a unique number assigned to each device connected to the 
        internet, acting like a home address to ensure data is sent to the right place.

    Data packets
        Data packets are small units of information that are broken down and sent over 
        the internet, which are reassembled at the destination to form the original 
        data.

    Packet Routing
        Packet routing is the process of directing data packets across different 
        networks, using routers to ensure they take the best path to their destination.
