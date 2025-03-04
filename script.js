var tarjeta = document.querySelectorAll('.tarjeta');

tarjeta.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => { 
        tarjeta.classList.toggle("girada");
    });

    tarjeta.addEventListener("touchstart", () => { 
        tarjeta.classList.toggle("girada");
    });
});


var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

function abrirSobre(elemento) {
    const cerrado = elemento.querySelector('.cerrado');
    const abierto = elemento.querySelector('.abierto');
    const carta = elemento.querySelector('.carta');

    cerrado.style.display = "none"; // Oculta el sobre cerrado
    abierto.style.display = "block"; // Muestra el sobre abierto

    setTimeout(() => {
        carta.style.transform = "translateX(-50%) scale(1)"; // Hace que la carta aparezca
        carta.style.opacity = "1";
    }, 300);
}

function cerrarSobre(event, boton) {
    event.stopPropagation(); // Evita que se active el evento de abrir el sobre

    const carta = boton.parentElement; // Obtiene la carta
    const sobre = carta.closest('.sobre');
    const cerrado = sobre.querySelector('.cerrado');
    const abierto = sobre.querySelector('.abierto');

    carta.style.transform = "translateX(-50%) scale(0)"; // Oculta la carta
    carta.style.opacity = "0";

    setTimeout(() => {
        abierto.style.display = "none"; // Oculta el sobre abierto
        cerrado.style.display = "block"; // Muestra el sobre cerrado nuevamente
    }, 500);
}

document.getElementById("playMusic").addEventListener("click", function () {
    document.getElementById("musicFrame").src = "https://vocaroo.com/embed/1lwVNM9iHa2H?autoplay=1";
  });
