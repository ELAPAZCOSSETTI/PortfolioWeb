export const personal = {
  name: "Emiliano La Paz",
  role: "Full Stack Developer junior",
  location: "Luján de Cuyo, Mendoza, Argentina",
  email: "sk8emi95lp@gmail.com",
  phone: "+54 261 247-8856",
  linkedin: "https://linkedin.com/in/emilianolp/",
  github: "https://github.com/ELAPAZCOSSETTI" as string | null,
  photo: "/images/FotoEmiliano.jpg",
  cvUrl: "/cv-emiliano-lapaz.pdf",
  tagline:
    "Construyo interfaces web con React y Next.js, con una base sólida en redes, sistemas y resolución de problemas técnicos en producción.",
};

export const bio = [
  "Técnico Electrónico con más de 3 años de experiencia resolviendo problemas de conectividad, redes y sistemas en entornos reales: desde instalaciones de fibra óptica hasta soporte técnico remoto con manejo de TCP/IP, MikroTik y Linux.",
  "Desde 2024 vengo sumando formación intensiva en desarrollo web full stack (JavaScript, React, Next.js, bases de datos y fundamentos de backend), combinando esa base técnica de redes y sistemas con la construcción de productos web modernos.",
  "Actualmente soy Technical Support Operations Lead & AI Implementation Specialist en Wara, empresa de software y hardware de tracking GPS. Coordino un equipo de soporte técnico (Nivel 1 y 2) y lidero la integración de un asistente conversacional con IA: diseño la lógica de interacción, la ingeniería de prompts y las pruebas de QA funcional, trabajando codo a codo con las áreas de Desarrollo y Producto para convertir necesidades operativas en soluciones escalables. Hoy busco dar el salto a roles de desarrollo de software e implementación de IA, combinando código, lógica de negocio y gestión de equipos.",
];

export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    items: ["JavaScript", "React", "Next.js", "TypeScript", "HTML5 & CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend & Datos",
    items: ["Node.js (fundamentos)", "Bases de datos / SQL (fundamentos)"],
  },
  {
    title: "Mobile",
    items: ["React Native (introducción)"],
  },
  {
    title: "Redes & Sistemas",
    items: [
      "TCP/IP y redireccionamiento de puertos",
      "Routers / MikroTik",
      "Linux (básico)",
      "Fibra óptica (FTTH / HFC)",
      "Soporte técnico y sistemas de tickets",
    ],
  },
  {
    title: "Otros conocimientos",
    items: ["POO en Java", "Automatización con Arduino"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Wara",
    role: "Technical Support Operations Lead & AI Implementation Specialist",
    period: "Octubre 2025 - Actualidad",
    current: true,
    bullets: [
      "Coordinación de un equipo de soporte técnico (Nivel 1 y 2), estructurando el área con KPIs, gestión de Backoffice y resolución de incidencias de alta complejidad en software y hardware GPS.",
      "Liderazgo en la integración de un asistente conversacional con IA: diseño de la lógica de interacción, ingeniería de prompts basada en datos históricos y QA funcional de respuestas.",
      "Asesoramiento preventivo a clientes estratégicos para optimizar su operativa diaria y reducir incidencias recurrentes.",
      "Colaboración directa con las áreas de Desarrollo y Producto para traducir requerimientos operativos en soluciones tecnológicas escalables.",
    ],
  },
  {
    company: "Wiber - Soluciones en Conectividad",
    role: "Soporte técnico remoto",
    period: "Septiembre 2024 - Septiembre 2025",
    current: false,
    bullets: [
      "Diagnóstico y resolución de incidencias de conectividad de nivel 1 y 2 en servicios de internet y TV.",
      "Configuración de equipos (routers, MikroTik, Linux básico) y troubleshooting de IPs, protocolos TCP/IP y redireccionamiento de puertos.",
      "Gestión y priorización de tickets: documentación de causas, seguimiento hasta la resolución y escalamiento de casos complejos.",
      "Primer proyecto como programador: actualización del sistema de facturación mensual de clientes con HTML y CSS embebido, mejorando la atención visual y la experiencia del cliente.",
    ],
  },
  {
    company: "Wesnet",
    role: "Técnico de campo",
    period: "Abril 2023 - Mayo 2024",
    current: false,
    bullets: [
      "Instalación de servicios FTTH y wireless, con verificación de señal mediante power meter y mejora de tendidos existentes.",
      "Fusión de fibra óptica y armado de conectores APC y UPC.",
      "Configuraciones internas de routers y trabajo en equipo con otras cuadrillas técnicas.",
      "Uso de elementos de protección personal (EPP) y capacitaciones de seguridad e higiene.",
    ],
  },
  {
    company: "JG Telecomunicaciones",
    role: "Técnico de red",
    period: "2022 - 2023",
    current: false,
    bullets: [
      "Migración de infraestructura de HFC a FTTH, con fusión de fibra óptica y armado de conectores APC y UPC.",
      "Despliegue subterráneo de fibra óptica, con uso de elementos de protección personal y capacitaciones de seguridad e higiene.",
    ],
  },
  {
    company: "Bapiram / Supercanal",
    role: "Técnico instalador",
    period: "2022 - 2023",
    current: false,
    bullets: [
      "Instalaciones FTTH, HFC y EOC, con fusión de fibra óptica y armado de conectores APC y UPC.",
      "Trabajos en altura y con corriente eléctrica, aplicando elementos de protección personal y capacitaciones de seguridad e higiene.",
    ],
  },
];

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    title: "Técnico en Electrónica",
    institution: 'Escuela N°4-020 "Ing. Gabriel del Mazo"',
    period: "2013",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

// Fechas tomadas de los certificados de Platzi (fecha de aprobación real).
export const certifications: Certification[] = [
  { name: "Fundamentos de JavaScript", issuer: "Platzi", date: "Abril 2025" },
  { name: "React.js", issuer: "Platzi", date: "Abril 2025" },
  { name: "Frontend Developer", issuer: "Platzi", date: "Mayo 2025" },
  { name: "Fundamentos de Bases de Datos", issuer: "Platzi", date: "Julio 2025" },
  { name: "Introducción a React Native", issuer: "Platzi", date: "Agosto 2025" },
  { name: "Introducción al Desarrollo Backend", issuer: "Platzi", date: "Septiembre 2025" },
  { name: "POO en Java", issuer: "UTN - Facultad Regional Mendoza", date: "2021" },
  { name: "Automatización Arduino", issuer: "Fundación YPF", date: "2021" },
  { name: "Técnico Instalador de Alarmas", issuer: "Garnet Technology", date: "2021" },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  placeholder?: boolean;
};

// TODO(Emiliano): reemplazar los proyectos "placeholder" por proyectos reales
// (repos propios, trabajos de los cursos de Platzi, etc.) cuando los tengas listos.
export const projects: Project[] = [
  {
    title: "Portfolio Personal",
    description:
      "Este mismo sitio: portfolio full stack construido desde cero con Next.js, TypeScript y Tailwind CSS.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Proyecto en camino",
    description: "[TODO: agregar nombre, descripción y stack de tu próximo proyecto real]",
    stack: ["React"],
    placeholder: true,
  },
  {
    title: "Proyecto en camino",
    description: "[TODO: agregar nombre, descripción y stack de tu próximo proyecto real]",
    stack: ["Next.js"],
    placeholder: true,
  },
];

export const extras = {
  drivingLicense: "Licencia de conducir categoría D3",
};
