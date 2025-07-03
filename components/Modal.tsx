"use client";
import { AnimatePresence, motion } from "motion/react";

export default function Modal({ children } : { children: React.ReactNode }) {
  const animations = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  }
  return (
    <AnimatePresence>
        <div
          className={`fixed z-50 flex backdrop-blur items-center justify-center overflow-x-hidden overflow-y-auto top-0 right-0 left-0 w-full h-full inset-0 bg-black/20 outline-none focus:outline-none`}
        >
          <div className="relative min-w-1/2 my-6 mx-auto max-w-3xl">
            <motion.div {...animations} className="rounded-lg  border border-zinc-800 shadow-lg relative flex flex-col bg-zinc-900 outline-none focus:outline-none">
              {children}
            </motion.div>
          </div>
        </div>
    </AnimatePresence>
  );
}
