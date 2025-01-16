import "./page.scss";
import Star from "@/public/images/Landing/star.png";
import Image from "next/image";
import Text from "@/public/svgs/text.svg";

const Landing = () => {
  return (
    <main className="relative flex flex-col justify-between h-[88vh] overflow-hidden md:py-12 py-10 dark:text-white text-black text-center">
      <div>
        <div className="flex md:hidden justify-between items-center custom-images mb-6 mx-8">
          <span className="dark:invert-0 invert shaping-img">
            <Image src={Text} alt="" />
          </span>
          <Image src={Star} alt="" width={45} height={45} />
        </div>
        <div className="absolute text1 dark:invert-0 invert">
          <Image src={Text} alt="" width={120} height={70} />
        </div>
        <div className="absolute star2">
          <Image src={Star} alt="" width={60} height={60} />
        </div>
        <h1 className="text-6xl px-2 font-semibold lg:text-xxl md:mt-10">
          Victor Ogunjobi
          <br />
          <br />
          🤗
        </h1>
      </div>

      <div className="w-11/12 md:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-xl md:text-3xl place-content-center">
        <p>&#187; Founder</p>
        <p>&#187; Product Manager</p>
        <p>&#187; Machine Learning </p>
        <p>&#187; Full Stack Developer</p>
      </div>

      <div>
        <p className="text-center mt-12 text-base lg:text-lg">
          Batman with a Green Lantern&#39;s ring
        </p>
        <div className="absolute text2 dark:invert-0 invert">
          <Image src={Text} alt="" width={120} height={70} />
        </div>
        <div className="absolute star1">
          <Image src={Star} alt="" width={60} height={60} />
        </div>
      </div>
    </main>
  );
};

export default Landing;
