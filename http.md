# **Hypertext Transfer Protocol - HTTP**

HTTP (Hypertext Transfer Protocol) is a core Internet protocol that defines how data is exchanged between clients and servers on the web.

*HTTP is an application-layer protocol used implicitly by web browsers to transfer text, images, and multimedia across distributed, hypermedia-based web systems.*

- Enables communication between web browsers and web servers.
- Forms the foundation of data transfer on the World Wide Web.
- Defines rules for requesting and delivering data between systems.

# **Methods of HTTP**

HTTP methods define the type of action a client wants to perform on a resource hosted by a server.

- **GET:** Retrieves data without modifying the resource.
- **POST:** Submits data for processing or resource creation.
- **PUT:** Creates or replaces a resource completely.
- **PATCH:** Partially updates a resource.
- **DELETE:** Removes a resource from the server.
- **HEAD:** Retrieves response headers only.
- **OPTIONS:** Returns supported methods and communication options.
- **TRACE:** Echoes the request for debugging (rarely used due to security risks).
- **CONNECT:** Establishes a tunnel, typically for HTTPS via proxies.

## HTTP REQUEST (Client → Server)

### structure of a Request

```
<Method> <Path> <HTTP Version>
Headers

Body (optional)
```

### Example

```
GET /index.html HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: text/html
```

## 1. Request Line

- **Method** → action (GET, POST, etc.)
- **Path** → resource location
- **Version** → HTTP/1.1, HTTP/2

 Example:

`GET /products HTTP/1.1`

## 2. HTTP Methods (what you want to do)

- **GET** → retrieve data
- **POST** → send data (forms, login)
- **PUT** → replace/update
- **PATCH** → partial update
- **DELETE** → remove resource

## 3. Headers (metadata)

Headers give **extra information** about the request.

Examples:

- `Host` → which server
- `User-Agent` → browser info
- `Accept` → what formats you can handle
- `Authorization` → credentials/token
- `Content-Type` → format of body
