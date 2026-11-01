"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [zoomed, setZoomed] = useState(false);

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
          setZoomed(true);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }, 200);
      }
    };

    update();
  }, []);

  useEffect(() => {
    if (zoomed) {
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

      return () => {
        lenis.destroy();
      };
    }
  }, [zoomed]);

  if (loading) {
    return (
      <div
        className="bl-preloader fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d0d0d]"
        style={{
          transform: zoomed ? "scale(1)" : "scale(0.01)",
          transition: zoomed ? "transform 1s cubic-bezier(0.16, 1, 0.3, 1)" : "none"
        }}
      >
        <div className={`bl-preloader__content ${zoomed ? "hiding" : ""}`}>
          <div className="bl-preloader__bar-container">
            <div
              className="bl-preloader__bar"
              style={{
                width: `${progress}%`
              }}
            />
          </div>
          <div className={`bl-preloader__percentage ${progress === 100 ? "loaded" : ""}`}>
            {progress}%
          </div>
        </div>
      </div>
    );
  }

  return null;
}