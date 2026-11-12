import Image from "next/image";
import Link from "@/components/ui/link";
import dreamArchivePreview from "@/public/dream-archive-preview.png";

export default function SelectedWork() {
  return (
    <section
      className="border-t py-10 md:py-12"
      aria-labelledby="selected-work-title"
    >
      <h2 id="selected-work-title" className="mb-8 font-mono text-sm uppercase">
        Selected work (01)
      </h2>
      <article
        className="rounded-2xl bg-accent-soft p-5 md:p-8"
        aria-labelledby="dream-archive-title"
      >
        <div className="mb-8 aspect-video overflow-hidden rounded-lg">
          <Image
            className="h-full w-full object-cover object-top"
            src={dreamArchivePreview}
            alt="Dream Archive journal with dream entries, moods, and symbols"
            sizes="(min-width: 1152px) 960px, (min-width: 1024px) calc(100vw - 192px), (min-width: 768px) calc(100vw - 128px), (min-width: 640px) calc(100vw - 104px), calc(100vw - 72px)"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3
              id="dream-archive-title"
              className="mb-4 text-3xl leading-tight font-extrabold tracking-tight md:text-4xl"
            >
              Dream Archive
            </h3>
            <p className="mb-4 text-base leading-normal">
              A personal dream journal to capture, explore and reflect on
              dreams.
            </p>
            <p className="font-mono text-xs uppercase">
              Role: frontend, UI, interaction
            </p>
          </div>
          <Link
            variant="cta"
            href="/work"
            className="w-fit md:self-start md:mt-3"
          >
            View case
          </Link>
        </div>
      </article>
    </section>
  );
}
