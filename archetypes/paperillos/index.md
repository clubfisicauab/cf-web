---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
description: ""                  # Subtítol o resum d'una frase
date: {{ .Date }}
lastmod: {{ .Date }}             # Actualitza-ho cada vegada que revisis el document
icon: "🚧 No acabat"             # o "📄 Acabat"
color: "black"
boxcolor: "#f7837a"              # "#e2e2e2" quan estigui acabat
author: ""
tags: []
math: false                      # true si l'abstract té fórmules
draft: true                      # Canvia-ho a false quan el vulguis publicar
---

Abstract (opcional): resum breu del document.

<!--
  Posa el PDF en aquesta mateixa carpeta amb el nom paper.pdf.
  Per generar la portada: powershell -ExecutionPolicy Bypass -File scripts/genera-portades.ps1
-->
