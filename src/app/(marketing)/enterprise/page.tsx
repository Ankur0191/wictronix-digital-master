"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Full-Stack App Development",
    description: "Robust, scalable mobile & web apps for enterprises.",
    details: [
      "React Native for cross-platform mobile apps",
      "Next.js & Node.js for fast web solutions",
      "MongoDB, PostgreSQL for scalable databases"
    ]
  },
  {
    title: "Process Automation",
    description: "Automate repetitive tasks and enhance workflow efficiency.",
    details: [
      "Python-based automation scripts",
      "Zapier / Make integrations",
      "Robotic Process Automation (RPA) for business ops"
    ]
  },
  {
    title: "eCommerce Platforms",
    description: "We deliver custom Shopify, Webflow & WooCommerce solutions.",
    details: [
      "Shopify - Secure scalable stores with custom features",
      "Webflow - Sleek design-first approach for brands",
      "WordPress - WooCommerce with full backend flexibility"
    ]
  },
  {
    title: "Custom ERP Solutions",
    description: "Tailored ERP systems for HR, finance, CRM, and operations.",
    details: [
      "Inventory & finance automation tools",
      "Custom HRMS dashboards",
      "CRM modules integrated with analytics"
    ]
  }
];

const techTags = [
  "React", "Next js", "Node js", "Flutter", "Shopify",
  "ERP Systems", "Automation Tools"
];

const EnterpriseSolutionsPage = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center">
      {/* Hero */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold text-center"
      >
        Enterprise
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-400 text-center mt-4 max-w-xl"
      >
        Get in touch with us to learn more about our enterprise solutions.
      </motion.p>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Enterprise Solutions</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Full-stack mobile apps, enterprise-grade eCommerce, ERP platforms, and automation systems — engineered by Wictronix Digital to scale with your business.
        </p>
      </motion.div>

      {/* Accordion Services */}
      <div className="mt-16 w-full max-w-4xl space-y-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-xl transition hover:shadow-xl cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">{service.title}</p>
              <span className="text-xl">{expandedIndex === index ? "−" : "+"}</span>
            </div>

            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-gray-400 text-sm mt-3 space-y-2 overflow-hidden"
                >
                  <p>{service.description}</p>
                  {service.details && (
                    <ul className="list-disc pl-5 pt-2 space-y-1">
                      {service.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Technology Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-20 flex flex-wrap gap-3 max-w-2xl px-4 justify-center"
      >
        {techTags.map((tech, i) => (
          <div
            key={i}
            className="bg-white text-black text-sm py-1 px-3 rounded-full hover:bg-gray-800 hover:text-white transition cursor-pointer"
          >
            {tech}
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-28 text-center"
      >
        <h3 className="text-2xl font-semibold mb-2">Ready to Scale Your Business?</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Wictronix experts will help you analyze, design, and implement the right digital strategy for your enterprise.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-300 transition font-medium">
          Book a Free Consultation
        </button>
      </motion.div>
    </div>
  );
};

export default EnterpriseSolutionsPage;
