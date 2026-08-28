"use client";

import { useEffect } from "react";

/**
 * Avertissement anti « self-XSS » affiché dans la console du navigateur.
 *
 * Ne rend rien à l'écran (retourne `null`). Il ne « bloque » pas les outils de
 * développement — c'est impossible et inutile — mais il dissuade la seule
 * manœuvre réellement risquée pour un visiteur : se faire convaincre par un
 * tiers de coller du code dans sa propre console (arnaque dite « self-XSS »).
 * Même principe que l'avertissement affiché par Facebook ou Google.
 *
 * Toute modification faite via la console reste locale au navigateur du
 * visiteur : rien n'est envoyé au serveur ni visible par les autres visiteurs.
 */

const MESSAGES = {
  fr: {
    title: "Attention !",
    body: [
      "Cette console est réservée aux développeurs.",
      "Ne collez ici aucun code que vous ne comprenez pas : un tiers pourrait ainsi accéder à vos informations sur ce site (attaque « self-XSS »).",
      "Si quelqu’un vous a demandé de coller quelque chose ici, il s’agit très probablement d’une arnaque.",
    ],
  },
  ar: {
    title: "تنبيه!",
    body: [
      "هذه الأداة (Console) مخصّصة للمطوّرين.",
      "لا تُدرِجوا هنا أي كود لا تفهمونه: فقد يتيح ذلك لطرف آخر الوصول إلى معلوماتكم على هذا الموقع (هجوم «self-XSS»).",
      "إذا طلب منكم أحدهم لصق شيء هنا، فالأرجح أنها عملية احتيال.",
    ],
  },
} as const;

export function ConsoleWarning({ lang = "fr" }: { lang?: "fr" | "ar" }) {
  useEffect(() => {
    const message = MESSAGES[lang];
    try {
      console.log(
        `%c${message.title}`,
        "color:#b23b30;font-size:24px;font-weight:700;",
      );
      message.body.forEach((line) =>
        console.log(`%c${line}`, "color:#0f2733;font-size:13px;line-height:1.5;"),
      );
    } catch {
      /* Certains environnements restreignent la console : échec silencieux. */
    }
  }, [lang]);

  return null;
}
