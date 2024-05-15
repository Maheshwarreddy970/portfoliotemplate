"use client"

import React from "react";
import { AnimatePresence, motion } from "framer-motion";




export default function RotateText() {
  const words = ["Developer", "Designer"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={words[index]}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
        className="text-center font-display bg-gradient-to-b from-white to-neutral-700 text-transparent bg-clip-text text-4xl font-bold tracking-[-0.02em] drop-shadow-sm"
      >
        {words[index]}
      </motion.h1>
    </AnimatePresence>
  );
}
