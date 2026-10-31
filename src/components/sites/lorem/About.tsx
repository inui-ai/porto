"use client";

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
  return (
    <section id="about" className="bl-about">
      <div className="bl-about__inner">
        <div className="bl-pad">
          <Eyebrow label="Lorem ipsum" index="01" />
        </div>

        <div className="bl-pad bl-about__headline">
          <RevealText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <a className="bl-btn bl-btn--dark" href="#services" style={{ height: 56 }}>
              Lorem ipsum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
