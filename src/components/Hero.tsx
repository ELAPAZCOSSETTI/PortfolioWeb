import Image from "next/image";
import { Mail, ArrowDown } from "lucide-react";
import { personal } from "@/data/profile";
import Container from "./Container";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at 15% 20%, rgba(34,211,238,0.12), transparent 60%), radial-gradient(500px circle at 85% 30%, rgba(167,139,250,0.12), transparent 60%)",
        }}
      />

      <Container className="grid items-center gap-12 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-0">
        <div>
          <p className="mb-4 font-mono text-sm text-accent">
            Hola, soy Emiliano 👋
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {personal.role} en formación,
            <br />
            <span className="text-gradient">técnico de raíz.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {personal.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Contactarme
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="text-muted transition-colors hover:text-accent"
            >
              <Mail size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon size={20} />
            </a>
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-accent"
              >
                <GithubIcon size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="relative mx-auto w-56 sm:w-72 md:w-full">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-linear-to-br from-accent/30 to-accent-2/30 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border bg-background-elevated">
            <Image
              src={personal.photo}
              alt={personal.name}
              width={480}
              height={480}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </Container>

      <a
        href="#about"
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent md:block"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
