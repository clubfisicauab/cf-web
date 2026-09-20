<div align="center">
  <h1>🌌 Club de Física UAB</h1>
  <p><strong>El codi font de la pàgina web oficial del Club de Física de la Universitat Autònoma de Barcelona (UAB).</strong></p>

  <!-- Badges -->
  <img src="https://img.shields.io/github/last-commit/clubfisicauab/cf-web?style=flat-square&color=blue" alt="Últim Commit" />
  <img src="https://img.shields.io/github/repo-size/clubfisicauab/cf-web?style=flat-square&color=orange" alt="Mida del Repo" />
</div>

<hr />

## 🚀 Què és això?
Aquest repositori conté el codi de la web del **Club de Física UAB**: [clubdefisicauab.cat](https://clubdefisicauab.cat). Un espai per penjar esdeveniments, recursos, articles i informació del club.

## 🛠️ Tecnologies utilitzades
- ⚡ **Framework:** [Hugo](https://gohugo.io/) (versió **0.163.3 extended**, la mateixa que es fa servir per publicar)
- 🐡 **Plantilla:** [Blowfish](https://blowfish.page/) v2.103.0, amb un disseny propi a sobre
- 🚀 **Publicació:** GitHub Pages, automàticament amb GitHub Actions

## ⚙️ Instal·lació i ús local
Per fer proves al teu ordinador, necessites tenir [Hugo instal·lat](https://gohugo.io/installation/) (versió *extended*).

1. **Clona el repositori (incloent-hi els submòduls pel tema):**
   ```bash
   git clone --recurse-submodules https://github.com/clubfisicauab/cf-web.git
   cd cf-web
   ```
2. **Arrenca el servidor de desenvolupament:**
   ```bash
   hugo server
   ```
   Afegeix `-D` si també vols veure els esborranys (`draft: true`).
3. Obre `http://localhost:1313` al teu navegador.

> Avís: en local surt el missatge *Module "blowfish" is not compatible with this Hugo version*. El tema està provat fins a Hugo 0.161.1, però la web funciona bé amb la 0.163.3.

## 🗂️ On és cada cosa?

| Carpeta / fitxer | Què hi ha |
|---|---|
| `content/` | Tot el contingut en Markdown: blog, agenda, paperillos, projectes i pàgines |
| `static/images/gallery/` | Fotos dels posts i activitats |
| `hugo.toml` | Configuració: menú, xarxes, correu, galetes, comentaris... |
| `layouts/` | Plantilles HTML (disseny de cada tipus de pàgina) |
| `assets/css/custom.css` | Estils de la web |
| `archetypes/` | Plantilles per crear contingut nou amb tots els camps |
| `scripts/` | Eines: portades dels paperillos i comprovació d'enllaços |

## ✍️ Com afegir contingut

Totes les ordres s'executen des de la carpeta del repositori. Cada ordre crea el fitxer amb tots els camps i un comentari que explica per a què serveix cadascun. **Recorda canviar `draft: true` per `draft: false`** quan el vulguis publicar.

### 📰 Un post al blog
```bash
hugo new content blog/post-23.md
```
- Omple `title`, `description` (una frase per a Google i les xarxes), `author`, `categories` i `tags`.
- Posa les fotos a `static/images/gallery/` i indica la principal a `image: "/images/gallery/post23.jpeg"`. La web en genera sola versions més lleugeres.
- Per posar una foto amb peu dins del text:
  `{{< figure src="/images/gallery/post23-1.jpeg" caption="Peu de foto" >}}`
- El primer paràgraf és el resum que surt a les targetes.
- El camp `cursos` (curs acadèmic) es posa sol a partir de la data i serveix per filtrar el blog per curs.

### 📅 Una activitat a l'agenda
```bash
hugo new content agenda/nom-de-l-activitat.md
```
- `date`: dia i hora d'inici (p. ex. `2026-10-07T13:00:00+02:00`). Opcionalment, `fi` amb l'hora d'acabar.
- `time` i `location`: l'horari i el lloc tal com es mostren.
- `inscripcio` (opcional): enllaç a un formulari. Apareix un botó **Inscriu-t'hi**.
- `cronica` (opcional): quan l'activitat hagi passat, posa-hi el post que l'explica (p. ex. `"/blog/post-23/"`) i s'enllaçaran entre ells.
- Cada activitat genera sola el seu fitxer `.ics`, i s'afegeix al calendari general (`/agenda/index.ics`) al qual es pot subscriure qualsevol persona.

### 📄 Un paperillo
```bash
hugo new content paperillos/nom-del-paperillo
```
1. Copia el PDF dins de la carpeta creada amb el nom **`paper.pdf`**.
2. Genera la portada (la primera pàgina del PDF com a imatge):
   ```bash
   powershell -ExecutionPolicy Bypass -File scripts/genera-portades.ps1
   ```
   Si no la generes, GitHub Actions la crea sola en publicar.
3. Indica l'estat amb `icon` i `boxcolor` (`"🚧 No acabat"` / `"#f7837a"` o `"📄 Acabat"` / `"#e2e2e2"`) i actualitza `lastmod` cada vegada que el revisis.

La pàgina del paperillo inclou el visor del PDF, la cita en text i en BibTeX i l'espai de comentaris.

### 🧪 Un projecte
```bash
hugo new content projectes/nom-del-projecte
```
- Omple `title`, `description`, `tipus` (p. ex. `"Joc de taula"`), `estat` (`"En curs"`, `"Prototip"`, `"Acabat"`...), `equip` i `tags`.
- Posa a la carpeta una imatge anomenada **`portada.jpg`** (millor en 16:10, p. ex. 1600 × 1000): surt a la targeta, a la capçalera del projecte i quan es comparteix l'enllaç.
- `dades`: xifres curtes per a la capçalera (p. ex. `valor: "10"`, `text: "minuts"`).
- `enllacos`: botons de la capçalera. Poden anar a un fitxer de la carpeta, a una ruta de la web o a una adreça externa.
- `baixades`: fitxers de la carpeta per descarregar (PDF, SVG...), amb un títol i una frase. La mida es calcula sola.
- `relacionats`: posts del blog relacionats, p. ex. `["/blog/post-23/"]`.
- `destacat: true` perquè surti a la portada de la web. Si cap projecte ho és, hi surt el més recent.
- El paràgraf d'abans de `<!--more-->` és el resum que surt a les pàgines d'etiquetes.

Dins del text pots fer servir aquests blocs:
```
{{< xifres >}}
{{< xifra valor="2,2 μs" >}}el que viu un muó en repòs{{< /xifra >}}
{{< /xifres >}}

{{< passos >}}
1. **Paga** l'energia que toca.
2. **Tira** els daus.
{{< /passos >}}

{{< fitxes >}}
{{< fitxa titol="Nom" imatge="foto.webp" color="#7B45C0" etiqueta="Etiqueta" nota="Frase en cursiva" >}}Text principal{{< /fitxa >}}
{{< /fitxes >}}
```

> **Muon Sidequest** s'actualitza des del projecte del joc: després de `build.py` i `pdf.py`, `python scripts/web_club.py <carpeta de la web>` hi copia els PDF, els retrats, la portada i la web del joc (`static/projectes/muon-sidequest/joc/`), i posa al dia les xifres i les fitxes dels personatges de `content/projectes/muon-sidequest/index.md`. No editeu a mà aquests fitxers ni el bloc marcat com a generat; la resta del text sí.

### 📚 Recursos
Edita `content/recursos.md`. Els recursos van dins d'un bloc `{{< recursos >}} ... {{< /recursos >}}` i cadascun s'escriu així:
```
{{< recurs titol="Nom del recurs" url="https://..." tipus="Vídeos" >}}Descripció breu.{{< /recurs >}}
```

### ❓ Preguntes freqüents
Edita `content/preguntes-frequents.md`. Cada pregunta és:
```
{{< pregunta "La pregunta?" >}}
La resposta, en Markdown.
{{< /pregunta >}}
```

### ➗ Fórmules matemàtiques
Afegeix `math: true` al front matter i escriu les fórmules amb `\( ... \)` (dins del text) o `$$ ... $$` (en un bloc a part). Es mostren amb KaTeX.

## 🔧 Configuració (`hugo.toml`)
- `[params.club]`: correu, Instagram, X i, opcionalment, l'enllaç a un formulari d'avisos (`formulari`) i a un butlletí (`butlleti`). Si hi poses un enllaç, el botó apareix sol a la web.
- `[params.club.adreca]`: adreça per defecte de les activitats (per a Google i els calendaris).
- `[params.galetes]`: identificador de Google Analytics. **Només es carrega en producció i si el visitant accepta les galetes.** Si canvies la política de galetes, canvia `versio` perquè es torni a demanar el consentiment.
- `[params.giscus]`: configuració dels comentaris dels paperillos.
- `[[menu.main]]`: el menú. Els apartats amb `parent = "club"` surten dins del desplegable **El Club**.

## ✅ Comprovar enllaços i imatges
Abans de publicar pots comprovar que no hi ha enllaços ni imatges trencats:
```bash
hugo
node scripts/comprova-enllacos.mjs public
```
A GitHub Actions es comprova sol a cada publicació i, si troba problemes, en deixa un avís al resum de l'execució.

## 🚀 Publicació
Cada `push` a la branca `main` publica la web automàticament (`.github/workflows/hugo.yml`): genera les portades que falten, construeix la web amb Hugo, comprova els enllaços i la penja a GitHub Pages.

## 🤝 Com col·laborar
Tota ajuda és benvinguda (disseny, codi, nous articles...):
1. Fes un *Fork* del repositori.
2. Crea una branca per la teva aportació (`git checkout -b nou-article`).
3. Fes els canvis i puja'ls (`git commit -m "Afegeix article sobre quàntica"`).
4. Obre un *Pull Request*.

## 📬 Contacte i Xarxes
- 📸 **Instagram:** [@clubfisicauab](https://instagram.com/clubfisicauab)
- 🐦 **X (Twitter):** [@clubdefisicauab](https://x.com/clubdefisicauab)
- 📧 **Correu:** [clubdefisicauab@gmail.com](mailto:clubdefisicauab@gmail.com)

---
<div align="center">
  <i>Fet amb 🧠 i ☕ pels membres del Club de Física UAB.</i>
</div>
