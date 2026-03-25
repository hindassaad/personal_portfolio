import NavLinks from "./NavLinks";
import SocialIcons from "./SocialIcons";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col sticky top-0 h-screen w-48 shrink-0 pt-28 pb-8 pr-16">
      <div className="flex flex-col items-end">
        <NavLinks />
        <SocialIcons />
      </div>
    </aside>
  );
}
