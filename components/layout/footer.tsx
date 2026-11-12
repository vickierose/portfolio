import NextLink from "next/link";
import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center gap-5 border-t-2 py-8 md:gap-8 md:py-12">
      <NextLink
        className="text-3xl font-black tracking-tighter"
        href="/"
        aria-label="Viktoriia Chernyshuk home"
      >
        VC
      </NextLink>
      <div className="ml-auto">
        <SocialLinks />
      </div>
      <span className="font-mono text-xs font-semibold md:text-sm">2026</span>
    </footer>
  );
}
