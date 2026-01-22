// Función para cargar el menú en todas las páginas
document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
        <div class="container">
            <h1>Hospital de Niños Benjamín Bloom</h1>
            <nav>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="doctores.html">Doctores</a></li>
                    <li><a href="boletin.html">Boletín</a></li>
                    <li><a href="contactenos.html">Contáctenos</a></li>
                    <li><a href="FAQ.html">Preguntas Frecuentas</a></li>
                    <li><a href="testimonios.html">Testimonios</a></li>
                </ul>
            </nav>
        </div>
    `;

    // Buscar el elemento header
    const headerElement = document.querySelector('header');
    
    // Si existe el header, inyectar el contenido
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }
});

// Función para cargar el menú en todas las páginas
document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
          <div class="container">
            <p>&copy; 2024 Hospital de Niños Benjamín Bloom. Todos los derechos reservados.</p>
            <p>San Salvador, El Salvador</p>
        </div>
    `;

    // Buscar el elemento header
    const headerElement = document.querySelector('footer');
    
    // Si existe el header, inyectar el contenido
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }
});
