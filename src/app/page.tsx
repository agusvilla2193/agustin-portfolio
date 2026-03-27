import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen fondo-complejo-animado relative overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 space-y-16">

        <section className="card-glass">
          <Hero />
        </section>

        <section className="card-glass">
          <h2 className="text-3xl font-bold mb-12 tracking-tight text-white border-b border-white/10 pb-4">
            Experiencia & Proyectos
          </h2>
          <Experience />
        </section>

        <section className="card-glass">
          <h2 className="text-3xl font-bold mb-12 tracking-tight text-white border-b border-white/10 pb-4">
            Habilidades Técnicas
          </h2>
          <Skills />
        </section>

      </div>

      <footer className="relative z-10 py-10 text-center text-slate-500 text-sm border-t border-white/5">
        © {new Date().getFullYear()} - Agustin Villafañe
      </footer>
    </main>
  );
}
