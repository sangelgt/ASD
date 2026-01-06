document.addEventListener('DOMContentLoaded', () => {
    // Lógica para resaltar el enlace de la página actual en la navegación
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav .nav-link');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Check if the link's href matches the current path
        if (linkPath === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
});