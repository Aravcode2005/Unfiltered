# Arav Gupta — A Little Bit of Everything (Story Edition)

A colorful, storytelling-first portfolio refresh based on the existing public site, personal project notes, and the November 2026 engineering archive. Designed to feel like a creative person's home on the internet, not an engineer's dashboard.

## What this version adds

- A four-chapter engineering narrative from PixelMania and HireFlow to cloud work, Dishari, Wayne Citadel, and TenseBots.
- Thirteen project/creative cards with working **All / Engineering / AI + Research / Creative + Life** filters.
- A candid Dishari reflection: the team shipped a demo but did not reach the next round.
- Interactive, expandable incident notes (npm install, Docker Buildx, Nginx, LUKS).
- An honest explanation of TenseBots as an early research prototype, not a finished self-learning AI workforce.
- Four original photographs from the existing portfolio, plus creative life, video editing, martial arts and exploring.
- Responsive mobile navigation, accessible photo lightbox, reduced-motion support, and no framework required to publish.

## Colors

The palette uses familiar Google colors as inspiration, not official Google branding:

| Name | Hex |
|---|---|
| Blue | `#4285F4` |
| Red | `#EA4335` |
| Yellow | `#FBBC05` |
| Green | `#34A853` |
| Cream page | `#FAFAF7` |
| Charcoal | `#202124` |

## Run it

Open `index.html` in any modern browser, or run a local server:

```bash
python3 -m http.server 8080
```

Visit `http://localhost:8080`.

## Deploy to Vercel

This is a **static HTML/CSS/JS project**, so no Node/npm/Docker build is required.

1. Unzip the project and open this folder in your terminal.
2. Push the folder to a new GitHub repository, or replace the files in your existing portfolio repository after backing up its current version.
3. In Vercel, import that repository using **Framework Preset: Other** and **Output Directory: `.`**. No install/build command required.
4. Deploy and verify all anchor navigation and outbound links.

If your existing Vercel project is connected to a different repository, don't overwrite it without checking the repository/project linkage first.

## Photography note

Four photos are referenced from the **existing public portfolio** at `https://traveller-smoky.vercel.app/assets/...` because their original files were not available in this package. They will load when online and the original site is accessible. For a self-contained deployment, copy your originals to `assets/` and update the four image `src` attributes in `index.html` to relative paths. The rest of the site, including all text, works offline.

Google Fonts are optional; local system fallbacks are present.

## Story verification / accuracy

Project descriptions are based on prior documentation and the supplied engineering archive. Status labels intentionally distinguish reported builds, prototypes, ongoing work, demo behavior and research goals. No fabricated usage figures, customer counts, model improvements or official loan approvals are claimed. Some original external URLs were publicly visible on the prior portfolio; check them before final publication.

## Customization

- **Narrative and project descriptions:** edit `index.html`.
- **Colors, type, responsive layout:** edit `styles.css` (CSS variables at the start).
- **Navigation, filters, photo viewer:** edit `app.js`.
- **Social links:** search `linkedin.com`, `github.com`, and `mailto:` in `index.html`.
- **Photos:** replace remote image links with local assets.
- **Add projects:** copy a `.project-card` and adjust `data-category`; if the count changes, update the `All the things` pill in `index.html`.

## Original site

Live site observed at: https://traveller-smoky.vercel.app/ 

**This package is an editable replacement/refresh. It does not automatically update the existing live Vercel deployment.**
