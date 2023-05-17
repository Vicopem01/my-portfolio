import "./page.scss";
import Star from "@/public/star.png";
import Image from "next/image";
import { Text } from "@/constant";

const Landing = () => {
  return (
    <main className="relative py-16 main font-gilroymedium dark:text-white text-black">
      <div className="block md:hidden flex justify-between items-center custom-images my-12 mx-8">
        <span className="dark:invert-0 invert">
          <Text />
        </span>
        <Image src={Star} alt="" />
      </div>
      <div className="absolute text1 dark:invert-0 invert">
        <Text />
      </div>
      <div className="absolute star2">
        <Image src={Star} alt="" className="ml-auto" />
      </div>
      <div className="container">
        <h1 className="text-5xl text-center px-2 lg:w-10/12 mx-auto font-gilroybold xl:text-9xl lg:text-7xl">
          I&#39;m Victor Ogunjobi 🤗 <br />A full stack developer.
        </h1>
        <p className="lg:w-9/12 text-center mx-auto pt-8">
          Passionate about high quality solutions for clients, coding to solve a
          problem by doing something better, faster, or easier. I ensure the
          product is involved in a process of continuous improvement and
          refinement to ensure that it is functioning at the highest level
          possible and achieving maximum client satisfaction.
        </p>
      </div>
      <div className="absolute text2 dark:invert-0 invert">
        <Text />
      </div>
      <div className="absolute star1">
        <Image src={Star} alt="" />
      </div>
    </main>
  );
};

export default Landing;
