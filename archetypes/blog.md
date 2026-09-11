{{- $data := time.AsTime .Date -}}
{{- $any := $data.Year -}}
{{- if lt (int $data.Month) 9 }}{{ $any = sub $any 1 }}{{ end -}}
---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
description: ""                    # Una frase que resumeixi el post (surt a Google i quan es comparteix)
date: {{ .Date }}
image: ""                          # Foto principal, p. ex. "/images/gallery/post23.jpeg"
categories: ["Club de Física"]     # Reunions, Presentacions, Xerrades, Sortides, Fira...
cursos: ["{{ $any }}-{{ printf "%02d" (mod (add $any 1) 100) }}"]       # Curs acadèmic (es calcula sol a partir de la data)
author: ""
tags: ["clubdefisica"]
math: false                        # Posa-ho a true si el post té fórmules (KaTeX)
draft: true                        # Canvia-ho a false quan el vulguis publicar
---

Escriu aquí el post. El primer paràgraf és el resum que surt a les targetes.

{{ "{{< figure src=\"/images/gallery/nom-de-la-foto.jpeg\" caption=\"Peu de foto\" >}}" }}
