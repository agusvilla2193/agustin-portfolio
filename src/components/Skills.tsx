import { SKILLS_DATA } from "@/data/skills";

export default function Skills() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILLS_DATA.map((group) => (
                <div key={group.category}>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                        {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                            <span
                                key={skill}
                                className="bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium"
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
