import { ReactNode } from "react";

interface SocialButtonProps {
    href: string;
    icon: ReactNode;
    label: string;
    className: string;
}

export const SocialButton = ({ href, icon, label, className }: SocialButtonProps) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-all shadow-md text-sm font-medium`}
    >
        {icon}
        <span className="inline">{label}</span>
    </a>
);
