# **What is a web server**

A web server is a software or hardware system that stores, processes, and delivers web content to users over the internet. It is a core component of the client–server model, handling requests from browsers and returning the required resources.

- Web servers use the HTTP protocol to manage communication on the web.
- A browser sends an HTTP request to the server when you enter a website’s URL.
- The server responds by delivering the requested web page for the browser to display.

## Core role of a web server

### Request handling

- Accepts connections from clients (browsers, apps)
- Parses the HTTP request (method, path, headers)

### Resource delivery

- Serves **static content** (HTML, CSS, JS, images)
- Forwards or generates **dynamic content** (via application code)

### Connection management

- Opens, maintains, and closes network connections
- Handles multiple clients concurrently

### Security basics

- Supports HTTPS (TLS encryption)
- Can enforce access rules, rate limits, headers

# **Working**

When a user enters a URL, the browser sends an HTTP request to the web server, which processes it and returns the required resources to display the page.

- **Client Request:** In the web browser(https://www.example.com/) the user enters a URL.
- **DNS Resolution:** The browser contacts a [**DNS**](https://www.geeksforgeeks.org/computer-networks/domain-name-system-dns-in-application-layer/) server to obtain the IP address of the requested domain.
- **Connecting to the Web Server:** Using the obtained IP address the browser establishes a connection with the web server.
- **Processing Request:** The web server receives the request and processes it.
- **Serving the Response:** The requested files([**HTML**](https://www.geeksforgeeks.org/html/html-tutorial/), [**CSS**](https://www.geeksforgeeks.org/css/css-tutorial/), [**JavaScript,**](https://www.geeksforgeeks.org/javascript/javascript-tutorial/) images ) are sent back to the client's browser by the web server.
- **Rendering the Web Page:** Based on the received data the browser displays the web page to the user.

# **Types**

Web servers can be categorized based on their functionality, usage, and implementation. Below are some of the most common types:

### **1. Apache Web Server**

[**Apache Web Server**](https://www.geeksforgeeks.org/websites-apps/how-to-use-apache-webserver-to-host-a-website/) is a widely used open-source web server developed by the Apache Software Foundation. Released in 1995, it is written in C, highly customizable, and distributed under the Apache License 2.0.

- Supports multiple operating systems (Windows, Linux, macOS).
- Allows advanced routing.
- Provides directory-level configuration.

### **2. Nginx Web Server**

[**Nginx**](https://www.geeksforgeeks.org/operating-systems/what-is-nginx-web-server-and-how-to-install-it/) (pronounced “Engine-X”) is a high-performance web server known for speed, scalability, and efficient handling of concurrent connections. Developed by Igor Sysoev and released in 2004, it is written in C.

- Designed to handle high traffic efficiently and serve static content.
- Functions as a reverse proxy and load balancer.

### **3. Microsoft IIS (Internet Information Services)**

[**IIS**](https://www.geeksforgeeks.org/devops/microsoft-azure-enable-iis-logs-for-monitoring/) is a web server developed by Microsoft, designed to work with Windows Server environments. It was developed by Microsoft, and first released in 1995 as a web server designed specifically for Windows-based systems. It is written in C++.

- Supports ASP.NET, PHP, and other web technologies.
- Provides built-in security features.
- Integrates well with Microsoft products.

### **4. LiteSpeed Web Server**

LiteSpeed is a high-performance web server known for its speed and security features. The LiteSpeed Web Server, developed by LiteSpeed Technologies, and first introduced in 2003 as a high-performance alternative to Apache. It is written in C.

- Faster processing than Apache in some scenarios.
- Built-in DDoS protection.
- Supports PHP applications with high efficiency.

### **5. Apache Tomcat Web Server**

[**Apache Tomcat**](https://www.geeksforgeeks.org/installation-guide/how-to-install-apache-tomcat-on-windows/) is a web server used to run Java-based applications. Developed by the Apache Software Foundation and released in 1998, it is written in [**Java**](https://www.geeksforgeeks.org/java/java/) and works well with frameworks like [**Spring Boot**](https://www.geeksforgeeks.org/advance-java/spring-boot/).

- Supports Java Servlets and JSP, providing a strong environment for Java-based applications.
- Integrates well with the Apache web server for enhanced performance and scalability.

### **6. NodeJS Web Server**

[**Node.js**](https://www.geeksforgeeks.org/node-js/nodejs/) can act as a web server by directly handling HTTP requests. Developed by Ryan Dahl in 2009, it is a JavaScript runtime written in JavaScript and C++.

- Event-driven, non-blocking architecture.
- Highly efficient for real-time applications.
- Uses JavaScript for both client-side and server-side development.

### **7. Lighttpd**

Lighttpd is a lightweight, fast web server developed by Jan Kneschke and released in 2003. Written in C, it is open source under the BSD License and runs on Windows, Linux, and macOS.

- It is optimized for low memory usage and high-speed performance, making it ideal for servers with limited resources.
- Uses asynchronous request handling, which improves efficiency and scalability for handling multiple connections.
- Supports HTTPS, FastCGI, and URL rewriting, making it a secure and efficient choice for web hosting.

### **8. OpenLiteSpeed**

OpenLiteSpeed is an open-source web server by LiteSpeed Technologies, released in 2013. Written in C and licensed under GPLv3, it supports caching, HTTP/3, and high performance across Windows, Linux, and macOS.

- Delivers fast processing with built-in caching.
- Uses an event-driven architecture to improve performance.
- Supports modern web protocols for secure communication.
- Provides an easy-to-use interface for server configuration.

### **9. Jigsaw Server**

Jigsaw Server is an open-source, Java-based web server developed by the W3C and released in 1996. It is mainly used for testing and developing web standards rather than production hosting.

- Jigsaw is cross-platform, running on Windows, Linux, and macOS.
- Allows users to extend and modify its functionality easily, making it flexible for research and development.
- Fully supports HTTP/1.1 and is designed for experimenting with new web technologies.

### **10. Sun Java System Web Server**

The Sun Java System Web Server was developed by Sun Microsystems in 1996 for Java applications. Written in C and C++, it was later discontinued after Oracle acquired Sun Microsystems.

- Designed specifically for hosting Java-based enterprise applications, ensuring seamless integration.
- Handles high traffic efficiently, making it suitable for large-scale applications.
- Supports multiple operating systems, including Windows, Linux, and Solaris, for flexible deployment.
