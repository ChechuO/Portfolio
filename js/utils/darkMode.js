export const buttonDarkMode = () => {
    const darkModeToggle = document.querySelector('#darkModeToggle');
    const headerSelect = document.querySelector('#header');
    const menuNavegacion = document.querySelector('#nav-header-list');
    const btnHamburguesa = document.querySelector('#hamburger');

    const tema = localStorage.getItem('tema');

    if (tema === 'oscuro') {
        // Comprobar local Storage para Persistencia
        document.body.classList.add('modo-oscuro');
        headerSelect.classList.add('modo-oscuro');
        menuNavegacion.classList.add('modo-oscuro');
        btnHamburguesa.classList.add('modo-oscuro');
    }

    darkModeToggle.addEventListener('click', () => {
        // Boton para aplicar el tema
        document.body.classList.toggle('modo-oscuro');
        headerSelect.classList.toggle('modo-oscuro');
        menuNavegacion.classList.toggle('modo-oscuro');
        btnHamburguesa.classList.toggle('modo-oscuro');

        if (document.body.classList.contains('modo-oscuro')) {
            localStorage.setItem('tema', 'oscuro');
        } else {
            localStorage.setItem('tema', 'claro');
        }
        comprobarIconos();
    });
};

function comprobarIconos() {
    // comprobar que el icono es el correcto para el tema
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    if (document.body.classList.contains('modo-oscuro')) {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}
