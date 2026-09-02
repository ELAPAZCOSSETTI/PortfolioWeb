// Genera public/cv-emiliano-lapaz.pdf a partir de src/data/profile.ts,
// para que el CV descargable siempre refleje los mismos datos que la web.
// Uso: npx tsx scripts/generate-cv.mjs
import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  personal,
  experience,
  education,
  certifications,
  skills,
  projects,
} from "../src/data/profile.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const PERFIL =
  "Soy profesional con base sólida en redes y sistemas (3+ años en telecomunicaciones) y formación intensiva en desarrollo web full stack desde 2024. Actualmente lidero operaciones de soporte técnico e integración de IA conversacional en Wara, combinando gestión de equipos con lógica de producto. Me gustaría expandir mi experiencia en roles de desarrollo de software e implementación de IA.";

// Las experiencias más recientes/relevantes llevan bullets completos;
// las más antiguas se resumen en una linea para no alargar el CV a 3+ páginas.
const DETAILED_COMPANIES = new Set(["Wara", "Wiber - Soluciones en Conectividad", "Wesnet"]);

const FEATURED_PROJECTS = projects.filter((p) => !p.placeholder).slice(0, 3);

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

const experienceHtml = experience
  .map((job) => {
    const bullets = DETAILED_COMPANIES.has(job.company)
      ? `<ul class="bullets">${job.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
      : `<p class="job-summary">${escapeHtml(job.bullets[0])}</p>`;
    return `
      <div class="job">
        <div class="job-head">
          <div>
            <span class="job-role">${escapeHtml(job.role)}</span>
            <span class="job-company"> · ${escapeHtml(job.company)}</span>
          </div>
          <span class="job-period">${escapeHtml(job.period)}${job.current ? " (actual)" : ""}</span>
        </div>
        ${bullets}
      </div>`;
  })
  .join("");

const certificationsHtml = certifications
  .map(
    (c) =>
      `<li><strong>${escapeHtml(c.name)}</strong><br/><span class="muted">${escapeHtml(c.issuer)} · ${escapeHtml(c.date)}</span></li>`
  )
  .join("");

const skillsHtml = skills
  .map(
    (cat) =>
      `<div class="skill-cat"><span class="skill-title">${escapeHtml(cat.title)}:</span> ${escapeHtml(cat.items.join(", "))}</div>`
  )
  .join("");

const projectsHtml = FEATURED_PROJECTS.map((p) => {
  const link = p.liveUrl || p.repoUrl;
  const linkHtml = link
    ? `<a href="${escapeHtml(link)}">${escapeHtml(link.replace(/^https?:\/\//, ""))}</a>`
    : "";
  return `
    <div class="project">
      <div><strong>${escapeHtml(p.title)}</strong>${linkHtml ? ` — ${linkHtml}` : ""}</div>
      <p class="project-desc">${escapeHtml(p.description)}</p>
    </div>`;
}).join("");

const educationHtml = education
  .map(
    (e) =>
      `<div class="edu-item"><strong>${escapeHtml(e.title)}</strong><br/><span class="muted">${escapeHtml(e.institution)} · ${escapeHtml(e.period)}</span></div>`
  )
  .join("");

const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(personal.name)} - CV</title>
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: "Helvetica Neue", Arial, sans-serif;
    color: #1f2937;
    font-size: 10.5px;
    line-height: 1.45;
  }
  .page {
    display: grid;
    grid-template-columns: 220px 1fr;
    min-height: 297mm;
  }
  .sidebar {
    background: #0f2027;
    color: #e5e7eb;
    padding: 28px 20px;
  }
  .sidebar h2 {
    color: #5eead4;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    padding-bottom: 4px;
    margin: 22px 0 10px;
  }
  .sidebar h2:first-of-type { margin-top: 0; }
  .photo {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    margin: 0 auto 18px;
    border: 3px solid #5eead4;
  }
  .contact-item {
    font-size: 9.5px;
    margin-bottom: 7px;
    word-break: break-word;
    color: #e5e7eb;
  }
  .contact-item a { color: #99f6e4; text-decoration: none; }
  .edu-item, .skill-cat { margin-bottom: 9px; font-size: 9.5px; }
  .muted { color: #9ca3af; }
  .cert-list { list-style: none; margin: 0; padding: 0; }
  .cert-list li { margin-bottom: 8px; font-size: 9px; }
  .cert-list .muted { color: #9ca3af; }

  .main { padding: 28px 30px; }
  .name { font-size: 26px; font-weight: 700; margin: 0; color: #0f2027; }
  .headline { font-size: 12px; color: #0f766e; font-weight: 600; margin: 4px 0 14px; }
  .main h2 {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #0f766e;
    border-bottom: 2px solid #0f766e;
    padding-bottom: 3px;
    margin: 18px 0 10px;
  }
  .main h2:first-of-type { margin-top: 0; }
  .perfil { font-size: 10.5px; color: #374151; margin: 0; }

  .job { margin-bottom: 12px; }
  .job-head { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; }
  .job-role { font-weight: 700; color: #111827; }
  .job-company { color: #0f766e; font-weight: 600; }
  .job-period { font-size: 9px; color: #6b7280; white-space: nowrap; font-family: monospace; }
  .bullets { margin: 4px 0 0; padding-left: 16px; }
  .bullets li { margin-bottom: 2px; }
  .job-summary { margin: 3px 0 0; color: #4b5563; }

  .project { margin-bottom: 8px; }
  .project a { color: #0f766e; }
  .project-desc { margin: 2px 0 0; color: #4b5563; }
</style>
</head>
<body>
  <div class="page">
    <aside class="sidebar">
      <img class="photo" src="${personal.photo.replace(/^\//, "")}" alt="${escapeHtml(personal.name)}" />

      <h2>Contacto</h2>
      <div class="contact-item">${escapeHtml(personal.email)}</div>
      <div class="contact-item">${escapeHtml(personal.phone)}</div>
      <div class="contact-item">${escapeHtml(personal.location)}</div>
      <div class="contact-item"><a href="${escapeHtml(personal.linkedin)}">${escapeHtml(personal.linkedin.replace(/^https?:\/\//, ""))}</a></div>
      ${personal.github ? `<div class="contact-item"><a href="${escapeHtml(personal.github)}">${escapeHtml(personal.github.replace(/^https?:\/\//, ""))}</a></div>` : ""}
      ${personal.siteUrl ? `<div class="contact-item"><a href="${escapeHtml(personal.siteUrl)}">${escapeHtml(personal.siteUrl.replace(/^https?:\/\//, ""))}</a></div>` : ""}

      <h2>Educación</h2>
      ${educationHtml}

      <h2>Certificaciones</h2>
      <ul class="cert-list">${certificationsHtml}</ul>

      <h2>Skills</h2>
      ${skillsHtml}
    </aside>

    <main class="main">
      <p class="name">${escapeHtml(personal.name)}</p>
      <p class="headline">${escapeHtml(personal.role)} · ${escapeHtml(experience[0].role)}</p>

      <h2>Perfil profesional</h2>
      <p class="perfil">${PERFIL}</p>

      <h2>Experiencia profesional</h2>
      ${experienceHtml}

      <h2>Proyectos destacados</h2>
      ${projectsHtml}
    </main>
  </div>
</body>
</html>`;

const workDir = mkdtempSync(path.join(tmpdir(), "cv-build-"));
const htmlPath = path.join(workDir, "cv.html");
writeFileSync(htmlPath, html, "utf-8");
const photoDest = path.join(workDir, personal.photo.replace(/^\//, ""));
mkdirSync(path.dirname(photoDest), { recursive: true });
const photoSrc = path.join(ROOT, "public", personal.photo);
// La foto original es un retrato de medio cuerpo en alta resolución. Para el
// avatar circular del CV recortamos primero un cuadrado centrado en la cara
// (si no, el recorte circular por defecto queda centrado en el torso y tapa
// la cara) y recién después escalamos, sin tocar la imagen que usa la web.
const CV_PHOTO_CROP = { top: 0.05, side: 0.35, centerX: 0.465 }; // fracciones del alto/ancho original
execFileSync("python3", [
  "-c",
  `
from PIL import Image
im = Image.open(${JSON.stringify(photoSrc)}).convert("RGB")
w, h = im.size
side = int(${CV_PHOTO_CROP.side} * h)
top = int(${CV_PHOTO_CROP.top} * h)
cx = int(${CV_PHOTO_CROP.centerX} * w)
left = max(0, min(w - side, cx - side // 2))
im = im.crop((left, top, left + side, top + side))
im.thumbnail((400, 400))
im.save(${JSON.stringify(photoDest)}, "JPEG", quality=85)
`.trim(),
]);

const outPath = path.join(ROOT, "public", "cv-emiliano-lapaz.pdf");
execFileSync(
  "google-chrome",
  [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--no-pdf-header-footer",
    `--print-to-pdf=${outPath}`,
    "--print-to-pdf-no-header",
    `file://${htmlPath}`,
  ],
  { stdio: "inherit" }
);

console.log("CV generado en", outPath);
