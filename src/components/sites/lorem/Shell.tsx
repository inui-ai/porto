"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "./data";
import { useLocalTime, useScrollLock, useSmoothScroll } from "./hooks";
import { SocialIcon } from "./ui";

function Burger({
  open,
  onClick,
  className,
}: {
  open: boolean;
  onClick: () => void;
  className: string;
}) {
  return (
    <button
      type="button"
      className={className}
      aria-expanded={open}
      aria-controls="lorem-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onClick}
    >
      <span />
      <span />
    </button>
  );
}

function Menu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const time = useLocalTime(SITE.timezone);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div className="bl-menu" id="lorem-menu" data-open={open} aria-hidden={!open}>
      <button
        type="button"
        className="bl-menu__backdrop"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />
      <div className="bl-menu__panel" role="dialog" aria-modal={open} aria-label="Site menu">
        <div className="bl-menu__brand">{SITE.wordmark}</div>
        <div className="bl-menu__figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sites/lorem/images/z6mah9WqITTZlxiEw23izQd35s.jpg" alt="" />
          <span>© 20XX Lorem ipsum dolor</span>
        </div>
        <div className="bl-menu__body">
          <nav className="bl-menu__nav" aria-label="Pages">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={onClose}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="bl-menu__foot">
            <a className="bl-menu__contact" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <a className="bl-menu__contact" href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}>
              {SITE.phone}
            </a>
            <div className="bl-menu__socials">
              {SITE.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  <SocialIcon name={social.label} />
                </a>
              ))}
            </div>
            <span className="bl-menu__contact" style={{ marginTop: 12, color: "#a6a6a6", fontSize: 12 }}>
              Local time: {time || "—"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  useSmoothScroll();
  useScrollLock(open);

  const toggle = () => setOpen((value) => !value);
  const close = () => setOpen(false);

  return (
    <div className="bl-root">
      <aside className="bl-rail" aria-label="Studio">
        <Burger open={open} onClick={toggle} className="bl-rail__burger" />
        <a className="bl-rail__brand" href="#top" aria-label="Lorem Ipsum — home">
          {SITE.brand}
        </a>
      </aside>

      <div className="bl-topbar">
        <a className="bl-topbar__brand" href="#top">
          {SITE.brand}
        </a>
        <Burger open={open} onClick={toggle} className="bl-topbar__burger" />
      </div>

      <Menu open={open} onClose={close} />

      <div className="bl-shell">{children}</div>
    </div>
  );
}
