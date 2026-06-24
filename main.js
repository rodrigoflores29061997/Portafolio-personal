// PORTAFOLIOL
console.log("Bienvenido a mi portafolio");

// FOOTER ATOMATICO
const anio = document.getElementById("anio");

if (anio) {
    anio.textContent = new Date().getFullYear();
}

// Desplazamiento suave del menu
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

// Mensaje al enviar formualario
const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("¡Gracias por tu mensaje! (Formulario de demostración)");

        formulario.reset();

    });

}


// Efecto en las Cards

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function() {

        card.style.transform = "scale(1.03)";

    });

    card.addEventListener("mouseleave", function() {

        card.style.transform = "scale(1)";

    });

});


// boton ver proyectos


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