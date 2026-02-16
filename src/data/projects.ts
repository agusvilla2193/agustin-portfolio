export interface Project {
    title: string;
    description: string;
    stack: string[];
    achievements: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        title: "Pastas Yamaguchi",
        description: "Plataforma de E-commerce completa para venta de alimentos.",
        stack: ["TypeScript", "React", "Nest.js", "PostgreSQL"],
        achievements: [
            "Diseño de API RESTful robusta",
            "Sistema de Autenticación JWT",
            "Filtrado y búsqueda dinámica"
        ],
        link: "https://github.com/agusvilla2193" // Tu repo de GitHub [cite: 5]
    }
];
