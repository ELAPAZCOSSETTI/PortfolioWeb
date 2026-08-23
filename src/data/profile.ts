export const personal = {
  name: "Emiliano La Paz",
  role: "Full Stack Developer",
  location: "Luján de Cuyo, Mendoza, Argentina",
  email: "sk8emi95lp@gmail.com",
  phone: "+54 261 247-8856",
  linkedin: "https://linkedin.com/in/emilianolp/",
  // TODO(Emiliano): agregar usuario/URL de GitHub cuando lo tengas.
  github: null as string | null,
  photo: "/images/profile.png",
  cvUrl: "/cv-emiliano-lapaz.pdf",
  tagline:
    "Construyo interfaces web con React y Next.js, con una base sólida en redes, sistemas y resolución de problemas técnicos en producción.",
};

// TODO(Emiliano): completar con tu ocupación/rol actual (post-Wiber, desde octubre 2025)
// y cualquier detalle que no esté en el CV. Estos dos párrafos son un punto de partida.
export const bio = [
  "Técnico Electrónico con más de 3 años de experiencia resolviendo problemas de conectividad, redes y sistemas en entornos reales: desde instalaciones de fibra óptica hasta soporte técnico remoto con manejo de TCP/IP, MikroTik y Linux.",
  "Desde 2024 vengo sumando formación intensiva en desarrollo web full stack (JavaScript, React, Next.js, bases de datos y fundamentos de backend), combinando esa base técnica de redes y sistemas con la construcción de productos web modernos.",
  "[TODO: agregar a qué te dedicás actualmente y qué estás buscando]",
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
    company: "Wiber - Soluciones en Conectividad",
    role: "Soporte técnico remoto",
    period: "Septiembre 2024 - Septiembre 2025",
    current: false,
    bullets: [
      "Atención y resolución de incidencias en servicios de internet y TV.",
      "Configuración de equipos (routers, MikroTik, Linux básico).",
      "Manejo de IPs, protocolos TCP/IP y redireccionamiento de puertos.",
      "Registro y seguimiento de casos con sistema de tickets.",
    ],
  },
  {
    company: "Wesnet",
    role: "Técnico de campo",
    period: "Abril 2023 - Mayo 2024",
    current: false,
    bullets: [
      "Instalación de servicios FTTH y wireless.",
      "Configuración y armado de fichas RJ45.",
    ],
  },
  {
    company: "JG Telecomunicaciones",
    role: "Técnico de red",
    period: "2022 - 2023",
    current: false,
    bullets: [
      "Migración de infraestructura de HFC a FTTH.",
      "Despliegue subterráneo de fibra óptica.",
    ],
  },
  {
    company: "Bapiram / Supercanal",
    role: "Técnico instalador",
    period: "2022 - 2023",
    current: false,
    bullets: [
      "Instalaciones FTTH, HFC y EOC.",
      "Trabajos en altura y con corriente eléctrica.",
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
