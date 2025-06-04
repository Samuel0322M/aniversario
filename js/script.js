window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('loader').style.opacity = '0';
      
      setTimeout(function() {
        document.getElementById('loader').remove();
      }, 500);
    }, 1000);
     });


const datosTarjeta = [
  {
      imagen: "/aniversario/images/semanaantesdenovios.webp",
      titulo: "Antes del comienzo",
      texto:
          "Recuerdo este día con cariño. Fue el día que marcó un antes y un después en nuestra relación. Una salida que hoy agradezco porque significó que estemos juntos.",
  },
  {
      imagen: "/aniversario/images/noviosalfin.webp",
      titulo: "22 de junio",
      texto:
          "El 22 de junio fue el gran día. Tan grande fue que ni una foto juntos; solo encontré eso como evidencia. Recuerdo que ese día no me lo creía y tardé varios días en asimilar que te volviste mi novia. Aunque estaba feliz, eso es innegable.",
  },
  {
      imagen: "/aniversario/images/semanadespues.webp",
      titulo: "Julio 6",
      texto:
          "Fue nuestra primera cita oficial. Recuerdo haber ido a tu casa y presentarme como tu novio, bastante nervioso, las cosas como son. Pero estaba contento de poder mostrarme ante tu familia como tu novio. Apenas empezaba a asimilar que ya somos novios.",
  },
  {
      imagen: "/aniversario/images/almuerzojuntos.webp",
      titulo: "Salida de la u",
      texto:
          "Recuerdo este día cuando fui a recogerte en la U. Se sentía un poco extraño. Almorzaste arroz mixto y conocí un poco más de ti y de Yumbo, ya que estaba muy nervioso para estar en tu casa.",
  },
  {
      imagen: "/aniversario/images/cocinandote.webp",
      titulo: "Cita en mi casa",
      texto:
          "Fue por los días en que mi madre estaba con mi hermana, los cuales aprovechamos muy bien. Fue de las primeras veces que cocinaba algo más allá de lo normal y encima para alguien más. Pero más allá de eso, fue una compañía en días solitarios.",
  },
  {
      imagen: "/aniversario/images/juntos7w7.webp",
      titulo: "First time",
      texto:
          "Bueno, fue una experiencia. Fue bonito, fue novedoso, pero aún más importante: fue especial porque fue contigo, alguien que quiero mucho. Hoy en día lo atesoro porque fue un gran paso en la relación.",
  },
  {
      imagen: "/aniversario/images/manilla.webp",
      titulo: "Nuestro Lazo",
      texto:
          "Fue uno de nuestros primeros regalos, aunque fuiste tú quien lo compró. Aún la uso y la guardo. Tiene un algo que no sé qué es, pero me da paz y me recuerda a ti.",
  },
  {
      imagen: "/aniversario/images/11septiembre.webp",
      titulo: "Tu cumpleaños 11 septiembre",
      texto:
          "Bueno, tu primer cumpleaños juntos. Recuerdo que desde 2 o 3 meses antes tenía en mente el cuarzo rosa. Aunque no pude estar contigo ese día, espero con ansias el próximo para poder acompañarte.",
  },
  {
      imagen: "/aniversario/images/halloween.webp",
      titulo: "Me la conviertes en piedra",
      texto:
          "Halloween. Fue un día en que no estuvimos juntos, pero estabas hermosa. Aún recuerdo ese día. Me hubiese gustado acompañarte. Me dejó reflexionando y con más ganas de estar contigo en celebraciones.",
  },
  {
      imagen: "/aniversario/images/26nov.webp",
      titulo: "En mitad de fiestas",
      texto:
          "No es Halloween ni Navidad, es noviembre. Este día es uno de mis favoritos. Siento que hicimos muchas cosas, que nos acercamos más y nos divertimos mucho. Ya empezábamos a estar más relajados el uno con el otro.",
  },
  {
      imagen: "/aniversario/images/22dic.webp",
      titulo: "Navidad y mi cumpleaños",
      texto:
          "Este fue un día raro, las cosas como son. Ya había aceptado que era un día más, sin importancia, y ¡qué equivocado estaba! Tú cambiaste eso. Ahora pienso en mi próximo cumpleaños como una oportunidad de hacer algo especial contigo.",
  },
  {
      imagen: "/aniversario/images/29dic.webp",
      titulo: "SONICCCCCC",
      texto:
          "El 29 de diciembre me acompañaste a ver Sonic 3. Fue uno de mis días favoritos, que atesoraré mucho porque me hizo muy feliz. También fue el día que se te dañó la cadena, y como no tomamos fotos, esta es mi forma de recordarlo.",
  },
  {
      imagen: "/aniversario/images/9feb-2.webp",
      titulo: "9 de febrero",
      texto:
          "Fue una salida tranquila. Almorzamos juntos, estuvimos en el Único, hablamos, nos reímos y nos dimos mimos. Fue una salida muy bonita y me encantó ese tiempo contigo.",
  },
  {
      imagen: "/aniversario/images/30abril.webp",
      titulo: "29 de marzo",
      texto:
          "Fue el día que fuimos a urgencias con mi madre. Un recuerdo amargo, pero estar contigo lo hizo muy especial. Estuviste para mí cuando más te necesitaba. Hasta el día de hoy te agradezco que me hayas acompañado. Eres una chica maravillosa.",
  },
  {
      imagen: "/aniversario/images/5abril1.webp",
      titulo: "5 de abril",
      texto:
          "Una semana después de lo sucedido, estabas bastante ocupada y estresada con tus trabajos, y aun así viniste a verme. No niego que me sentí mal, pero también muy feliz de que me acompañaras.",
  },
  {
      imagen: "/aniversario/images/13abil1.webp",
      titulo: "Tu Primer Te Amo",
      texto:
          "Estuvimos juntos el fin de semana, y fue el día 11 cuando me dijiste tu primer 'te amo'. Me compraste helado y fuiste muy bonita conmigo. Como empezó Semana Santa, me fuiste a ver el domingo e hicimos lo que no hicimos el sábado 7w7.",
  },
  {
      imagen: "/aniversario/images/18abril4.webp",
      titulo: "Space Jump",
      texto:
          "Tuvimos una salida muy bonita. Hicimos de todo: ejercicio, nos reímos, tomamos algo. Fue el 18 de abril cuando te dije mi primer 'te amo', ya que ese día lloré frente a ti.",
  },
  {
      imagen: "/aniversario/images/20abril2.webp",
      titulo: "Piscinaaa",
      texto:
          "Aprovechamos la Semana Santa y fuimos a la piscina. Nos divertimos mucho y estuvimos juntos todo el día. Tenía muchas ganas de ir y de verte en traje de baño. Me encantó. Es uno de mis paseos favoritos.",
  },
  {
      imagen: "/aniversario/images/mayo4.webp",
      titulo: "Mayo 4",
      texto:
          "Fue una semana y un fin de semana de muchos cambios. El jueves hice la promesa de mejorar, de dejar de callarme y lastimarte. Si ves esto algún día, quiero que mires atrás y veas que sí cambié.",
  },
  {
      imagen: "/aniversario/images/mayo4-2.webp",
      titulo: "Mayo 4",
      texto:
          "Me divertí mucho el sábado. Fue muy bonito ver 'Fuck News' y comer juntos. Cada día me haces quererte más. El domingo también nos vimos, bailamos, y me mataste del susto yendo en moto.",
  },
  {
      imagen: "/aniversario/images/mayo11.webp",
      titulo: "Mayo 11",
      texto:
          "Al escribir esto, siento que eres muchísimo para mí. Me encantó estar contigo ese día, y me alegra que le gustara el regalo a tu mamá. Estuviste muy contenta con cómo te trató la mía. Solo espero seguir cambiando y mejorando para ti.",
  },
  {
      imagen: "/aniversario/images/mayo-24.webp",
      titulo: "Mayo 24",
      texto:
          "Fuimos al cine con mi mamá a ver una de sus peliculas favoritas se divertio mucho y la pasamos bien, tuvimos ese lugar en vell's lugar que bueno para no volver pero fue divertido y muy bonito como reaccionaste a la situacion, otro gran dia.",
  },
    {
      imagen: "/aniversario/images/mayo-31.webp",
      titulo: "Mayo 31",
      texto:
          "El cumpleaños de tu mamá y de mi suegra fue un dia bonito en el cual todo salio bien, estuvimos juntos hablamos, reimos, pase con tu famlia, socialize, lo se historico me llevo mejor con ellos y dormimos juntos y nunca nos dijeron algo la verdad que fue una noche increible",
  },
    {
      imagen: "/aniversario/images/junio-1.webp",
      titulo: "Mayo 31",
      texto:
          "El after party, se podria decir pues nos despertamos juntos tuvimos el mañanero, desayunamos juntos oscar no me funo por dormir contigo, los borrachos eran muy cansones, pero en general estuvo bien viniste a mi caja rompimos records hiciste tu trabajo y nos dimos mucho cariño.",
  },
];


