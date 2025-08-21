document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');

    burgerMenu.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        mobileNavOverlay.classList.toggle('active');
    });

    mobileNavOverlay.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
    });

    // Close mobile nav when clicking on a link
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileNavOverlay.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const contactButton = document.getElementById('contact-button');

    contactButton.addEventListener('click', () => {
        window.location.href = 'mailto:harunemretontus@hotmail.com';
    });

});
