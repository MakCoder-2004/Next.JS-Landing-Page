const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import CustomButton from "@/components/CustomButton";

export default function Navbar() {
  return (
    <section className="p-4 lg:py-8 flex items-center justify-center">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full items-center p-2 px-4 md:pr-2">

          {/* Logo Image */}
          <div>
            <Image
              src={logo}
              alt="Layers Logo"
              className="h-9 md:h-auto w-auto ml-2"
            />
          </div>

          {/* Nav links */}
          <div className="lg:flex justify-center items-center hidden">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right side buttons */}
          <div className="flex justify-end gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>

            <CustomButton
              variant="secondary"
              className="hidden md:inline-flex items-center"
            >
              Log in
            </CustomButton>
            <CustomButton
              variant="primary"
              className="hidden md:inline-flex items-center"
            >
              Sign Up
            </CustomButton>
          </div>
          
        </div>
      </div>
    </section>
  );
}
