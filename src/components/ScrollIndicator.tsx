import React, { useState, useEffect } from "react";

const ScrollIndicator: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Hur långt sidan är skrollad
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight; // Total höjd som kan skrollas
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollWidth(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-[80px] left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-yellow-500"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
