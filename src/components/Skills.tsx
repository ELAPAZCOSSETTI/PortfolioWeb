import { skills } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Stack" title="Herramientas y tecnologías." />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, i) => (
            <Reveal key={category.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-background-elevated p-6 transition-colors hover:border-accent/50">
                <h3 className="mb-4 text-sm font-mono uppercase tracking-wide text-accent">
                  {category.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-sm text-foreground/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
