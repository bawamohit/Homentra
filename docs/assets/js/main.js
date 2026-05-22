document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form validation for contact form
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const phone = document.querySelector('#phone').value;
            const message = document.querySelector('#message').value;

            if (!name || !email || !phone || !message) {
                e.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }
});