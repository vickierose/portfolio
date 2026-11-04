import Image from "next/image";
import Link from "@/components/ui/link";
import dreamArchivePreview from "../public/dream-archive-preview.png";

export default function Home() {
  return (
    <>
      <section
        className="relative grid gap-11 pt-10 pb-8 lg:min-h-140 md:grid-cols-[67%_33%] md:gap-0 md:pt-22 lg:py-16 xl:pt-22"
        aria-labelledby="intro-title"
      >
        <div className="min-w-0">
          <h1
            id="intro-title"
            className="relative z-1 mb-7 -ml-1 text-[clamp(52px,12.8vw,88px)] leading-[.91] font-[750] tracking-[-.075em] md:mb-11 md:text-[clamp(64px,11vw,140px)]"
          >
            Viktoriia
            <br />
            Chernyshuk
          </h1>
          <p className="mb-8 text-[clamp(23px,5.3vw,34px)] leading-[1.12] font-medium tracking-[-.045em] md:text-[clamp(25px,3.9vw,49px)]">
            I turn complex product ideas into
            <br /> clear, expressive interfaces.
          </p>
          <Link variant="cta" href="/about">
            Learn more
          </Link>
        </div>
        <div className="relative flex min-h-102 items-center justify-center self-stretch md:-ml-4 md:min-h-0 md:justify-start md:items-start lg:items-center">
          <svg
            className="pointer-events-none absolute top-[-8%] left-0 h-[115%] w-full overflow-visible stroke-foreground md:top-[-20%] md:left-[-28%] md:w-[140%] lg:top-[-11%] lg:left-[-27%] lg:w-[130%]"
            viewBox="0 0 400 480"
            fill="none"
            aria-hidden="true"
          >
            <path d="M5 150C45 30 255-35 350 35c28 20 40 48 43 75M398 310c-5 120-270 235-365 68" />
            <circle className="fill-accent" cx="105" cy="47" r="8" />
            <path
              className="fill-foreground"
              d="m326 416 3 15 12 4-12 3-3 17-3-17-12-3 12-4Z"
            />
          </svg>
          <div className="relative w-fit md:w-full md:pl-1">
            <h2 className="mb-4 font-mono text-lg font-semibold uppercase">
              Specialties
            </h2>
            <ul className="space-y-2.5 text-2xl font-semibold tracking-[-.045em] md:text-[clamp(17px,2.25vw,32px)]">
              <li>
                <span className="inline-block bg-accent px-2.5 py-1 whitespace-nowrap">
                  Frontend engineering
                </span>
              </li>
              <li>
                <span className="inline-block bg-accent px-2.5 py-1 whitespace-nowrap">
                  Creative development
                </span>
              </li>
              <li>
                <span className="inline-block bg-accent px-2.5 py-1 whitespace-nowrap">
                  Design engineering
                </span>
              </li>
            </ul>
            <p className="relative mt-6 max-w-[285px] border-t border-muted pt-5 pl-7 font-mono text-sm leading-[1.4] font-semibold uppercase md:mt-[35px] md:pt-[27px]">
              <span className="absolute top-[23px] left-0 size-3.5 rounded-full border border-muted bg-accent md:top-[29px]" />
              Open to frontend &amp;
              <br /> design engineering roles
            </p>
          </div>
        </div>
      </section>
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
