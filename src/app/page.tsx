import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Contenedor central con espacio entre secciones */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-32">

        {/* 1. SECCIÓN HERO (Nombre y Redes) */}
        <Hero />

        {/* 2. SECCIÓN EXPERIENCIA (Proyectos y Zurich) */}
        <section>
          <h2 className="text-3xl font-bold mb-12 tracking-tight text-slate-900">
            Experiencia & Proyectos
          </h2>
          <Experience />
        </section>

        {/* 3. SECCIÓN SKILLS (Habilidades Técnicas) */}
        <section>
          <h2 className="text-3xl font-bold mb-12 tracking-tight text-slate-900">
            Habilidades Técnicas
          </h2>
          <Skills />
        </section>

      </div>

      {/* Footer sencillo */}
      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-100">
        © {new Date().getFullYear()} - Agustin Villafañe
      </footer>
    </main>
  );
}
