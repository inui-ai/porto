"use client";

import { useEffect, useRef, useState } from "react";

/** Live clock in a fixed timezone, formatted like the source ("05:36 AM"). */
export function useLocalTime(timeZone: string) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone,
      }).format(new Date());

    const raf = window.requestAnimationFrame(() => setTime(format()));
    const id = window.setInterval(() => setTime(format()), 15_000);
    return () => {
      window.cancelAnimationFrame(raf);
      window.clearInterval(id);
    };
  }, [timeZone]);

  return time;
}

/** Word-by-word scroll reveal, driven by the element's position in the viewport. */
export function useWordReveal(wordCount: number) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const words = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal-word]"));
    const from = root.dataset.from ?? "";
    const to = root.dataset.to ?? "";
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight;
      const denom = rect.height + vh * 0.4;
      const p = Math.min(1, Math.max(0, (vh * 0.9 - rect.top) / denom));
      const revealed = Math.round(p * wordCount);
      words.forEach((el, i) => {
        el.style.color = i < revealed ? to : from;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [wordCount]);

  return ref;
}

/** Count up once when the element enters the viewport. */
export function useCountUp(target: number, duration = 1400) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(target * eased));
        if (t < 1) raf = window.requestAnimationFrame(tick);
      };
      raf = window.requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !started) {
          started = true;
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return { ref, value };
}

/** Lenis smooth scrolling, matching the source's `html.lenis` setup. */
export function useSmoothScroll() {
  useEffect(() => {
    let lenis: import("lenis").default | null = null;
    let raf = 0;
    let cancelled = false;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = window.requestAnimationFrame(loop);
      };
      raf = window.requestAnimationFrame(loop);
    });

    const onAnchor = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest?.("a[href^='#']");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: -8 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", onAnchor);

    return () => {
      cancelled = true;
      document.removeEventListener("click", onAnchor);
      if (raf) window.cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
}

/** Lock page scroll while an overlay is open. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const html = document.documentElement;
    html.classList.add("bl-noscroll");
    return () => html.classList.remove("bl-noscroll");
  }, [locked]);
}

