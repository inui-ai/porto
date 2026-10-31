# Blokke // Studio® — page brief

Source: https://blokke.framer.website/ (Framer). Cloned into `src/app/page.tsx` + `src/components/sites/blokke/`.

## Evidence

- Screenshots: `docs/design-references/blokke/` (`view-NN.png` = 1440×900 scroll steps, `mobile-NN.png`, `menu-open-desktop.png`, `mobile-menu.png`, `contact-sheet.png`).
- DOM/computed-style dumps: `docs/research/blokke/dom/{desktop,mobile}.json`, `layout-1440.json`, `layout-detail.json`, `image-map.json`, `page-text.txt`, `font-faces.txt`, `asset-map.tsv`.

## Design system

| Token | Value |
| --- | --- |
| Ink / dark | `#121212` (rail, hero panel) |
| Dark section | `#1a1a1a` |
| Card dark | `#1f1f1f` / `#212121` |
| Light bg | `#e3e3e3` |
| White | `#ffffff` |
| Body grey | `#4f4f4f` |
| Muted grey | `#a6a6a6` / `#a3a3a3` |
| Button dark bg | `#242424` |
| Border (light) | `rgba(0,0,0,.12)`, (dark) `rgba(255,255,255,.12)` |

Fonts (self-hosted in `public/sites/blokke/fonts`):

- **Switzer** 500/600/700 — display + labels. Headings weight 600, `letter-spacing: -0.05em`, `line-height: .9–1`, uppercase.
- **Geist** 500 — body/UI text, `letter-spacing: -.04em` (e.g. 16px/22.4px = 1.4).

Type scale @1440 (mobile 390):

- wordmark hero `93.94px / 84.5px` (−.07em) → 40px mobile, uppercase.
- h2 `96px / 96px` (−.05em) for wide reveal headings, `96px / 86.4px` (.9) for section titles → 40px mobile.
- h2 small (why-us) `56px / 61.6px`.
- h3 card title `32px / 32px` (−.04em); process `24px / 26.4px`.
- body `16px / 22.4px`; small labels `14px / 1.4` (−.04em) uppercase; caption `12px`.
- price `64px` Switzer 600.

Layout: fixed 52px left rail (`#121212`), content 1388 wide. Desktop sections are a 972/416 two-column split; the 416 right column is `position: sticky; top: 0; height: 900px` per section (services, pricing, projects, team, blog, hero). Showreel is a 972×900 sticky video block under the hero.

Sections (index labels): Hero, 01 WHO WE ARE, 02 WHAT WE DO (Services), 03 PROCESS, 04 OUR WORK (Projects), 05 WHY US, 06 SUCCESS STORIES (Testimonials), 07 PRICING + 08 FAQ, 05 MEET THE TEAM, 10 BLOG (The Journal), footer "READY WHEN YOU ARE".

## Interactions

- **Lenis** smooth scroll (`html.lenis`), fixed rail + sticky panels.
- **Word reveal**: headings split per word; unrevealed words are grey (`#a6a6a6` on light, `rgba(255,255,255,.35)` on dark), revealed in reading order by scroll progress. Applies to About, Process, Why-us and Testimonials headlines (source uses per-character blur reveal; reproduced at word level, no blur).
- **Counters**: About statistics count up once in view (15+, 340+, 120+).
- **Logo ticker**: infinite horizontal marquee (6 real client SVGs) in hero right panel, testimonials strip and pricing strip.
- **Service rows**: hover raises row bg, image trio scales.
- **Projects**: 4 image cards (974×1352); right sticky panel switches content to the project currently crossing the viewport centre.
- **Showreel**: "PLAY SHOWREEL" opens a lightbox with the real mp4; ESC / backdrop closes, body scroll locked.
- **Menu**: rail burger (desktop) / header burger (tablet, mobile) opens overlay with HOME/ABOUT/PROJECTS/BLOG/CONTACT, contact, socials; backdrop blurs page. ESC closes.
- **FAQ**: 8 items, two columns, accordion with rotating `+`.
- **Live local time**: `Europe/London` clock, "Local time: HH:MM AM".
- **Footer form**: name/email/message, client-side submit state.

## Assets

`public/sites/blokke/images` (44 photos), `logos` (6 client SVGs), `media/showreel.mp4`, `fonts` (Switzer 500/600/700, Geist 500/700). Mapping in `asset-map.tsv` + `image-map.json`.

Key mappings: hero portrait `UT11maOE…`, services trio rows (mic/green/orange, red/horses/shell, wave/shell/silhouette, teal/camera/mountain), projects (neon `oJDtXb…` Maison, rope `rGTXA…` Basira, car `xut8Fs…` Norvik, hooded `rDLYhf…` Lumen), why-us horses `MXFVPD…`, team bg `QYxh9yh…`, team portraits `R9ImT4/qaPw13/aW3Gw/89Kc5`, testimonials `wkLBIK/1ieSL/a1Imu/vYyc3/0Bn2u/BH5m7`, blog `Na9cPI/rNH30X/CTUWsy/6E3OEi`.
