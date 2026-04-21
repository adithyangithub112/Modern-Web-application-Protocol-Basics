// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Toggle the 'active' class on click to show/hide the menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close the mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if window is in mobile view
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    // --- 2. Simple Form Validation ---
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const successMessage = document.getElementById('form-success');

    form.addEventListener('submit', (e) => {
        // Prevent the default form submission (page reload)
        e.preventDefault(); 
        
        // Reset all error and success messages
        nameError.textContent = '';
        emailError.textContent = '';
        successMessage.textContent = '';
        
        let isValid = true;

        // Validate Name field
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name.';
            isValid = false;
        }

        // Validate Email field using a simple regular expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Please enter your email.';
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // If all validations pass, show success message and clear form
        if (isValid) {
            successMessage.textContent = 'Thank you! Your message has been sent successfully.';
            form.reset(); 
        }
    });
});
