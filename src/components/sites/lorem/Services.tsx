"use client";

import { PROCESS, SERVICES, img } from "./data";
import { Eyebrow, RevealText } from "./ui";

export function Services() {
  return (
    <section id="services" className="bl-services">
      <div className="bl-split">
        <div className="bl-col bl-services__left">
          <div className="bl-services__block">
            <div className="bl-services__head">
              <Eyebrow label="Lorem ipsum" index="02" />
              <h2 className="bl-h2 bl-h2--dark">Lorem ipsum</h2>
            </div>

            <div className="bl-service-list">
              {SERVICES.map((service) => (
                <a key={service.number} className="bl-service" href="#contact">
                  <div className="bl-service__head">
                    <div className="bl-service__title">
                      <span className="bl-service__num">{service.number}</span>
                      <span className="bl-service__slash">{"//"}</span>
                      <h3>{service.title}</h3>
                    </div>
                    <div className="bl-service__tags">
                      {service.tags.map((tag) => (
                        <span key={tag} className="bl-service__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bl-service__bottom">
                    <p>{service.copy}</p>
                    <div className="bl-service__images">
                      {service.images.map((id) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={id} src={img(id)} alt="" loading="lazy" />
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bl-process">
            <Eyebrow label="Lorem ipsum" index="03" />

            <RevealText
              className="bl-process__headline"
              from="rgba(255,255,255,0.32)"
              to="#ffffff"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            />

            <div className="bl-process__grid">
              {PROCESS.map((step) => (
                <div key={step.number} className="bl-process__card">
                  <div className="bl-process__cardTop">
                    <h3>{step.title}</h3>
                    <span>{step.number}</span>
                  </div>
                  <p>{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="bl-services__panel bl-panel" aria-label="Lorem ipsum">
          <div>
            <span className="bl-panel__label">Lorem®</span>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</h2>
          </div>

          <div>
            <div className="bl-quote">
              <p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.&quot;</p>
              <div className="bl-author">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img("R9ImT4cCQPQKwaUuf4cfhm0yY")} alt="" />
                <span>
                  <span className="bl-author__name">Lorem Ipsum</span>
                  <span className="bl-author__role">Dolor Sit Amet</span>
                </span>
              </div>
            </div>
            <a className="bl-btn bl-btn--light bl-btn--wide" href="#contact">
              Lorem ipsum
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
