"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type SectionBackground = "default" | "light" | "card";

interface SectionWrapperProps {
  children: ReactNode;
  background?: SectionBackground;
  className?: string;
  noPadding?: boolean;
  id?: string;
}

const backgroundClasses: Record<SectionBackground, string> = {
  default: "bg-zee-bg",
  light: "bg-zee-bg-light",
  card: "bg-zee-bg-card",
};

export default function SectionWrapper({
  children,
  background = "default",
  className = "",
  noPadding = false,
  id,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id={id}
      className={`${backgroundClasses[background]} ${
        noPadding ? "" : "py-20 md:py-28"
      } ${className}`}
    >
      <motion.div
        className="max-w-container mx-auto px-5 sm:px-9 md:px-10 xl:px-12"
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
