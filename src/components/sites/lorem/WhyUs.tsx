"use client";

import { CalendarCheck, Handshake, MessageSquare } from "lucide-react";
import { WHY_US, WHY_US_FEATURES, img } from "./data";
import { Eyebrow, Marquee, RevealText } from "./ui";

const ICONS = {
  chat: MessageSquare,
  handshake: Handshake,
  calendar: CalendarCheck,
} as const;

export function WhyUs() {
  return (
    <section className="bl-why">
      <div className="bl-why__left">
        <div className="bl-pad">
          <Eyebrow label="loremipsum" index="05" />
        </div>

        <RevealText
          className="bl-why__headline"
          from="rgba(79,79,79,0.35)"
          to="#1a1a1a"
          text="loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />

        <div className="bl-why__ticker">
          <Marquee duration="26s">
            {WHY_US_FEATURES.map((feature) => (
              <span key={feature} className="bl-why__tick">
                {feature}
              </span>
            ))}
          </Marquee>
        </div>

        <div className="bl-why__cards">
          {WHY_US.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div key={item.title} className="bl-why__card">
                <div className="bl-why__cardTop">
                  <h3>{item.title}</h3>
                  <Icon size={22} strokeWidth={1.4} aria-hidden />
                </div>
                <p>{item.copy}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bl-why__right">
        <div className="bl-why__figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img("MXFVPDRJ0Kp2tDvkli9MluRXjo")} alt="" loading="lazy" />
          <strong>loremipsum®</strong>
        </div>

        <div className="bl-why__cta">
          <div className="bl-why__ctaTop">
            <span>© 20XX - XX</span>
            <span className="bl-eyebrow__line" aria-hidden />
            <span aria-hidden>◎</span>
          </div>
          <p>loremipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a className="bl-btn bl-btn--dark bl-btn--wide bl-btn--sm" href="#contact">
            loremipsum
          </a>
        </div>
      </div>
    </section>
  );
}

