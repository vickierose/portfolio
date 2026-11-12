"use client";

import { usePathname } from "next/navigation";
import Link from "@/components/ui/link";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-5 md:gap-6 lg:gap-8" aria-label="Main navigation">
      {[{ href: "/work", label: "Work" }, { href: "/about", label: "About" }, { href: "/#contact", label: "Contact" }].map(({ href, label }) => (
        <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={pathname === href ? "relative after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:bg-accent" : ""}>{label}</Link>
      ))}
    </nav>
  );
}
