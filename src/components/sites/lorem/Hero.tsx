"use client";

import { CLIENT_LOGOS, HERO_TAGS, SITE, img } from "./data";
import { useLocalTime } from "./hooks";
import { Showreel } from "./Showreel";
import { Chevron, Marquee } from "./ui";

export function Hero() {
  const time = useLocalTime(SITE.timezone);

  return (
    <section id="top" className="bl-hero">
      <div className="bl-split">
        <div className="bl-col">
          <div className="bl-hero__left">
            <div className="bl-hero__top">
              <span>
                loremipsum <b>{"// May"}</b>
              </span>
              <span>Local time: {time || "--:--"}</span>
            </div>

            <div className="bl-hero__headline">
              <h1 className="bl-wordmark">
                Lorem <em>{"//"}</em> Ipsum<sup>®</sup>
              </h1>
              <div className="bl-hero__since">
                <span className="bl-eyebrow__diamond" aria-hidden />
                <span>© loremipsum</span>
                <span className="bl-eyebrow__line" aria-hidden />
                <span>Dolor sit amet</span>
                <span className="bl-eyebrow__diamond" aria-hidden />
              </div>
            </div>

            <div className="bl-hero__details">
              <div className="bl-hero__claim">
                <h2>
                  loremipsum dolor sit,
                  <br />
                  amet consectetur.
                </h2>
                <div className="bl-hero__tags">
                  {HERO_TAGS.map((tag) => (
                    <span key={tag} className="bl-hero__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a className="bl-callcard" href="#contact">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img("UT11maOE26W5dPQ4gVjKF55xxo")} alt="" />
                <span className="bl-callcard__body">
                  <p>loremipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <span className="bl-callcard__link">
                    loremipsum
                    <Chevron />
                  </span>
                </span>
              </a>
            </div>

            <div className="bl-hero__cta">
              <a className="bl-btn bl-btn--dark" href="#contact">
                loremipsum
              </a>
              <a className="bl-btn bl-btn--light" href="#projects">
                Dolor sit amet
              </a>
            </div>
          </div>

          <Showreel />
        </div>

        <aside className="bl-hero__panel bl-panel" aria-label="Studio introduction">
          <div className="bl-hero__panelTop">
            <span>loremipsum</span>
            <span>© 20XX</span>
          </div>

          <div className="bl-hero__spacer" />

          <div className="bl-hero__statementWrap">
            <p className="bl-hero__statement">
              loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="bl-hero__panelBottom">
            <Marquee duration="30s">
              {CLIENT_LOGOS.map((client) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={client.name} src={client.src} alt={client.name} style={{ height: client.height, width: client.width }} />
              ))}
            </Marquee>

            <div className="bl-hero__clients">
              <div className="bl-avatars">
                {["JkjNY7ef61BiEfuoXrh5764PT8Q", "oJZbG037LBfJTj2KGsRP3IUFyA", "QWfg6eO2dfcGEopG3KrBYmOes0", "vYnZbTyqES2ba0QRPDF8i7fQhQ"].map(
                  (id) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={id} src={img(id)} alt="" />
                  ),
                )}
              </div>
              <div className="bl-rating">
                loremipsum
                <b>Dolor sit amet, consectetur adipiscing elit.</b>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

