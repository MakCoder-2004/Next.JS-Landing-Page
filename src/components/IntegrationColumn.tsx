"use client";
import { type IntegrationType } from "@/sections/Integrations";
import Image from "next/image";
import { motion } from "framer-motion";

const IntegrationColumn = (props: {
  integrations: IntegrationType;
  className?: string;
  reverse?: boolean;
}) => {
  const { integrations, className, reverse } = props;
  return (
    <motion.div
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`mx-auto flex flex-col ${className}`}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-neutral-900 border border-white/10 rounded-3xl mt-4 p-6"
            >
              <div className="flex justify-center">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  className="size-24"
                />
              </div>
              <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
              <p className="text-center text-white/50 mt-2">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default IntegrationColumn;
