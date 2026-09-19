---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
description: ""                  # Una o dues frases: què és el projecte (surt a les targetes, a Google i quan es comparteix)
date: {{ .Date }}
lastmod: {{ .Date }}             # Actualitza-ho quan hi facis canvis importants
tipus: ""                        # Quin tipus de projecte és: "Joc de taula", "Experiment", "Maqueta", "Taller"...
estat: "En curs"                 # "En curs", "Prototip", "Acabat"...
equip: ""                        # Qui hi ha treballat (si ho deixes buit, surt "Club de Física UAB")
tags: []                         # Temes, com als paperillos: ["Relativitat", "Experiment"]
destacat: false                  # true perquè surti a la portada de la web (si cap ho és, surt el més recent)

# Xifres curtes que surten a la capçalera, p. ex.:
#   - valor: "10"
#     text: "minuts"
dades: []

# Botons de la capçalera. L'adreça pot ser un fitxer d'aquesta carpeta ("guia.pdf"),
# una ruta de la web ("/blog/post-23/") o una adreça externa. El primer surt destacat.
#   - text: "Descarrega la guia"
#     url: "guia.pdf"
enllacos: []

# Fitxers d'aquesta carpeta per descarregar (surten al final de la pàgina):
#   - fitxer: "guia.pdf"
#     titol: "Guia del taller"
#     text: "Una frase que expliqui què hi ha."
baixades: []

relacionats: []                  # Posts del blog relacionats, p. ex. ["/blog/post-23/"]
math: false                      # true si el text té fórmules
draft: true                      # Canvia-ho a false quan el vulguis publicar
---

Un paràgraf que presenti el projecte. És el resum que surt a les pàgines d'etiquetes.

<!--more-->

## Què hem fet

Explica el projecte amb les teves paraules.

<!--
  Posa en aquesta carpeta una imatge anomenada portada.jpg (o .png, .webp), millor en format 16:10
  (p. ex. 1600 × 1000). Surt a les targetes, a la capçalera i quan es comparteix l'enllaç.
  Al README hi ha els blocs que pots fer servir en el text (xifres, passos i fitxes).
-->
