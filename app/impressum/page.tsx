import type { Metadata } from "next";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { IMPRESSUM } from "@/lib/content/impressum";
import { SITE } from "@/lib/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Impressum",
  description:
    "Anbieterkennzeichnung gemäß § 5 TMG / § 18 Abs. 2 MStV für ThatCleanChef.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <TrustPageTemplate title="Impressum">
      <p className="text-label-sm text-ink-3">
        Angaben gemäß § 5 TMG / § 18 Abs. 2 MStV.
      </p>

      <section>
        <h2>Diensteanbieter</h2>
        <p>
          {IMPRESSUM.operator}
          <br />
          {IMPRESSUM.address}
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a href={`mailto:${IMPRESSUM.email}`}>{IMPRESSUM.email}</a>
          <br />
          Telefon: {IMPRESSUM.phone}
        </p>
      </section>

      <section>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>{IMPRESSUM.responsiblePerson}</p>
      </section>

      <section>
        <h2>Handelsregister</h2>
        <p>{IMPRESSUM.registry}</p>
      </section>

      <section>
        <h2>Umsatzsteuer-Identifikationsnummer</h2>
        <p>{IMPRESSUM.vatId}</p>
      </section>

      <section>
        <h2>Hinweis</h2>
        <p>
          {SITE.name} ist ein redaktionelles Angebot mit chefgeprüften
          Clean-Eating-Rezepten und USDA-belegter Nährwertkarte zu jedem
          Rezept. Die Inhalte sind keine medizinische, diätetische oder
          pharmakologische Beratung. Bitte konsultieren Sie eine qualifizierte
          Fachperson, bevor Sie Ihre Ernährung wesentlich ändern.
        </p>
      </section>

      <section>
        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Wir sind nicht bereit oder verpflichtet, an einem
          Streitbeilegungsverfahren vor einer Verbraucher­schlichtungs­stelle
          teilzunehmen.
        </p>
      </section>
    </TrustPageTemplate>
  );
}
