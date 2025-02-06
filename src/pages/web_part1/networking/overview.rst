Overview
========

In this section, you will be introduced to the basic concepts of :term:`network
protocols<network protocol>` and the :term:`four-layer TCP/IP model<TCP/IP model>` that
helps computers and devices communicate over the internet. Understanding these concepts
is important because they form the foundation of how the internet works. Just like how
people follow rules and steps to hold a conversation, computers and networks follow
specific protocols and work in layers to send data efficiently across the internet.

By the end of this section, you will be able to explain:

- What a network protocol is and why it is necessary
- How the four layers of the :term:`TCP/IP model` work together to deliver data

Network Protocols
-----------------

A :term:`network protocol` is a set of rules or standards that define how data is
transmitted and received between devices on a network. Protocols make sure that devices
"speak the same language" when they exchange data. For example different devices such as
computers, phones, and servers can communicate and understand each other, even if they
are built by different manufacturers.

Protocols exist for many different purposes and operate at different levels of
abstraction. Common examples are:

- **Internet Protocol (IP)** is the protocol that enables devices to address each other
  on the network.
- **Transmission Control Protocol (TCP)** is the protocol used to ensure data packets
  are delivered correctly.
- **HTTP** is a protocol used to transfer web data such as HTML files.

The TCP/IP Layer Model
----------------------

The :term:`TCP/IP model` is a framework that organizes how data is sent and received
over the internet. It breaks down the complex process of data communication into four
distinct **layers**, each responsible for different tasks. Think of it like building a
house: you need different teams (plumbers, electricians, builders) working on specific
parts, but they all contribute to the final product.

Here's an overview of the **four layers** of the TCP/IP model:

1. :term:`Application Layer` is the top layer where user interaction happens. The
   :term:`Application Layer` defines how data is presented to the user and which
   protocols are used for different types of communication, like web browsing, file
   transfer, or email. For example, when you use a web browser, you're interacting with
   the HTTP protocol, which is part of this layer.

       **Example**: When you type `google.com.au <https://google.com.au>`_ into your
       browser, the Application Layer handles how the request is sent using the HTTP
       protocol.

2. :term:`Transport Layer` ensures that data is delivered reliably and in the right
   order. It manages the communication between two devices using protocols like TCP
   (Transmission Control Protocol). TCP ensures that data packets arrive correctly.

       **Example**: When you send a message, TCP breaks it into smaller data packets and
       ensures that each packet reaches the recipient and is reassembled in the correct
       order.

3. :term:`Internet Layer` is responsible for moving data packets across different
   networks and ensuring they reach the right destination. This is where IP addresses
   come into play. The Internet Layer uses the Internet Protocol (IP) to label each
   packet with a source and destination address.

       **Example**: When you visit a website, the Internet Layer ensures that your
       request (as data packets) is sent to the correct server using IP addresses.

4. :term:`Network Access Layer` is the bottom layer and is responsible for physically
   sending data over the network. It includes the hardware, such as Ethernet cables or
   Wi-Fi signals, and deals with how data is transmitted between your device and the
   router or modem.

       **Example**: When you connect to the internet through Wi-Fi, the Network Access
       Layer manages how your device sends data to the router, which then sends it out
       onto the internet.

.. attention::

    We won't be covering the Network Access Layer.

Glossary
--------

.. glossary::

    Application Layer
        The Application Layer is where users interact with the internet, using
        protocols like HTTP for websites and SMTP for emails to send and receive data
        through apps like browsers or email clients.

    Network Access Layer
        The Network Access Layer is responsible for the physical transmission of data,
        using devices like routers and cables to send data over networks like Ethernet
        or Wi-Fi.

    Network Protocol
        A network protocol is a set of rules that allows devices to communicate over a
        network, ensuring data is transmitted and received correctly. Examples include
        HTTP, TCP, and IP.

    TCP/IP model
        The TCP/IP model is a framework that organizes how data is sent over the
        internet, dividing the process into four layers to ensure reliable and
        efficient communication.

    Transport Layer
        The Transport Layer ensures that data is delivered reliably between devices by
        breaking it into packets, sending them, and reassembling them correctly at the
        destination.

    Internet Layer
        The Internet Layer handles the routing of data packets across different
        networks, ensuring that they reach the correct destination using IP addresses.
