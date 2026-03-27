import { ExperienceItem as ExperienceType } from "@/data/experience";
import { ExternalLink } from "lucide-react";

export const ExperienceItem = ({ item }: { item: ExperienceType }) => (
    <div className="relative pl-8 border-l-2 border-white/10 py-8 transition-all">
        <div className="absolute -left-[9px] top-10 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-[#0a0c14] shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />

        <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-full uppercase tracking-widest border border-blue-500/20">
                {item.period}
            </span>
            {item.isProject && (
                <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 uppercase">
                    Proyecto Personal
                </span>
            )}
        </div>

        <h3 className="text-2xl font-bold mt-4 text-white tracking-tight">
            {item.role}
        </h3>

        <div className="flex items-center gap-2 mb-4">
            <p className="text-lg font-semibold text-slate-300">
                {item.company}
            </p>
            {item.link && (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-sm font-medium"
                >
                    <ExternalLink size={18} />
                    <span className="text-xs">Ver Proyecto</span>
                </a>
            )}
        </div>

        <p className="text-slate-400 leading-relaxed max-w-2xl text-[1.05rem]">
            {item.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
                <span
                    key={tech}
                    className="text-[0.7rem] font-bold font-mono bg-white/5 text-slate-400 px-2.5 py-1 rounded-md border border-white/10 uppercase"
                >
                    {tech}
                </span>
            ))}
        </div>

        <ul className="mt-8 space-y-4">
            {item.achievements.map((ach, idx) => (
                <li key={idx} className="text-slate-400 flex items-start gap-3 group">
                    <span className="text-blue-500 font-black text-xl leading-none mt-0.5">•</span>
                    <span className="leading-relaxed">{ach}</span>
                </li>
            ))}
        </ul>
    </div>
);
