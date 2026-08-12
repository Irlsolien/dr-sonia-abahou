import Image from "next/image";
import Link from "next/link";
import {
  MobileNav,
  frMobileNavLabels,
  type LangSwitch,
  type MobileNavLabels,
  type NavLink,
} from "./MobileNav";

export type HeaderLabels = {
  brand: string;
  homeAriaLabel: string;
  navAriaLabel: string;
  /** Ancres de section, sans le préfixe (`expertise`, `soins`, …). */
  sections: readonly NavLink[];
  cta: NavLink;
  langSwitch: LangSwitch;
  mobile: MobileNavLabels;
};

export const frHeaderLabels: HeaderLabels = {
  brand: "Dr Sonia Abahou",
  homeAriaLabel: "Accueil",
  navAriaLabel: "Navigation principale",
  sections: [
    { href: "expertise", label: "Expertise" },
    { href: "soins", label: "Soins" },
    { href: "pratiques", label: "Pratiques" },
    { href: "avis", label: "Avis" },
    { href: "cabinet", label: "Cabinet" },
    { href: "contact", label: "Contact" },
  ],
  /* Libellé à l'impératif : le CTA indique l'action, pas la page. */
  cta: { href: "/rendez-vous", label: "Prendre RDV" },
  langSwitch: {
    href: "/ar",
    label: "العربية",
    lang: "ar",
    dir: "rtl",
    hrefLang: "ar",
  },
  mobile: frMobileNavLabels,
};

type SiteHeaderProps = {
  /**
   * `true` sur les pages internes (motifs, rendez-vous, téléconsultation,
   * parcours du Dr Sonia Abahou) : les liens de navigation pointent vers les
   * ancres de la page d'accueil (`/#expertise`, etc.) plutôt que vers des
   * ancres locales inexistantes sur ces pages.
   */
  internal?: boolean;
  /** Libellés et destinations ; français par défaut. */
  labels?: HeaderLabels;
  /** Cible du logo ; par défaut `/` (pages internes) ou `#fr-content`. */
  homeHref?: string;
  /**
   * Préfixe d'ancre explicite (`/ar#` sur les pages internes arabes, dont
   * les ancres de section vivent sur `/ar` et non sur l'accueil français).
   * Par défaut : `#` sur une page d'accueil, `/#` sur une page interne.
   */
  anchorPrefix?: string;
  /**
   * Destination contextuelle du lien de langue : sur une page motif, la
   * bascule mène à la page jumelle (`/ar/<slug>` ↔ `/<slug>`) plutôt qu'à la
   * racine de l'autre version.
   */
  langSwitchHref?: string;
  /** Attributs du panneau mobile projeté dans `<body>` (version arabe). */
  panelLang?: string;
  panelDir?: "ltr" | "rtl";
  panelClassName?: string;
};

export function SiteHeader({
  internal = false,
  labels = frHeaderLabels,
  homeHref,
  anchorPrefix,
  langSwitchHref,
  panelLang,
  panelDir,
  panelClassName,
}: SiteHeaderProps) {
  const anchor = anchorPrefix ?? (internal ? "/#" : "#");
  const brandHref = homeHref ?? (internal ? "/" : "#fr-content");
  const langSwitch = langSwitchHref
    ? { ...labels.langSwitch, href: langSwitchHref }
    : labels.langSwitch;
  /**
   * Le CTA peut viser une ancre (`#contact`, version arabe) ou une route
   * (`/rendez-vous`, version française). Une ancre doit recevoir le même
   * préfixe que les liens de section : sur une page motif arabe, `#contact`
   * n'existe pas localement et doit mener à `/ar#contact`. Une route reste
   * intacte.
   */
  const ctaHref = labels.cta.href.startsWith("#")
    ? `${anchor}${labels.cta.href.slice(1)}`
    : labels.cta.href;

  return (
    <header className="site-header">
      <a className="brand-mark" href={brandHref} aria-label={labels.homeAriaLabel}>
        <span className="brand-logo-mark">
          <Image
            src="/dr-sonia-monogram-clean.webp"
            alt=""
            width={58}
            height={52}
            sizes="58px"
          />
        </span>
        <strong>{labels.brand}</strong>
      </a>
      <nav aria-label={labels.navAriaLabel}>
        {labels.sections.map((section) => (
          <a key={section.href} href={`${anchor}${section.href}`}>
            {section.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <Link
          className="header-lang-link"
          href={langSwitch.href}
          lang={langSwitch.lang}
          dir={langSwitch.dir}
          hrefLang={langSwitch.hrefLang}
        >
          {langSwitch.label}
        </Link>
        {ctaHref.startsWith("/") ? (
          <Link className="header-cta" href={ctaHref}>
            {labels.cta.label}
          </Link>
        ) : (
          <a className="header-cta" href={ctaHref}>
            {labels.cta.label}
          </a>
        )}
        <MobileNav
          anchor={anchor}
          labels={labels.mobile}
          langSwitchHref={langSwitchHref}
          panelLang={panelLang}
          panelDir={panelDir}
          panelClassName={panelClassName}
        />
      </div>
    </header>
  );
}
