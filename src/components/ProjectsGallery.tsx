"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink, Images, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/profile";
import Reveal from "./Reveal";
import { GithubIcon } from "./icons";

type LightboxState = {
  images: string[];
  index: number;
};

export default function ProjectsGallery({ projects }: { projects: Project[] }) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        setLightbox((s) => s && { ...s, index: (s.index + 1) % s.images.length });
      }
      if (e.key === "ArrowLeft") {
        setLightbox((s) => s && { ...s, index: (s.index - 1 + s.images.length) % s.images.length });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title + i} delay={i * 80}>
            <div
              className={`flex h-full flex-col overflow-hidden rounded-2xl border ${
                project.placeholder
                  ? "border-dashed border-border/70 bg-transparent"
                  : "border-border bg-background-elevated hover:border-accent/50"
              } transition-colors`}
            >
              {project.images && project.images.length > 0 && (
                <button
                  type="button"
                  onClick={() => setLightbox({ images: project.images!, index: 0 })}
                  className="group relative block aspect-video w-full overflow-hidden border-b border-border"
                >
                  <Image
                    src={project.images[0]}
                    alt={`Captura de ${project.title}`}
                    fill
                    className="object-cover object-top transition-transform group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-xs text-foreground backdrop-blur-sm">
                    <Images size={12} />
                    {project.images.length > 1 ? `${project.images.length} capturas` : "Ver captura"}
                  </span>
                </button>
              )}

              <div className="flex flex-1 flex-col p-6">
                {project.placeholder && (
                  <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                    <Sparkles size={12} />
                    Próximamente
                  </span>
                )}
                <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {(project.repoUrl || project.liveUrl) && (
                  <div className="mt-5 flex gap-4">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent"
                      >
                        <GithubIcon size={15} />
                        Código
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent"
                      >
                        <ExternalLink size={15} />
                        Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 text-white/80 transition-colors hover:text-white"
          >
            <X size={28} />
          </button>

          {lightbox.images.length > 1 && (
            <button
              type="button"
              aria-label="Anterior"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((s) => s && { ...s, index: (s.index - 1 + s.images.length) % s.images.length });
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element -- variable aspect ratio, shown at native size in a modal */}
          <img
            src={lightbox.images[lightbox.index]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
          />

          {lightbox.images.length > 1 && (
            <button
              type="button"
              aria-label="Siguiente"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((s) => s && { ...s, index: (s.index + 1) % s.images.length });
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {lightbox.images.length > 1 && (
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs text-white/70">
              {lightbox.index + 1} / {lightbox.images.length}
            </span>
          )}
        </div>
      )}
    </>
  );
}
