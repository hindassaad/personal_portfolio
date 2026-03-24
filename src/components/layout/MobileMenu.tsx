"use client";

import { X } from "lucide-react";
import NavLinks from "./NavLinks";
import SocialIcons from "./SocialIcons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#f5f2f0] flex flex-col p-6 md:hidden">
      <div className="flex justify-end mb-6">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-[#6e6e6e] hover:text-[#444]"
        >
          <X size={22} />
        </button>
      </div>
      <NavLinks onLinkClick={onClose} />
      <SocialIcons />
    </div>
  );
}
