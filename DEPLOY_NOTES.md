# Deploy the updated Arav portfolio

This directory contains the **actual updated static website**, not only a concept. Deploy as a static site on Vercel (Framework: Other; Output Directory: `.`; no build command). The PDF resume is in `assets/` and is linked from the hero, navigation, and contact section.

To update your existing live domain without losing history, back up its linked Git repository, replace its static site files with the contents of this directory (not the parent folder), then push to the branch connected to the Vercel production environment. Alternatively run `vercel deploy --prod` from this directory after verifying the project/team linked by `vercel link`.

**Production not updated from this chat:** Vercel access requires authorization; no current-domain update should be assumed.

Note: The photography references still point to the existing public site. If you replace or delete the original site assets, copy those original photos into this site's `assets/` and change the corresponding `<img src>` URLs.
