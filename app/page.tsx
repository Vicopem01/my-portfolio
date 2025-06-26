"use client";
import "./page.scss";
import { dockLinks } from "@/constant";
import React, { useState, useRef } from "react";
import { BackgroundBeams } from "@/components/UI/BackgroundBeam";
import { AnimatedTooltip } from "@/components/UI/Tooltip";
import BigText from "@/components/UI/BigText";
import { AnimatedModalDemo } from "@/components/UI/PortfolioOptions";
// import Button from "@/components/Button";

const Landing = () => {
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const nameRef = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });

    if (nameRef.current) {
      const letterSpans = nameRef.current.children;
      let newHoveredIndex = -1;
      // Check if mouse is over any letter of the name
      const nameRect = nameRef.current.getBoundingClientRect();
      if (
        event.clientX >= nameRect.left &&
        event.clientX <= nameRect.right &&
        event.clientY >= nameRect.top &&
        event.clientY <= nameRect.bottom
      ) {
        for (let i = 0; i < letterSpans.length; i++) {
          const span = letterSpans[i] as HTMLElement;
          const spanRect = span.getBoundingClientRect();
          if (
            event.clientX >= spanRect.left &&
            event.clientX <= spanRect.right &&
            event.clientY >= spanRect.top &&
            event.clientY <= spanRect.bottom
          ) {
            newHoveredIndex = i;
            break;
          }
        }
      }
      // Update hoveredIndex only if it changed
      if (hoveredIndex !== newHoveredIndex) {
        setHoveredIndex(newHoveredIndex);
      }
    } else {
      // If nameRef is not current (e.g., not rendered yet, or an issue), ensure no letter is hovered
      if (hoveredIndex !== -1) {
        setHoveredIndex(-1);
      }
    }
  };

  const handlePageMouseEnter = () => {
    setCursorVisible(true);
  };

  const handlePageMouseLeave = () => {
    setCursorVisible(false);
    setHoveredIndex(-1); // Also reset letter hover when mouse leaves the page area
  };

  return (
    <main className="relative flex flex-col justify-between h-screen dark:text-white text-black text-center">
      <div
        className="h-full w-full rounded-md relative flex flex-col items-center justify-center antialiased"
        onMouseMove={handleMouseMove}
        onMouseEnter={handlePageMouseEnter}
        onMouseLeave={handlePageMouseLeave}
      >
        <BigText ref={nameRef} hoveredIndex={hoveredIndex} />
        <AnimatedModalDemo />

        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-between max-w-4/10 min-w-[200px] px-4 py-2">
          {dockLinks.map((link, index: number) => (
            <a
              href={link.to}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="mx-5 w-10 h-10"
            >
              <AnimatedTooltip
                name={link.text}
                designation={link.designation}
                image={link.image}
              />
            </a>
          ))}
        </div>
        {cursorVisible && (
          <div
            className="fixed pointer-events-none z-[9999] border border-gray-300 rounded-full"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              width: "30px",
              height: "30px",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
        <BackgroundBeams />
      </div>
    </main>
  );
};

export default Landing;
