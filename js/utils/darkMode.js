export const buttonDarkMode = () => {
    const darkModeToggle = document.querySelector('#darkModeToggle');

    darkModeToggle.addEventListener('click', () => {
        const modoOscuro = document.documentElement.dataset.theme !== 'oscuro';

        if (modoOscuro) {
            document.documentElement.dataset.theme = 'oscuro';
        } else {
            document.documentElement.removeAttribute('data-theme');
        }

        localStorage.setItem('tema', modoOscuro ? 'oscuro' : 'claro');
        comprobarIconos();
    });

    comprobarIconos();
};

function comprobarIconos() {
    const modoOscuro = document.documentElement.dataset.theme === 'oscuro';
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    sunIcon.style.display = modoOscuro ? 'block' : 'none';
    moonIcon.style.display = modoOscuro ? 'none' : 'block';
}
