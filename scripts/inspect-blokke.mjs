import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const OUT = "docs/research/blokke";
const SRC = "docs/design-references";
const URL = "https://blokke.framer.website/";

await fs.mkdir(path.join(OUT, "dom"), { recursive: true });
await fs.mkdir(path.join(SRC, "blokke"), { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });

async function sweep(page) {
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += 400) {
    await page.mouse.wheel(0, 400);
    await page.waitForTimeout(80);
  }
  await page.waitForTimeout(800);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
}

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForTimeout(2500);
  await sweep(page);
  await page.waitForTimeout(1200);

  const data = await page.evaluate(() => {
    const css = (el, props) => {
      const s = getComputedStyle(el);
      return Object.fromEntries(props.map((p) => [p, s[p]]));
    };
    const walk = (el, depth = 0, out = []) => {
      if (depth > 6) return out;
      const r = el.getBoundingClientRect();
      out.push({
        d: depth,
        tag: el.tagName,
        name: el.getAttribute("data-framer-name"),
        id: el.id,
        text: el.children.length === 0 ? (el.textContent || "").slice(0, 200) : undefined,
        rect: [Math.round(r.x), Math.round(r.y + scrollY), Math.round(r.width), Math.round(r.height)],
        style: css(el, [
          "display", "position", "fontFamily", "fontSize", "fontWeight", "lineHeight",
          "letterSpacing", "color", "backgroundColor", "textTransform", "padding", "margin",
          "gap", "borderRadius", "flexDirection", "justifyContent", "alignItems", "maxWidth",
          "gridTemplateColumns", "opacity", "transform", "overflow",
        ]),
      });
      [...el.children].forEach((c) => walk(c, depth + 1, out));
      return out;
    };
    return {
      title: document.title,
      htmlClass: document.documentElement.className,
      bodyStyle: css(document.body, ["backgroundColor", "color", "fontFamily", "fontSize"]),
      main: walk(document.querySelector("main") || document.body),
      images: [...document.querySelectorAll("img")].map((i) => ({
        src: i.currentSrc, srcset: i.getAttribute("srcset"), alt: i.alt,
        w: i.naturalWidth, h: i.naturalHeight, sizes: i.getAttribute("sizes"),
        rect: (() => { const r = i.getBoundingClientRect(); return [Math.round(r.width), Math.round(r.height)]; })(),
        objectFit: getComputedStyle(i).objectFit,
        loading: i.getAttribute("loading"),
      })),
      videos: [...document.querySelectorAll("video")].map((v) => ({
        src: v.currentSrc || v.src, poster: v.poster, autoplay: v.autoplay, loop: v.loop,
        muted: v.muted, rect: (() => { const r = v.getBoundingClientRect(); return [Math.round(r.width), Math.round(r.height)]; })(),
        sources: [...v.querySelectorAll("source")].map((s) => s.src + " " + s.type),
      })),
      svgs: [...document.querySelectorAll("svg")].map((s) => ({
        w: s.getAttribute("width"), h: s.getAttribute("height"), vb: s.getAttribute("viewBox"),
        outer: s.outerHTML.slice(0, 3000),
      })),
      bgImages: [...document.querySelectorAll("*")]
        .map((el) => ({ el, bg: getComputedStyle(el).backgroundImage }))
        .filter((x) => x.bg && x.bg !== "none")
        .map((x) => ({ tag: x.el.tagName, name: x.el.getAttribute("data-framer-name"), bg: x.bg.slice(0, 500) })),
      fonts: [...document.fonts].map((f) => ({ family: f.family, weight: f.weight, style: f.style, status: f.status })),
      links: [...document.querySelectorAll("a[href]")].map((a) => ({ href: a.href, text: (a.textContent || "").trim().slice(0, 80) })),
      bodyFontFaces: [...document.querySelectorAll("style")].map((s) => s.textContent).join("\n").match(/@font-face\s*\{[^}]*\}/g) || [],
      mediaQueries: [...document.querySelectorAll("style")].map((s) => s.textContent).join("\n").match(/@media[^{]+/g)?.slice(0, 80) || [],
    };
  });

  await fs.writeFile(path.join(OUT, "dom", `${vp.name}.json`), JSON.stringify(data, null, 2));
  await fs.writeFile(path.join(OUT, "dom", `${vp.name}.html`), await page.content());
  await page.screenshot({ path: path.join(SRC, "blokke", `${vp.name}-full.png`), fullPage: true });
  await page.screenshot({ path: path.join(SRC, "blokke", `${vp.name}-hero.png`) });
  await ctx.close();
}

await browser.close();
console.log("done");
