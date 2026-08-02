"use client";

import { useEffect, useRef, useState } from "react";
import { MapPinIcon } from "./Icons";

type MapEmbedProps = {
  /** URL de l'iframe Google Maps (`output=embed`), chargée uniquement après clic. */
  embedSrc: string;
  /** Lien direct vers Google Maps (bouton « Voir sur Google Maps »). */
  mapsHref: string;
  /** Titre d'accessibilité de l'iframe. */
  title: string;
  /** Adresse affichée sur la façade avant chargement. */
  address: string;
};

/**
 * Carte Google Maps en clic-pour-charger : par défaut, une façade statique
 * (aucune requête vers Google) affiche l'adresse et une invitation à
 * afficher la carte interactive. Ce n'est qu'au clic que l'iframe Google
 * Maps est monté, ce qui évite toute transmission de données à Google tant
 * que l'utilisateur n'en a pas exprimé le souhait (conformité CNDP).
 */
export function MapEmbed({ embedSrc, mapsHref, title, address }: MapEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const mapsLinkRef = useRef<HTMLAnchorElement>(null);

  // Le bouton « Afficher la carte » disparaît du DOM après le clic : sans
  // reprise explicite, le focus retomberait sur <body>. On le replace donc
  // sur le premier élément interactif de la carte affichée.
  useEffect(() => {
    if (isLoaded) {
      mapsLinkRef.current?.focus();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="map-facade">
        <span className="map-facade-icon">
          <MapPinIcon />
        </span>
        <p className="map-facade-label">Carte Google Maps</p>
        <p className="map-facade-address">{address}</p>
        <button
          type="button"
          className="primary-button map-facade-button"
          onClick={() => setIsLoaded(true)}
        >
          Afficher la carte interactive
        </button>
        <p className="map-facade-note">
          En affichant la carte, des données sont transmises à Google.
        </p>
      </div>
    );
  }

  return (
    <>
      <iframe
        className="google-map-frame"
        src={embedSrc}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="map-overlay">
        <span>GPS</span>
        <strong>Massira I · Témara</strong>
        <a ref={mapsLinkRef} href={mapsHref} target="_blank" rel="noreferrer">
          Voir sur Google Maps
        </a>
      </div>
    </>
  );
}
