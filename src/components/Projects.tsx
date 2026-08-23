import { ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { GithubIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Trabajo" title="Proyectos." />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title + i} delay={i * 80}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-6 ${
                  project.placeholder
                    ? "border-dashed border-border/70 bg-transparent"
                    : "border-border bg-background-elevated hover:border-accent/50"
                } transition-colors`}
              >
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
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
