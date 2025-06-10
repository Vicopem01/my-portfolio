import Aview1 from "@/public/images/Projects/aview-1.png";
import Aview2 from "@/public/images/Projects/aview-2.png";
import Aview3 from "@/public/images/Projects/aview-3.png";
import Aview4 from "@/public/images/Projects/aview-4.png";
import Cova1 from "@/public/images/Projects/cova-1.png";
import Cova2 from "@/public/images/Projects/cova-2.png";
import Cova3 from "@/public/images/Projects/cova-3.png";
import Cova4 from "@/public/images/Projects/cova-4.png";
import Sayswitch1 from "@/public/images/Projects/sayswitch-1.png";
import Sayswitch2 from "@/public/images/Projects/sayswitch-2.png";
import Sayswitch3 from "@/public/images/Projects/sayswitch-3.png";
import Sayswitch4 from "@/public/images/Projects/sayswitch-4.png";
import Natura1 from "@/public/images/Projects/natura-1.png";
import Natura2 from "@/public/images/Projects/natura-2.png";
import Natura3 from "@/public/images/Projects/natura-3.png";
import Dlhs1 from "@/public/images/Projects/d-lhs-1.png";
import Dlhs2 from "@/public/images/Projects/d-lhs-2.png";
import Dlhs3 from "@/public/images/Projects/d-lhs-3.png";
import Spaceet1 from "@/public/images/Projects/spaceet-1.png";
import Spaceet2 from "@/public/images/Projects/spaceet-2.png";
import Spaceet3 from "@/public/images/Projects/spaceet-3.png";
import Spaceet4 from "@/public/images/Projects/spaceet-4.png";
import { Timeline } from "@/components/UI/timeline";
import Carousel from "@/components/UI/Carousel";
import Link from "next/link";
import Image from "next/image";
import Back from "@/public/svgs/exit.svg";
import { DEVOPS_TECHNOLOGIES } from "@/constant";

const data = [
  {
    subTitle: "Late 2023",
    content: (
      <div>
        <p className="text-xl text-neutral-200">Go Natura</p>
        <p className="text-sm my-2 text-neutral-300">
          Unlock Government Grants and Transform Your Home! Get Expert Help
          Navigating Home Renovation, Incentives and Funding
        </p>

        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel alt="Natura" slides={[Natura1, Natura2, Natura3]} />
        </div>
      </div>
    ),
  },
  {
    subTitle: "2023",
    content: (
      <div>
        <p className="text-xl text-neutral-200">Aview International</p>
        <p className="text-sm my-2 text-neutral-300">
          Aview works with the top translators and voiceover talent so that you
          can quickly grow your international influence, A-View at a time.
        </p>

        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel
            alt="Aview International"
            slides={[Aview1, Aview2, Aview3, Aview4]}
          />
        </div>
      </div>
    ),
  },
  {
    subTitle: "2022",
    content: (
      <div>
        <p className="text-xl text-neutral-200">Cova (now called LifeCheck)</p>
        <p className="text-sm my-2 text-neutral-300">
          Cova helps you organize all your assets in one place, tracks your net
          worth and securely notify your loved ones in the event of an
          eventuality.
        </p>
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel alt="Cova" slides={[Cova1, Cova2, Cova3, Cova4]} />
        </div>
      </div>
    ),
  },
  {
    subTitle: "Late 2021",
    content: (
      <div>
        <p className="text-xl text-neutral-200">SaySwitch</p>
        <p className="text-sm my-2 text-neutral-300">
          A comprehensive, Feature-Rich Payment Solution for seamless offline
          and online transactions. Unlock a World of Possibilities with Our
          Seamless and Reliable Payment Solutions, Designed to Empower Your
          Business Growth
        </p>
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel
            alt="SaySwitch"
            slides={[Sayswitch1, Sayswitch2, Sayswitch3, Sayswitch4]}
          />
        </div>
      </div>
    ),
  },
  {
    subTitle: "Early 2021",
    content: (
      <div>
        <p className="text-xl text-neutral-200">Spaceet</p>
        <p className="text-sm my-2 text-neutral-300">
          Home of Luxury and Affordability Apartment, Hosting and Booking, Think
          luxury, Think Spaceet!
        </p>
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel
            alt="Spaceet"
            slides={[Spaceet1, Spaceet2, Spaceet3, Spaceet4]}
          />
        </div>
      </div>
    ),
  },
  {
    subTitle: "Late 2020",
    content: (
      <div>
        <p className="text-xl text-neutral-200">D-LHS</p>
        <p className="text-sm my-2 text-neutral-300">
          Grow your business, we will take care of your Logistics and Haulage
        </p>
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel alt="D-LHS" slides={[Dlhs1, Dlhs2, Dlhs3]} />
        </div>
      </div>
    ),
  },
];

const DevopsEngineer = () => {
  return (
    <div className="relative w-full bg-neutral-950">
      <h3 className="pt-10 text-center md:text-left w-11/12 mx-auto">
        <Link
          href="/"
          className="text-xl flex items-center gap-2 hover:underline"
        >
          <Image src={Back} alt="" width={30} height={30} />
          Go Home
        </Link>
        <br />
        <span className="text-xl font-semibold">💻 Tech Stack:</span>
      </h3>
      <div className="flex flex-wrap items-center justify-around w-11/12 mx-auto gap-4 p-4">
        {DEVOPS_TECHNOLOGIES.map((tech, index) => (
          <Image
            key={index}
            src={tech.src}
            alt={tech.alt}
            width={120}
            height={60}
            className="transition-transform hover:scale-125"
            title={tech.name}
          />
        ))}
      </div>
      <Timeline
        data={data}
        title="Product Management Timeline"
        desc="Started as a lead developer and transitioned over time"
      />
    </div>
  );
};

export default DevopsEngineer;
