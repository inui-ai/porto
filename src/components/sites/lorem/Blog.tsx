"use client";

import { POSTS, img } from "./data";
import { Eyebrow } from "./ui";

export function Blog() {
  return (
    <section id="blog" className="bl-blog">
      <div className="bl-split">
        <div className="bl-col bl-blog__left">
          <div className="bl-blog__block">
            <div className="bl-blog__head">
              <Eyebrow label="Lorem ipsum" index="07" />
              <h2 className="bl-h2">Lorem ipsum</h2>
            </div>

            <div className="bl-blog__grid">
              {POSTS.map((post) => (
              <a key={post.title} className="bl-post" href="#blog">
                <div className="bl-post__meta">
                  <span>{post.date}</span>
                  <span>{post.category}</span>
                </div>
                <div className="bl-post__imgWrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img(post.image)} alt="" loading="lazy" />
                </div>
                <div className="bl-post__title">{post.title}</div>
              </a>
            ))}
            </div>
          </div>
        </div>

        <aside className="bl-blog__panel bl-panel" aria-label="Lorem ipsum">
          <div>
            <div className="bl-blog__panelTop">
              <span>Lorem ipsum // dolor</span>
              <span>Ipsum ©</span>
            </div>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</h2>
          </div>

          <div className="bl-signup">
            <h3>Lorem ipsum dolor</h3>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                form.reset();
                const button = form.querySelector("button");
                if (button) button.textContent = "Done";
              }}
            >
              <label htmlFor="lorem-signup" className="sr-only" style={{ position: "absolute", left: -9999 }}>
                Email address
              </label>
              <input id="lorem-signup" type="email" placeholder="Lorem ipsum" required />
              <button type="submit">Lorem</button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
}
