import type { Metadata } from "next";
import AboutHero from "@/components/about/hero";
import AboutSection from "@/components/about/section";
import Link from "@/components/ui/link";

export const metadata: Metadata = {
  title: "About — Viktoriia Chernyshuk",
  description:
    "Frontend engineer with 8 years of experience, based in Kraków. A little context on my work, toolkit, and the path from social work to frontend development.",
};

const experience = [
  {
    title: "Product interfaces",
    description:
      "Data-heavy dashboards, complex tables, rich-text editors, and reusable UI.",
  },
  {
    title: "Design & implementation",
    description:
      "Turning rough mockups into considered interfaces, refining flows and visual details.",
  },
  {
    title: "Mentoring & exploration",
    description:
      "Teaching interns, supporting junior developers, and investigating unfamiliar technical problems.",
  },
];

const toolkit = [
  {
    title: "Frontend",
    lines: ["React · TypeScript · Next.js", "HTML · CSS · Tailwind CSS"],
  },
  {
    title: "State & data",
    lines: ["Redux Toolkit · TanStack Query", "Jotai · React Hook Form"],
  },
  { title: "UI & design", lines: ["Figma · Storybook · Ant Design"] },
  {
    title: "Testing & tooling",
    lines: ["Jest · Testing Library · Git", "Vite · Webpack"],
  },
];

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutSection
        id="experience"
        label="01 / Experience"
        title={
          <>
            What I’ve
            <br />
            worked on.
          </>
        }
        intro={
          <>
            <p>
              Most of my work has been in complex product interfaces — tables,
              dashboards, editors, and the states in between.
            </p>
            <Link variant="cta" href="/#contact" className="mt-6">
              CV
            </Link>
          </>
        }
      >
        <div className="divide-y divide-foreground/25">
          {experience.map(({ title, description }) => (
            <article key={title} className="py-6 first:pt-0 last:pb-0">
              <h3 className="mb-2 text-xl font-bold tracking-tight">{title}</h3>
              <p className="max-w-90">{description}</p>
            </article>
          ))}
        </div>
      </AboutSection>
      <AboutSection
        id="toolkit"
        label="02 / Toolkit"
        title={
          <>
            Tools I build
            <br />
            with.
          </>
        }
      >
        <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-12 md:pb-6">
          {toolkit.map(({ title, lines }, index) => (
            <div
              key={title}
              className={
                index < 2
                  ? "border-b border-foreground/25 pb-3"
                  : index === 2
                    ? "border-b border-foreground/25 pb-3 sm:border-b-0 sm:pb-0"
                    : ""
              }
            >
              <dt className="mb-3 font-mono text-sm uppercase">{title}</dt>
              <dd>
                {lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </AboutSection>
      <AboutSection
        id="path"
        label="03 / The winding path"
        title={
          <>
            Two chairs.
            <br />
            Quite comfortable.
          </>
        }
      >
        <div className="space-y-6">
          <p>
            I studied social work before taking an unexpected turn into frontend
            development. JavaScript and I didn’t click immediately. Building
            layouts did.
          </p>
          <p>
            Later, a design mentorship gave me more room to explore the visual
            side. These days, I’m happiest figuring out how an interface works
            and refining how it looks and feels.
          </p>
        </div>
      </AboutSection>
      <AboutSection
        id="beyond"
        label="04 / Beyond the screen"
        title={
          <>
            A little inward
            <br />
            curiosity.
          </>
        }
      >
        <p>
          Outside work, I make room for yoga, self-reflection, and exploring
          dreams. That curiosity became Dream Archive — a personal interest
          turned into a product.
        </p>
        <Link variant="cta" href="/work" className="mt-6 whitespace-normal">
          Explore Dream Archive
        </Link>
      </AboutSection>
    </>
  );
}
