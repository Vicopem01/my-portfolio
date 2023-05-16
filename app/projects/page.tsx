import "./index.scss";
import Dock from "../../components/Dock/dock";
import { data } from "@/constant";
import Cards from "@/components/Card";
import "./index.scss";

const Projects = () => {
  return (
    <main className="main">
      <div>
        <h3 className="text-6xl font-bold">Featured Projects</h3>
        {/* <p className="text-[rgba(255,255,255,0.2)] pl-24 pb-8 text-8xl">
          Projects
        </p> */}
      </div>
      <div className="cardContainer flex">
        {data.map((card, index) => (
          <Cards
            heading={card.heading}
            img={card.img}
            skills={card.skills}
            link={card.link}
            key={index}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
