// components/Footer.js

import React from "react";

import { useState, useEffect } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const bodyHeight = document.body.offsetHeight;

      if ((scrollPosition >= bodyHeight - 100) | (scrollPosition <= 0)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 text-gray-600 dark:text-gray-300 py-4 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <p class="lg:text-2xl">
          © {new Date().getFullYear()} Hitesh Choudhary. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
