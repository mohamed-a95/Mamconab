import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-sm py-4 text-center">
      <p>
        © {new Date().getFullYear()} Mamcon Stockholm AB. Alla rättigheter
        förbehållna.
      </p>
    </footer>
  );
};

export default Footer;
