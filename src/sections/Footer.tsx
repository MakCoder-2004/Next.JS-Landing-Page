const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

import LogoImage from "@/assets/images/logo.svg";
import Image from "next/image";

export default function Footer() {
    return (
        <section className="pt-24 pb-6">
            <div className="md:px-12 flex flex-col md:flex-row md:justify-between items-center gap-6">
                <div>
                    <Image src={LogoImage} alt="Layers Logo" />
                </div>
                <div className="">
                    {footerLinks.map(link => (
                        <a key={link.label} href={link.href} className="text-neutral-500 hover:text-neutral-300 transition-colors duration-200 p-4">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}