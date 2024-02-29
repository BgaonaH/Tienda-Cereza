'use strict';

window.addEventListener('load', ()=>{
    
    const botonHamburguesa = document.querySelector('.hamburguesa');
    const menu = document.querySelector('.menu');

    botonHamburguesa.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el clic se propague al documento cuando se hace clic en el botón de hamburguesa
        menu.classList.toggle('active'); // Agrega o remueve la clase 'active' al menú
        botonHamburguesa.classList.toggle('active'); // Agrega o remueve la clase 'active' al botón de hamburguesa
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !botonHamburguesa.contains(event.target)) {
            menu.classList.remove('active'); // Remueve la clase 'active' del menú si se hace clic fuera de él y del botón de hamburguesa
            botonHamburguesa.classList.remove('active');
        }
    });
})