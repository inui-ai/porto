"use client";

import { useEffect, useState } from "react";
import { useScrollLock } from "./hooks";
import { PlayIcon } from "./ui";

export function Showreel() {
  const [open, setOpen] = useState(false);
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="bl-showreel">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster=""
          aria-hidden
          tabIndex={-1}
          src="/sites/lorem/media/showreel.mp4"
        />
        <button type="button" className="bl-showreel__play" onClick={() => setOpen(true)}>
          <PlayIcon />
          Play showreel
        </button>
      </div>

      {open ? (
        <div
          className="bl-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Showreel"
          onClick={() => setOpen(false)}
        >
          <button type="button" className="bl-modal__close" aria-label="Close showreel" onClick={() => setOpen(false)}>
            ×
          </button>
          <video src="/sites/lorem/media/showreel.mp4" autoPlay controls loop playsInline onClick={(e) => e.stopPropagation()} />
        </div>
      ) : null}
    </>
  );
}
