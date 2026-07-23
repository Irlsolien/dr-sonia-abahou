"use client";

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import { teleconsultation } from "../seo";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget?: (options: {
        url: string;
        parentElement: HTMLElement | null;
        resize?: boolean;
      }) => void;
    };
  }
}

function isCalendlyEvent(event: MessageEvent) {
  return (
    event.origin === "https://calendly.com" &&
    typeof event.data?.event === "string" &&
    event.data.event.startsWith("calendly.")
  );
}

export default function CalendlyBooking() {
  const [isScheduled, setIsScheduled] = useState(false);

  const calendlyUrl = useMemo(() => {
    const url = new URL(teleconsultation.calendlyUrl);
    url.searchParams.set("hide_event_type_details", "1");
    url.searchParams.set("primary_color", "b4232a");
    url.searchParams.set("text_color", "4a1f22");
    url.searchParams.set("background_color", "fff8f8");
    return url.toString();
  }, []);

  const proofWhatsappHref = useMemo(() => {
    const message = [
      teleconsultation.proofMessage,
      "",
      `Bénéficiaire : ${teleconsultation.beneficiaryName}`,
      `Montant : ${teleconsultation.amount}`,
    ].join("\n");

    return `https://wa.me/${teleconsultation.proofWhatsapp}?text=${encodeURIComponent(
      message,
    )}`;
  }, []);

  return (
    <section className="section-shell booking-section" id="reservation-video">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.Calendly?.initInlineWidget?.({
            url: calendlyUrl,
            parentElement: document.getElementById("calendly-video-booking"),
            resize: true,
          });
        }}
      />
      <Script id="calendly-video-events" strategy="afterInteractive">
        {`
          window.addEventListener("message", function(event) {
            if (
              event.origin === "https://calendly.com" &&
              event.data &&
              typeof event.data.event === "string" &&
              event.data.event.indexOf("calendly.") === 0
            ) {
              window.dispatchEvent(new CustomEvent("cabinet-calendly-event", {
                detail: event.data.event
              }));
            }
          });
        `}
      </Script>

      <div className="booking-grid">
        <div className="booking-copy">
          <p className="eyebrow">Réservation vidéo</p>
          <h2>Choisir un créneau de téléconsultation.</h2>
          <p>
            Sélectionnez une date disponible, renseignez vos coordonnées et
            indiquez uniquement le motif général de votre demande. Le lien Zoom
            sera généré par Calendly lorsque le compte Zoom de la docteure sera
            connecté.
          </p>
          <div className="privacy-note">
            <strong>Confidentialité médicale</strong>
            <p>
              Merci de ne pas envoyer de comptes rendus, analyses, ordonnances
              ou documents médicaux sensibles dans le formulaire de réservation.
              Ces éléments doivent être transmis uniquement par un canal validé
              par le cabinet.
            </p>
          </div>
        </div>

        <div className="booking-widget-card">
          <div
            id="calendly-video-booking"
            className="calendly-inline-widget"
            aria-label="Calendrier de réservation Calendly"
          />
        </div>
      </div>

      <CalendlyEventBridge onScheduled={() => setIsScheduled(true)} />

      <div className={isScheduled ? "payment-panel is-visible" : "payment-panel"}>
        <div>
          <p className="eyebrow">Paiement par virement</p>
          <h2>Rendez-vous en attente de confirmation définitive.</h2>
          <p>
            {teleconsultation.emailInstructions}
          </p>
        </div>
        <dl className="payment-details">
          <div>
            <dt>Bénéficiaire</dt>
            <dd>{teleconsultation.beneficiaryName}</dd>
          </div>
          <div>
            <dt>Banque</dt>
            <dd>{teleconsultation.bankName}</dd>
          </div>
          <div>
            <dt>RIB / IBAN</dt>
            <dd>{teleconsultation.ribOrIban}</dd>
          </div>
          <div>
            <dt>Montant</dt>
            <dd>{teleconsultation.amount}</dd>
          </div>
          <div>
            <dt>Justificatif</dt>
            <dd>{teleconsultation.proofEmail}</dd>
          </div>
        </dl>
        <a
          className="primary-button"
          href={proofWhatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          Envoyer le justificatif de paiement
        </a>
      </div>
    </section>
  );
}

function CalendlyEventBridge({ onScheduled }: { onScheduled: () => void }) {
  useEffect(() => {
    const handler = (event: MessageEvent | Event) => {
      if (event instanceof MessageEvent && isCalendlyEvent(event)) {
        if (event.data.event === "calendly.event_scheduled") {
          onScheduled();
        }

        return;
      }

      if (
        event instanceof CustomEvent &&
        event.detail === "calendly.event_scheduled"
      ) {
        onScheduled();
      }
    };

    window.addEventListener("message", handler);
    window.addEventListener("cabinet-calendly-event", handler);

    return () => {
      window.removeEventListener("message", handler);
      window.removeEventListener("cabinet-calendly-event", handler);
    };
  }, [onScheduled]);

  return null;
}
