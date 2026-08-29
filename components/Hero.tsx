import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 pt-24 text-center"
    >
      <Image
        src={profile.avatar}
        alt={profile.name}
        width={128}
        height={128}
        priority
        className="h-32 w-32 rounded-full border border-border object-cover"
      />

      <p className="font-mono text-sm text-accent">
        {"// "}
        {profile.role}
      </p>

      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        {profile.name}
      </h1>

      <p className="max-w-xl text-muted">{profile.bio}</p>

      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <a
          href="#portfolio"
          className="rounded-md bg-linear-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
