---
title: "Maqueta de Lorentz"
description: "Una maqueta imprimible en 3D per veure i tocar les transformades de Lorentz: la geometria de l'espaitemps amb una base impresa, 21 juntes i spaghetti cru."
date: 2026-03-06
lastmod: 2026-09-22
tipus: "Maqueta imprimible en 3D"
estat: "Acabat"
equip: "Hector Solé Martínez"
tags: ["Relativitat", "Espaitemps", "Impressió 3D", "Maqueta"]
destacat: false                   # El projecte destacat de la portada continua sent el Muon Sidequest
weight: 2                         # Ordre a la llista de projectes (el Muon Sidequest té weight 1)

dades:
  - valor: "22"
    text: "peces"
  - valor: "≈ 7 h"
    text: "d'impressió"
  - valor: "15 cm"
    text: "de costat"
  - valor: "1 €"
    text: "de spaghetti"

enllacos:
  - text: "Llegeix el paperillo"
    url: "/paperillos/maqueta-rela/"
  - text: "Model original a Printables"
    url: "https://www.printables.com/model/1444013-lorentz-transform-simulator"

baixades:
  - fitxer: "base-lorentz.stl"
    titol: "Base amb la geometria de Lorentz"
    text: "La peça gran, amb les hipèrboles de la invariant i el logo del Club. 112 mm de costat al 100 %; nosaltres la vam imprimir al 134 %."
  - fitxer: "junta-amb-pin.stl"
    titol: "Junta amb pin"
    text: "Se n'han d'imprimir 19. És la peça que corre per les guies i marca els punts de l'espaitemps."
  - fitxer: "junta-sense-pin.stl"
    titol: "Junta sense pin"
    text: "Se n'han d'imprimir 2, per als extrems. Igual que l'anterior, però sense el sortint de sota."

relacionats: ["/blog/post-20/", "/blog/post-8/", "/blog/post-4/"]
math: true
draft: false
---

{{< lead >}}
Cansat que l'espai hiperbòlic on viuen les transformades de Lorentz sigui només numèric? **Porta'l a la realitat.**
{{< /lead >}}

<!--more-->

De part del Club de Física us portem un material 3D per als fans més enginyerils: amb una impressora 3D i quatre coses que ja tens a casa pots muntar-te la teva pròpia màquina de transformades de Lorentz, deformar l'espaitemps amb les mans i explicar la paradoxa de les bessones com ho faria el mateix Einstein.

La maqueta surt del paperillo **[Maqueta Relativitat Especial](/paperillos/maqueta-rela/)**, on l'Hector explica tota la física i tot el procés de disseny i impressió.

## La física que hi ha a sota

A l'espai de Lorentz-Minkowski, la distància entre dos successos no és la de Pitàgores. El que mesuren igual tots els observadors inercials, es moguin com es moguin, és la **invariant de Lorentz**:

$$s^2 = -c^2t^2 + x^2 + y^2 + z^2$$

Si ens quedem només amb una dimensió d'espai i el temps, tots els punts que comparteixen la mateixa invariant dibuixen una hipèrbola:

$$c^2t^2 - x^2 = s^2$$

I això és exactament el que hi ha gravat a la base: un feix d'hipèrboles dins del con de llum, amb les diagonals a 45° fent de velocitat de la llum. Posant la maqueta en forma de diamant, les juntes es mouen per les guies i pots llegir-hi directament el que passa quan canvies de sistema de referència.

{{< figure src="maqueta-muntada.jpg" alt="La maqueta muntada i girada 45°, amb les juntes negres col·locades a les guies" caption="La maqueta muntada i girada 45°: les diagonals són la velocitat de la llum i les juntes marquen successos de l'espaitemps." >}}

{{< xifres >}}
{{< xifra valor="45°" >}}la diagonal: la velocitat de la llum{{< /xifra >}}
{{< xifra valor="22" >}}peces a imprimir, base inclosa{{< /xifra >}}
{{< xifra valor="134 %" >}}l'escala que fem servir, perquè es manipuli millor{{< /xifra >}}
{{< xifra valor="0,1 mm" >}}d'alçada de capa, per no perdre detall{{< /xifra >}}
{{< /xifres >}}

## Què has d'imprimir

{{< passos >}}
1. **La base** (`base-lorentz.stl`): una sola peça de 112 × 112 × 9,4 mm al 100 %. Nosaltres la vam imprimir al **134 %** —uns 15 cm de costat— perquè fos més fàcil de manipular i els forats no quedessin massa justos.
2. **19 juntes amb pin** (`junta-amb-pin.stl`) i **2 juntes sense pin** (`junta-sense-pin.stl`): peces de 10 × 10 mm que s'enfilen a les guies.
3. **Les guies**: spaghetti cru, sí, literalment. Aguanta molta tensió i es doblega sense trencar-se, que és justament el que necessitem. Els forats es tapen amb silicona calenta.
{{< /passos >}}

Amb una impressora domèstica i un filament qualsevol n'hi ha prou. Al paperillo hi ha els paràmetres que va fer servir l'Hector: broquet de 0,4 mm, alçada de capa de 0,1 mm, 220 °C de capçal, 60 °C de llit i un 25 % d'emplenat, amb unes **7 hores** d'impressió per al conjunt.

{{< figure src="muntatge.jpg" alt="La base impresa en groc i les juntes negres, abans de muntar-les" caption="Tot el material just abans de muntar-lo: la base amb les hipèrboles i el logo del Club, i les 21 juntes." >}}

## Com es fa servir

Gira la maqueta 45°, en forma de diamant: la diagonal passa a ser la velocitat de la llum i tens al davant el diagrama espaitemps de tota la vida. A partir d'aquí:

- **Canvia de sistema de referència.** Mou les juntes i mira com, per a una persona que corre al 20 % de la velocitat de la llum, és l'altra la que es mou en sentit contrari.
- **Trenca la simultaneïtat.** Dos successos que passen alhora per a tu deixen de passar alhora per a qui es mou: les juntes ho ensenyen de cop, sense cap compte.
- **Explica les bessones.** La maqueta dona per molt més: el problema de les bessones és l'activitat natural per acompanyar-la.

{{< figure src="simultaneitat.jpg" alt="La maqueta amb els eixos d'un sistema de referència marcats i dos successos etiquetats" caption="Els eixos del sistema de referència d'una persona en moviment: els dos successos que abans eren simultanis, ara ja no ho són." >}}

Torna't el rei de la relativitat especial. A què esperes?

{{< llicencia
      codi="by-nc-sa"
      obra="Maqueta de Lorentz"
      autor="de l'Hector Solé Martínez (Club de Física UAB)"
      original="Lorentz Transform Simulator"
      autorOriginal="de 3DPrintingEnthusiast"
      urlOriginal="https://www.printables.com/model/1444013-lorentz-transform-simulator" >}}
Això inclou els fitxers `.stl` d'aquí sota, les imatges i el text d'aquesta pàgina. Els canvis respecte de l'original: la base s'ha aplanat, se n'han ajustat els forats i s'hi ha afegit el logo del Club de Física UAB. Les juntes (`junta-amb-pin.stl` i `junta-sense-pin.stl`) són les de l'original, sense modificar.

Si en fas la teva versió, recorda que l'has de publicar amb aquesta mateixa llicència i citant-ne els autors. I que no se'n pot fer un ús comercial.
{{< /llicencia >}}
