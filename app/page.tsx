import "./page.scss";
import { Text } from "@/constant";
import Star from "@/assets/star.png";
import Construction from "@/assets/images/Landing/construction.gif";
import Image from "next/image";

const Landing = () => {
  return (
    <>
      <main className="relative py-16 main font-gilroymedium">
        <div className="block md:hidden flex justify-between items-center custom-images my-12 mx-8">
          <Text />
          <Image src={Star} alt="" />
        </div>
        <div className="absolute text1">
          <Text />
        </div>
        <div className="absolute star2">
          <Image src={Star} alt="" className="ml-auto" />
        </div>
        <div className="container">
          <h1 className="text-5xl text-center px-2 lg:w-10/12 mx-auto font-gilroybold xl:text-9xl lg:text-8xl">
            I&#39;`m Victor Ogunjobi 🤗 <br />A full stack developer.
          </h1>
          <p className="lg:w-9/12 text-center mx-auto pt-8">
            Passionate about high quality solutions for clients, coding to solve
            a problem by doing something better, faster, or easier. I ensure the
            product is involved in a process of continuous improvement and
            refinement to ensure that it is functioning at the highest level
            possible and achieving maximum client satisfaction.
          </p>
        </div>
        <div className="absolute text2">
          <Text />
        </div>
        <div className="absolute star1">
          <Image src={Star} alt="" />
        </div>
      </main>
      {/* <main className="absolute-center mobile">
        <Image src={Construction} alt="" />

        <h1 className="center">
          Construction is ongoing for the mobile view 🥲
          <br />
          <br />
          Use a desktop or check back later, thank you 💜
        </h1>
      </main> */}
    </>
  );
};

export default Landing;