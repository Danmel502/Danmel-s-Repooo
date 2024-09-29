document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const contactForm = document.getElementById('contactForm');

    // Apply a smooth transition when showing or hiding the scroll-to-top button
    scrollToTopButton.style.transition = 'opacity 0.3s ease-in-out';

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { // Show button when scrolled 300px down
            scrollToTopButton.style.display = 'block';
            setTimeout(() => {
                scrollToTopButton.style.opacity = '1';
            }, 10); // Delay to ensure button is visible before fading in
        } else {
            scrollToTopButton.style.opacity = '0';
            setTimeout(() => {
                scrollToTopButton.style.display = 'none';
            }, 300); // Delay hiding until fade-out completes
        }
    });

    // Scroll to top when button is clicked
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Handle form submission with smooth validation
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission behavior

            // Get form field values
            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            // Check if all fields are filled
            if (name === '' || email === '' || message === '') {
                // Smoothly scroll to the top of the form to show the error
                window.scrollTo({ top: contactForm.offsetTop, behavior: 'smooth' });
                alert('Please fill out all required fields.');
            } else {
                // Smoothly display a success message
                alert('Thank you for your message! Your form has been submitted.');
                // Optionally, reset the form fields
                contactForm.reset();
            }
        });
    }
});
