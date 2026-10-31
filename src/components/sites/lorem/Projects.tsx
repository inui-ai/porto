"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS, img, logo } from "./data";
import { Arrow, Eyebrow } from "./ui";

export function Projects() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const nodes = refs.current.filter(Boolean) as HTMLAnchorElement[];
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = nodes.indexOf(entry.target as HTMLAnchorElement);
          if (index >= 0) setActive(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);

  const project = PROJECTS[active];

  return (
    <section id="projects" className="bl-projects">
      <div className="bl-projects__head">
        <Eyebrow label="loremipsum" index="04" />

        <div className="bl-projects__headline">
          <div className="bl-projects__title">
            <h2 className="bl-h2">loremipsum dolor sit amet.</h2>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <a className="bl-btn bl-btn--outline bl-projects__all" href="#projects">
            loremipsum
            <Arrow />
          </a>
        </div>
      </div>

      <div className="bl-projects__body">
        <div className="bl-col">
          {PROJECTS.map((item, index) => (
            <a
              key={item.name}
              ref={(node) => {
                refs.current[index] = node;
              }}
              className="bl-project"
              href="#projects"
              aria-label={`${item.name} — ${item.service}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="bl-project__img" src={img(item.image)} alt="" loading="lazy" />
              <div className="bl-project__overlay">
                <strong>{item.name}</strong>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo(item.logo)} alt="" />
              </div>
            </a>
          ))}
        </div>

        <aside className="bl-projects__panel bl-panel" aria-live="polite">
          <div className="bl-projects__panelTop">
            <h3>{project.name}</h3>
            <span>{project.year}</span>
          </div>

          <div className="bl-projects__spacer" />

          <div className="bl-projects__desc">
            <p>{project.copy}</p>
          </div>

          <div className="bl-projects__meta">
            <div>
              <span>
                Lorem: <b>{project.client}</b>
              </span>
            </div>
            <div>
              <span>
                Ipsum: <b>{project.service}</b>
              </span>
            </div>
            <div>
              <span>
                Dolor: <b>{project.timeline}</b>
              </span>
            </div>
          </div>

          <div className="bl-projects__cta">
            <a className="bl-btn bl-btn--dark bl-btn--wide" href="#projects">
              loremipsum
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

