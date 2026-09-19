---
title: "Muon Sidequest"
description: "Ets un muó que acaba de néixer a 15 km d'altura. Arribaràs a terra abans de desintegrar-te? Un joc de taula de divulgació per a la Nit de la Recerca."
date: 2026-09-19
lastmod: 2026-09-19
tipus: "Joc de taula de divulgació"
estat: "Prototip v0.1"             # La versió l'actualitza scripts/web_club.py del projecte del joc
equip: "Club de Física UAB"
tags: ["Relativitat", "Raigs còsmics", "Divulgació"]
destacat: true
schema: "Game"
aliases: ["/muon/"]               # Adreça curta per a la paradeta: clubdefisicauab.cat/muon

# Els valors de jugadors, minuts i preguntes els actualitza scripts/web_club.py
dades:
  # - valor: "2–5"
  #   text: "jugadors"
  # - valor: "10"
  #   text: "minuts"
  # - valor: "2"
  #   text: "daus"
  # - valor: "36"
  #   text: "preguntes"

enllacos:
  - text: "Obre la web del joc"
    url: "joc/"
  - text: "PDF per imprimir"
    url: "muon-sidequest.pdf"

# Els fitxers els copia scripts/web_club.py des de la carpeta sortida/ del projecte del joc
baixades:
  - fitxer: "muon-sidequest.pdf"
    titol: "Tot el joc en A4"
    text: "Regles, tauler, fitxes dels muons i preguntes en un sol PDF, per imprimir i provar-lo."
  - fitxer: "tauler-a3.pdf"
    titol: "Tauler en A3"
    text: "Quadrat, de 27,7 cm, per imprimir i plastificar o muntar en cartró ploma."
  - fitxer: "tauler-a4.pdf"
    titol: "Tauler en A4"
    text: "El mateix tauler, de 19 cm, per fer-ne proves."
  - fitxer: "cartes-preguntes.pdf"
    titol: "Cartes de preguntes"
    text: "Nou cartes per full, a mida de carta de joc (63 × 88 mm), per retallar."
  - fitxer: "cartes-preguntes-doble-cara.pdf"
    titol: "Cartes de preguntes amb revers"
    text: "Les mateixes cartes amb el revers del color de cada nivell. Imprimiu-les a doble cara, girant pel costat llarg."
  - fitxer: "fitxes-personatges.pdf"
    titol: "Fitxes dels muons"
    text: "Una per jugador, amb el bonus i la pista d'energia. Quatre per full."
  - fitxer: "taula-personatges.pdf"
    titol: "Taula per triar personatge"
    text: "Un full amb els cinc muons i els seus bonus, per tenir-lo a la paradeta."
  - fitxer: "tauler.svg"
    titol: "Tauler en SVG"
    text: "En vectorial, per editar-lo o portar-lo a una impremta. Cal tenir instal·lades les fonts Bricolage Grotesque i Lexend."

relacionats: ["/blog/post-16/", "/blog/post-8/", "/blog/post-5/"]
draft: false
---

{{< lead >}}
**Muon Sidequest** és un joc de taula per descobrir per què els muons dels raigs còsmics arriben a terra. L'hem preparat per a la paradeta del Club a la **Nit de la Recerca** de la UAB, on hi ha un detector de muons real a l'Eix Central.
{{< /lead >}}

<!--more-->

Ets un muó que acaba de néixer a uns 15 km d'altura i has de baixar fins al detector abans de desintegrar-te. Pel camí trobaràs tempestes elèctriques, col·lisions amb l'aire i preguntes de cultura científica que et poden donar l'energia que et falta. Una partida dura menys de 10 minuts.

## Per què arriben a terra?

Un muó viu, de mitjana, 2,2 microsegons. Encara que anés a la velocitat de la llum, en aquest temps només recorreria uns 660 metres. I tot i així, a nivell del mar n'arriba aproximadament un per centímetre quadrat cada minut.

{{< xifres >}}
{{< xifra valor="15 km" >}}l'altura on neixen, quan un raig còsmic xoca amb l'aire{{< /xifra >}}
{{< xifra valor="2,2 μs" >}}el que viu un muó en repòs, de mitjana{{< /xifra >}}
{{< xifra valor="660 m" >}}el que recorreria sense relativitat{{< /xifra >}}
{{< xifra valor="20 km" >}}el que recorre de mitjana un muó típic, gràcies a la relativitat{{< /xifra >}}
{{< /xifres >}}

