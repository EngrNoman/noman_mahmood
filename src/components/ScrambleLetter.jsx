import React, { useEffect, useState } from "react";

const ScrambleLetter = ({ text, duration = 1500, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const textArray = text.split("");
    const totalIterations = Math.ceil(duration / 40); // faster animation
    let count = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        const newText = textArray
          .map((char, idx) => {
            if (count / totalIterations > idx / textArray.length) return char;
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("");
        setDisplayText(newText);

        count++;
        if (count > totalIterations) clearInterval(interval);
      }, 40); // faster interval
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, duration, delay]);

  return <span>{displayText}</span>;
};

export default ScrambleLetter;
