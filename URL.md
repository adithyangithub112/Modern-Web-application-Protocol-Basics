# **What is URL (Uniform Resource Locator) ?**

A URL or Uniform Resource Locator is a Unique identifier that is contained by all the resources available on the internet. It can help to locate a particular resource due to its uniqueness. It is also known as the web address. A URL consists of different parts like protocol, domain name, etc. The users can access the URLs by simply typing them inside the address bar or by clicking any button or link web page.

## **Structure of a URL**

### General Structure

```
scheme://host:port/path?query#fragment
```

 Example:

```
https://www.example.com/products/item?id=10#reviews
```

A URL starts with a protocol followed by the name of the resource that has to be accessed. URL uses the protocols as the primary access medium to access the domain or subdomain specified after that wherever the resource is located. It uses multiple protocols like [**HTTP**](https://www.geeksforgeeks.org/blogs/http-full-form/) (Hypertext Transfer Protocol), [**HTTPS Protocol**](https://www.geeksforgeeks.org/html/explain-working-of-https/) (Secured HTTP), **mailto** for emails, [**FTP](https://www.geeksforgeeks.org/computer-science-fundamentals/file-transfer-protocol-ftp/)** (File Transfer Protocol) for files, and **[TELNET](https://www.geeksforgeeks.org/computer-networks/introduction-to-telnet/)** to access remote computers. Mostly the protocol names are specified using the colons and the double forward slashes, but the mailto protocol is specified using the colons only.

### **The protocol or scheme:**

A URL starts with a protocol that is used to access the resource on the internet. The resource is accessed through the [**Domain Name System**](https://www.geeksforgeeks.org/system-design/whats-is-domain-name-systemdns/) or DNS. There are multiple protocols avaiable to use like [**HTTP**](https://www.geeksforgeeks.org/blogs/http-full-form/), [**HTTPS**](https://www.geeksforgeeks.org/html/explain-working-of-https/), [**FTP**](https://www.geeksforgeeks.org/computer-science-fundamentals/file-transfer-protocol-ftp/), mailto, [**TELNET**](https://www.geeksforgeeks.org/computer-networks/introduction-to-telnet/) etc. The protocol used in the above URL is **https.**

### **Domain or Host Name:**

It is the reference or name of the page that you are going to access on the internet. In this case, the domain name is: **www.geeksforgeeks.org.**

### **Port Name:**

It is defined just after the domain name by using the colons between itself and the domain name. Generally, it is not visible in the URL. The **domain name** and the **port name** combinely can be known as **Authority**. The default port for web services is **port80 (:80).**

### **Path:**

It refers to the path or location of a particular file or page stored on the web server to access the content of it. The path used here is: **array-data-structure.**

### **Query:**

A query mainly found in the dynamic pages. It consists of a **question mark(?)** followed by the parameters. ****In above URL query is: **?.**

### **Parameters:**

These are the pieces of information inside a query string of URL. Multiple parameters can be passed to a URL by using the **ampersand(&)** symbol to separate them. The query parameter in above URL is: **ref=home-articlecards.**

### **Fragments:**

The fragments appear at the end of a URL starts with a **Hashtag(#)** symbol. These are the internal page references that refers to a specific section within the page. The fragment in the above URL is: **#what-is-array**.

### Structure

In a full domain:

```
subdomain.domain.tld
```

Example:

```
www.example.com
```

- `www` → subdomain
- `example` → domain name
- `.com` → top-level domain (TLD)

### Purpose of subdomains

Subdomains are used to organize and separate different services or sections of a system under one domain.

Common uses:

- `www.example.com` → main website
- `api.example.com` → backend API service
- `blog.example.com` → blog section
- `admin.example.com` → administrative interface
