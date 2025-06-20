"use client";
import { AnimationContainer } from "@/components";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does Wictronix offer?",
    answer: "We offer full-stack app development, eCommerce platforms, automation, AI solutions, ERP systems, and cloud integrations."
  },
  {
    question: "Do you offer support after project delivery?",
    answer: "Absolutely. We offer post-launch support, maintenance, and optimization to ensure long-term success."
  },
  {
    question: "How do I get a quote for my project?",
    answer: "Just contact us through our website or book a free consultation. We'll assess your needs and give you a detailed proposal."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work with startups, FinTech, healthcare, logistics, and eCommerce companies globally."
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in React, Next.js, Node.js, Python, Flutter, Shopify, Webflow, and automation platforms like Zapier and OpenAI."
  }
];

const HelpPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-black text-white px-6">
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-center mt-6 leading-tight text-white">
          Help & FAQs
        </h1>
        <p className="text-base md:text-lg mt-4 text-center text-gray-400">
          Need help? We’ve answered some common questions below.
        </p>
      </AnimationContainer>

      <div className="mt-16 max-w-3xl w-full">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-white/10 rounded-xl mb-4 bg-white/5 backdrop-blur p-5 cursor-pointer hover:shadow-xl"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-gray-300 mt-3 text-sm overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HelpPage;
