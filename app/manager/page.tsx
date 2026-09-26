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
import { ReactNode } from "react";
import { instrumentSerif } from "@/utils/fonts";

const Hl = ({ children }: { children: ReactNode }) => (
  <span className={`${instrumentSerif.className} italic text-accent text-base`}>
    {children}
  </span>
);

const data = [
  {
    subTitle: "Present",
    content: (
      <div>
        <p className="text-xl text-neutral-200">
          Black Founder Network{" "}
          <span className="text-sm text-accent">Member · Toronto</span>
        </p>
        <ul className="text-sm text-neutral-400 space-y-1 list-none mt-2">
          <li>
            <span className="text-accent mr-2">—</span>
            <Hl>Mentoring</Hl> aspiring developers through talks, workshops, and
            1:1 sessions — from demo apps to scalable product architectures
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Leading{" "}
            <Hl>MVP design and development</Hl> for early-stage startups,
            accelerating time-to-market
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Speaking at events
            championing <Hl>diversity in tech</Hl> and coaching founders on
            pitch delivery
          </li>
        </ul>
      </div>
    ),
  },
  {
    subTitle: "Present",
    content: (
      <div>
        <p className="text-xl text-neutral-200">
          Innovation Boost Zone{" "}
          <span className="text-sm text-accent">Member · Toronto</span>
        </p>
        <ul className="text-sm text-neutral-400 space-y-1 list-none mt-2">
          <li>
            <span className="text-accent mr-2">—</span>Iterating on startup
            projects — refining <Hl>product ideas, business models</Hl>, and
            pitches
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Spearheading{" "}
            <Hl>MVP builds</Hl> so startups can test concepts in the market
            quickly
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Building community inside
            the incubator, encouraging idea-sharing across teams
          </li>
        </ul>
      </div>
    ),
  },
  {
    subTitle: "2025",
    content: (
      <div>
        <p className="text-xl text-neutral-200">
          Toronto Metropolitan University{" "}
          <span className="text-sm text-accent">
            M.Eng, Engineering Innovation
          </span>
        </p>
        <p className="text-sm my-2 text-neutral-300">
          Master of <Hl>Engineering Innovation</Hl> (2023 – 2025) — driving team
          success and pushing innovation from within.
        </p>
      </div>
    ),
  },
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
        <p className="text-xl text-neutral-200">
          Aview International{" "}
          <span className="text-sm text-accent">Founding Engineer</span>
        </p>
        <p className="text-sm my-2 text-neutral-300">
          Aview works with the top translators and voiceover talent so that you
          can quickly grow your international influence, A-View at a time.
        </p>
        <ul className="text-sm text-neutral-400 space-y-1 list-none">
          <li>
            <span className="text-accent mr-2">—</span>Led a team of{" "}
            <Hl>5 engineers and 6 interns</Hl> across 12 platforms
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Drove a <Hl>12x</Hl>{" "}
            increase in delivery velocity
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Owned product
            architecture for a modular media workflow supporting{" "}
            <Hl>35+ languages</Hl>, cutting turnaround time by <Hl>70%</Hl>
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Automated content
            pipelines processing <Hl>40K+ profiles/day</Hl>, generating{" "}
            <Hl>2.5x</Hl> more qualified leads
          </li>
        </ul>

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
        <p className="text-xl text-neutral-200">
          Cova (now called LifeCheck){" "}
          <span className="text-sm text-accent">Full Stack Developer</span>
        </p>
        <p className="text-sm my-2 text-neutral-300">
          Cova helps you organize all your assets in one place, tracks your net
          worth and securely notify your loved ones in the event of an
          eventuality.
        </p>
        <ul className="text-sm text-neutral-400 space-y-1 list-none">
          <li>
            <span className="text-accent mr-2">—</span>Analyzed{" "}
            <Hl>usage analytics</Hl> to redesign navigation flows, lowering task
            completion time
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Ran rapid product
            iterations on <Hl>real-time user feedback</Hl>, accelerating
            customer adoption
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Established Git
            workflows, code reviews, and CI/CD hooks for streamlined releases
          </li>
        </ul>
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
        <p className="text-xl text-neutral-200">
          Spaceet{" "}
          <span className="text-sm text-accent">Lead Software Developer</span>
        </p>
        <p className="text-sm my-2 text-neutral-300">
          Home of Luxury and Affordability Apartment, Hosting and Booking, Think
          luxury, Think Spaceet!
        </p>
        <ul className="text-sm text-neutral-400 space-y-1 list-none">
          <li>
            <span className="text-accent mr-2">—</span>Led{" "}
            <Hl>6 engineers and 3 designers</Hl> across three interconnected
            platforms (User, Host, Admin)
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Designed{" "}
            <Hl>UI/UX flows</Hl> with component-driven architecture and
            continuous feedback loops, improving engagement and retention
          </li>
        </ul>
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
  {
    subTitle: "2020",
    content: (
      <div>
        <p className="text-xl text-neutral-200">
          Olabisi Onabanjo University{" "}
          <span className="text-sm text-accent">B.Eng, Mechanical</span>
        </p>
        <p className="text-sm my-2 text-neutral-300">
          Bachelor of Engineering, Mechanical (2015 – 2020) — Ogun, Nigeria.
        </p>
      </div>
    ),
  },
];

const ProductManager = () => {
  return (
    <div className="relative w-full bg-neutral-950">
      <h3 className="font-display pt-10 text-center md:text-left w-11/12 mx-auto">
        <Link
          href="/"
          className="text-xl flex items-center gap-2 hover:underline"
        >
          <Image src={Back} alt="" width={30} height={30} />
          Go Home
        </Link>
      </h3>
      <Timeline
        data={data}
        title="Product & Leadership Timeline"
        desc="Leading teams, mentoring founders, and shipping products people use"
      />
    </div>
  );
};

export default ProductManager;
