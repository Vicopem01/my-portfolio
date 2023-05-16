import Dock from "@/components/Dock/dock";
import React from "react";
import "./globals.css";

export const metadata = {
  title: "Victor O ~ Software Developer",
  description: "Full stack developer ~ Web and blockchain security enthusiat",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="transition-300 relative m-0 min-h-screen dark:text-white text-black">
        {children}
        <Dock />
      </body>
    </html>
  );
};

export default Layout;
