import { plexMono } from "@/utils/fonts";
import { ReactNode } from "react";

const TerminalCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div
    className={`${plexMono.className} rounded-lg border border-neutral-800 bg-neutral-900/60 overflow-hidden`}
  >
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-neutral-800 bg-neutral-950">
      <span className="h-3 w-3 rounded-full bg-red-500/70" />
      <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
      <span className="h-3 w-3 rounded-full bg-green-500/70" />
      <span className="ml-2 text-xs text-neutral-500">{title}</span>
    </div>
    <div className="p-4 md:p-5 text-sm leading-relaxed">{children}</div>
  </div>
);

export const TermLine = ({ children }: { children: ReactNode }) => (
  <p className="text-neutral-400">
    <span className="text-accent mr-2">$</span>
    {children}
  </p>
);

export default TerminalCard;