La clau és la relativitat especial. Vist des de la Terra, el rellotge d'un muó molt energètic va molt més lent: és la dilatació del temps. Un muó típic viu unes 30 vegades més i recorre, de mitjana, uns 20 km, més que els 15 que el separen de terra. Vist des del muó, és l'atmosfera la que s'encongeix. Són dues maneres d'explicar el mateix.

Al joc passa igual: com més energia tens, més lent va el teu rellotge i menys et costa cada torn. Hem simulat 20.000 partides: amb relativitat arriben a terra uns 80 muons de cada 100, i sense, només 1 de cada 100.

## Com es juga

{{< passos >}}
1. **Paga** l'energia que marca el color on tens el marcador. Com més energia tens, menys pagues.
2. **Tira** els dos daus i avança.
3. **Resol** la casella on has caigut: una pregunta, una tempesta que t'accelera, una col·lisió amb l'aire que et fa perdre energia...
{{< /passos >}}

Si al principi del torn no pots pagar, et desintegres (μ → e + 2 neutrins). Cada casella té física real al darrere, i les simplificacions del joc les expliquem a les regles.

[Llegeix les regles completes →](joc/#regles)

## Els cinc muons

<!-- personatges: generat per scripts/web_club.py del joc, no l'editeu a mà -->
Tots neixen a 15 km amb 10 d'energia, però cadascun té un bonus diferent.

{{< fitxes >}}
{{< fitxa titol="Muó Macarra" imatge="personatges/1-macarra.webp" color="#7B45C0" etiqueta="Bonus de velocitat" nota=`S'ha intentat saltar les normes còsmiques diverses vegades! Té antecedents penals per voler acostar-se massa a la velocitat de la llum.` >}}Si quan tires el teu marcador és a la franja verda, avances una casella més del que diuen els daus.{{< /fitxa >}}
{{< fitxa titol="Muó Maliciós" imatge="personatges/2-malicios.webp" color="#2E8B57" etiqueta="Bonus per avarícia" nota=`És dels dolents! Vol aconseguir el màxim d'energia possible per causar un impacte negatiu a la Terra.` >}}Quan els teus daus sumen parell, robes 1 d'energia al rival que tinguis més a prop.{{< /fitxa >}}
{{< fitxa titol="Muó Michi" imatge="personatges/3-michi.webp" color="#CC5A55" etiqueta="Bonus de monada" nota=`És infinitament adorable. De debò, mira'l. Tots els muons es volen aturar a acariciar-lo!` >}}Si acabes el moviment en una casella veïna d'un rival (just davant o just darrere), feu scattering. Si empateu a pedra, paper o tisores, guanyes tu.{{< /fitxa >}}
{{< fitxa titol="Muó Mestre" imatge="personatges/4-mestre.webp" color="#1E8C9E" etiqueta="Bonus de saviesa" nota=`Fa tant de temps que ensenya la relativitat (2 ms!) que respon bé gairebé totes les preguntes. Com que ja té una edat, a vegades la memòria li falla...` >}}Quan encertes una pregunta, avances 2 caselles. Si en falles una, tira un dau: amb un 6, guanyes 1 d'energia, sigui quina sigui la pregunta.{{< /fitxa >}}
{{< fitxa titol="Muó Minyó" imatge="personatges/5-minyo.webp" color="#A2760F" etiqueta="Bonus del bon rotllo" nota=`És simplement feliç. Passa de mals rotllos. No pensa massa les coses, i per això a vegades les jugades li surten millor del que espera...` >}}Mai fas scattering: quan n'hi hauria amb tu, passes de llarg i avances 1 casella.{{< /fitxa >}}
{{< /fitxes >}}
<!-- /personatges -->

## En quin punt som

Muon Sidequest el fa un equip petit del Club i encara és un prototip. Hem ajustat les regles amb simulacions de milers de partides perquè cap personatge surti massa afavorit i una partida no s'allargui més de 10 minuts. Ara toca provar-lo amb gent de veritat.

Si hi jugues, explica'ns què t'ha semblat: digues-nos-ho a la paradeta o [escriu-nos](/contacte/).
