import Image from "next/image";
import Link from "@/components/ui/link";
import illustration from "@/public/illustration.png";

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden py-10 md:py-12"
      aria-labelledby="intro-title"
    >
      <Image
        className="pointer-events-none absolute right-[-40%] -z-10 h-auto w-full select-none top-full -translate-y-full rotate-45 sm:right-[-25%] sm:w-4/5 md:translate-0 md:rotate-0 md:top-0 md:-right-3 md:w-3/5"
        src={illustration}
        alt=""
        preload
        sizes="(min-width: 1152px) 615px, (min-width: 768px) 60vw, 100vw"
      />
      <div className="grid gap-8 md:grid-cols-12 md:gap-6">
        <div className="min-w-0 md:col-span-7">
          <p className="mb-6 font-mono text-xs uppercase md:mb-8 md:text-sm">
            Frontend engineer / creative mind
          </p>
          <h1
            id="intro-title"
            className="mb-6 text-[clamp(48px,13vw,88px)] leading-[.94] font-extrabold tracking-[-.065em] md:text-[clamp(64px,9vw,100px)] md:mb-8"
          >
            Viktoriia
            <br />
            Chernyshuk
          </h1>
          <p className="mb-6 text-xl leading-snug font-medium tracking-tight md:whitespace-nowrap md:text-2xl">
            An eye for detail. <br className="sm:hidden" />A head for
            complexity.
          </p>
          <Link variant="cta" href="/about">
            Learn more
          </Link>
        </div>
        <div className="max-w-md self-end md:justify-self-end md:col-span-5">
          <p className="flex items-center gap-2 font-mono text-xs uppercase">
            <span
              className="size-3 shrink-0 rounded-full border border-muted bg-accent"
              aria-hidden="true"
            />
            Available for new projects
          </p>
        </div>
      </div>
    </section>
  );
}
