import { MapPin, GraduationCap } from "lucide-react";
import { bio, personal, education } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Sobre mí" title="De redes y fibra óptica a código." />
        </Reveal>

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {bio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="leading-relaxed text-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="space-y-6 rounded-2xl border border-border bg-background-elevated p-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">Ubicación</p>
                  <p className="text-sm text-muted">{personal.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">Formación de base</p>
                  {education.map((item) => (
                    <p key={item.title} className="text-sm text-muted">
                      {item.title} · {item.institution} ({item.period})
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
