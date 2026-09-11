#!/usr/bin/env node
// Comprova que els enllaços interns, les imatges i els fitxers de la web generada existeixen.
// Ús:  node scripts/comprova-enllacos.mjs [carpeta=public] [--estricte]
//   --estricte  acaba amb error si troba problemes (per defecte només avisa).
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";

const args = process.argv.slice(2);
const estricte = args.includes("--estricte");
const arrel = args.find((a) => !a.startsWith("--")) || "public";
const DOMINI = "clubdefisicauab.cat";
const aGitHub = Boolean(process.env.GITHUB_ACTIONS);

if (!existsSync(arrel)) {
  console.error(`No existeix la carpeta "${arrel}". Executa primer "hugo".`);
  process.exit(1);
}

function* fitxersHtml(dir) {
  for (const entrada of readdirSync(dir, { withFileTypes: true })) {
    const ruta = join(dir, entrada.name);
    if (entrada.isDirectory()) yield* fitxersHtml(ruta);
    else if (entrada.name.endsWith(".html")) yield ruta;
  }
}

// Atributs amb URL, amb o sense cometes (l'HTML minificat pot treure-les)
const ATRIBUTS = /\s(href|src|data|poster|srcset)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi;

function urlsDe(html) {
  const net = html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (s) => s.slice(0, s.indexOf(">") + 1));
  const urls = [];
  for (const m of net.matchAll(ATRIBUTS)) {
    const valor = m[2] ?? m[3] ?? m[4] ?? "";
    if (m[1].toLowerCase() === "srcset") {
      for (const part of valor.split(",")) {
        const u = part.trim().split(/\s+/)[0];
        if (u) urls.push(u);
      }
    } else {
      urls.push(valor);
    }
  }
  return urls;
}

function rutaLocal(url, pagina) {
  let u = url.trim();
  if (!u || u.startsWith("#") || /^(mailto|tel|javascript|data|webcal):/i.test(u)) return null;
  if (u.startsWith("//")) u = "https:" + u;
  if (/^https?:\/\//i.test(u)) {
    const { hostname, pathname } = new URL(u);
    if (hostname !== DOMINI && hostname !== `www.${DOMINI}`) return null; // enllaç extern
    u = pathname;
  } else if (/^[a-z][a-z0-9+.-]*:/i.test(u)) {
    return null;
  }
  u = u.split("#")[0].split("?")[0];
  if (!u) return null;
  try {
    u = decodeURI(u);
  } catch {}
  const acabaEnBarra = u.endsWith("/");
  const ruta = u.startsWith("/") ? join(arrel, u.slice(1)) : join(dirname(pagina), u);
  return { ruta, acabaEnBarra };
}

function existeix({ ruta, acabaEnBarra }) {
  if (acabaEnBarra) return existsSync(join(ruta, "index.html"));
  if (!existsSync(ruta)) return false;
  return statSync(ruta).isFile() || existsSync(join(ruta, "index.html"));
}

const trencats = new Map();
let pagines = 0;
let comprovats = 0;

for (const pagina of fitxersHtml(arrel)) {
  pagines++;
  const html = readFileSync(pagina, "utf8");
  for (const url of urlsDe(html)) {
    const local = rutaLocal(url, pagina);
    if (!local) continue;
    comprovats++;
    if (!existeix(local)) {
      const clau = url.split("#")[0];
      if (!trencats.has(clau)) trencats.set(clau, new Set());
      trencats.get(clau).add("/" + relative(arrel, pagina).replace(/\\/g, "/"));
    }
  }
}

console.log(`Pàgines revisades: ${pagines} · Enllaços interns comprovats: ${comprovats}`);

if (trencats.size === 0) {
  console.log("Tot correcte: no hi ha enllaços ni imatges trencats.");
  process.exit(0);
}

console.log(`\nEnllaços o fitxers que no existeixen: ${trencats.size}\n`);
for (const [url, llocs] of trencats) {
  const on = [...llocs];
  const resum = on.slice(0, 3).join(", ") + (on.length > 3 ? ` i ${on.length - 3} més` : "");
  if (aGitHub) console.log(`::warning title=Enllaç trencat::${url} (a ${resum})`);
  else console.log(`  ✗ ${url}\n      a ${resum}`);
}

process.exit(estricte ? 1 : 0);
