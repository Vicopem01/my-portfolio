"use client";
import { Dark } from "@/constant";
import "./dock.scss";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context";
import Avatar from "@/public/images/Dock/avatar.png";
import Stack from "@/public/images/Dock/stack.svg";
import Projects from "@/public/images/Dock/projects.svg";
import Twitter from "@/public/images/Dock/twitter.svg";
import LinkedIn from "@/public/images/Dock/linkedIn.svg";
import Home from "@/public/images/Dock/home.svg";
import Mail from "@/public/images/Dock/mail.svg";
import GitHub from "@/public/images/Dock/github-dark.png";
import Link from "next/link";
import Image from "next/image";

const dockLinks = [
  {
    to: "/",
    text: "Home",
    image: Home,
  },
  {
    to: "/projects",
    text: "Projects",
    image: Projects,
  },
  {
    to: "/stacks",
    text: "Stacks",
    image: Stack,
  },
  {
    to: "https://github.com/Vicopem01",
    text: "GitHub",
    external: true,
    image: GitHub,
  },
  {
    to: "https://www.linkedin.com/in/victor-ogunjobi/",
    text: "LinkedIn",
    external: true,
    image: LinkedIn,
  },
  {
    to: "https://twitter.com/vicopem",
    text: "Twitter",
    external: true,
    image: Twitter,
  },
  {
    to: "mailto:vicopem@gmail.com?subject=Hi%Victor&body=I%20saw%20your%20portfolio%20and%20",
    text: "Mail",
    external: true,
    image: Mail,
  },
];

const Dock = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const windowResize = () => {
    setIsMobile(window.innerWidth < 768 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("resize", windowResize);
  }, []);

  return isMobile ? <MobileDock /> : <DesktopDock />;
};

export default Dock;

const DesktopDock = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 bottom-0 flex dock-hover bg-[rgba(34,34,34,0.2)] dark:bg-[rgba(114,114,114,0.17)] ${theme}`}
    >
      <div className="circle">
        <Image src={Avatar} alt="avatar" />
      </div>
      <span className="line"></span>

      {dockLinks.map((link, index: number) =>
        link.external ? (
          <a
            href={link.to}
            target="_blank"
            rel="noopener noreferrer"
            className="github"
            key={index}
          >
            <p>{link.text}</p>
            <Image
              className="invert brightness-0 dark:invert-100"
              src={link.image}
              alt={link.text}
              width={30}
            />
          </a>
        ) : (
          <Link href={link.to} key={index}>
            <Image
              className="invert brightness-0 dark:invert-100"
              src={link.image}
              alt={link.text}
              width={30}
            />
            <p>{link.text}</p>
          </Link>
        )
      )}
      <span className="line"></span>

      <button onClick={handleClick}>
        <p>Theme</p>
        <Dark />
      </button>
    </div>
  );
};
const MobileDock = () => {
  const [profileActive, setProfileActive] = useState<boolean>(false);

  return (
    <div className="fixed left-10 mobile-dock bottom-10">
      {profileActive && (
        <div className="mobile-dock-expanded relative rounded-md bg-[rgba(34,34,34,0.2)] dark:bg-[rgba(114,114,114,0.17)]">
          {dockLinks.map((link, index: number) =>
            link.external ? (
              <a
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <Image
                  className="invert brightness-0 dark:invert-100"
                  src={link.image}
                  alt={link.text}
                />
                <p>{link.text}</p>
              </a>
            ) : (
              <Link href={link.to} key={index}>
                <Image
                  className="invert brightness-0 dark:invert-100"
                  src={link.image}
                  alt={link.text}
                />
                <p>{link.text}</p>
              </Link>
            )
          )}
          <div
            className="dock-profile profile-active"
            onClick={() => setProfileActive(false)}
          >
            <Image src={Avatar} alt="avatar" />
            <p className="text-black dark:text-white">Close</p>
          </div>
        </div>
      )}
      {!profileActive && (
        <div
          className="dock-profile profile-dormant animate-bounce"
          onClick={() => setProfileActive(true)}
        >
          <Image src={Avatar} alt="avatar" />
        </div>
      )}
    </div>
  );
};
