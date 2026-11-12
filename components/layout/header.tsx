import NextLink from "next/link";
import Navigation from "./navigation";
import SocialLinks from "./social-links";

export default function Header() {
  return (
    <header className="flex h-18 items-center justify-between gap-7 border-b-2 md:h-16">
      <NextLink
        className="text-3xl font-black tracking-tighter"
        href="/"
        aria-label="Viktoriia Chernyshuk home"
      >
        VC
      </NextLink>
      <Navigation />
      <div className="hidden md:block">
        <SocialLinks />
      </div>
    </header>
  );
}
