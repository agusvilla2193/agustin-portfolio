import { ExperienceItem as ExperienceType } from "@/data/experience";

export const ExperienceItem = ({ item }: { item: ExperienceType }) => (
    <div className="relative pl-8 border-l-2 border-slate-100 py-8 transition-all">
        {/* El circulito con efecto de brillo y anillo */}
        <div className="absolute -left-[9px] top-10 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-white shadow-[0_0_15px_rgba(37,99,235,0.4)] z-10" />

        <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-blue-100">
            {item.period}
        </span>

        <h3 className="text-2xl font-bold mt-4 text-slate-900 tracking-tight">
            {item.role}
        </h3>
        <p className="text-lg font-semibold text-slate-700 mb-4">
            {item.company}
        </p>

        <p className="text-slate-600 leading-relaxed max-w-2xl text-[1.05rem]">
            {item.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
                <span
                    key={tech}
                    className="text-[0.7rem] font-bold font-mono bg-slate-50 text-slate-500 px-2.5 py-1 rounded-md border border-slate-200 uppercase tracking-tight"
                >
                    {tech}
                </span>
            ))}
        </div>

        <ul className="mt-8 space-y-4">
            {item.achievements.map((ach, idx) => (
                <li key={idx} className="text-slate-600 flex items-start gap-3 group">
                    <span className="text-blue-500 font-black text-xl leading-none mt-0.5 group-hover:scale-125 transition-transform">•</span>
                    <span className="leading-relaxed">{ach}</span>
                </li>
            ))}
        </ul>
    </div>
);
