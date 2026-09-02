import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Experience
      </h2>
      <div className="mt-3 h-px w-16 bg-linear-to-r from-accent to-accent-2" />

      <ol className="mt-10 space-y-10 border-l border-border pl-6">
        {experience.map((entry) => (
          <li key={`${entry.organization}-${entry.period}`} className="relative">
            <span className="absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="font-mono text-xs text-muted">{entry.period}</p>
            <h3 className="mt-1 font-semibold">
              {entry.role}
              {entry.freelance && (
                <span className="ml-2 rounded border border-border px-1.5 py-0.5 align-middle font-mono text-[10px] font-normal text-muted">
                  Freelance
                </span>
              )}
            </h3>
            <p className="text-sm text-accent">{entry.organization}</p>
            <p className="mt-2 text-sm text-muted">{entry.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs text-accent">
              {entry.techStack.map((tech) => (
                <span key={tech} className="rounded border border-border px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
