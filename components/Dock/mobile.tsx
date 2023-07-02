import "./dock.scss";
import { ThemeContext } from "@/context";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Avatar from "@/public/images/Dock/avatar.png";
import { Dark, dockLinks } from "@/constant";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";

const MobileDock = () => {
  const [profileActive, setProfileActive] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setProfileActive(false);
  }, [pathname]);

  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const outsideClick = () => setProfileActive(false);

  return (
    <div className="fixed right-5 mobile-dock bottom-10 block md:hidden">
      <OutsideClickHandler onOutsideClick={outsideClick}>
        {profileActive && (
          <div className="mobile-dock-expanded relative rounded-md bg-[rgba(0,0,0,0.95)] dark:bg-[rgba(30,30,30)] text-white">
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
                  />
                </a>
              ) : (
                <Link href={link.to} key={index}>
                  <span>{link.text}</span>
                  <Image
                    className="invert brightness-0 dark:invert-100"
                    src={link.image}
                    alt={link.text}
                  />
                </Link>
              )
            )}
            <button
              onClick={handleClick}
              className="flex items-center justify-between mb-5"
            >
              <span>Theme</span>
              <Dark />
            </button>
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
            <p className="text-base font-bold">Click me!</p>
          </div>
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default MobileDock;
