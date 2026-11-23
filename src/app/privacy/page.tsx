import type { Metadata } from 'next';
import Logo from '@/components/Logo';
import { APP_FULL_NAME, CONTACT_EMAIL, DEVELOPER, PRIVACY_UPDATED } from '@/site.config';

export const metadata: Metadata = {
  title: 'Privacy policy – Astrocaptain',
  description: 'How the Astrocaptain app handles your data.',
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b py-5" style={{ borderColor: 'var(--border-color)' }}>
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Logo />
            <span className="font-serif text-xl font-bold">Astrocaptain</span>
          </a>
          <a href="/" className="text-sm opacity-70 hover:opacity-100">Back to home</a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 prose-page">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-3">Privacy policy</h1>
        <p className="text-sm opacity-60">Last updated: {PRIVACY_UPDATED}</p>

        <p className="mt-8">
          This policy explains what information the {APP_FULL_NAME} app (&ldquo;the app&rdquo;), published by {DEVELOPER},
          collects and how it is used. In short: your birth details stay on your phone, and the only data that leaves
          it is what our advertising partners collect to show ads.
        </p>

        <h2>Information you enter</h2>
        <p>
          To make a chart you enter a name, date, time and place of birth. This information, your saved charts and your
          settings are stored only on your device. All calculations happen on the device and the place search works
          offline. We do not have servers that receive this information, and we never see it.
        </p>
        <p>
          You can delete a saved chart at any time inside the app. Uninstalling the app removes all of it.
        </p>

        <h2>Advertising</h2>
        <p>
          The app is free and shows ads through Google AdMob, which may also serve ads from Meta Audience Network. To show
          and measure ads, these services may collect:
        </p>
        <ul>
          <li>your device&rsquo;s advertising ID,</li>
          <li>your approximate location, worked out from your IP address,</li>
          <li>device and app information such as model, operating system and how you interact with ads.</li>
        </ul>
        <p>
          Where the law requires it, the app asks for your consent before personalised ads are shown, using
          Google&rsquo;s consent form. You can reset or opt out of ad personalisation in your phone&rsquo;s settings
          (Settings &rarr; Google &rarr; Ads, or Settings &rarr; Privacy &rarr; Ads).
        </p>
        <p>
          How these partners use data is described in their own policies:{' '}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google</a> and{' '}
          <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">Meta</a>.
        </p>

        <h2>Notifications</h2>
        <p>
          If you allow notifications, the app reminds you of dasha changes and events in your chart. These reminders are
          scheduled on the device; nothing is sent to us.
        </p>

        <h2>Permissions</h2>
        <ul>
          <li><strong>Internet and network state</strong>: to load ads.</li>
          <li><strong>Notifications</strong>: for the reminders above, only if you allow them.</li>
        </ul>
        <p>The app does not ask for your location, contacts, camera, microphone or files.</p>

        <h2>Children</h2>
        <p>
          The app is not directed at children under 13, and we do not knowingly collect information from them.
        </p>

        <h2>Not professional advice</h2>
        <p>
          Astrology is traditional guidance. Nothing in the app is a substitute for medical, legal, financial or
          other professional advice.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If this policy changes, the new version will be posted on this page with a new date at the top.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </main>
    </>
  );
}
