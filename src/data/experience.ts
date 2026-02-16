export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string;
    technologies: string[];
    achievements: string[];
    isProject?: boolean;
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        company: "Pastas Yamaguchi",
        role: "Desarrollador Full Stack",
        period: "Junio 2024 - Noviembre 2025",
        description: "Plataforma de comercio electrónico con funcionalidad completa para la compra de alimentos, incluyendo gestión de usuarios y opciones de retiro/envío.",
        technologies: ["TypeScript", "React", "Nest.js", "PostgreSQL"],
        achievements: [
            "Diseño e implementación de una API RESTful robusta utilizando Nest.js y TypeScript.",
            "Desarrollo de un sistema de Autenticación y Autorización (JWT) completo.",
            "Interfaz de usuario con filtrado y búsqueda dinámica de productos.",
        ],
        isProject: true,
    },
    {
        company: "Zurich",
        role: "Técnico de Soporte / Help Desk IT",
        period: "Enero 2020 - Marzo 2024",
        description: "Gestión de infraestructura y seguridad para sistemas críticos empresariales.",
        technologies: ["Active Directory", "SAP", "AS400", "TCP/IP"],
        achievements: [
            "Control de acceso y gestión de usuarios en SAP y AS400.",
            "Diagnóstico y resolución de problemas de conectividad de red.",
            "Soporte técnico de hardware y software a nivel operativo.",
        ],
    }
];
