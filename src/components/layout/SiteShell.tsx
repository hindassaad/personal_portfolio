"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <header className="flex md:hidden items-center justify-between px-6 py-4 border-b border-[#ebeced]">
        <Link href="/" className="text-base font-semibold">
          hind asaad
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="text-[#6e6e6e] hover:text-[#444]"
        >
          <Menu size={22} />
        </button>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex max-w-content mx-auto px-6 md:px-8 pt-6">
        <Sidebar />
        <main className="flex-1 py-12 min-w-0">
          {children}
        </main>
      </div>
    </>
  );
}
