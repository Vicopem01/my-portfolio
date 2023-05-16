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
    <div className="block w-[20rem] my-3 mx-9">
      <div className="flex flex-col justify-start ">
        <p className="text-xl">{heading}</p>
        <Image src={img} alt="" />
        <div>
          <span className="text-sm">{skills}</span>
        </div>
        <Button text="Visit Site" href={link} />
      </div>
    </div>
  );
};

export default Cards;
