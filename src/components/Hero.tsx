import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { CONFIG } from "@/data/config";
import { SocialButton } from "./ui/SocialButton";
import Image from "next/image";

export default function Hero() {
    const { profile, contact } = CONFIG;
    const [firstName, ...lastName] = profile.name.split(" ");

    return (
        <section className="relative pt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="space-y-4 md:col-span-2 order-2 md:order-1">
                    {/* Ambos componentes del nombre ahora tienen el mismo color (blanco) */}
                    <h1 className="text-6xl font-extrabold tracking-tight text-white">
                        <span>{firstName}</span>{" "}
                        <span>{lastName.join(" ")}</span>
                    </h1>

                    <p className="text-2xl text-slate-300 font-semibold tracking-tight">
                        {profile.role}
                    </p>
                    <p className="mt-6 text-xl text-slate-400 leading-relaxed max-w-2xl font-normal">
                        {profile.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-8 pt-4">
                        <SocialButton
                            href={contact.github ?? "#"}
                            icon={<Github size={20} />}
                            label="GitHub"
                            className="bg-slate-800 hover:bg-slate-700 border border-white/10"
                        />
                        <SocialButton
                            href={contact.linkedin ?? "#"}
                            icon={<Linkedin size={20} />}
                            label="LinkedIn"
                            className="bg-blue-600 hover:bg-blue-500 border border-white/10"
                        />
                        <SocialButton
                            href={contact.whatsapp ?? "#"}
                            icon={<MessageCircle size={20} />}
                            label="WhatsApp"
                            className="bg-green-600 hover:bg-green-500 border border-white/10"
                        />
                        <SocialButton
                            href={`mailto:${contact.email}`}
                            icon={<Mail size={20} />}
                            label="Email"
                            className="bg-red-500 hover:bg-red-400 border border-white/10"
                        />
                    </div>
                </div>

                <div className="flex justify-center md:justify-end order-1 md:order-2">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-blue-500 rounded-full opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
                        <Image
                            src="/perfil.jpg"
                            alt={`Foto de ${profile.name}`}
                            width={280}
                            height={280}
                            className="relative rounded-full object-cover border-4 border-white/20 shadow-2xl transition-all duration-300"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
