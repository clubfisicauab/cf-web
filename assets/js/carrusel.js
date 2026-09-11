// Carrusel de la portada: canvi automàtic, fletxes, punts i gest de lliscar al mòbil.
document.addEventListener("DOMContentLoaded", function () {
  const carrusel = document.querySelector("[data-carrusel]");
  if (!carrusel) return;

  const diapositives = Array.from(carrusel.querySelectorAll(".cf-hero-diapositiva"));
  const punts = Array.from(carrusel.querySelectorAll(".cf-hero-punt"));
  if (diapositives.length < 2) return;

  const INTERVAL = 6000;
  const movimentReduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let actual = Math.max(0, diapositives.findIndex((d) => d.classList.contains("activa")));
  let temporitzador = null;

  function mostra(index) {
    diapositives[actual].classList.remove("activa");
    if (punts[actual]) {
      punts[actual].classList.remove("actiu");
      punts[actual].removeAttribute("aria-current");
    }
    actual = (index + diapositives.length) % diapositives.length;
    diapositives[actual].classList.add("activa");
    if (punts[actual]) {
      punts[actual].classList.add("actiu");
      punts[actual].setAttribute("aria-current", "true");
    }
  }

  function atura() {
    clearInterval(temporitzador);
    temporitzador = null;
  }

  function inicia() {
    atura();
    if (!movimentReduit) temporitzador = setInterval(() => mostra(actual + 1), INTERVAL);
  }

  // Fletxes i punts
  const anterior = carrusel.querySelector("[data-carrusel-anterior]");
  const seguent = carrusel.querySelector("[data-carrusel-seguent]");
  if (anterior) anterior.addEventListener("click", () => { mostra(actual - 1); inicia(); });
  if (seguent) seguent.addEventListener("click", () => { mostra(actual + 1); inicia(); });
  punts.forEach((punt, i) => punt.addEventListener("click", () => { mostra(i); inicia(); }));

  // Pausa en passar-hi el ratolí o quan la pestanya no és visible
  carrusel.addEventListener("mouseenter", atura);
  carrusel.addEventListener("mouseleave", inicia);
  document.addEventListener("visibilitychange", () => (document.hidden ? atura() : inicia()));

  // Lliscar amb el dit
  let iniciX = null;
  carrusel.addEventListener("touchstart", (e) => { iniciX = e.touches[0].clientX; }, { passive: true });
  carrusel.addEventListener("touchend", (e) => {
    if (iniciX === null) return;
    const dx = e.changedTouches[0].clientX - iniciX;
    iniciX = null;
    if (Math.abs(dx) > 50) {
      mostra(actual + (dx < 0 ? 1 : -1));
      inicia();
    }
  }, { passive: true });

  inicia();
});
