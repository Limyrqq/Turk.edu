"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { faqs } from "@/content/guide";
import { Plus } from "@/components/ui/icons";
export function Faq() {
  const [opened, setOpened] = useState<number | null>(null);
  const reduced = useReducedMotion();
  return (
    <div className="faq-list">
      {faqs.map((f, i) => (
        <div key={f.q} className="faq-item">
          <h3>
            <button
              aria-expanded={opened === i}
              aria-controls={`faq-${i}`}
              onClick={() => setOpened(opened === i ? null : i)}
            >
              {f.q}
              <Plus size={20} className={opened === i ? "rotated" : ""} />
            </button>
          </h3>
          <AnimatePresence initial={false}>
            {opened === i && (
              <motion.div
                id={`faq-${i}`}
                initial={{ opacity: 0, y: reduced ? 0 : -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduced ? 0 : -3 }}
                transition={{ duration: reduced ? 0 : 0.2 }}
              >
                <p>{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
