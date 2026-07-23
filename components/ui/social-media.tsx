import type { CSSProperties, ReactNode } from "react";

export type SocialItem = {
  href: string;
  ariaLabel: string;
  tooltip: string;
  color: string;
  icon: "linkedin" | "instagram";
};

type SocialTooltipProps = {
  items: SocialItem[];
};

const icons: Record<SocialItem["icon"], ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.98H3.8v10.04h3.14V8.98ZM5.37 7.62a1.82 1.82 0 1 0 0-3.64 1.82 1.82 0 0 0 0 3.64Zm13.85 5.8c0-2.8-1.49-4.1-3.48-4.1a3 3 0 0 0-2.72 1.5h-.04V8.98H9.97v10.04h3.14v-4.96c0-1.31.25-2.58 1.88-2.58 1.6 0 1.62 1.5 1.62 2.66v4.88h3.14v-5.6h-.53Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.65 2.62a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 2a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z" />
    </svg>
  ),
};

export function SocialTooltip({ items }: SocialTooltipProps) {
  return (
    <div className="social-tooltip" aria-label="Réseaux sociaux du cabinet">
      {items.map((item) => (
        <a
          key={item.ariaLabel}
          href={item.href}
          aria-label={item.ariaLabel}
          className="social-tooltip-item"
          style={{ "--social-color": item.color } as CSSProperties}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
        >
          <span className="social-tooltip-bubble">{item.tooltip}</span>
          <span className="social-tooltip-icon">{icons[item.icon]}</span>
        </a>
      ))}
    </div>
  );
}
