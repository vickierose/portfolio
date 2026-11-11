import Link from "../ui/link";
import Specialties from "./specialties";

function Hero() {
  return (
    <section
      className="relative grid gap-11 pt-10 pb-8 lg:min-h-140 md:grid-cols-[67%_33%] md:gap-0 md:pt-22 lg:py-16 xl:pt-22"
      aria-labelledby="intro-title"
    >
      <div className="min-w-0">
        <h1
          id="intro-title"
          className="relative z-1 mb-7 -ml-1 text-[clamp(52px,12.8vw,88px)] leading-[.91] font-[750] tracking-[-.075em] md:mb-9 md:text-[clamp(64px,11vw,140px)]"
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
      <Specialties />
    </section>
  );
}

export default Hero;
