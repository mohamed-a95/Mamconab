import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/bgmarkkran.avif"; // Bakgrundsbild
import img3 from "../assets/premium_photo-1664474493968-dbab638f26fa.avif"; // Bild 1
import img4 from "../assets/markanlaggning.jpg"; // Bild 2
import img5 from "../assets/stensattning.jpg"; // Bild 3

const Service: React.FC = () => {
  return (
    <div>
      <motion.div
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: `url(${img2})`,
        }}
        initial={{ backgroundPosition: "50% 50%" }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "50% 50%"],
        }}
        transition={{
          duration: window.innerWidth >= 640 ? 35 : 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Innehåll för sektionen */}
        <div className="relative flex flex-col items-center text-white px-6">
          {/* Rubrik */}
          <h1 className="text-4xl font-bold uppercase text-center tracking-wide">
            Våra tjänster
          </h1>
          <div className="bg-yellow-500 h-[4px] w-[300px] my-6"></div>
          <p className="text-lg text-center max-w-2xl mb-12">
            Vi erbjuder en rad olika tjänster som är skräddarsydda för dina
            behov.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <div className="bg-gray-200 text-black p-6 rounded-lg flex flex-col items-center shadow-lg">
              <img
                src={img3}
                alt="Byggkonsulttjänster"
                className="w-28 h-28 object-cover rounded-full border-4 border-gray-400 mb-4"
              />
              <h2 className="uppercase font-bold text-lg mb-2">
                Byggkonsulttjänster
              </h2>
              <p className="text-center text-sm leading-relaxed">
                Vi erbjuder expertstöd inom byggledning, arbetsledning, och
                projektledning. Tveka inte att kontakta oss för att diskutera
                hur vi kan hjälpa ditt projekt att lyckas!
              </p>
            </div>

            <div className="bg-gray-200 text-black p-6 rounded-lg flex flex-col items-center shadow-lg">
              <img
                src={img4}
                alt="Mark och anläggning"
                className="w-28 h-28 object-cover rounded-full border-4 border-gray-400 mb-4"
              />
              <h2 className="uppercase font-bold text-lg mb-2">
                Mark och anläggning
              </h2>
              <p className="text-center text-sm sm:text-base leading-relaxed">
                Med djup teknisk expertis och lång erfarenhet säkerställer vår
                konsult att dina mark- och infrastrukturprojekt genomförs
                effektivt, hållbart och med högsta kvalitet.
              </p>
            </div>

            <div className="bg-gray-200 text-black p-6 rounded-lg flex flex-col items-center shadow-lg">
              <img
                src={img5}
                alt="Stensättning"
                className="w-28 h-28 object-cover rounded-full border-4 border-gray-400 mb-4"
              />
              <h2 className="uppercase font-bold text-lg mb-2">Stensättning</h2>
              <p className="text-center text-sm leading-relaxed">
                Under sommarhalvåret erbjuder vi våra tjänster till
                privatpersoner i Stockholm som behöver professionell
                stensättning. Kontakta oss för en kostnadsfri offert!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
