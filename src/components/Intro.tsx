import React from "react";
import { Link as ScrollLink } from "react-scroll";
import bkgvideo from "../assets/44890-440261146_small.mp4";

const Intro: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bkgvideo} type="video/mp4" />
        Din webbläsare stöder inte videon.
      </video>

      {/* Mörkt överlägg för bättre läsbarhet */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Innehållscontainer – justerad för att alltid vara synlig */}
      <div className="relative flex flex-col justify-center sm:justify-start items-center h-full text-white text-center px-6">
        {/* Extra padding-top för att inte överlappa headern */}
        <div className="mt-20 sm:mt-35">
          <h1 className="text-3xl sm:text-4xl font-bold uppercase">
            Välkommen till <br />
            Mamcon Stockholm AB
          </h1>

          {/* Gul linje – synlig på alla skärmar */}
          <div className="bg-yellow-500 h-[3px] w-[80%] sm:w-[500px] my-4 mx-auto"></div>

          <p className="mt-6 px-5 max-w-[700px] text-lg sm:text-xl font-normal">
            Vi är din expertpartner inom bygg- och projektledning,
            specialiserade på mark- och anläggningsarbeten, infrastruktur och
            stensättning. Med bred erfarenhet som byggledare, projektledare,
            entreprenadingenjör och arbetsledare ser vi till att ditt projekt
            genomförs effektivt, kostnadssmart och med högsta kvalitet – från
            planering till färdigställande.
          </p>

          {/* Knappen – alltid synlig */}
          <div className="flex justify-center mt-10 sm:mt-14 gap-6">
            <ScrollLink to="services" smooth={true} duration={500}>
              <button className="bg-yellow-500 text-black py-3 px-6 font-semibold uppercase hover:bg-yellow-600 rounded-md sm:pb-10">
                Våra tjänster
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
