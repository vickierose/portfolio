import Image from "next/image";
import Link from "@/components/ui/link";
import dreamArchivePreview from "../public/dream-archive-preview.png";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section
        className="border-t pt-8 pb-10 md:pt-12"
        aria-labelledby="work-title"
      >
        <p className="mb-6 font-mono text-base font-semibold uppercase md:text-xl">
          Selected work
        </p>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-5 md:flex-nowrap md:gap-6">
          <h2 className="w-full text-4xl sm:text-6xl leading-none tracking-tighter md:w-auto md:text-5xl lg:text-6xl xl:text-7xl">
            Dream Archive
          </h2>
          <div className="border-l py-1 pl-3 md:border-r md:px-5 lg:px-6">
            <span className="font-mono text-sm font-semibold uppercase">
              Role
            </span>
            <p className="my-1 text-base whitespace-nowrap lg:text-lg">
              Design &amp; development
            </p>
          </div>
          <Link variant="cta" compact className="ml-auto md:ml-0" href="/work">
            View case
          </Link>
        </div>
        <div className="rounded-2xl bg-lavender px-3 pt-4 pb-3 md:rounded-3xl md:px-5 md:pt-8 md:pb-5">
          <Image
            className="h-auto w-full rounded-xl md:rounded-3xl"
            src={dreamArchivePreview}
            alt="Dream Archive dream journal showing dream entries, moods, and symbols"
            sizes="(min-width: 1280px) 1160px, (min-width: 1024px) calc(100vw - 120px), (min-width: 768px) calc(100vw - 104px), (min-width: 640px) calc(100vw - 72px), calc(100vw - 56px)"
          />
        </div>
        <details className="mt-5 text-sm" id="dream-archive">
          <summary className="w-fit cursor-pointer font-mono">
            Explore Dream Archive <span aria-hidden="true">{"\u2197"}</span>
          </summary>
          <div className="max-w-2xl space-y-4 py-4 leading-relaxed">
            <h3 className="text-2xl">A place for the things we dream.</h3>
            <p>
              A dream journal concept that brings entries, recurring symbols,
              and their connections together in one calm interface. Designed
              around easy capture and visual exploration.
            </p>
            <p>
              Role: interface design, interaction design, and frontend
              development.
            </p>
          </div>
        </details>
      </section>
      <section className="border-t py-8 md:pt-12" id="contact">
        <h2 className="mb-8 text-4xl sm:text-5xl leading-none tracking-tighter md:text-6xl lg:text-7xl xl:text-8xl">
          Let&apos;s build something
          <br />
          thoughtful.
        </h2>
        <Link variant="cta" href="mailto:hello@example.com">
          Get in touch
        </Link>
      </section>
    </>
  );
}
