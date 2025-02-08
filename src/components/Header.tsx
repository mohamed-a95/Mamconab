import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Mamconlogo from "../assets/mamcon_transparent.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: "hem", to: "intro" },
    { name: "tjänster", to: "services" },
    { name: "samarbetspartners", to: "carousel" },
    { name: "om oss", to: "about" },
    { name: "kontakta oss", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`fixed top-0 w-full h-[80px] font-semibold flex items-center justify-between px-6 transition-all duration-300 z-50 shadow-md 
          ${isScrolled ? "bg-gray-900 text-white" : "bg-transparent text-white"}
        `}
      >
        <ScrollLink to="intro" smooth={true} duration={500}>
          <span className="uppercase cursor-pointer text-xl md:text-2xl flex  ">
            <img src={Mamconlogo} alt="mamconlogo" />
          </span>
        </ScrollLink>

        <ul className="hidden md:flex space-x-7 font-semibold uppercase">
          {links.map((link) => (
            <li
              key={link.name}
              className="hover:bg-yellow-500 cursor-pointer p-1 rounded-md transition-all duration-200"
            >
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Hamburgarikon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`w-6 h-1 mb-1 transition-all duration-300 ${
              isScrolled ? "bg-white" : "bg-black"
            }`}
          ></div>
          <div
            className={`w-6 h-1 mb-1 transition-all duration-300 ${
              isScrolled ? "bg-white" : "bg-black"
            }`}
          ></div>
          <div
            className={`w-6 h-1 transition-all duration-300 ${
              isScrolled ? "bg-white" : "bg-black"
            }`}
          ></div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>

            <motion.div
              className="fixed right-0 top-0 bg-gray-900 text-white w-[250px] h-full shadow-lg p-6 flex flex-col space-y-4 uppercase font-semibold z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:bg-yellow-500 p-2 rounded-md cursor-pointer transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
