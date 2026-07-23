"use client";

import { useEffect, useRef, useState } from "react";

type FeedbackVariant = "process" | "success" | "error" | "info";

type Feedback = {
  id: number;
  variant: FeedbackVariant;
  title: string;
  description: string;
};

const nextSuccessKey = "dr-sonia-next-feedback";

const feedbackCopy: Record<
  FeedbackVariant,
  { label: string; icon: string; defaultTitle: string }
> = {
  process: {
    label: "En cours",
    icon: "↗",
    defaultTitle: "Préparation de l’action",
  },
  success: {
    label: "Prêt",
    icon: "✓",
    defaultTitle: "Action prête",
  },
  error: {
    label: "Erreur",
    icon: "!",
    defaultTitle: "Action impossible",
  },
  info: {
    label: "Info",
    icon: "i",
    defaultTitle: "Information",
  },
};

function getClickableElement(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return null;
  }

  return target.closest<HTMLAnchorElement | HTMLButtonElement>(
    "a[href], button, [role='button']",
  );
}

function getFeedbackForElement(element: HTMLElement): Feedback | null {
  const label = element.textContent?.replace(/\s+/g, " ").trim() || "Action";

  if (element.getAttribute("aria-disabled") === "true" || "disabled" in element) {
    const button = element as HTMLButtonElement;
    if (button.disabled) {
      return {
        id: Date.now(),
        variant: "error",
        title: "Action indisponible",
        description: "Cette option n’est pas encore ouverte aux patients.",
      };
    }
  }

  if (!(element instanceof HTMLAnchorElement)) {
    return {
      id: Date.now(),
      variant: "success",
      title: "Action prise en compte",
      description: label,
    };
  }

  const href = element.getAttribute("href") || "";

  if (!href || href === "#") {
    return {
      id: Date.now(),
      variant: "info",
      title: "Bientôt disponible",
      description: "Ce lien sera complété dès validation du cabinet.",
    };
  }

  if (!navigator.onLine) {
    return {
      id: Date.now(),
      variant: "error",
      title: "Connexion indisponible",
      description: "Vérifiez votre connexion avant de continuer.",
    };
  }

  if (href.startsWith("tel:")) {
    return {
      id: Date.now(),
      variant: "process",
      title: "Ouverture de l’appel",
      description: "Votre téléphone va préparer l’appel du cabinet.",
    };
  }

  if (href.includes("wa.me")) {
    return {
      id: Date.now(),
      variant: "process",
      title: "Ouverture de WhatsApp",
      description: "Le message de prise de rendez-vous est en préparation.",
    };
  }

  if (href.includes("google.com/maps")) {
    return {
      id: Date.now(),
      variant: "process",
      title: "Ouverture de l’itinéraire",
      description: "Google Maps va afficher l’adresse du cabinet.",
    };
  }

  if (href.startsWith("#")) {
    return {
      id: Date.now(),
      variant: "success",
      title: "Section affichée",
      description: label,
    };
  }

  if (href.startsWith("http")) {
    return {
      id: Date.now(),
      variant: "process",
      title: "Ouverture du lien",
      description: label,
    };
  }

  sessionStorage.setItem(
    nextSuccessKey,
    JSON.stringify({
      title: "Page chargée",
      description: label,
    }),
  );

  return {
    id: Date.now(),
    variant: "process",
    title: "Chargement de la page",
    description: label,
  };
}

export function SiteInteractionFeedback() {
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const dismissTimer = useRef<number | null>(null);

  useEffect(() => {
    const storedFeedback = sessionStorage.getItem(nextSuccessKey);

    if (storedFeedback) {
      sessionStorage.removeItem(nextSuccessKey);

      try {
        const parsed = JSON.parse(storedFeedback) as Pick<
          Feedback,
          "title" | "description"
        >;
        setFeedback({
          id: Date.now(),
          variant: "success",
          title: parsed.title,
          description: parsed.description,
        });
      } catch {
        setFeedback({
          id: Date.now(),
          variant: "success",
          title: "Page chargée",
          description: "La navigation est prête.",
        });
      }
    }
  }, []);

  useEffect(() => {
    if (!feedback) {
      return;
    }

    if (dismissTimer.current) {
      window.clearTimeout(dismissTimer.current);
    }

    dismissTimer.current = window.setTimeout(
      () => setFeedback(null),
      feedback.variant === "error" ? 3600 : 2300,
    );

    return () => {
      if (dismissTimer.current) {
        window.clearTimeout(dismissTimer.current);
      }
    };
  }, [feedback]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented) {
        return;
      }

      const clickable = getClickableElement(event.target);

      if (!clickable || clickable.closest("[data-feedback-silent='true']")) {
        return;
      }

      const nextFeedback = getFeedbackForElement(clickable);

      if (nextFeedback) {
        setFeedback(nextFeedback);
      }
    };

    const handleOffline = () => {
      setFeedback({
        id: Date.now(),
        variant: "error",
        title: "Connexion perdue",
        description: "Certaines actions peuvent être indisponibles.",
      });
    };

    const handleOnline = () => {
      setFeedback({
        id: Date.now(),
        variant: "success",
        title: "Connexion rétablie",
        description: "Vous pouvez continuer votre visite.",
      });
    };

    document.addEventListener("click", handleClick, true);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (!feedback) {
    return null;
  }

  const copy = feedbackCopy[feedback.variant];

  return (
    <div
      key={feedback.id}
      className={`site-feedback site-feedback-${feedback.variant}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="site-feedback-icon" aria-hidden="true">
        {copy.icon}
      </span>
      <div>
        <span>{copy.label}</span>
        <strong>{feedback.title || copy.defaultTitle}</strong>
        <p>{feedback.description}</p>
      </div>
      <button
        type="button"
        data-feedback-silent="true"
        aria-label="Fermer la notification"
        onClick={() => setFeedback(null)}
      >
        ×
      </button>
    </div>
  );
}
