// scripts.js

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.getElementById('contactForm');
    const nameError = document.getElementById('nameError');
    const passwordError = document.getElementById('passwordError');

    // Add submit event listener to the form
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Get form input values
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        
        let formIsValid = true;

        // Reset error messages
        nameError.textContent = '';
        passwordError.textContent = '';
        nameError.style.display = 'none';
        passwordError.style.display = 'none';
        
        // Validate name input
        if (name === '') {
            nameError.textContent = 'Name is required';
            nameError.style.display = 'block';
            formIsValid = false;
        } 
        
        // Validate password input
        if (password === '') {
            passwordError.textContent = 'Password is required';
            passwordError.style.display = 'block';
            formIsValid = false;
        }
        
        // Submit form if valid
        if (formIsValid) {
            alert('Form submitted successfully');
            form.submit();  // Remove this line if you want to handle form submission with JavaScript
        }
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Dynamic navigation highlighting
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Responsive navigation menu for small screens
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        navMenu.querySelector('ul').classList.toggle('show');
    });
});
