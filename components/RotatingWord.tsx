"use client";

import { useEffect, useState } from "react";

const words = ["Speed", "Clarity", "Deepwork", "Profit"];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 300);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        letterSpacing: "-0.025em",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.28s ease, transform 0.28s ease",
      }}
    >
      {words[index]}
    </span>
  );
}
