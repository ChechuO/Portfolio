import { generarHeader } from './templates/header.js';
import { generarFooter } from './templates/footer.js';
import { cargarMenu } from './utils/menu.js';
import { cargarDarkMode } from './utils/darkMode.js';

const headerSelect = document.querySelector('#header');
const footerSelect = document.querySelector('#footer');

headerSelect.innerHTML = generarHeader();
footerSelect.innerHTML = generarFooter();

cargarMenu();
cargarDarkMode();
