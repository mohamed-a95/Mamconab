import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import skanskaLogo from "../assets/skanska_transparent (1).png";
import mByggLogo from "../assets/m3bygg_transparent (1).png";
import zublinLogo from "../assets/zublin_transparent (1).png";
import jvabLogo from "../assets/jvab_transparent (1).png";
import peabLogo from "../assets/peab_transparent (1).png";
import frijoLogo from "../assets/frijo_transparent (1).png";
import systraLogo from "../assets/systra_transparent (1).png";

const logos = [
  { name: "Skanska", src: skanskaLogo },
  { name: "M# Bygg", src: mByggLogo },
  { name: "Zublin", src: zublinLogo },
  { name: "JVAB", src: jvabLogo },
  { name: "Peab", src: peabLogo },
  { name: "Frijo", src: frijoLogo },
  { name: "Systra", src: systraLogo },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % logos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length);
  };

  return (
    <div className="relative w-full max-w-[90%] md:max-w-[700px] mx-auto overflow-hidden p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 p-3 bg-gray-700 text-white rounded-full opacity-80 hover:opacity-100"
        >
          <FaArrowLeft size={20} />
        </button>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center"
        >
          <img
            src={logos[currentIndex].src}
            alt={logos[currentIndex].name}
            className="w-auto h-[80px] md:h-[100px] lg:h-[120px] object-contain"
          />
        </motion.div>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 p-3 bg-gray-700 text-white rounded-full opacity-80 hover:opacity-100"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {logos.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
