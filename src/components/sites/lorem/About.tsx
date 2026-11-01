"use client";

import { useEffect, useRef } from "react";
import { STATS } from "./data";
import { useCountUp } from "./hooks";
import { Eyebrow, RevealText } from "./ui";

function Stat({ value, suffix, label, copy }: { value: number; suffix: string; label: string; copy: string }) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div className="bl-stat">
      <div className="bl-stat__num">
        <span ref={ref}>{current}</span>
        <sup>{suffix}</sup>
      </div>
      <div className="bl-stat__label">{label}</div>
      <p className="bl-stat__copy">{copy}</p>
    </div>
  );
}

export function About() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      el.style.setProperty("--bl-about-top", `${Math.min(0, window.innerHeight - el.offsetHeight)}px`);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="about" className="bl-about" ref={ref}>
      <div className="bl-about__inner">
        <div className="bl-pad">
          <Eyebrow label="loremipsum" index="01" />
        </div>

        <div className="bl-pad bl-about__headline">
          <RevealText
            text="loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
            className="bl-h2 bl-h2--reveal"
          />
        </div>

        <div className="bl-about__stats">
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}

          <div className="bl-about__cta">
            <div className="bl-about__ctaTop">
              <span>Lorem®</span>
              <span className="bl-eyebrow__line" aria-hidden />
              <span>© 20XX - XX</span>
            </div>
            <p>loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <a className="bl-btn bl-btn--dark" href="#services" style={{ height: 56 }}>
              loremipsum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

