document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            
            // Scroll smoothly to the target element
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('show');
});

// JavaScript
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', function () {
    body.classList.toggle('dark-mode', this.checked);
});
