export const personal = {
  name: "Emiliano La Paz",
  role: "Full Stack Developer junior",
  location: "Luján de Cuyo, Mendoza, Argentina",
  email: "sk8emi95lp@gmail.com",
  phone: "+54 261 247-8856",
  // Los celulares argentinos necesitan el "9" después del 54 para los links de wa.me.
  whatsapp: "5492612478856",
  linkedin: "https://linkedin.com/in/emilianolp/",
  github: "https://github.com/ELAPAZCOSSETTI" as string | null,
  platziProfile: "https://platzi.com/@sk8mi95lp/",
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
    items: ["Node.js", "Bases de datos / SQL", "PostgreSQL", "Docker"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Android Studio"],
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
    items: ["Git y control de versiones", "Postman", "Vercel"],
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
    period: "2025 - Actualidad",
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
    period: "2024 - 2025",
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
    period: "2023 - 2024",
    current: false,
    bullets: [
      "Instalación de servicios FTTH y wireless, con verificación de señal mediante power meter y mejora de tendidos existentes.",
      "Fusión de fibra óptica y armado de conectores APC y UPC.",
      "Configuraciones internas de routers y trabajo en equipo con otras cuadrillas técnicas.",
      "Uso de elementos de protección personal (EPP).",
    ],
  },
  {
    company: "JG Telecomunicaciones",
    role: "Técnico de red",
    period: "2022 - 2023",
    current: false,
    bullets: [
      "Migración de infraestructura de HFC a FTTH, con fusión de fibra óptica y armado de conectores APC y UPC.",
      "Despliegue subterráneo de fibra óptica, uso de elementos de protección personal.",
    ],
  },
  {
    company: "Bapiram / Supercanal",
    role: "Técnico instalador",
    period: "2021 - 2022",
    current: false,
    bullets: [
      "Instalaciones FTTH, HFC y EOC.",
      "Trabajos en altura y con corriente eléctrica con uso correspondiente de elementos de protección personal.",
    ],
  },
  {
    company: "Westronic",
    role: "Operador de Monitoreo",
    period: "2014 - 2021",
    current: false,
    bullets: [
      "Operador de sala de monitoreo: atención al cliente y resolución remota de afectaciones en sistemas de alarmas.",
      "Escalamiento de tickets técnicos según la complejidad del caso.",
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
  images?: string[];
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    title: "BodegaPass",
    description:
      "Plataforma full stack de turismo enológico en Mendoza: buscador de bodegas, restaurantes y experiencias con filtros por zona y tags, ficha de cada lugar con reserva, y un generador de itinerarios personalizados con IA según días de estadía, zona y presupuesto.",
    stack: ["Next.js", "PostgreSQL", "Knex", "IA (OpenAI)", "Tailwind CSS"],
    repoUrl: "https://github.com/ELAPAZCOSSETTI/MendozaWine",
    images: [
      "/projects/bodegapass-home.jpg",
      "/projects/bodegapass-buscar.jpg",
      "/projects/bodegapass-listing.jpg",
      "/projects/bodegapass-itinerario.jpg",
    ],
  },
  {
    title: "Fetiburgers",
    description:
      "E-commerce de hamburguesas con catálogo de productos, personalización de pedidos (extras y agregados) y carrito de compras persistente, construido con Next.js. Deployado y en uso real por el cliente.",
    stack: ["Next.js", "React", "Zustand", "Tailwind CSS"],
    repoUrl: "https://github.com/ELAPAZCOSSETTI/fetiburgers-ecommerce",
    liveUrl: "https://fetiburgers.vercel.app/",
    images: [
      "/projects/fetiburgers-home.jpg",
      "/projects/fetiburgers-personalizacion.jpg",
      "/projects/fetiburgers-mobile.jpg",
    ],
  },
  {
    title: "Sistema de Facturación (HTML/CSS embebido)",
    description:
      "Rediseño de las plantillas de facturación mensual de un ISP: HTML con CSS embebido y estilos de impresión (@media print) para que el cliente descargue o imprima su factura como PDF directo desde el navegador. Captura con datos y marca ficticios por confidencialidad del empleador.",
    stack: ["HTML5", "CSS3", "Print to PDF"],
    images: ["/projects/factura-demo.jpg"],
  },
];

export const extras = {
  drivingLicense: "Licencia de conducir categoría D3",
};
