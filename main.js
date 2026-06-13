// ======================================
// PORTAFOLIO - MAIN.JS
// ======================================

console.log("Bienvenido a mi portafolio");

// ======================================
// AÑO AUTOMÁTICO EN EL FOOTER
// ======================================

const anio = document.getElementById("anio");

if (anio) {
    anio.textContent = new Date().getFullYear();
}

// ======================================
// DESPLAZAMIENTO SUAVE DEL MENÚ
// ======================================

const enlaces = document.querySelectorAll('.nav-link');

enlaces.forEach(enlace => {

    enlace.addEventListener('click', function(e) {

        const destino = this.getAttribute('href');

        // Solo aplica para enlaces internos
        if (destino.startsWith("#")) {

            e.preventDefault();

            const seccion = document.querySelector(destino);

            if (seccion) {

                seccion.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});

// ======================================
// MENSAJE AL ENVIAR EL FORMULARIO
// ======================================

const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("¡Gracias por tu mensaje! (Formulario de demostración)");

        formulario.reset();

    });

}

// ======================================
// EFECTO EN LAS CARDS
// ======================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function() {

        card.style.transform = "scale(1.03)";

    });

    card.addEventListener("mouseleave", function() {

        card.style.transform = "scale(1)";

    });

});

// ======================================
// BOTÓN "VER PROYECTOS"
// ======================================

const boton = document.querySelector(".btn-primary");

if (boton) {

    boton.addEventListener("click", function(e) {

        if (this.getAttribute("href") === "#proyectos") {

            e.preventDefault();

            document.querySelector("#proyectos").scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}