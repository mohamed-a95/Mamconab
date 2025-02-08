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
        <h3 className="text-sm uppercase tracking-widest text-gray-600">
          Om oss
        </h3>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">Vår vision</h2>

        <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
          Mamcon AB är din partner inom byggprojektledning och byggledning. Vi
          är specialiserade på mark- och anläggningsarbeten samt stensättning.
          Med oss får du högkvalitativa lösningar som tar dina projekt från idé
          till verklighet.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
