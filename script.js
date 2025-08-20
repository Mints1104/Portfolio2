document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('mobileNavOverlay');

    burgerMenu.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
    });

   const mobileLinks = mobileNav.querySelectorAll('a');
   mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
    });
   });
   


});
