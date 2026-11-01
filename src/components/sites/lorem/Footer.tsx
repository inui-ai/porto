"use client";

import { NAV_LINKS, SITE } from "./data";
import { useLocalTime } from "./hooks";
import { Arrow, SocialIcon } from "./ui";

export function Footer() {
  const time = useLocalTime(SITE.timezone);

  return (
    <footer id="contact" className="bl-footer">
      <div className="bl-footer__head">
        <div className="bl-footer__title">
          <h2 className="bl-h2 bl-h2--white">loremipsum dolor</h2>
          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="bl-footer__where">
          <span>
            Lorem in <b>Ipsum</b>
          </span>
          <span aria-hidden>{"//"}</span>
          <span>Local time: {time || "--:--"}</span>
        </div>
      </div>

      <div className="bl-footer__cols">
        <div className="bl-footer__col">
          <span className="bl-footer__colTitle">loremipsum</span>
          <div className="bl-footer__links">
            <a href="#contact">Dolor sit amet</a>
            <a href="#contact">Consectetur elit</a>
          </div>
        </div>

        <div className="bl-footer__col">
          <span className="bl-footer__colTitle">Navigation</span>
          <div className="bl-footer__links">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="bl-footer__col">
          <span className="bl-footer__colTitle">Lorem</span>
          <div className="bl-footer__contact">
            <a href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <div className="bl-footer__socials">
              {SITE.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  <SocialIcon name={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bl-footer__col">
          <form
            className="bl-footer__form"
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget;
              form.reset();
              const button = form.querySelector("button");
              if (button) button.textContent = "Message sent";
            }}
          >
            <div className="bl-field">
              <label htmlFor="lorem-name">Lorem*</label>
              <input id="lorem-name" name="name" type="text" required autoComplete="name" />
            </div>
            <div className="bl-field">
              <label htmlFor="lorem-email">Ipsum*</label>
              <input id="lorem-email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="bl-field" style={{ flex: 1 }}>
              <label htmlFor="lorem-message">Dolor sit amet...</label>
              <textarea id="lorem-message" name="message" rows={4} required />
            </div>
            <button type="submit" className="bl-btn">
              loremipsum
              <Arrow />
            </button>
          </form>
        </div>
      </div>

      <div className="bl-footer__wordmark" aria-hidden>
        Lorem <em>{"//"}</em> Ipsum<sup>®</sup>
      </div>

      <div className="bl-footer__bottom">
        <span className="bl-footer__credit">
          <span className="bl-eyebrow__diamond" aria-hidden />
          loremipsum dolor sit amet
        </span>
        <span>© 20XX loremipsum</span>
      </div>
    </footer>
  );
}

