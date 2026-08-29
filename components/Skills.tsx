import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Skills & Tech Stack
      </h2>
      <div className="mt-3 h-px w-16 bg-linear-to-r from-accent to-accent-2" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h3 className="font-mono text-sm text-accent">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-border px-2.5 py-1 text-sm text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