const rutasImagenes = [
        "/aniversario/images/6julio1.webp",
        "/aniversario/images/26nov.webp",
        "/aniversario/images/citaencasa2.webp",
        "/aniversario/images/paraguas2.webp",
        "/aniversario/images/mayo4.webp",
        "/aniversario/images/9feb-1.webp",
        "/aniversario/images/semanaantes2.webp",
        "/aniversario/images/20abril1.webp",
        "/aniversario/images/18abril1.webp",
        "/aniversario/images/5abril1.webp",
        "/aniversario/images/Imagen de WhatsApp 2025-04-03 a las 20.07.44_a4e6a7ed.webp",
        "/aniversario/images/6julio.webp",
        "/aniversario/images/videollamad1.webp",
        "/aniversario/images/conmisaco.webp",
        "/aniversario/images/18abril.webp",
        "/aniversario/images/mayo11-2.webp",
        "/aniversario/images/13abil.webp",
        "/aniversario/images/cocinandote.webp",
        "/aniversario/images/5abril2.webp",
        "/aniversario/images/mayo4-2.webp",
        "/aniversario/images/manilla.webp",
        "/aniversario/images/mia.webp",
        "/aniversario/images/20abril2.webp",
        "/aniversario/images/almuerzojuntos.webp",
        "/aniversario/images/mayo-31.webp",
        "/aniversario/images/gibi2.webp",
        "/aniversario/images/13abil1.webp",
        "/aniversario/images/18abril2.webp",
        "/aniversario/images/20abril3.webp",
        "/aniversario/images/citaencasa.webp",
        "/aniversario/images/5abril3.webp",
        "/aniversario/images/junio-1.webp",
        "/aniversario/images/paraguas1.webp",
        "/aniversario/images/22dic.webp",
        "/aniversario/images/20abril4.webp",
        "/aniversario/images/peliconmadre.webp",
        "/aniversario/images/mayo11-1.webp",    
        "/aniversario/images/18abril3.webp",
        "/aniversario/images/juntos7w7.webp",
        "/aniversario/images/20abril5.webp",
        "/aniversario/images/mayo-31.webp",
        "/aniversario/images/videollamada3.webp",
        "/aniversario/images/mayo4-1.webp",
        "/aniversario/images/despuesdeldeli.webp",
        "/aniversario/images/paraguas4.webp",
        "/aniversario/images/gibi1.webp",
        "/aniversario/images/videollamad2.webp",
        "/aniversario/images/18abril4.webp",
        "/aniversario/images/20abril.webp"
      ];

