import { ExperienceItem as ExperienceType } from "@/data/experience";

export const ExperienceItem = ({ item }: { item: ExperienceType }) => (
    <div className="relative pl-8 border-l border-slate-200 py-6">
        <div className="absolute -left-[5px] top-8 h-2.5 w-2.5 rounded-full bg-blue-600" />
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            {item.period}
        </span>
        <h3 className="text-2xl font-bold mt-4 text-slate-900">{item.role}</h3>
        <p className="text-lg font-medium text-slate-500">{item.company}</p>
        <p className="mt-3 text-slate-600 leading-relaxed max-w-2xl">{item.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
                <span key={tech} className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
                    {tech}
                </span>
            ))}
        </div>

        <ul className="mt-6 space-y-2">
            {item.achievements.map((ach, idx) => (
                <li key={idx} className="text-slate-600 flex items-start gap-2">
                    <span className="text-blue-500 mt-1.5">•</span>
                    {ach}
                </li>
            ))}
        </ul>
    </div>
);
