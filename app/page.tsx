"use client";
import "./page.scss";
import { dockLinks } from "@/constant";
import React, { useState, useRef } from "react";
import { BackgroundBeams } from "@/components/UI/BackgroundBeam";
import { AnimatedTooltip } from "@/components/UI/Tooltip";
import BigText from "@/components/UI/BigText";
// import { AnimatedModalDemo } from "@/components/UI/PortfolioOptions";
import { instrumentSerif, sixCaps } from "@/utils/fonts";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const MARQUEE_ITEMS = [
  "FULL-STACK",
  "CLOUD-NATIVE",
  "SYSTEM DESIGN",
  "MICROSERVICES",
  "SERVERLESS",
  "REACT",
  "NODE",
  "AWS",
  "GO",
  "TYPESCRIPT",
];

const PROOF_STATS = [
  { value: "", label: "Platforms designed & shipped" },
  { value: "", label: "Scalability, cloud-native" },
  { value: "", label: "Uptime, distributed systems" },
  { value: "", label: "Pipeline automation" },
];

const FEATURED_PROJECT = {
  name: "Maka Kids",
  stack: "React Native · Swift · NestJS · Python · GCP",
  href: "https://www.makakids.com/",
  desc: "Kids' streaming app (ages 0–6) where a Python AI pipeline auto-reviews, scores, and ranks every episode — matching math, language, and communication content to each child's interests. Designed and laid the scaling foundation; shipped to the App Store and Google Play.",
};

const PROJECTS = [
  {
    name: "Macbook Clipboard Manager",
    stack: "Electron + Swift",
    href: "https://github.com/vicopem01/clipboard-manager",
    desc: "Menu-bar macOS app tracking text & image clipboard history, with quick access, copy, and drag-drop.",
  },
  {
    name: "Device Fingerprint",
    stack: "TypeScript · npm",
    href: "https://github.com/vicopem01/browser-imprint",
    desc: "Privacy-aware, dependency-free fingerprinting library using canvas, WebGL, audio, and hardware signals.",
  },
  {
    name: "SRT to SSML Converter",
    stack: "TypeScript · npm",
    href: "https://github.com/vicopem01/srttossml",
    desc: "Converts SRT subtitles into AWS Polly-compatible SSML for natural, precisely-paced text-to-speech.",
  },
];

const ROLES = [
  {
    index: "01",
    title: "Full-Stack Developer",
    teaser: "Web, mobile, and everything in between",
    href: "/developer",
  },
  {
    index: "02",
    title: "DevOps & Cloud Architect",
    teaser: "Serverless and event-driven systems on AWS & GCP",
    href: "/devops",
  },
  {
    index: "03",
    title: "Product Manager",
    teaser: "Leading teams and mentoring founders",
    href: "/manager",
  },
];

