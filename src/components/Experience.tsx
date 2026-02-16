import { EXPERIENCE_DATA } from "@/data/experience";
import { ExperienceItem } from "./ExperienceItem";

export default function Experience() {
    return (
        <div className="flex flex-col gap-8">
            {EXPERIENCE_DATA.map((item, idx) => (
                <ExperienceItem key={idx} item={item} />
            ))}
        </div>
    );
}
