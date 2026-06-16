import { type Language, type TranslationDictionary } from "../i18n/translations";
import { profileLinks } from "./profileLinks";

const portfolioUrl = "https://alefmach.github.io/portfolio/#home";

const labels = {
  en: {
    about: "About",
    contact: "Contact",
    experience: "Experience",
    highlights: "Highlights",
    location: "Brazil / remote",
    printTitle: "Alef Machado Resume",
    projects: "Selected engineering cases",
    qr: "Portfolio",
    stack: "Stack",
    subtitle: "Backend Software Engineer",
  },
  pt: {
    about: "Sobre mim",
    contact: "Contatos",
    experience: "Experiências",
    highlights: "Destaques",
    location: "Brasil / remoto",
    printTitle: "Resume Alef Machado",
    projects: "Casos de engenharia selecionados",
    qr: "Portfolio",
    stack: "Stack",
    subtitle: "Backend Software Engineer",
  },
} as const;

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const renderList = (items: readonly string[]) =>
  `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

const renderExperience = (t: TranslationDictionary) =>
  t.home.experienceItems
    .map(
      (item) => `
        <article class="item">
          <div class="item-heading">
            <h3>${escapeHtml(item.role)}</h3>
            <span>${escapeHtml(item.period)}</span>
          </div>
          <p class="company">${escapeHtml(item.company)}</p>
          ${renderList(item.highlights)}
        </article>
      `,
    )
    .join("");

const renderProjects = (t: TranslationDictionary) =>
  t.home.projectCards
    .slice(0, 5)
    .map(
      (project) => `
        <article class="item compact">
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
        </article>
      `,
    )
    .join("");

const renderStack = (t: TranslationDictionary) =>
  t.home.stackCategories
    .map(
      (category) => `
        <div class="stack-row">
          <strong>${escapeHtml(category.title)}</strong>
          <span>${escapeHtml(category.items.join(", "))}</span>
        </div>
      `,
    )
    .join("");

const buildResumeTemplate = (language: Language, t: TranslationDictionary) => {
  const currentLabels = labels[language];
  const email = profileLinks.email.replace("mailto:", "");
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&margin=8&data=${encodeURIComponent(
    portfolioUrl,
  )}`;

  return `<!doctype html>
<html lang="${language === "pt" ? "pt-BR" : "en"}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(currentLabels.printTitle)}</title>
    <style>
      @page {
        margin: 12mm;
        size: A4;
      }

      * {
        box-sizing: border-box;
      }

      body {
        background: #eef1f4;
        color: #1f2933;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.45;
        margin: 0;
      }

      .resume {
        background: #ffffff;
        display: grid;
        grid-template-columns: 210px 1fr;
        margin: 0 auto;
        min-height: 297mm;
        width: 210mm;
      }

      aside {
        background: #17212f;
        color: #eef4f8;
        padding: 28px 22px;
      }

      main {
        padding: 30px 34px;
      }

      h1,
      h2,
      h3,
      p {
        margin: 0;
      }

      h1 {
        color: #111827;
        font-size: 32px;
        letter-spacing: 0;
        line-height: 1.05;
      }

      .role {
        color: #0f766e;
        font-size: 15px;
        font-weight: 700;
        margin-top: 8px;
      }

      .tagline {
        color: #4b5563;
        font-size: 12px;
        margin-top: 8px;
      }

      section {
        margin-top: 24px;
      }

      h2 {
        border-bottom: 1px solid #d6dde5;
        color: #111827;
        font-size: 13px;
        letter-spacing: 0.08em;
        padding-bottom: 6px;
        text-transform: uppercase;
      }

      aside h2 {
        border-color: rgba(255, 255, 255, 0.18);
        color: #ffffff;
      }

      .contact-list,
      ul {
        list-style: none;
        margin: 12px 0 0;
        padding: 0;
      }

      .contact-list li,
      aside p,
      aside a {
        color: #d7e0e8;
        font-size: 11px;
        overflow-wrap: anywhere;
        text-decoration: none;
      }

      .contact-list li + li {
        margin-top: 8px;
      }

      .qr {
        background: #ffffff;
        border-radius: 6px;
        display: block;
        height: 132px;
        margin-top: 12px;
        padding: 8px;
        width: 132px;
      }

      .pill-list {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
        margin-top: 12px;
      }

      .pill {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 999px;
        color: #f8fafc;
        font-size: 10px;
        padding: 5px 8px;
      }

      .summary {
        color: #374151;
        font-size: 12px;
        margin-top: 12px;
      }

      .item {
        break-inside: avoid;
        margin-top: 14px;
      }

      .item-heading {
        align-items: baseline;
        display: flex;
        gap: 12px;
        justify-content: space-between;
      }

      .item h3 {
        color: #111827;
        font-size: 13px;
      }

      .item-heading span,
      .company {
        color: #64748b;
        font-size: 11px;
        white-space: nowrap;
      }

      .company {
        color: #0f766e;
        font-weight: 700;
        margin-top: 2px;
      }

      main ul {
        display: grid;
        gap: 3px;
        list-style: disc;
        margin-top: 7px;
        padding-left: 18px;
      }

      main li,
      .item p,
      .stack-row {
        color: #374151;
        font-size: 11px;
      }

      .compact p {
        margin-top: 5px;
      }

      .stack-row {
        border-bottom: 1px solid #edf1f5;
        display: grid;
        gap: 8px;
        grid-template-columns: 104px 1fr;
        padding: 8px 0;
      }

      .stack-row strong {
        color: #111827;
      }

      .print-note {
        color: #64748b;
        font-size: 10px;
        margin-top: 8px;
      }

      @media print {
        body {
          background: #ffffff;
        }

        .resume {
          margin: 0;
          min-height: auto;
          width: auto;
        }
      }
    </style>
  </head>
  <body>
    <div class="resume">
      <aside>
        <section>
          <h2>${escapeHtml(currentLabels.contact)}</h2>
          <ul class="contact-list">
            <li>${escapeHtml(email)}</li>
            <li>${escapeHtml(profileLinks.linkedin)}</li>
            <li>${escapeHtml(profileLinks.github)}</li>
            <li>${escapeHtml(currentLabels.location)}</li>
          </ul>
        </section>

        <section>
          <h2>${escapeHtml(currentLabels.qr)}</h2>
          <img class="qr" src="${qrUrl}" alt="QR Code" />
          <p class="print-note">${escapeHtml(portfolioUrl)}</p>
        </section>

        <section>
          <h2>${escapeHtml(currentLabels.highlights)}</h2>
          <div class="pill-list">
            ${t.home.buildPrinciples
              .slice(0, 6)
              .map((item) => `<span class="pill">${escapeHtml(item.title)}</span>`)
              .join("")}
          </div>
        </section>
      </aside>

      <main>
        <header>
          <h1>Alef Machado</h1>
          <p class="role">${escapeHtml(currentLabels.subtitle)}</p>
          <p class="tagline">${escapeHtml(t.hero.eyebrow)}</p>
        </header>

        <section>
          <h2>${escapeHtml(currentLabels.about)}</h2>
          <p class="summary">${escapeHtml(t.home.aboutIntro)}</p>
          <p class="summary">${escapeHtml(t.home.aboutDetail)}</p>
        </section>

        <section>
          <h2>${escapeHtml(currentLabels.experience)}</h2>
          ${renderExperience(t)}
        </section>

        <section>
          <h2>${escapeHtml(currentLabels.stack)}</h2>
          ${renderStack(t)}
        </section>

        <section>
          <h2>${escapeHtml(currentLabels.projects)}</h2>
          ${renderProjects(t)}
        </section>
      </main>
    </div>
  </body>
</html>`;
};

export const downloadResumePdf = (
  language: Language,
  t: TranslationDictionary,
) => {
  const resumeWindow = window.open("", "_blank");

  if (!resumeWindow) {
    return;
  }

  resumeWindow.document.open();
  resumeWindow.document.write(buildResumeTemplate(language, t));
  resumeWindow.document.close();

  resumeWindow.onload = () => {
    resumeWindow.focus();
    resumeWindow.print();
  };
};
