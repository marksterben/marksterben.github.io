"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HiOutlineExternalLink, HiOutlineX } from "react-icons/hi";
import { projects, type Project } from "@/lib/data";

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected) dialog.showModal();
    else dialog.close();
  }, [selected]);

  return (
    <section id="portfolio" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Portfolio
      </h2>
      <div className="mt-3 h-px w-16 bg-linear-to-r from-accent to-accent-2" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => setSelected(project)}
            className="group overflow-hidden rounded-lg border border-border bg-surface text-left transition-colors hover:border-accent"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-opacity group-hover:opacity-80"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-muted">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs text-accent">
                {project.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        className="w-full max-w-lg rounded-lg border border-border bg-surface p-0 text-fg backdrop:bg-black/70"
      >
        {selected && (
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold">{selected.title}</h3>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="text-muted transition-colors hover:text-fg"
              >
                <HiOutlineX size={20} />
              </button>
            </div>

            <div className="relative mt-4 h-48 w-full overflow-hidden rounded-md">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-4 text-sm text-muted">{selected.description}</p>

            <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-accent">
              {selected.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-border px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={selected.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-linear-to-r from-accent to-accent-2 px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              Open Website
              <HiOutlineExternalLink size={16} />
            </a>
          </div>
        )}
      </dialog>
    </section>
  );
}
