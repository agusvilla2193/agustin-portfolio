import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-32">

        {/* 1. SECCIÓN HERO */}
        <Hero />

        {/* 2. SECCIÓN EXPERIENCIA */}
        <section>
          {/* Actualizado a text-blue-950 para consistencia con el nombre */}
          <h2 className="text-3xl font-bold mb-12 tracking-tight text-blue-950 border-b border-slate-100 pb-4">
            Experiencia & Proyectos
          </h2>
          <Experience />
        </section>

        {/* 3. SECCIÓN SKILLS */}
        <section>
          {/* Actualizado a text-blue-950 para consistencia con el nombre */}
          <h2 className="text-3xl font-bold mb-12 tracking-tight text-blue-950 border-b border-slate-100 pb-4">
            Habilidades Técnicas
          </h2>
          <Skills />
        </section>

      </div>

      <footer className="py-10 text-center text-slate-500 text-sm border-t border-slate-100">
        © {new Date().getFullYear()} - Agustin Villafañe
      </footer>
    </main>
  );
}
