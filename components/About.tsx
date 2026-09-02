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

        <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
          <div className="rounded-lg border border-border p-5">
            <h3 className="font-mono text-sm text-accent">Education</h3>
            <p className="mt-2 text-sm font-semibold">
              {profile.education.degree}
            </p>
            <p className="text-sm text-muted">{profile.education.school}</p>
            <p className="mt-1 text-xs text-muted">
              {profile.education.period} · GPA {profile.education.gpa}
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h3 className="font-mono text-sm text-accent">Languages</h3>
            <ul className="mt-2 space-y-1">
              {profile.languages.map((lang) => (
                <li key={lang.name} className="text-sm text-muted">
                  <span className="font-semibold text-fg">{lang.name}</span>{" "}
                  — {lang.level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
