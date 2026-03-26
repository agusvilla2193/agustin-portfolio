export const CONFIG = {
    profile: {
        name: "Agustin Villafañe",
        role: "Full Stack Developer",
        description: "Software Engineer con más de 4 años de experiencia en entornos corporativos de alta complejidad (Zurich). Especializado en el desarrollo Full Stack con JavaScript, React y Node.js, poseo una sólida capacidad de análisis y resolución de problemas técnicos. Experto en diseñar soluciones escalables con arquitecturas modernas(Nest.js, PostgreSQL, Docker) bajo metodologías ágiles, enfocado siempre en la calidad del código y el impacto en el negocio.",
    },
    contact: {
        email: process.env.NEXT_PUBLIC_EMAIL,
        whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
        github: process.env.NEXT_PUBLIC_GITHUB_URL,
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    }
};
