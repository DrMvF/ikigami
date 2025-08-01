'use client';

import { track } from '@vercel/analytics';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between p-8 sm:p-20 font-cm">
      <main className="flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Ikigami App</h1>
        <p className="text-lg sm:text-xl">
          Ikigai finder and personal compass for high performers.
        </p>

        <div className="h-12 sm:h-16" />

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full max-w-xs mb-8">
          <a
            href="/meditation"
            onClick={() => track('click_meditation')}
            className="rounded-full bg-black text-white px-6 py-3 text-base sm:text-lg text-center hover:bg-[#383838] transition-colors"
          >
            Meditation
          </a>

          <a
            href="/questions"
            onClick={() => track('click_questions')}
            className="rounded-full bg-[#4b4b4b] text-white px-6 py-3 text-base sm:text-lg text-center hover:bg-[#5e5e5e] transition-colors"
          >
            Questions
          </a>

          <a
            href="/reflection"
            onClick={() => track('click_reflection')}
            className="rounded-full bg-[#e5e5e5] text-black px-6 py-3 text-base sm:text-lg text-center hover:bg-[#ccc] transition-colors"
          >
            Reflection
          </a>

          <a
            href="/navigator"
            onClick={() => track('click_navigator')}
            className="rounded-full border border-black px-6 py-3 text-base sm:text-lg text-center hover:bg-black hover:text-white transition-colors"
          >
            Navigator
          </a>
        </div>

        {/* App Store & Google Play badges */}
        <div className="flex flex-row gap-4 mb-8">
          <a
            href="https://apps.apple.com/de/app/ikigami/id6479921683"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('click_appstore')}
          >
            <img
              src="/badges/appstore.svg"
              alt="Download on the App Store"
              className="w-40 h-40 object-contain"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=de.ikigami.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('click_googleplay')}
          >
            <img
              src="/badges/googleplay.svg"
              alt="Get it on Google Play"
              className="w-40 h-40 object-contain"
            />
          </a>
        </div>
      </main>

      <footer className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-center">
        <a href="/legal" className="hover:underline">● Legal Notice</a>
        <a href="/privacy" className="hover:underline">● Privacy Policy</a>
        <a href="/terms" className="hover:underline">● Terms & Conditions</a>
        <a
          href="https://www.linkedin.com/in/miriamvonfelbert/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          ● LinkedIn
        </a>
      </footer>
    </div>
  );
}
