import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { CONFIG } from "@/data/config";
import { SocialButton } from "./ui/SocialButton";

export default function Hero() {
    const { profile, contact } = CONFIG;

    return (
        <section>
            <h1 className="text-6xl font-extrabold tracking-tight text-slate-900">{profile.name}</h1>
            <p className="text-2xl text-blue-600 mt-3 font-semibold">{profile.role}</p>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl">{profile.description}</p>

            <div className="flex flex-wrap gap-3 mt-8">
                <SocialButton href={contact.github!} icon={<Github size={20} />} label="GitHub" className="bg-slate-900" />
                <SocialButton href={contact.linkedin!} icon={<Linkedin size={20} />} label="LinkedIn" className="bg-blue-700" />
                <SocialButton href={contact.whatsapp!} icon={<MessageCircle size={20} />} label="WhatsApp" className="bg-green-600" />
                <SocialButton href={`mailto:${contact.email}`} icon={<Mail size={20} />} label="Email" className="bg-red-500" />
            </div>
        </section>
    );
}
