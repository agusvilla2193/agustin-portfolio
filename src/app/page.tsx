import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    /* bg-[#fefaf2] es el color "crema de libro" perfecto: cálido y sutil */
    <main className="min-h-screen bg-[#fefaf2] text-slate-900 relative">

      {/* CAPA DE FONDO: Puntos sutiles en un tono café muy suave para que parezca papel */}
      <div
        className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#d6d3d1 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 space-y-32">

        {/* 1. SECCIÓN HERO */}
        <Hero />

        {/* 2. SECCIÓN EXPERIENCIA & PROYECTOS */}
        <section>
          {/* Usamos border-stone-300/50 para que la línea sea sutil sobre el crema */}
          <h2 className="text-3xl font-bold mb-12 tracking-tight text-blue-950 border-b border-stone-300/50 pb-4">
            Experiencia & Proyectos
          </h2>
          <Experience />
        </section>

        {/* 3. SECCIÓN SKILLS */}
        <section>
          <h2 className="text-3xl font-bold mb-12 tracking-tight text-blue-950 border-b border-stone-300/50 pb-4">
            Habilidades Técnicas
          </h2>
          <Skills />
        </section>

      </div>

      <footer className="relative z-10 py-10 text-center text-slate-500 text-sm border-t border-stone-300/50">
        © {new Date().getFullYear()} - Agustin Villafañe
      </footer>
    </main>
  );
}
