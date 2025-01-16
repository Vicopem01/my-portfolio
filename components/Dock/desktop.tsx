import { useContext } from "react";
import "./dock.scss";
import { ThemeContext } from "@/context";
import Image from "next/image";
import { Dark, dockLinks } from "@/constant";
import Link from "next/link";
import Avatar from "@/public/images/Dock/avatar.png";
import { useRouter } from "next/navigation";

const DesktopDock = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { push } = useRouter();

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 bottom-0 dock-hover bg-[rgba(0,0,0,0.83)] dark:bg-[rgba(114,114,114,0.17)] hidden md:flex`}
    >
      <div className="circle" onClick={() => push("/")}>
        <Image src={Avatar} alt="avatar" />
      </div>
      <span className="line"></span>

      {dockLinks.map((link, index: number) =>
        link.external ? (
          <a
            href={link.to}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <span>{link.text}</span>
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
            <span>{link.text}</span>
          </Link>
        )
      )}
      <span className="line"></span>

      <button onClick={handleClick}>
        <span>Theme</span>
        <Dark />
      </button>
    </div>
  );
};

export default DesktopDock;
