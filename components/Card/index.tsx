import Image from "next/image";
import React from "react";
import Button from "../Button";

interface ICard {
  heading: string;
  img: string;
  skills: string;
  link: string;
}
const Cards = ({ heading, img, skills, link }: ICard) => {
  return (
    <div className="block my-3 mx-9">
      <div className="flex flex-col justify-start w-[20rem]">
        <p className="text-lg mb-4 h-[8rem]">{heading}</p>
        <Image src={img} alt="" />
        <div>
          <span className="text-xs">{skills}</span>
        </div>
        <Button text="Visit Site" href={link} />
      </div>
    </div>
  );
};

export default Cards;