const MarqueeStrip = () => (
  <div className="relative w-full overflow-hidden border-y border-neutral-200 dark:border-neutral-800 py-3 select-none">
    <div className="flex w-max animate-marquee whitespace-nowrap">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
          {MARQUEE_ITEMS.map((item) => (
            <span
              key={`${copy}-${item}`}
              className="mx-4 text-sm tracking-[0.3em] text-neutral-500 dark:text-neutral-400"
            >
              {item}
              <span className="ml-8 text-accent">—</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const Arrow = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 self-center text-accent opacity-100 transition-all duration-200 group-hover:translate-x-1 md:opacity-0 md:group-hover:opacity-100"
  >
    <path
      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

const Landing = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const nameRef = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
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

  const handlePageMouseLeave = () => {
    setHoveredIndex(-1); // Reset letter hover when mouse leaves the hero area
  };

  return (
    <main className="relative dark:text-white text-black text-center">
      {/* Hero */}
      <div
        className="landing-hero w-full relative flex flex-col items-center justify-center antialiased"
        onMouseMove={handleMouseMove}
        onMouseLeave={handlePageMouseLeave}
      >
        <BigText ref={nameRef} hoveredIndex={hoveredIndex} />
        <p className="mt-2 px-4 text-base md:text-xl tracking-wide text-neutral-600 dark:text-neutral-300">
          Software Engineer · Full-Stack Developer ·{" "}
          <span
            className={`${instrumentSerif.className} text-accent text-lg md:text-2xl`}
          >
            Solutions Architect
          </span>
        </p>
        <p className="mt-1 text-sm tracking-[0.25em] uppercase text-neutral-500 dark:text-neutral-500">
          Toronto, Canada
        </p>

        <Link
          href="#proof"
          aria-label="Scroll to see more"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </Link>

        <div className="grain" />
        <BackgroundBeams />
      </div>

      <MarqueeStrip />

      {/* Proof strip */}
      <section
        id="proof"
        className="border-b border-neutral-200 dark:border-neutral-800"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
          {PROOF_STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-14 px-6 border-neutral-200 dark:border-neutral-800 ${
                index % 2 === 1 ? "border-l" : ""
              } ${index > 1 ? "max-md:border-t" : ""} ${
                index > 0 ? "md:border-l" : ""
              }`}
            >
              <p
                className={`${sixCaps.className} text-6xl md:text-8xl text-accent leading-none`}
              >
                {stat.value}
              </p>
              <p className="mt-3 text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto w-full px-6 py-20 text-left border-b border-neutral-200 dark:border-neutral-800"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          Things I build for fun
        </p>
        <h2 className="font-display text-4xl md:text-6xl mt-2">
          Selected{" "}
          <span className={`${instrumentSerif.className} text-accent`}>
            projects
          </span>
        </h2>
        <a
          href={FEATURED_PROJECT.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 flex flex-col md:flex-row md:items-center gap-4 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 md:p-8 transition-colors hover:border-accent"
        >
          <span className="flex-1">
            <span className="block text-xs tracking-widest uppercase text-accent">
              {FEATURED_PROJECT.stack}
            </span>
            <span className="block text-2xl md:text-3xl font-medium text-neutral-900 dark:text-neutral-200 mt-2 transition-colors group-hover:text-accent">
              {FEATURED_PROJECT.name}
              <span className="ml-3 align-middle text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                Live on App Store & Google Play
              </span>
            </span>
            <span className="block text-sm text-neutral-500 dark:text-neutral-400 mt-2 max-w-2xl">
              {FEATURED_PROJECT.desc}
            </span>
          </span>
          <Arrow />
        </a>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-colors hover:border-accent"
            >
              <span className="flex items-start justify-between gap-4">
                <span className="text-xs tracking-widest uppercase text-accent">
                  {project.stack}
                </span>
                <Arrow />
              </span>
              <span className="block text-xl md:text-2xl font-medium text-neutral-900 dark:text-neutral-200 mt-3 transition-colors group-hover:text-accent">
                {project.name}
              </span>
              <span className="block text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                {project.desc}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Role entry points */}
      <section
        id="roles"
        className="max-w-4xl mx-auto w-full px-6 py-20 text-left"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          One career, three lenses
        </p>
        <h2 className="font-display text-4xl md:text-6xl mt-2">
          Explore by{" "}
          <span className={`${instrumentSerif.className} text-accent`}>
            role
          </span>
        </h2>
        <div className="mt-10">
          {ROLES.map((role) => (
            <Link
              key={role.href}
              href={role.href}
              className="group flex items-baseline gap-4 border-b border-neutral-200 dark:border-neutral-800 py-5"
            >
              <span className="text-sm font-medium tracking-widest text-accent">
                {role.index}
              </span>
              <span className="flex-1">
                <span
                  className={`block text-2xl md:text-4xl font-medium text-neutral-900 dark:text-neutral-200 transition-colors group-hover:text-accent ${instrumentSerif.className} group-hover:italic`}
                >
                  {role.title}
                </span>
                <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {role.teaser}
                </span>
              </span>
              <Arrow />
            </Link>
          ))}
        </div>
        <Link
          href="/stacks"
          className="group inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 transition-colors hover:text-accent"
        >
          View the full tech stack
          <span className="text-accent transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </section>

      {/* Contact / footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 flex flex-col items-center gap-6">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
          Say hello
        </p>
        <div className="flex items-start justify-center">
          {dockLinks.map((link, index: number) => (
            <a
              href={link.to}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="mx-3 xs:mx-5 flex flex-col items-center gap-1 group"
            >
              <span className="w-10 h-10 block">
                <AnimatedTooltip
                  name={link.text}
                  designation={link.designation}
                  image={link.image}
                />
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 transition-colors group-hover:text-accent">
                {link.text}
              </span>
            </a>
          ))}
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-600">
          © {new Date().getFullYear()} Victor Ogunjobi · Toronto, Canada
        </p>
      </footer>
    </main>
  );
};

export default Landing;
