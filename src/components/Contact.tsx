import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white py-12 px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Kontakta oss</h1>
      <p className="text-gray-700 text-lg mb-8">
        Välkommen att kontakta oss redan idag!
      </p>

      <div className="flex flex-col space-y-4 text-left w-full max-w-lg">
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-gray-600 text-lg" />
          <span className="text-gray-800">Hanstavägen 55, 164 53 Kista</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-gray-600 text-lg" />
          <a
            href="tel:+46766333716"
            className="text-gray-800 font-semibold hover:underline"
          >
            0766 333 716
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-gray-600 text-lg" />
          <a
            href="mailto:kontakt@mamcon.se"
            className="text-blue-600 hover:underline"
          >
            kontakt@mamcon.se
          </a>
        </div>
      </div>

      <div className="flex space-x-6 mt-8">
        <a
          href="https://www.facebook.com/Mamcon.Stockholm.AB/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-2xl hover:text-blue-800"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/mamconstockholm/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 text-2xl hover:text-pink-800"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/mamcon-stockholm-ab/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 text-2xl hover:text-blue-900"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
