# Simple Web Page Mini Project

A clean, responsive, and easy-to-understand web page built from scratch using HTML5, CSS3, and Vanilla JavaScript. This project serves as a demonstration of fundamental web development concepts without relying on any external frameworks or libraries.

## Project Structure

The project is organized into three core files:

- `index.html`: The structure and content of the page.
- `styles.css`: The visual design and responsive layout rules.
- `script.js`: The interactive functionality.

---

## Code Explanation

### 1. HTML (`index.html`)
The HTML file is built using semantic HTML5 tags to ensure accessibility and readability. 
- **`<header>` & `<nav>`**: Contains the site logo and the main navigation menu. It includes a hamburger menu button (`#menu-toggle`) that is only visible on smaller screens.
- **`<main>` & `<article>`**: The main content is divided into logical sections (`#home`, `#about`, `#contact`) using the `<article>` tag. This makes the code organized and is better for screen readers.
- **`<form>`**: A simple contact form with inputs for Name and Email, accompanied by a submit button. The `novalidate` attribute is used so we can handle validation via our custom JavaScript instead of the browser's default popups.

### 2. CSS (`styles.css`)
The CSS file uses modern practices to style the page cleanly.
- **CSS Variables**: At the top, `:root` defines variables (like `--primary-color` and `--bg-color`) to maintain consistent colors throughout the stylesheet and easily make broad design changes later.
- **Flexbox**: Used extensively in the `<header>` and navigation to align items perfectly.
- **Sticky Header**: `position: sticky; top: 0;` ensures the navigation bar stays at the top of the screen when scrolling.
- **Responsive Design (Media Queries)**: 
  - `max-width: 800px` on the `<main>` tag keeps the content centered and readable on large screens.
  - `@media screen and (max-width: 768px)` triggers the mobile layout. It hides the standard navigation links, displays the hamburger icon, and stacks the menu vertically when the user interacts with it.

### 3. JavaScript (`script.js`)
The script uses vanilla JavaScript and listens for the `DOMContentLoaded` event to ensure the HTML is fully loaded before trying to manipulate it.
- **Mobile Menu Toggle**: It selects the hamburger button and the navigation menu. Clicking the button toggles an `active` class on the menu, which CSS then uses to display it. It also automatically closes the menu when a link is clicked.
- **Form Validation**: 
  - Intercepts the form submission using `e.preventDefault()`.
  - Checks if the name field is empty.
  - Uses a Regular Expression (`emailPattern`) to ensure the email entered follows a standard format (e.g., `user@domain.com`).
  - Displays specific error messages under each input if validation fails.
  - If everything is correct, it displays a success message and clears the form inputs using `form.reset()`.

