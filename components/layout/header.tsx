import NextLink from "next/link";
import Link from "@/components/ui/link";
import SocialLinks from "./social-links";

export default function Header() {
  return (
    <header className="flex h-18 items-center justify-between gap-7 border-b md:h-20">
      <NextLink className="text-3xl font-black tracking-tighter" href="/" aria-label="Viktoriia Chernyshuk home">VC</NextLink>
      <nav className="flex gap-5 md:gap-6 lg:gap-8" aria-label="Main navigation">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <div className="hidden md:block"><SocialLinks /></div>
    </header>
  );
}
