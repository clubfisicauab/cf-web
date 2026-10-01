// Agenda: marca com a finalitzades les activitats que ja han acabat (atribut data-fi).
// La web es torna a generar cada nit; això fa que es vegi a l'hora exacta, sense esperar-hi.
document.addEventListener("DOMContentLoaded", function () {
  function haAcabat(element) {
    const fi = Date.parse(element.dataset.fi);
    return !isNaN(fi) && Date.now() >= fi;
  }

  function estatFinalitzada(etiqueta, classe) {
    const estat = document.createElement(etiqueta);
    estat.className = classe;
    estat.textContent = "Finalitzada";
    return estat;
  }

  function actualitza() {
    // Llistes de properes activitats: es treuen les que han acabat i, si n'hi ha un màxim
    // (data-properes="3" a la portada), es mostren les següents. Si no en queda cap, el missatge buit.
    document.querySelectorAll("[data-properes]").forEach(function (bloc) {
      const maxim = Number(bloc.dataset.properes) || Infinity;
      let queden = 0;
      bloc.querySelectorAll("[data-fi]").forEach(function (item) {
        if (haAcabat(item)) item.remove();
        else item.hidden = queden++ >= maxim;
      });
      if (queden === 0) {
        bloc.hidden = true;
        const buit = bloc.nextElementSibling;
        if (buit && buit.hasAttribute("data-properes-buit")) buit.hidden = false;
      }
    });

    // Calendari del curs
    document.querySelectorAll(".cf-calendari-item[data-fi]").forEach(function (item) {
      if (!haAcabat(item)) return;
      item.removeAttribute("data-fi");
      item.classList.add("cf-calendari-item--passat");
      item.appendChild(estatFinalitzada("span", "cf-calendari-estat"));
    });

    // Pàgina de l'activitat: xip "Finalitzada" i fora els botons d'inscripció i calendari
    document.querySelectorAll("[data-activitat][data-fi]").forEach(function (fitxa) {
      if (!haAcabat(fitxa)) return;
      fitxa.removeAttribute("data-fi");
      const xips = fitxa.querySelector(".cf-xips");
      if (xips) xips.prepend(estatFinalitzada("li", "cf-xip cf-xip--estat"));
      fitxa.querySelectorAll("[data-nomes-abans]").forEach(function (boto) {
        boto.remove();
      });
      const accions = fitxa.querySelector(".cf-accions-activitat");
      if (accions && !accions.children.length) accions.remove();
    });
  }

  actualitza();
  // Si la pàgina es queda oberta, es torna a comprovar cada minut
  setInterval(actualitza, 60000);
});
