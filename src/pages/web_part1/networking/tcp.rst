Transport Layer
===============

On this page, you will learn about the Transport Layer and how :term:`Transmission
Control Protocol (TCP) <Transmission Control Protocol>` ensures reliable communication
between devices over the internet. You’ll explore the role of :term:`TCP Ports<Port>`,
which help manage multiple types of internet traffic on your device, and the **TCP
connection process**, known as the :term:`three-way handshake`, which establishes a
reliable connection before data is exchanged. Understanding these concepts is crucial
because they explain how your computer connects to websites, sends messages, and ensures
that the data arrives correctly and in the right order.

By the end of this section, you will be able to explain:

- What TCP ports are and how they manage different types of internet traffic
- How the TCP connection process, or "three-way handshake," establishes reliable
  communication
- Why the Transport Layer and TCP are essential for ensuring data arrives correctly and
  in the right order

Transmission Control Protocol (TCP)
-----------------------------------

While data packets are traveling across the internet, they can sometimes get lost,
arrive out of order, or get duplicated. This is where the :term:`Transmission Control
Protocol (TCP) <Transmission Control Protocol>` comes in. TCP is the implementation of
of the transport layer. TCP works alongside IP to make sure that data is delivered
reliably, in the right order, and without errors.

Imagine you're sending a message to a friend that's split into multiple packets. Some
packets might get lost along the way, and others might arrive in the wrong order. TCP
makes sure that all the packets are reassembled correctly when they reach your friend,
and it requests missing packets if any are lost.

TCP ensures reliable communication by:

- **Packet sequencing**: TCP numbers the packets so they can be put back in the right
  order at the destination.
- **Error checking**: TCP checks to make sure each packet arrives without errors. If any
  packet is damaged, TCP requests a resend.
- **Acknowledgment**: After receiving packets, the recipient sends an acknowledgment to
  the sender, confirming that the data was received correctly. If the acknowledgment
  doesn't arrive, the sender will resend the packets.

TCP Ports
---------

A TCP port is like a door or entry point that a service on your computer can occupy.
Each service that your computer uses (such as web browsing or email) is assigned a
different port number. This helps your computer manage multiple internet tasks at the
same time.

Think of it like this: if your computer is a house, then ports are doors that open for
different services. For example:

- Web browsing typically uses port 80 for HTTP (more on this later)
- Secure web browsing uses port 443 for HTTPS
- Email typically uses ports like 25 for SMTP (sending mail) or 110 for POP3 (receiving
  mail)
- When your computer sends or receives data, it communicates with the correct service by
  using the appropriate port.

.. note::

    A server normally occupies a port indefinitely. However, clients such as your web
    browser need to make multiple connections simultaneously, all of which require a
    port. To solve this, the web browser will use a random port for each connection,
    known as an :term:`ephemeral port`. These ports are immediately vacated once the
    data transfer is complete so that they are free for other software.

TCP Connection Process
~~~~~~~~~~~~~~~~~~~~~~

Before any data can be exchanged between two devices on the internet, a reliable
connection must be established. This is done using a process called the :term:`three-way
handshake`. The handshake ensures that both devices are ready to send and receive data.

The process works like this:

1. **SYN (Synchronize)**: The sender's device sends a request to establish a connection
   to the receiver's device.
2. **SYN-ACK (Synchronize-Acknowledge)**: The receiver acknowledges the request and
   agrees to the connection.
3. **ACK (Acknowledge)**: The sender confirms that the connection is established.

Once this handshake is complete, the two devices can start exchanging data.

For example, when you visit `google.com.au <https://google.com.au>`_, your computer and
Google's server first go through this three-way handshake before data (the website) is
transferred to your browser.

Glossary
--------

.. glossary::

    Ephemeral port
        An ephemeral port is a temporary port used by a computer to establish a c
        onnection with a server, typically for short-lived communication like web
        browsing.

    TCP
        See :term:`Transmission Control Protocol`

    Transmission Control Protocol
        Transmission Control Protocol (TCP) is a set of rules that makes sure data sent
        over the internet arrives correctly and in the right order.

    Three-way handshake
        The three-way handshake is the process TCP uses to establish a connection
        between two devices, involving three steps: SYN, SYN-ACK, and ACK to ensure
        both sides are ready to communicate.

    Port
        A port is a virtual entry point on a computer that allows different services
        (like web browsing or email) to communicate over the internet.
