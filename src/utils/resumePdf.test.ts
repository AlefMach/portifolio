import { describe, expect, it } from "vitest";

import { type TranslationDictionary, translations } from "../i18n/translations";
import { buildResumeTemplate } from "./resumePdf";

const normalizeTemplate = (template: string) =>
  template.replace(/\r\n/g, "\n").trim();

const cloneTranslation = (translation: TranslationDictionary) =>
  JSON.parse(JSON.stringify(translation)) as TranslationDictionary;

describe("buildResumeTemplate", () => {
  it("keeps the A4 print layout and key resume sections", () => {
    const template = buildResumeTemplate("en", translations.en);

    expect(template).toContain("size: A4;");
    expect(template).toContain("grid-template-columns: 210px 1fr;");
    expect(template).toContain("min-height: 297mm;");
    expect(template).toContain("width: 210mm;");
    expect(template).toContain("<aside>");
    expect(template).toContain("<main>");
    expect(template).toContain('<img class="qr"');
    expect(template).toContain("<h2>Contact</h2>");
    expect(template).toContain("<h2>Experience</h2>");
    expect(template).toContain("<h2>Stack</h2>");
    expect(template).toContain("<h2>Selected engineering cases</h2>");
  });

  it("keeps the visual contract without depending on translated copy snapshots", () => {
    const template = normalizeTemplate(
      buildResumeTemplate("pt", translations.pt),
    );

    expect(template).toContain('<html lang="pt-BR">');
    expect(template).toContain("<h1>Alef Machado</h1>");
    expect(template).toContain("<h2>Contatos</h2>");
    expect(template).toContain("<h2>Experiências</h2>");
    expect(template).toContain("<h2>Stack</h2>");
    expect(template).toContain("<h2>Casos de engenharia selecionados</h2>");
    expect(template).toContain("break-inside: auto;");
    expect(template).toContain("break-after: avoid;");
    expect(template).toContain("overflow-wrap: anywhere;");
  });

  it("renders variable resume content in full so print can flow across pages", () => {
    const translation = cloneTranslation(translations.pt);
    translation.home.aboutDetail =
      "Detalhe importante repetido para validar que o PDF nao corta informacoes quando o texto cresce e precisa continuar em outra pagina.";
    translation.home.projectCards.push(
      {
        ...translation.home.projectCards[0],
        title: "Projeto extra que deve entrar no PDF",
      },
      {
        ...translation.home.projectCards[0],
        title: "Outro projeto extra que tambem deve entrar no PDF",
      },
    );
    translation.home.buildPrinciples[0].title =
      "Titulo de especialidade extremamente longo para validar leitura completa";
    translation.home.experienceItems[0].highlights.push(
      "Highlight extra que deve aparecer completo no PDF",
    );

    const template = buildResumeTemplate("pt", translation);
    const renderedProjects = template.match(/<article class="item compact">/g);
    const renderedPills = template.match(/<span class="pill">/g);

    expect(renderedProjects).toHaveLength(translation.home.projectCards.length);
    expect(renderedPills).toHaveLength(translation.home.buildPrinciples.length);
    expect(template).toContain(translation.home.aboutDetail);
    expect(template).toContain("Projeto extra que deve entrar no PDF");
    expect(template).toContain(
      "Outro projeto extra que tambem deve entrar no PDF",
    );
    expect(template).toContain(
      "Titulo de especialidade extremamente longo para validar leitura completa",
    );
    expect(template).toContain("Highlight extra que deve aparecer completo");
  });

  it("escapes translated content before writing the printable HTML", () => {
    const translation = cloneTranslation(translations.pt);
    translation.home.aboutIntro = '<img src=x onerror="alert(1)">';
    translation.home.experienceItems[0].role = "Dev & Lead";
    translation.home.projectCards[0].title = "Project <script>";

    const template = buildResumeTemplate("pt", translation);

    expect(template).toContain(
      "&lt;img src=x onerror=&quot;alert(1)&quot;&gt;",
    );
    expect(template).toContain("Dev &amp; Lead");
    expect(template).toContain("Project &lt;script&gt;");
    expect(template).not.toContain('<img src=x onerror="alert(1)">');
    expect(template).not.toContain("Project <script>");
  });
});
