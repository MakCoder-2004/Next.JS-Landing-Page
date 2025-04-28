"use client";
import Tag from "@/components/Tag";
import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";
import React from "react";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  
  const wordIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, words.length - 1],
    { clamp: false }
  );

  const [currentWord, setCurrentWord] = React.useState(0);

  useMotionValueEvent(wordIndex, "change", (latest) => {
    const rounded = Math.round(latest);
    if (rounded !== currentWord) {
      setCurrentWord(rounded);
    }
  });

  return (
    <section className="px-12 lg:py-20 mx-auto max-w-7xl w-full relative">
      <div className="sticky top-30 h-screen flex flex-col justify-center">
        <div className="flex justify-center">
          <Tag title="Introducing Layers" />
        </div>
        <div className="text-5xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
          <motion.p>Your Creative process deserves better.</motion.p>
          <motion.p className="my-8">
            {words.map((word, index) => (
              <React.Fragment key={index}>
                <motion.span
                  className={`inline-block transition-colors duration-300 ${
                    index <= currentWord ? "text-white" : "text-white/15"
                  }`}
                >
                  {word}
                </motion.span>
                <span> </span>
              </React.Fragment>
            ))}
          </motion.p>
          <motion.p className="text-lime-400">
            That&apos;s why we built Layers.
          </motion.p>
        </div>
      </div>
      <div className="h-[200vh]" ref={scrollTarget}></div>
    </section>
  );
}