const contenedorCards = document.getElementById("contenedor-tarjetas");

datosTarjeta.forEach(tarjeta => {
        const div = document.createElement("div");
        div.classList.add("tarjeta");
        div.innerHTML = `
          <div class="box-frente">
            <img src="${tarjeta.imagen}" alt="">
          </div>
          <div class="box-detras">
            <h5>${tarjeta.titulo}</h5>
            <p>${tarjeta.texto}</p>
          </div>
        `;
        contenedorCards.appendChild(div);
      });

const contenedorSwiper = document.getElementById("swiper-wrapper");

rutasImagenes.forEach(ruta => {
    const div = document.createElement("div");
    div.classList.add("swiper-slide");
    div.innerHTML = `<img src="${ruta}" alt="recuerdo">`;
    contenedorSwiper.appendChild(div);
  });

var tarjeta = document.querySelectorAll(".tarjeta");

tarjeta.forEach((tarjeta) => {
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
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function abrirSobre(elemento) {
  const cerrado = elemento.querySelector(".cerrado");
  const abierto = elemento.querySelector(".abierto");
  const carta = elemento.querySelector(".carta");

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
  const sobre = carta.closest(".sobre");
  const cerrado = sobre.querySelector(".cerrado");
  const abierto = sobre.querySelector(".abierto");

  carta.style.transform = "translateX(-50%) scale(0)"; // Oculta la carta
  carta.style.opacity = "0";

  setTimeout(() => {
    abierto.style.display = "none"; // Oculta el sobre abierto
    cerrado.style.display = "block"; // Muestra el sobre cerrado nuevamente
  }, 500);
}

const audio = document.getElementById("backgroundMusic");
const button = document.getElementById("toggleMusic");

let isPlaying = false;

function toggleMusic() {
  if (!isPlaying) {
    audio.play();
    button.textContent = "Pausar música";
  } else {
    audio.pause();
    button.textContent = "Reproducir música";
  }
  isPlaying = !isPlaying;
}

button.addEventListener("click", toggleMusic);
