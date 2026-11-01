"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame++;
      const p = Math.min(100, Math.floor((frame / 60) * 100));
      setProgress(p);

      if (p < 100) {
        frame = window.requestAnimationFrame(update);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 200);
      }
    };

    update();
  }, []);

  useEffect(() => {
    if (!loading) {
      // Add zooming class to trigger CSS transition
      const preloader = document.querySelector(".bl-preloader") as HTMLElement;
      if (preloader) {
        preloader.classList.add("bl-preloader--zooming");
      }

      // Smooth zoom in effect when preloader finishes
      const lenis = new Lenis({
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Smooth scroll to top
      lenis.scrollTo(0, { duration: 1.5, lerp: 0.1, offset: 0 });

      // Remove preloader after zoom animation completes
      setTimeout(() => {
        if (preloader) {
          preloader.style.opacity = "0";
          preloader.style.pointerEvents = "none";
        }
      }, 1000);

      return () => {
        lenis.destroy();
      };
    }
  }, [loading]);

  if (loading) {
    return (
      <div
        className="bl-preloader fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d0d0d]"
        style={{ transform: "scale(1)" }}
      >
        <div className="bl-preloader__content">
          <div className="bl-preloader__bar-container">
            <div
              className="bl-preloader__bar"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="bl-preloader__percentage">{progress}%</div>
        </div>
      </div>
    );
  }

  return null;
}