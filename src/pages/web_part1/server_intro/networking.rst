Networking
====================

In this section, you will learn how data moves from one computer to another over the 
internet. You'll explore how data is broken into smaller pieces, how computers know 
where to send it, and how they ensure it gets to the right place. Understanding these 
concepts is essential because it explains how websites, video streaming, and even 
social media work behind the scenes!

By the end of this section, you'll be able to explain:

*   What data packets are and why they're used
*   What IP addresses are and how they identify devices
*   How data travels through the internet using routing
*   How the Domain Name System (DNS) helps you visit websites like 
    `google.com.au <google.com.au>`_

Data Packets
------------------

When you send information over the internet, it doesn't travel as one big chunk. 
Instead, it's broken down into smaller pieces called :term:`data packets`. Think of 
sending a long message over a messaging app. Imagine your message is too long for 
one message bubble, so the app splits it into smaller parts. The same thing happens 
when you request a webpage or send a file—the information is split into many packets. 
Each packet contains part of the data, and they are sent separately across the internet.

Once these packets reach their destination, they are put back together, just like 
piecing together a puzzle, to form the original information. This makes data transfer 
faster and more reliable, because if one packet is lost along the way, only that 
packet needs to be re-sent, not the whole message.

Addressing
------------------------------------

For computers to send and receive data, they need a way to identify each other, this is 
where :term:`IP addresses <IP address>` come in. An 
:term:`IP (Internet Protocol) address <IP address>` is like a home address for 
computers on the internet. Every device that connects to the internet (computers, 
phones, servers) has a unique IP address that identifies it.

The most common version of an IP address is :term:`IPv4`, which looks like this: 
``192.168.1.1``. It's a series of four numbers separated by dots, with each number 
ranging from 0 to 255. Just like you use a postal address to send a letter, an 
IP address is used to send data packets to the correct device.

For example, when you visit `google.com.au <https://google.com.au>`_, your computer 
is communicating with one of Google's servers, which has its own IP address. You might 
never see this IP address because other systems like DNS (which we'll cover later) 
translate domain names into IP addresses for you.

Packet Routing
------------------------------------

The journey of data packets from one device to another is much like how mail gets 
delivered. :term:`Packet routing`` is the process that determines the path each packet 
takes to reach its destination.

When you send data, the packets don't always travel directly to the destination. 
Instead, they pass through many different routers (like postal offices). Each router 
looks at the destination IP address on the packet and decides where to send it next. 
It's like each post office deciding which route is fastest for a letter to travel.

Here's an example: Imagine you want to send a file to a friend in another city. 
Your message leaves your computer as data packets, which are sent to your local router 
(like a post office). The router checks the destination IP address and forwards the 
packets to another router closer to your friend. This process continues until all 
the packets arrive at your friend's computer, where they're reassembled into the 
original file.

Even if some parts of the internet are busy or temporarily down, routers can find 
alternative paths, which helps ensure that your data always reaches its destination.

Domain Name System (DNS)
------------------------------------

You probably visit websites by typing their names into your browser, like 
`google.com.au <https://google.com.au>`_ or `youtube.com <youtube.com>`_, but computers 
don't understand these names. They need the IP addresses of the servers that host these 
websites. This is where the :term:`Domain Name System (DNS) <Domain Name System>` comes 
in.

:term:`DNS`` is like the internet's phonebook. When you type a domain name into your 
browser, your computer asks a DNS server to look up the corresponding IP address. 
For example, when you type `google.com.au <https://google.com.au>`_, the DNS server 
might respond with an IP address like ``142.250.75.14``. Your computer can then send a 
request to that IP address, and Google's server will send back the webpage you want to 
see.

Without DNS, you would have to remember IP addresses for every website, which would be 
a lot harder than remembering domain names.

---

.. glossary::

    Internet Protocol
        TODO

    IPv4
        TODO

    IP Address
        TODO

    Data packets
        TODO

    Domain Name System
        TODO

    DNS
        See :term:`Domain Name System`


    Packet Routing
        TODO