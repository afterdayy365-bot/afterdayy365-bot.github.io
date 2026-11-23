/**
 * Everything that changes between deployments lives here.
 *
 * SITE_URL is the address the site is served from. On GitHub Pages with a repository named
 * "<your-username>.github.io" it is "https://<your-username>.github.io". It is read from the
 * NEXT_PUBLIC_SITE_URL environment variable, which the GitHub Actions workflow sets for you.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://afterday.github.io').replace(/\/$/, '');

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.afterday.astrocaptain';

export const APP_NAME = 'Astrocaptain';
export const APP_FULL_NAME = 'Astrocaptain – Kundli & Jyotish';
export const DEVELOPER = 'Afterday';

/** Shown on the privacy page and in the footer. Use the same address as on your Play Store listing. */
export const CONTACT_EMAIL = 'afterdayy365@gmail.com';

/** Date the privacy policy was last changed. */
export const PRIVACY_UPDATED = '23 November 2026';
