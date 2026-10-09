// Manejo del menú responsive en móviles
const menuBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('activo');
    });
}

// Cerrar menú al hacer clic en un enlace (móviles)
document.querySelectorAll('.nav a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        if (navMenu.classList.contains('activo')) {
            navMenu.classList.remove('activo');
        }
    });
});

// Manejo del envío del formulario de reserva/contacto
const formulario = document.getElementById('form-reserva');

if (formulario) {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        alert(`¡Gracias por comunicarte con La Terraza, ${nombre}! En breve nuestro equipo de atención se pondrá en contacto contigo vía WhatsApp.`);
        formulario.reset();
    });
}