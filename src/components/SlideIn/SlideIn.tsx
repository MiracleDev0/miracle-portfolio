"use client";
import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

type SlideInProps = {
  className?: string;
  children: React.ReactNode;
  direction?: "up" | "right";
};

const SlideIn = ({ className, children, direction = "up" }: SlideInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    initial: {
      opacity: 0,
      ...(direction === "up"
        ? { y: "50%" }
        : direction === "right"
        ? { x: "50%" }
        : {}),
    },
    final: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      className={`${className}`}
      ref={ref}
      variants= {variants}
      animate={isInView ? "final" : "initial"}
      transition={{ duration: 0.8, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
