import { SKILLS_DATA } from "@/data/skills";

export default function Skills() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILLS_DATA.map((group) => (
                <div key={group.category}>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                        {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                            <span
                                key={skill}
                                className="bg-white/5 border border-white/10 text-slate-300 px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-200 cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
