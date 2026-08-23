import { personal } from "@/data/profile";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p className="text-xs text-muted">
          Hecho con Next.js, TypeScript y Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
