"use client";
import MobileDock from "./mobile";
import DesktopDock from "./desktop";

const Dock = () => {
  return (
    <div>
      <MobileDock />
      <DesktopDock />
    </div>
  );
};

export default Dock;
