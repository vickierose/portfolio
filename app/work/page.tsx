import Image from "next/image";
import dreamArchivePreview from "@/public/dream-archive-preview.png";

export default function Work() {
  return (
    <section className="py-12" aria-labelledby="work-title">
      <h1 className="mb-8 text-5xl font-semibold tracking-tight" id="work-title">Selected work</h1>
      <h2 className="mb-4 text-3xl font-semibold">Dream Archive</h2>
      <p className="mb-6 max-w-2xl leading-relaxed">A dream journal that brings entries, recurring symbols, and their connections together in one calm interface.</p>
      <p className="mb-8 font-mono text-sm">Role: Design &amp; development</p>
      <div className="rounded-2xl bg-lavender p-3 md:p-5">
        <Image className="h-auto w-full rounded-xl" src={dreamArchivePreview} alt="Dream Archive dream journal showing dream entries, moods, and symbols" sizes="(min-width: 1280px) 1160px, (min-width: 1024px) calc(100vw - 120px), (min-width: 768px) calc(100vw - 104px), (min-width: 640px) calc(100vw - 72px), calc(100vw - 56px)" />
      </div>
    </section>
  );
}
