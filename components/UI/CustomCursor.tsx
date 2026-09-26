"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("custom-cursor");

    const handleMouseMove = (event: MouseEvent) => {
      setVisible(true);
      if (ref.current) {
        ref.current.style.left = `${event.clientX}px`;
        ref.current.style.top = `${event.clientY}px`;
      }
      const target = event.target as HTMLElement;
      setInteractive(
        !!target.closest?.("a, button, [data-clickable]")
      );
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`fixed pointer-events-none z-[9999] rounded-full border border-accent transition-[width,height,background-color,opacity] duration-200 [@media(hover:none)]:hidden ${
        visible ? "opacity-100" : "opacity-0"
      } ${interactive ? "bg-accent/30" : "bg-accent"}`}
      style={{
        width: interactive ? "48px" : "14px",
        height: interactive ? "48px" : "14px",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default CustomCursor;
