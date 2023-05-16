"use client";
import {
  Dark,
  Home,
  LinkedIn,
  Mail,
  Projects,
  Twitter,
  TechStack,
} from "@/constant/svgs";
import classes from "./dock.module.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/context";
import Avatar from "@/assets/images/Dock/avatar.png";
import GithubLight from "@/assets/images/Dock/github-light.png";
import GithubDark from "@/assets/images/Dock/github-dark.png";
import Link from "next/link";
import Image from "next/image";

const Dock = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <div className={`flex ${classes.container} ${classes[theme]}`}>
      <div className={classes.circle}>
        <Image src={Avatar} alt="avatar" />
      </div>
      <span className={classes.line}></span>
      <Link href="/">
        <p>Home</p>
        <Home />
      </Link>
      <Link href="/projects">
        <p>Projects</p>
        <Projects />
      </Link>
      <Link href="/projects">
        <p>Tech - Stack</p>
        <TechStack />
      </Link>
      <a
        href="https://github.com/Vicopem01"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.github}
      >
        <p>GitHub</p>
        {theme === "dark" ? (
          <Image src={GithubLight} alt="GitHub" />
        ) : (
          <Image src={GithubDark} alt="GitHub" />
        )}
      </a>
      <span className={classes.line}></span>
      <a
        href="https://www.linkedin.com/in/victor-ogunjobi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>LinkedIn</p>
        <LinkedIn />
      </a>
      <a
        href="https://twitter.com/vicopem"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Twitter</p>
        <Twitter />
      </a>
      <a
        href="mailto:vicopem@gmail.com?subject=Hi%Victor&body=I%20saw%20your%20portfolio%20and%20"
        rel="noopener noreferrer"
      >
        <p>Mail</p>
        <Mail />
      </a>
      <button onClick={handleClick}>
        <p>Theme</p>
        <Dark />
      </button>
    </div>
  );
};

export default Dock;
