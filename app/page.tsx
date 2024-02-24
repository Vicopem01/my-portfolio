import "./page.scss";
import Star from "@/public/images/Landing/star.png";
import Image from "next/image";
import Text from "@/public/svgs/text.svg";

const Landing = () => {
  return (
    <main className="relative md:py-16 py-10 main font-gilroymedium dark:text-white text-black">
      <div className="block md:hidden flex justify-between items-center custom-images my-12 mx-8">
        <span className="dark:invert-0 invert shaping-img">
          <Image src={Text} alt="" />
        </span>
        <Image src={Star} alt="" />
      </div>
      <div className="absolute text1 dark:invert-0 invert">
        <Image src={Text} alt="" />
      </div>
      <div className="absolute star2">
        <Image src={Star} alt="" className="ml-auto" />
      </div>
      <div className="container">
        <h1 className="text-5xl text-center px-2 lg:w-10/12 mx-auto font-gilroybold xl:text-9xl lg:text-7xl">
          I&#39;m Victor Ogunjobi 🤗
        </h1>
        <div className="block lg:text-2xl text-lg font-bold lg:my-14 my-8  text-center">
          <p>
            - Software Engineer <br /> - Full Stack Developer <br />- Machine
            Learning Engineer
          </p>
        </div>
        <p className="lg:w-9/12 text-center mx-auto text-base lg:text-xl">
          A seasoned software developer and AI enthusiast specializing in
          machine learning, frontend development, backend systems, and devops.
          Making an impact, one code at a time
        </p>
      </div>
      <div className="absolute text2 dark:invert-0 invert">
        <Image src={Text} alt="" />
      </div>
      <div className="absolute star1">
        <Image src={Star} alt="" />
      </div>
    </main>
  );
};

export default Landing;
