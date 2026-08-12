const botonMenu =
    document.getElementById("menu-toggle");

const menu =
    document.getElementById("menu");


/* =========================
   MENÚ MÓVIL
========================= */

if (botonMenu && menu) {

    botonMenu.addEventListener(
        "click",
        () => {

            const abierto =
                menu.classList.toggle(
                    "activo"
                );


            botonMenu.setAttribute(
                "aria-expanded",
                abierto
                    ? "true"
                    : "false"
            );


            botonMenu.textContent =
                abierto
                    ? "✕"
                    : "☰";

        }
    );

}


/* =========================
   SCROLL DEL MENÚ
========================= */

document
    .querySelectorAll(
        "[data-scroll]"
    )
    .forEach(
        (enlace) => {

            enlace.addEventListener(
                "click",
                (evento) => {

                    const href =
                        enlace.getAttribute(
                            "href"
                        );


                    if (
                        !href ||
                        !href.startsWith("#")
                    ) {
                        return;
                    }


                    const destino =
                        document.querySelector(
                            href
                        );


                    if (!destino) {
                        return;
                    }


                    evento.preventDefault();


                    const menuAlto =
                        document
                            .querySelector(
                                ".navbar"
                            )
                            ?.offsetHeight
                        || 0;


                    const margenExtra =
                        window.innerWidth <= 600
                            ? 14
                            : 22;


                    const posicion =
                        destino
                            .getBoundingClientRect()
                            .top

                        + window.pageYOffset

                        - menuAlto

                        - margenExtra;


                    window.scrollTo({

                        top:
                            posicion,

                        behavior:
                            "smooth"

                    });


                    menu.classList.remove(
                        "activo"
                    );


                    botonMenu.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    botonMenu.textContent =
                        "☰";

                }
            );

        }
    );


/* =========================
   CARRUSEL HERO
========================= */

const slides =
    Array.from(
        document.querySelectorAll(
            ".hero-slide"
        )
    );


let slideActual = 0;


if (slides.length > 1) {

    setInterval(
        () => {

            slides[
                slideActual
            ].classList.remove(
                "activo"
            );


            slideActual =
                (
                    slideActual + 1
                )
                % slides.length;


            slides[
                slideActual
            ].classList.add(
                "activo"
            );

        },

        5500
    );

}