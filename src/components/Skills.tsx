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
                                className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-200 cursor-default"
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
