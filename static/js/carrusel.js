document.addEventListener("DOMContentLoaded", function() {
    const diapositives = document.querySelectorAll('.diapositiva');
    const carrusel = document.querySelector('.carrusel-contenidor');
    if (diapositives.length === 0 || !carrusel) return;

    let indexActual = 0;
    
    // Configurar estat inicial sense classes
    diapositives.forEach(d => {
        d.style.opacity = "0";
        d.style.zIndex = "1";
    });
    diapositives[0].style.opacity = "1";
    diapositives[0].style.zIndex = "2";

    let timer = setInterval(() => moure(1), 5000);

    function moure(direccio) {
        const antic = diapositives[indexActual];
        indexActual = (indexActual + direccio + diapositives.length) % diapositives.length;
        const nou = diapositives[indexActual];
        
        // Ordre de capes
        antic.style.zIndex = "1";
        nou.style.zIndex = "2";

        // Animació de l'antiga (s'esvaeix)
        antic.animate([
            { opacity: 1 }, 
            { opacity: 0 }
        ], { duration: 1500, fill: "forwards", easing: "ease-in-out" });
        
        // Animació de la nova (apareix)
        nou.animate([
            { opacity: 0 }, 
            { opacity: 1 }
        ], { duration: 1500, fill: "forwards", easing: "ease-in-out" });
    }

    // Funcio per les fletxes
    window.moureCarrusel = function(direccio) {
        moure(direccio);
        clearInterval(timer);
        timer = setInterval(() => moure(1), 5000);
    };

    // Hover
    carrusel.addEventListener('mouseenter', () => clearInterval(timer));
    carrusel.addEventListener('mouseleave', () => {
        clearInterval(timer);
        timer = setInterval(() => moure(1), 5000);
    });
});