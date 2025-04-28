"use client";
const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import CustomButton from "@/components/CustomButton";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="p-4 lg:py-8 flex items-center justify-center sticky top-0 z-50">
      <div className="container max-w-5xl">
        <div className="rounded-[27px] md:rounded-full border border-white/15 bg-neutral-900/70 backdrop-blur">
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center p-2 px-4 md:pr-2">
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
                onClick={() => setIsOpen(!isOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={`${
                    isOpen
                      ? "transition origin-left rotate-45 -translate-y-1"
                      : ""
                  }`}
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={`${isOpen ? "transition opacity-0" : ""}`}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={`${
                    isOpen
                      ? "transition origin-left -rotate-45 translate-y-1"
                      : ""
                  }`}
                ></line>
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

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-col items-center py-4">
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a href={link.href} key={link.label}>
                        {link.label}
                      </a>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <CustomButton variant="secondary">Login</CustomButton>
                    <CustomButton variant="primary">SignUp</CustomButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
