import { Award, ExternalLink } from "lucide-react";
import { certifications, personal } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Formación continua" title="Cursos y certificaciones." />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={(i % 4) * 60}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-background-elevated p-4">
                <Award size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">{cert.name}</p>
                  <p className="text-xs text-muted">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <a
            href={personal.platziProfile}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent"
          >
            Ver perfil y certificados en Platzi
            <ExternalLink size={14} />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
