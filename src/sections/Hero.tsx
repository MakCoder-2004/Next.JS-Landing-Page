"use client";

import CustomButton from "@/components/CustomButton";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointers from "@/components/Pointers";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: "easeInOut" }],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5, ease: "easeInOut" }],
    ]);
  }, []);

  return (
    <section className="mx-auto py-12 overflow-x-clip px-4">
      {/* Background elements */}
      <div className="relative">
        <motion.div
          ref={leftDesignScope}
          drag
          initial={{ opacity: 0, y: 200, x: -100 }}
          className="absolute -left-32 top-16 hidden xl:block"
        >
          <Image src={designExample1Image} alt="Design Example 1" draggable="false" />
        </motion.div>

        <motion.div
          ref={rightDesignScope}
          drag
          initial={{ opacity: 0, y: 100, x: 100 }}
          className="absolute -right-64 -top-16 hidden xl:block"
        >
          <Image src={designExample2Image} alt="Design Example 2"  draggable="false" />
        </motion.div>

        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden xl:block"
        >
          <Pointers name="Makrious" color="blue" key={"Makrious"} />
        </motion.div>

        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 275, x: 100 }}

          className="absolute right-80 -top-4 hidden xl:block"
        >
          <Pointers name="Ayman" color="red" key={"Ayman"} />
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col items-center gap-4">
          {/* Badge */}
          <div className="py-1 px-4 inline-flex bg-gradient-to-r from-purple-400 to-pink-400 text-neutral-950 font-semibold rounded-full">
            ✨ $7.5M seed round raised
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center max-w-5xl mx-auto">
            Impactful design,
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center max-w-5xl mx-auto">
            created effortlessly
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl xl:text-2xl text-white/50 mt-6 max-w-2xl mx-auto text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
            aspernatur iste. Ut voluptatem unde repudiandae ipsa quae eius
            veniam doloribus autem explicabo.
          </p>

          {/* Email form */}
          <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-5 flex-1 outline-none w-full"
            />
            <CustomButton
              type="submit"
              variant="primary"
              className="whitespace-nowrap"
              size="sm"
            >
              Get early access
            </CustomButton>
          </form>
        </div>
      </div>
    </section>
  );
}
