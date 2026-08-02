import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  /**
   * `true` sur les pages internes (motifs, rendez-vous, téléconsultation,
   * parcours du Dr Sonia Abahou) : les liens de navigation pointent vers les
   * ancres de la page d'accueil (`/#expertise`, etc.) plutôt que vers des
   * ancres locales inexistantes sur ces pages.
   */
  internal?: boolean;
};

export function SiteHeader({ internal = false }: SiteHeaderProps) {
  const anchor = internal ? "/#" : "#";

  return (
    <header className="site-header">
      <a
        className="brand-mark"
        href={internal ? "/" : "#accueil"}
        aria-label="Accueil"
      >
        <span className="brand-logo-mark">
          <Image
            src="/dr-sonia-monogram-clean.webp"
            alt=""
            width={58}
            height={52}
            sizes="58px"
          />
        </span>
        <strong>Dr Sonia Abahou</strong>
      </a>
      <nav aria-label="Navigation principale">
        <a href={`${anchor}expertise`}>Expertise</a>
        <a href={`${anchor}soins`}>Soins</a>
        <a href={`${anchor}pratiques`}>Pratiques</a>
        <a href={`${anchor}cabinet`}>Cabinet</a>
        <a href={`${anchor}contact`}>Contact</a>
      </nav>
      <Link className="header-cta" href="/rendez-vous">
        Rendez-vous
      </Link>
    </header>
  );
}
