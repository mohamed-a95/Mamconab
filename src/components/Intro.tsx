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

      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative flex flex-col justify-center items-center h-full text-white text-center px-6">
        <h1 className="text-4xl font-bold uppercase">
          Välkommen till <br />
          Mamcon Stockholm AB
        </h1>

        <div className="bg-yellow-500 h-[3px] w-[500px] my-4"></div>

        <p className="mt-6 px-5 max-w-[700px] text-xl text-center font-normal">
          Vi är din expertpartner inom bygg- och projektledning, specialiserade
          på mark- och anläggningsarbeten, infrastruktur och stensättning. Med
          bred erfarenhet som byggledare, projektledare, entreprenadingenjör och
          arbetsledare ser vi till att ditt projekt genomförs effektivt,
          kostnadssmart och med högsta kvalitet – från planering till
          färdigställande.
        </p>

        <div className="flex justify-center mt-14 gap-6">
          <ScrollLink to="services" smooth={true} duration={500}>
            <button className="bg-yellow-500 text-black py-3 px-6 font-semibold uppercase hover:bg-yellow-600 rounded-md">
              våra tjänster
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Intro;
