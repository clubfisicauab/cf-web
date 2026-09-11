---
title: "Agenda"
type: "agenda"
description: "Seminaris, tallers, sortides i fires del Club de Física UAB. Subscriu-te a l'agenda per tenir les activitats al teu calendari."
# A més de la pàgina web, es genera el calendari index.ics (per subscriure-s'hi)
outputs: ["html", "rss", "calendar"]
cascade:
  # Cada activitat també té el seu fitxer .ics per afegir-la al calendari
  outputs: ["html", "calendar"]
---
