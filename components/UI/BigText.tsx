import { sixCaps } from "@/utils/fonts";

interface BigTextProps {
  ref: React.Ref<HTMLHeadingElement>;
  hoveredIndex: number;
}

const BigText = ({ ref, hoveredIndex }: BigTextProps) => {
  const nameToAnimate = "VICTOR OGUNJOBI";
  const lastNameStart = nameToAnimate.indexOf(" ") + 1;

  return (
    <h1
      ref={ref}
      className={`${sixCaps.className} leading-0 font-semibold text-[52px] xs:text-phone md:text-tab lg:text-desktop flex cursor-default`}
      style={{ userSelect: "none" }} // Prevent text selection
    >
      {nameToAnimate.split("").map((char, index) => (
        <span
          key={index}
          className={`letter-animate ${
            index >= lastNameStart ? "text-outline" : ""
          } ${hoveredIndex === index ? "hovered text-accent" : ""}`}
          style={{ display: "inline-block", whiteSpace: "pre" }} // Preserve spaces, allow transform
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default BigText;
