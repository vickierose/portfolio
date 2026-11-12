import type { ReactNode } from "react";

type AboutSectionProps = {
  id: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
};

export default function AboutSection({
  id,
  label,
  title,
  intro,
  children,
}: AboutSectionProps) {
  return (
    <section
      aria-labelledby={`${id}-title`}
      className="grid gap-8 border-t-2 py-12 md:grid-cols-[minmax(0,336fr)_minmax(0,528fr)] md:gap-8"
    >
      <div>
        <p className="mb-6 font-mono text-xs uppercase md:text-sm">{label}</p>
        <h2
          id={`${id}-title`}
          className="max-w-72 text-3xl leading-[1.17] font-extrabold tracking-tight md:text-4xl"
        >
          {title}
        </h2>
        {intro && (
          <div className="mt-6 max-w-76 text-base leading-snug">{intro}</div>
        )}
      </div>
      <div className="min-w-0 text-base leading-snug md:mt-11.5">
        {children}
      </div>
    </section>
  );
}
