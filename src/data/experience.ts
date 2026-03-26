export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string;
    technologies: string[];
    achievements: string[];
    isProject?: boolean;
    link?: string;
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        company: "Pastas Yamaguchi",
        role: "Desarrollador Full Stack",
        period: "Junio 2024 - Noviembre 2025",
        description: "Plataforma de comercio electrónico con funcionalidad completa para la compra de alimentos, incluyendo gestión de usuarios y opciones de retiro/envío.",
        technologies: ["TypeScript", "React", "Next.js", "Nest.js", "Tailwind", "PostgreSQL", "Docker", "Swagger"],
        achievements: [
            "Diseño e implementación de una API RESTful robusta utilizando Nest.js y TypeScript, con gestión de datos persistente en PostgreSQL.",
            "Desarrollo de un sistema de Autenticación y Autorización (JWT) completo para el registro e inicio de sesión seguro de usuarios.",
            "Desarrollo de la interfaz de usuario con React y TypeScript, implementando funcionalidades de filtrado y búsqueda dinámica de productos.",
            "Contenerización de la aplicación utilizando Docker y Docker Compose para asegurar la consistencia entre los entornos de desarrollo y producción.",
        ],
        isProject: true,
        link: "https://pastas-yamaguchi.vercel.app",
    },
    {
        company: "Zurich",
        role: "Técnico de Soporte / Help Desk IT",
        period: "Enero 2020 - Marzo 2024",
        description: "Gestión de infraestructura y seguridad para sistemas críticos empresariales en un entorno corporativo de alta complejidad.",
        technologies: ["Active Directory", "SAP", "AS400", "TCP/IP", "SIAP", "Lotus Notes"],
        achievements: [
            "Administración de Accesos y Seguridad (IAM) mediante Active Directory en entornos críticos como SAP y AS400, asegurando protocolos de seguridad y auditoría.",
            "Gestión de Infraestructura de Red: Diagnóstico avanzado y resolución de incidencias en redes TCP/IP, optimizando la conectividad y disponibilidad.",
            "Troubleshooting de nivel 2 para software empresarial y hardware, aplicando metodologías de diagnóstico rápido para minimizar el impacto operativo.",
            "Configuración y mantenimiento de software de misión crítica (SIAP, Lotus Notes), garantizando la integridad de los datos e integración de sistemas.",
        ],
    }
];
