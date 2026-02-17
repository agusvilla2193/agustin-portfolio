import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { CONFIG } from "@/data/config";
import { SocialButton } from "./ui/SocialButton";

export default function Hero() {
    const { profile, contact } = CONFIG;

    // Dividimos el nombre para poder aplicar estilos por separado si quisieras, 
    // pero ambos usarán el mismo azul oscuro profundo.
    const [firstName, ...lastName] = profile.name.split(" ");

    return (
        <section className="relative pt-10">
            <div className="space-y-4">
                {/* text-blue-950 es un azul muy oscuro, casi negro, 
                  que se ve muy sofisticado en fondos blancos.
                */}
                <h1 className="text-6xl font-extrabold tracking-tight">
                    <span className="text-blue-950">{firstName}</span>{" "}
                    <span className="text-blue-950">{lastName.join(" ")}</span>
                </h1>

                <p className="text-2xl text-blue-600 font-semibold tracking-tight">
                    {profile.role}
                </p>

                <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
                    {profile.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8 pt-4">
                    <SocialButton
                        href={contact.github ?? "#"}
                        icon={<Github size={20} />}
                        label="GitHub"
                        className="bg-slate-900 hover:scale-105 transition-transform"
                    />
                    <SocialButton
                        href={contact.linkedin ?? "#"}
                        icon={<Linkedin size={20} />}
                        label="LinkedIn"
                        className="bg-blue-700 hover:scale-105 transition-transform"
                    />
                    <SocialButton
                        href={contact.whatsapp ?? "#"}
                        icon={<MessageCircle size={20} />}
                        label="WhatsApp"
                        className="bg-green-600 hover:scale-105 transition-transform"
                    />
                    <SocialButton
                        href={`mailto:${contact.email}`}
                        icon={<Mail size={20} />}
                        label="Email"
                        className="bg-red-500 hover:scale-105 transition-transform"
                    />
                </div>
            </div>
        </section>
    );
}
