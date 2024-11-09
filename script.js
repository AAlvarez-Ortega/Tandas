
// Seleccionar el icono, el menú y el documento
const menuIcon = document.getElementById("menu-icon");
const dropdownMenu = document.getElementById("dropdown");
const closeMenuButton = document.getElementById("close-menu");

// Función para alternar el menú desplegable
menuIcon.addEventListener("click", function (event) {
    dropdownMenu.classList.toggle("show"); // Muestra/oculta el menú
    event.stopPropagation(); // Evita que el clic en el icono cierre el menú inmediatamente
});

// Cerrar el menú al hacer clic en "Cerrar Menú"
closeMenuButton.addEventListener("click", function (event) {
    dropdownMenu.classList.remove("show"); // Cierra el menú
});

// Función para cerrar el menú cuando se hace clic fuera de él
document.addEventListener("click", function (event) {
    // Si el menú está visible y se hace clic fuera de él, lo cierra
    if (dropdownMenu.classList.contains("show") && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("show"); // Cierra el menú
    }
});
