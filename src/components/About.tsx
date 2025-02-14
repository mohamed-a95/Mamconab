import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 py-20 flex justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-200 text-center text-black p-10 rounded-lg max-w-4xl w-full shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-900 mt-2">Om oss</h2>

        <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
          Vi är din expertpartner inom bygg- och projektledning, specialiserade
          på mark- och anläggningsarbeten, infrastruktur och stensättning. Med
          bred erfarenhet som byggledare, projektledare, entreprenadingenjör och
          arbetsledare ser vi till att ditt projekt genomförs effektivt,
          kostnadssmart och med högsta kvalitet – från planering till
          färdigställande
        </p>
      </motion.div>
    </div>
  );
};

export default About;
