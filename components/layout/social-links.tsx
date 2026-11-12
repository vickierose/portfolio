import Link from "@/components/ui/link";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
      <Link
        variant="social"
        href="https://www.linkedin.com/in/viktoriia-chernyshuk-398a21145/"
      >
        LinkedIn
      </Link>
      <Link variant="social" href="https://github.com/vickierose">
        GitHub
      </Link>
      <Link variant="social" href="/#contact">
        CV
      </Link>
    </div>
  );
}
