import Link from "@/components/ui/link";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
      <Link variant="social" href="https://www.linkedin.com/">LinkedIn</Link>
      <Link variant="social" href="https://github.com/">GitHub</Link>
      <Link variant="social" href="/#contact">CV</Link>
    </div>
  );
}
