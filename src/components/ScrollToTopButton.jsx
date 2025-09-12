import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Track scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <div className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    )
  );
};

export default ScrollToTopButton;
