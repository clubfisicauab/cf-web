---
title: "Inici"
type: "home"
---

<div id="barra-superior">
  <div class="xarxes-esquerra">
    <a href="https://instagram.com/clubfisicauab" target="_blank" aria-label="Instagram">
      <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    </a>
    <a href="https://x.com/clubfisicauab" target="_blank" aria-label="X">
      <svg viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
    </a>
  </div>
</div>

<div class="carrusel-contenidor">
  <img src="/carrusel1.jpg" class="diapositiva activa" alt="Imatge 1">
  <img src="/carrusel2.jpg" class="diapositiva" alt="Imatge 2">
  <img src="/carrusel3.jpg" class="diapositiva" alt="Imatge 3">
  <img src="/carrusel4.jpg" class="diapositiva" alt="Imatge 4">
  <img src="/carrusel5.jpg" class="diapositiva" alt="Imatge 5">
  
  <button class="fletxa-carrusel fletxa-esquerra" onclick="moureCarrusel(-1)">&#10094;</button>
  <button class="fletxa-carrusel fletxa-dreta" onclick="moureCarrusel(1)">&#10095;</button>
</div>

<div style="text-align: center; margin-bottom: 4rem;">
  <h2 style="font-size: 2.8rem; font-weight: 900; color: #222; margin-bottom: 0.8rem;" class="dark:text-white">Blog</h2>
  <div style="width: 70px; height: 3px; background-color: #Eab308; margin: 0 auto;"></div>
</div>

{{< ultims_blogs >}}

<div style="text-align: center; margin-bottom: 5rem;">
  <a href="/blog/" class="boto-gran-veure-mes">
    Veure més articles
  </a>
</div>

{{< events >}}

<script src="/js/carrusel.js"></script>