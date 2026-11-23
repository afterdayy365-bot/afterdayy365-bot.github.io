# Astrocaptain website

The marketing site for the Astrocaptain Android app, with the privacy policy and the `app-ads.txt` file AdMob needs.
It is a static Next.js site: `npm run build` writes plain HTML, CSS and JS to the `out/` folder, which GitHub Pages
serves for free.

## Before you publish: one thing to fill in

Open `src/site.config.ts` and set `CONTACT_EMAIL` to the support email shown on your Play Store listing.
It appears in the footer and on the privacy page.

Everything else (the site address, sitemap and links) is worked out automatically when GitHub builds the site.

## Run it on your computer

You need Node.js 20 or newer.

```bash
npm install
npm run dev        # open http://localhost:3000
```

To check the final static build:

```bash
npm run build      # creates the out/ folder
npm run preview    # serves out/ at http://localhost:3000
```

## What is where

| Path | What it is |
|---|---|
| `src/site.config.ts` | Contact email, Play Store link, privacy date |
| `src/app/page.tsx` | The home page: smooth scrolling, theme, the order of sections |
| `src/components/` | One file per section of the page |
| `src/app/privacy/page.tsx` | Privacy policy, served at `/privacy/` |
| `public/app-ads.txt` | Your AdMob publisher line, served at `/app-ads.txt` |
| `public/screenshots/` | App screenshots (`screenshot-1.webp` … `screenshot-5.webp`, 600 × 1298) |
| `public/og-image.png` | The preview image shown when the link is shared on WhatsApp, X, etc. |
| `.github/workflows/deploy.yml` | Builds and publishes the site on every push |

To replace a screenshot, take it on the phone, export it as WebP (or PNG and change the extension in
`src/components/PhoneMockup.tsx`) and keep the same file name.

## Publish on GitHub Pages

The repository **must be named `<your-github-username>.github.io`**. That puts the site, and `app-ads.txt`, at the
root of `https://<your-github-username>.github.io`, which is where AdMob looks for it. A project repository such as
`astrocaptain-website` would put the file at `/astrocaptain-website/app-ads.txt`, and AdMob would not find it.

1. On GitHub, create a new **public** repository named `<your-github-username>.github.io`. Don't add a README.
2. Upload this folder to it, either by dragging the files into the GitHub page ("uploading an existing file") or with git:
   ```bash
   git init
   git add .
   git commit -m "Astrocaptain website"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/<your-github-username>.github.io.git
   git push -u origin main
   ```
   Do not upload `node_modules`, `.next` or `out`; `.gitignore` already leaves them out.
3. In the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Open the **Actions** tab. The "Deploy to GitHub Pages" run starts on its own; when it shows a green tick
   (2–3 minutes) the site is live at `https://<your-github-username>.github.io`.
5. Check these three addresses in a browser:
   - `https://<your-github-username>.github.io/`
   - `https://<your-github-username>.github.io/privacy/`
   - `https://<your-github-username>.github.io/app-ads.txt` – it must show exactly
     `google.com, pub-3362603736761063, DIRECT, f08c47fec0942fa0`

Every later change: edit, commit, push. The site rebuilds by itself.

## Verify the app in AdMob

1. **Play Console → Astrocaptain → Grow users → Store presence → Store settings → Store listing contact details.**
   Set **Website** to `https://<your-github-username>.github.io` and save. Changes to store settings go live
   without a new app release.
2. While you are in Play Console, open **Policy and programs → App content → Privacy policy** and set it to
   `https://<your-github-username>.github.io/privacy/`.
3. Wait. AdMob notices a new developer website within about 24 hours, and then crawls `app-ads.txt` within another
   24 hours or so. It can take up to a week the first time.
4. **AdMob → Apps → View all apps → app-ads.txt tab.** Find Astrocaptain and click **Check for updates**.
   When the status shows the file as found and verified, you are done. If your app shows a **Verify app** step, open
   it and click **Check for updates** there.
5. After verification, AdMob runs its app readiness review. Ads serve at full volume once the app shows as Ready.

### If AdMob says it can't find the file

- Open `https://<your-github-username>.github.io/app-ads.txt` in a private browser window. It must load with no
  login and show the line exactly, with no extra spaces or quotes.
- The website in Play Console must be the same `https://<your-github-username>.github.io` address, not a GitHub
  profile or repository link.
- The publisher ID in the file must be the one at the top of **AdMob → Settings → Account information**
  (`pub-3362603736761063`).

### Meta Audience Network

The app also uses Meta Audience Network through AdMob mediation. If you bid with Meta, Meta gives you its own line for
`app-ads.txt` (in Meta Business Manager under your Audience Network property). Add that line under the Google one in
`public/app-ads.txt` and push.
