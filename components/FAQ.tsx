"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Do you provide catering directly?",
    a: "No. PLATR helps companies discover and coordinate suitable catering partners. We act as your single point of contact for the entire process.",
  },
  {
    q: "Can you handle large corporate events?",
    a: "Yes, from small meetings to large-scale corporate gatherings with 2000+ attendees.",
  },
  {
    q: "Is there a minimum order size?",
    a: "We support requirements of different sizes depending on the event. Get in touch and we\u2019ll find the right fit.",
  },
  {
    q: "How quickly will someone respond?",
    a: "Typically within 2 business hours. For urgent requirements, reach us on WhatsApp for instant support.",
  },
  {
    q: "Can menus be customized?",
    a: "Absolutely. All packages can be tailored to your specific dietary needs, cuisine preferences, and budget.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`section ${styles.section}`} id="faq">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ❓ faq
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          frequently asked questions
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          everything you need to know before getting started.
        </motion.p>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`${styles.item} ${openIndex === i ? styles.itemOpen : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.4,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
            >
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <span className={styles.chevron}>
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
