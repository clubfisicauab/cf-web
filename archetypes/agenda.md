---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
description: ""                        # Una frase que resumeixi l'activitat
date: {{ .Date }}                      # Data i hora d'inici, p. ex. 2026-10-07T13:00:00+02:00
fi: ""                                 # (Opcional) Data i hora de fi, p. ex. 2026-10-07T15:00:00+02:00
time: "13:00 - 15:00h"                 # Horari tal com es mostra a la web
location: "Facultat de Ciències"
categories: ["Club de Física", "Reunions"]
image: ""                              # (Opcional) Foto, p. ex. "/images/gallery/activitat.jpeg"
inscripcio: ""                         # (Opcional) Enllaç a un formulari per apuntar-s'hi
cronica: ""                            # (Opcional) Quan hagi passat, post que l'explica, p. ex. "/blog/post-23/"
draft: true                            # Canvia-ho a false quan la vulguis publicar
---

Primer paràgraf: resum curt de l'activitat (surt a les targetes i al calendari).

### Què farem?

Explica aquí l'activitat.
