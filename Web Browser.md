## What is a web browser?

A **web browser** is software that retrieves, interprets, and displays content from the World Wide Web.

Examples include Google Chrome, Mozilla Firefox, and Safari.

## Role of a web browser

### Fetching resources

- Sends HTTP/HTTPS requests to servers
- Retrieves HTML, CSS, JavaScript, images, etc.

### Rendering content

- Converts code into a visual page users can see and interact with

### Executing scripts

- Runs JavaScript for dynamic behavior

### User interaction

- Handles clicks, typing, navigation, forms

### Security

- Enforces rules like same-origin policy
- Manages HTTPS, cookies, permissions

## Rendering engine (core concept)

The **rendering engine** is responsible for turning web code into a visible page.

### Popular rendering engines

- **Blink** → used by Chrome and Edge
- **Gecko** → used by Firefox
- **WebKit** → used by Safari

---

### How rendering works (pipeline)

1. **Parse HTML** → builds DOM (Document Object Model)
2. **Parse CSS** → builds CSSOM
3. **Combine DOM + CSSOM** → render tree
4. **Layout** → calculates positions and sizes
5. **Paint** → draws pixels on screen
