Application Layer
===========================================

In this section, you will learn about how applications such as web browsers, email 
clients, and file transfer programs communicate over the internet using specific 
protocols. These protocols work at the Application Layer of networking and are built on 
top of the Transmission Control Protocol (TCP). Understanding how these work is 
important because it shows you how different services (websites, email, file downloads) 
are delivered to your device.

By the end of this section, you will be able to explain:

*   How different application layer protocols like FTP, email, and HTTP work
*   The role of DNS in helping your device find websites and services

Application Layer and Protocols
------------------------------------

The Application Layer is the topmost layer in the networking model. It deals with 
the protocols that define how applications communicate over the internet. These 
protocols ensure that different types of data—whether it's a file, an email, or a 
webpage are properly formatted and delivered.

There are many different application protocols, but we'll focus on three major ones: 
**FTP**, **Email (SMTP, POP, IMAP)**, and **HTTP**.

FTP (File Transfer Protocol)
------------------------------------

**File Transfer Protocol (FTP)** is used to transfer files from one computer to another 
over the internet. FTP allows users to upload files to a server or download files from 
a server. It's commonly used for sharing large files, like software updates or media 
files.

For example, if you were to download a large game or software update, the company might 
use FTP to allow you to transfer the file from their server to your computer. You can 
think of FTP as a delivery truck that moves files from one location to another.

FTP typically uses **port 21** for communication.

Email (SMTP, POP, IMAP)
------------------------------------

Email is one of the most common forms of communication on the internet, and it involves 
several protocols to send, receive, and manage messages.

*   **SMTP (Simple Mail Transfer Protocol)**: SMTP is used to **send** emails. When you 
    send an email, your email client (like Gmail or Outlook) uses SMTP to transfer the 
    message to the recipient's mail server. SMTP typically uses **port 25**.
*   **POP (Post Office Protocol)**: POP is used to **receive** emails. When you open 
    your email client, it connects to your mail server using POP to download any new 
    messages. POP stores emails on your device and often removes them from the server. 
    POP typically uses **port 110**.
*   **IMAP (Internet Message Access Protocol)**: Like POP, IMAP is also used to 
    **receive** emails, but it works differently. IMAP keeps emails on the server, 
    allowing you to access them from multiple devices (like your phone and laptop). 
    This is why you can open an email on your phone and still see it later on your 
    computer. IMAP typically uses **port 143**.

HTTP (HyperText Transfer Protocol)
------------------------------------

**HTTP (HyperText Transfer Protocol)** is the protocol used by web browsers and web 
servers to communicate. When you type a website’s address into your browser 
(like `google.com.au <https://google.com.au>`_), your browser sends a request to that 
website's server using HTTP. The server then sends back the webpage, which your browser 
displays.

For example, if you visit a website like `wikipedia.org <https://wikipedia.org>`_, your 
browser uses HTTP to request the page, and the server sends it back so you can view it.

When a website is using **HTTPS**, it means the data is encrypted for security, making 
it safe for activities like online shopping or banking. HTTP uses **port 80**, while 
HTTPS uses **port 443** for secure communication.

.. hint:: 

    We will learn about the details of HTTP in 
    :doc:`/web_part1/server_intro/http_intro`.

DNS (Domain Name System)
------------------------------------

You probably visit websites by typing their names into your browser, like 
`google.com.au <https://google.com.au>`_ or `youtube.com <youtube.com>`_, but computers 
don't understand these names. They need the IP addresses of the servers that host these 
websites. This is where the :term:`Domain Name System (DNS) <Domain Name System>` comes 
in.

:term:`DNS` is like the internet's phonebook. When you type a domain name into your 
browser, your computer asks a DNS server to look up the corresponding IP address. 

Here's how it works:

*   When you type **google.com.au** into your browser, your computer sends a request 
    to a **DNS server**.
*   The DNS server looks up the corresponding IP address (for example, **142.250.75.14**).
*   Your computer then uses this IP address to communicate with Google’s server and 
    load the website.

Without DNS, you would have to remember IP addresses for every website, which would be 
a lot harder than remembering domain names


Glossary
------------------------------------

.. glossary::

    Domain Name System
        DNS is like the internet's phonebook, translating human-friendly domain names 
        (like google.com) into IP addresses that computers use to find and communicate 
        with websites.

    DNS
        See :term:`Domain Name System`

    HTTP
        HTTP is the protocol used by web browsers to request and load web pages from 
        servers, allowing you to browse websites on the internet.

    IMAP
        IMAP is a protocol used to receive emails, allowing you to view your messages 
        on multiple devices by keeping them stored on the email server.

    POP3
        POP3 is a protocol used to receive emails, typically downloading messages from 
        the server to your device and removing them from the server afterward.

    SMTP
        SMTP is the protocol used for sending emails from your device to a mail 
        server, which then forwards the message to the recipient's server.
