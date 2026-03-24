import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "hind asaad",
};

export default function Home() {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold mb-6">hi, i&apos;m hind.</h1>

      <div className="space-y-4 text-[#444] leading-relaxed mb-8">
        <p>
          i&apos;m a 5th year mechatronics engineering student at McMaster University & software engineer based in Toronto. i write about tech, books, and whatever else is on my mind. think of this site as
          what i&apos;d tell a friend i hadn&apos;t seen in a year.
        </p>
        <p>
          i&apos;m incoming for my second internship as a software engineer at Shopify, and have previously interned at
          Ciena, Jetson Infinity, and Noze. my focus has been on backend and infra - job
          processing, APIs, databases, security tooling - but i&apos;m curious across the stack.
        </p>
        <p>
          outside of work & school, i read a lot (see{" "}
          <a href="/bookshelf" className="hover:text-black">
            bookshelf
          </a>
          ), watch a lot (see{" "}
          <a href="/watchlist" className="hover:text-black">
            watchlist
          </a>
          ), and try to stay curious.
        </p>

      </div>

      <p className="text-[#6e6e6e] text-sm">
        check out what i&apos;m{" "}
        <Link href="/now" className="hover:text-[#444]">
          up to now
        </Link>
        , or browse my{" "}
        <Link href="/blog" className="hover:text-[#444]">
          writing
        </Link>
        .
      </p>
    </div>
  );
}
