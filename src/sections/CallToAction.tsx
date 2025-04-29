"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex group">
        <motion.div 
          className="flex flex-none gap-16 text-7xl md:text-8xl font-medium "
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex gap-16 items-center ">
              <span className="text-lime-400 text-7xl ">&#10038;</span>
              <span className="group-hover:text-lime-400 transition duration-300">Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}