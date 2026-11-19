export const cargarMenu = () => {
    const btnHamburguesa = document.querySelector('#hamburger');
    const menuNavegacion = document.querySelector('#nav-header-list');
    const navLinks = document.querySelectorAll('.nav-header-link');

    btnHamburguesa.addEventListener('click', () => {
        menuNavegacion.classList.toggle('active');
        btnHamburguesa.classList.toggle('active');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            menuNavegacion.classList.remove('active');
            btnHamburguesa.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!menuNavegacion.contains(e.target) && !btnHamburguesa.contains(e.target)) {
            menuNavegacion.classList.remove('active');
            btnHamburguesa.classList.remove('active');
        }
    });
};
