import { data } from "@/constant";
import Image from "next/image";
import Button from "@/components/Button";

const Projects = () => {
  return (
    <main className="p-4 md:p-8 h-[81vh] overflow-scroll">
      <h3 className="text-3xl md:text-6xl font-bold mb-4">Previous Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 jusitfy-center items-center">
        {data.map((card: any, index: number) => (
          <div className="block md:m-4 m-2 px-4 py-8 border" key={index}>
            <div className="flex flex-col justify-start w-full">
              <p className="mb-4 h-[5rem] text-sm md:text-base">
                {card.heading}
              </p>
              <Image src={card.img} alt="" className="md:h-[210px] w-full" />
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
