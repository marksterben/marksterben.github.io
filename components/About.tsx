import { profile } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-border bg-surface px-6 py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          About Me
        </h2>
        <div className="mx-auto mt-3 h-px w-16 bg-linear-to-r from-accent to-accent-2" />
        <p className="mt-8 text-lg text-muted">{profile.bio}</p>
      </div>
    </section>
  );
}
