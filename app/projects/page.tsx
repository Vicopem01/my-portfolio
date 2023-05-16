import "./index.scss";
import { data } from "@/constant";
import Image from "next/image";
import Button from "@/components/Button";

const Projects = () => {
  return (
    <main className="p-6 md:p-12">
      <h3 className="text-3xl md:text-6xl font-bold mb-4">Previous Projects</h3>
      <div className="cardContainer flex">
        {data.map((card: any, index: number) => (
          <div className="block md:my-3 md:mx-9 m-2" key={index}>
            <div className="flex flex-col justify-start md:w-[25rem] w-full">
              <p className="mb-4 h-[5rem] text-sm md:text-base">
                {card.heading}
              </p>
              <Image
                src={card.img}
                alt=""
                className="md:w-[400px] md:h-[210px]"
              />
              <p className="text-xs my-2">{card.skills}</p>
              <Button text="Visit Site" href={card.link} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
