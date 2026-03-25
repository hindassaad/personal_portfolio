import type { Metadata } from "next";

export const metadata: Metadata = { title: "now" };

export default function Now() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-semibold mb-2">now</h1>
      <p className="text-sm text-[#6e6e6e] mb-8">last updated march 2026</p>

      <div className="space-y-6 text-[#444] leading-relaxed">
        <div>
          <h2 className="font-semibold mb-2">work</h2>
          <p> incoming as a software engineering intern at Shopify this Summer 2026.</p>
        </div>

        <div>
          <h2 className="font-semibold mb-2">reading</h2>
          <p>
            working through Code by Charles Petzold. also slowly making my way through Atomic Habits.
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-2">learning</h2>
          <p>discovering cars and trying to find my dream one. right now it&apos;s a GTR (AMG, not Nissan... sorry).</p>
        </div>

        <div>
          <h2 className="font-semibold mb-2">otherwise</h2>
          <p>
            exploring new ways to be active (played squash for the first time), cooking more, trying to be outside when the weather is good.
          </p>
        </div>
      </div>

      <p className="text-sm text-[#6e6e6e] mt-10 pt-6 border-t border-[#ebeced]">
        this is a{" "}
        <a
          href="https://nownownow.com/about"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#444]"
        >
          now page
        </a>
        . it&apos;s a snapshot of what i&apos;m focused on at this point in my life.
      </p>
    </div>
  );
}
