"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Full-Stack Application Development",
    description:
      "From MVPs to enterprise-grade systems, we build robust, secure, and scalable web & mobile applications.",
    details: [
      "Cross-platform apps with React Native and Flutter",
      "Next.js, Node.js, and Express for seamless web architecture",
      "MongoDB, PostgreSQL, Firebase, Supabase integration"
    ]
  },
  {
    title: "Process Automation & AI Agents",
    description:
      "Automate repetitive tasks and business workflows with AI-powered tools and bots.",
    details: [
      "Python automation scripts & backend schedulers",
      "OpenAI agents for customer support and lead handling",
      "RPA systems and low-code/no-code integrations (Zapier, Make)"
    ]
  },
  {
    title: "eCommerce Platform Development",
    description:
      "Customized eCommerce storefronts with marketing automation and analytics.",
    details: [
      "Shopify stores with custom UI & checkout flows",
      "Headless Webflow integrations for marketing teams",
      "WooCommerce & WordPress-based backend dashboards"
    ]
  },
  {
    title: "Custom ERP & Cloud Software",
    description:
      "Streamline internal operations with fully tailored ERP solutions for HR, finance, and operations.",
    details: [
      "Inventory and billing automation systems",
      "HR dashboards with role-based access",
      "Analytics-rich CRM modules connected to marketing funnels"
    ]
  }
];

const techTags = [
  "React", "Next.js", "Node.js", "Flutter", "Python",
  "Shopify", "Webflow", "OpenAI", "ERP", "Zapier", "RPA"
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
        Enterprise Solutions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-400 text-center mt-4 max-w-2xl"
      >
        Innovation Drives Your Business. Our enterprise-grade solutions empower growth across E-commerce, FinTech, Healthcare, and Startup ecosystems.
      </motion.p>

      {/* Our Services */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Core Offerings</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          From building high-performance applications to automating mission-critical operations, we deliver scalable and secure digital solutions designed for the modern enterprise.
        </p>
      </motion.div>

      {/* Services Accordion */}
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

      {/* Our Approach */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-28 text-center max-w-4xl"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our 3-Step Approach</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left text-gray-300">
          <div>
            <h4 className="text-xl font-medium mb-2">1. Ideation & Discovery</h4>
            <p className="text-sm">
              We dive deep to understand your business goals, analyze pain points, and identify opportunities for innovation.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-2">2. Design & Development</h4>
            <p className="text-sm">
              Our team prototypes, designs, and develops a solution tailored to your users, built to scale and adapt over time.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-2">3. Launch & Optimization</h4>
            <p className="text-sm">
              We deploy, monitor, and continuously improve your product to ensure it delivers lasting value and performance.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tech Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
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
        transition={{ delay: 0.9 }}
        className="mt-28 text-center"
      >
        <h3 className="text-2xl font-semibold mb-2">Ready to Bring Your Vision to Life?</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Let’s build something powerful together. Wictronix will help you design, launch, and grow your digital ecosystem.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-300 transition font-medium">
          Book a Free Consultation
        </button>
      </motion.div>
    </div>
  );
};

export default EnterpriseSolutionsPage;
