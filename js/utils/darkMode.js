export const cargarDarkMode = () => {
    const darkModeToggle = document.querySelector('#darkModeToggle');
    const headerSelect = document.querySelector('#header');
    const menuNavegacion = document.querySelector('#nav-header-list');
    const btnHamburguesa = document.querySelector('#hamburger');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('modo-oscuro');
        headerSelect.classList.toggle('modo-oscuro');
        menuNavegacion.classList.toggle('modo-oscuro');
        btnHamburguesa.classList.toggle('modo-oscuro');
        if (document.body.classList.contains('modo-oscuro')) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    });
};
