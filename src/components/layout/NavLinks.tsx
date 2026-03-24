"use client";

import Link from "next/link";

const links = [
  { label: "experience", href: "/experience" },
  { label: "education", href: "/education" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
  { label: "bookshelf", href: "/bookshelf" },
  { label: "watchlist", href: "/watchlist" },
  { label: "now", href: "/now" },
];

export default function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <nav className="flex flex-col gap-1 items-end">
      <Link
        href="/"
        onClick={onLinkClick}
        className="nav-link text-[1.3125rem] leading-tight font-semibold py-1 mb-1 text-right"
      >
        hind<br />asaad
      </Link>
      {links.map(({ label, href }) => {
        return (
          <Link
            key={href}
            href={href}
            onClick={onLinkClick}
            className="nav-link text-sm font-semibold py-1 w-fit"
          >
            {label}
          </Link>
        );
      })}
      <a
        href="/resume.pdf"
        download="hind_asaad_resume.pdf"
        onClick={onLinkClick}
        className="nav-link text-sm font-semibold py-1 w-fit"
      >
        get my resume
      </a>
    </nav>
  );
}
