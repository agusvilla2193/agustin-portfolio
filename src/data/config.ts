// src/data/config.ts
export const CONFIG = {
    profile: {
        name: "Agustin Villafañe",
        role: "Full Stack Developer",
        description: "Desarrollador Full Stack Junior proactivo y autodidacta. Especializado en JavaScript, React y Node.js, con experiencia en infraestructura y seguridad.",
    },
    contact: {
        email: process.env.NEXT_PUBLIC_EMAIL,
        whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
        github: process.env.NEXT_PUBLIC_GITHUB_URL,
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    }
};
