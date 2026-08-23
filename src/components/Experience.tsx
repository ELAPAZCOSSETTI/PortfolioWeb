import { experience } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Trayectoria" title="Experiencia profesional." />
        </Reveal>

        <ol className="relative space-y-10 border-l border-border pl-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <li className="relative">
                <span
                  className={`absolute -left-[2.31rem] top-1.5 h-3 w-3 rounded-full border-2 ${
                    job.current
                      ? "border-accent bg-accent"
                      : "border-border bg-background"
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-medium text-foreground">{job.role}</h3>
                  <span className="font-mono text-xs text-muted">{job.period}</span>
                </div>
                <p className="mb-3 text-sm font-medium text-accent">{job.company}</p>
                <ul className="space-y-1.5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm leading-relaxed text-muted">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
