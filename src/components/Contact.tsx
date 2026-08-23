import { Mail, Phone, MapPin } from "lucide-react";
import { personal } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { LinkedinIcon } from "./icons";

const CHANNELS = [
  {
    icon: Mail,
    label: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: personal.phone,
    href: `tel:${personal.phone.replace(/\s|-/g, "")}`,
  },
  {
    icon: LinkedinIcon,
    label: "linkedin.com/in/emilianolp",
    href: personal.linkedin,
  },
  {
    icon: MapPin,
    label: personal.location,
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Contacto" title="Hablemos." />
        </Reveal>

        <Reveal delay={80}>
          <p className="mb-10 max-w-xl leading-relaxed text-muted">
            Estoy buscando mi primera oportunidad como desarrollador full stack.
            Si tenés una posición abierta o simplemente querés charlar sobre una
            idea, escribime.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {CHANNELS.map((channel, i) => {
            const Icon = channel.icon;
            const content = (
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background-elevated p-4 transition-colors hover:border-accent/50">
                <Icon size={18} className="shrink-0 text-accent" />
                <span className="text-sm text-foreground/90">{channel.label}</span>
              </div>
            );

            return (
              <Reveal key={channel.label} delay={i * 60}>
                {channel.href ? (
                  <a href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
