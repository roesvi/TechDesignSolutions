document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-button');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.header__nav-link'); 

    if (hamburgerButton && mainNav) {
        hamburgerButton.addEventListener('click', () => {
            mainNav.classList.toggle('is-open');
            hamburgerButton.classList.toggle('is-active');
            document.body.classList.toggle('no-scroll');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('is-open')) {
                    mainNav.classList.remove('is-open');
                    hamburgerButton.classList.remove('is-active');
                    document.body.classList.remove('no-scroll');
                }
            });
        });
    }

    window.addEventListener('resize', () => {
        
        if (window.innerWidth > 768) {
            mainNav.classList.remove('is-open');
            hamburgerButton.classList.remove('is-active');
            document.body.classList.remove('no-scroll');
        }
    });
});