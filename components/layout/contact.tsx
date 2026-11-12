import Link from "@/components/ui/link";

export default function Contact() {
  return (
    <section
      className="flex flex-col items-start justify-between gap-8 border-t-2 py-10 md:flex-row md:items-center md:py-12"
      id="contact"
      aria-labelledby="contact-title"
    >
      <h2
        id="contact-title"
        className="text-3xl leading-tight font-extrabold tracking-tight md:text-4xl"
      >
        Let&apos;s build something{" "}
        <span className="relative inline-block after:absolute after:-bottom-3 after:left-0 after:h-1 after:w-full after:-rotate-3 after:rounded-full after:bg-accent">
          good.
        </span>
      </h2>
      <Link variant="cta" href="mailto:hello@example.com">
        Get in touch
      </Link>
    </section>
  );
}
