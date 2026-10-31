"use client";

import type { ReactNode } from "react";
import { useWordReveal } from "./hooks";

export function Eyebrow({
  label,
  index,
  className = "",
}: {
  label: string;
  index?: string;
  className?: string;
}) {
  return (
    <div className={`bl-eyebrow ${className}`.trim()}>
      <span className="bl-eyebrow__diamond" aria-hidden />
      <span className="bl-eyebrow__label">{label}</span>
      <span className="bl-eyebrow__line" aria-hidden />
      {index ? <span className="bl-eyebrow__index">{index}</span> : null}
      <span className="bl-eyebrow__diamond" aria-hidden />
    </div>
  );
}

/** Splits a heading into words and fills them in reading order as you scroll. */
export function RevealText({
  text,
  as: Tag = "h2",
  className = "",
  from = "#a6a6a6",
  to = "#121212",
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  from?: string;
  to?: string;
}) {
  const words = text.split(/\s+/).filter(Boolean);
  const ref = useWordReveal(words.length);

  return (
    <Tag className={className}>
      <span ref={ref} data-from={from} data-to={to} style={{ color: from }}>
        {words.map((word, i) => (
          <span key={`${word}-${i}`}>
            <span data-reveal-word className="bl-reveal__word" style={{ color: from }}>
              {word}
            </span>
            {i < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </Tag>
  );
}

export function Marquee({
  children,
  className = "",
  duration,
}: {
  children: ReactNode;
  className?: string;
  duration?: string;
}) {
  return (
    <div className={`bl-marquee ${className}`.trim()}>
      <div className="bl-marquee__track" style={duration ? { animationDuration: duration } : undefined}>
        {children}
        {children}
      </div>
    </div>
  );
}

export function SocialIcon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    X: (
      <path
        d="M13.6 10.5 20.3 3h-1.6l-5.8 6.5L8.2 3H3l7 10-7 7.9h1.6l6.1-6.9 4.9 6.9H21l-7.4-10.4Zm-2.2 2.4-.7-1L5.2 4.2h2.4l4.5 6.4.7 1 5.9 8.4h-2.4l-4.9-7.1Z"
        fill="currentColor"
      />
    ),
    LinkedIn: (
      <path
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 5.9V21h-4v-5.7c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21h-4V9Z"
        fill="currentColor"
      />
    ),
    Instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </>
    ),
    Dribbble: (
      <>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M5.5 7.7c3.9 2.2 7.6 2.6 12.8 1.2M4.2 13.4c4.6-2 9.2-2 14.6 1.1M8.7 3.6c3 4 4.6 8.4 5.5 16.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false">
      {paths[name] ?? paths.X}
    </svg>
  );
}

export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Chevron({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3 1.5 10 6l-7 4.5v-9Z" fill="currentColor" />
    </svg>
  );
}

