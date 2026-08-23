import { projects } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectsGallery from "./ProjectsGallery";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Trabajo" title="Proyectos." />
        </Reveal>

        <ProjectsGallery projects={projects} />
      </Container>
    </section>
  );
}
