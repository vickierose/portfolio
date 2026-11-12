import Image from "next/image";
import illustration from "@/public/illustration.png";

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-title"
      className="relative isolate py-12 md:pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <Image
          src={illustration}
          alt=""
          preload
          sizes="640px"
          className="hero-illustration absolute -right-64 top-0 h-120 w-160 max-w-none object-cover opacity-35 md:-right-52 md:h-125 md:opacity-100"
        />
      </div>
      <p className="mb-8 font-mono text-xs uppercase md:text-sm">
        About / A little context
      </p>
      <h1
        id="about-title"
        className="mb-8 text-[clamp(44px,8.8vw,96px)] leading-[.94] font-extrabold tracking-[-.06em]"
      >
        Frontend engineer.
        <br />
        Creative mind.
      </h1>
      <div className="max-w-130 space-y-6 text-xl leading-snug tracking-tight md:space-y-7 md:text-2xl">
        <p className="font-medium">
          I&apos;m Viktoriia, a frontend engineer with
          <br className="hidden lg:block" /> 8 years of experience, based in
          Kraków.
        </p>
        <p>
          I enjoy complex interfaces, visual details,
          <br className="hidden lg:block" /> and the space where design and code
          meet.
        </p>
      </div>
      <ul className="mt-12 flex flex-col gap-4 font-mono text-xs uppercase md:flex-row md:items-center md:justify-between md:gap-8 md:text-sm">
        <li className="md:flex-1">8 years in frontend</li>
        <li className="md:flex-1 md:border-x md:px-6 md:text-center">
          Kraków, Poland
        </li>
        <li className="md:flex-1 md:text-right">Open to remote roles</li>
      </ul>
    </section>
  );
}
