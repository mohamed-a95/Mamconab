import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import ScrollIndicator from "./components/ScrollIndicator";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div id="intro">
        <Intro />
      </div>

      <div id="services">
        <Service />
      </div>

      <div id="carousel" className="py-10 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-6">Våra Samarbetspartners</h2>
        <Carousel />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
