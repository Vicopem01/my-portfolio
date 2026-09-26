import Element1 from "@/public/images/Projects/element-1.png";
import Element2 from "@/public/images/Projects/element-2.png";
import Element3 from "@/public/images/Projects/element-3.png";
import Element4 from "@/public/images/Projects/element-4.png";
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

const Hl = ({ children }: { children: ReactNode }) => (
  <span className="text-accent font-semibold">{children}</span>
);

const data = [
  {
    subTitle: "2025",
    content: (
      <div>
        <p className="text-xl text-neutral-200">
          Element Fleet Management{" "}
          <span className="text-sm text-accent">Full Stack Developer</span>
        </p>
        <p className="text-sm my-2 text-neutral-300">
          Owning end-to-end design, development, and deployment of a full-stack
          Developer Portal with <Hl>Next.js</Hl>, <Hl>AWS SAM</Hl>, and{" "}
          <Hl>AWS Amplify</Hl>.
        </p>
        <ul className="text-sm text-neutral-400 space-y-1 list-none">
          <li>
            <span className="text-accent mr-2">—</span>Self-serve API
            documentation for internal and external teams via dynamic{" "}
            <Hl>OpenAPI/Swagger</Hl> rendering
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Scalable, independent
            serverless APIs built with <Hl>AWS SAM</Hl>
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Header-based routing with{" "}
            <Hl>Kong</Hl>, keeping a major API redesign backward compatible
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Modern auth system with{" "}
            <Hl>Auth0</Hl>, standardizing login flows across services
          </li>
        </ul>

        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel
            alt="Element Fleet Management"
            slides={[Element1, Element2, Element3, Element4]}
          />
        </div>
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
          <span className="text-sm text-accent">
            Founding Engineer & Solutions Architect
          </span>
        </p>
        <p className="text-sm my-2 text-neutral-300">
          Aview works with the top translators and voiceover talent so that you
          can quickly grow your international influence, A-View at a time.
        </p>
        <ul className="text-sm text-neutral-400 space-y-1 list-none">
          <li>
            <span className="text-accent mr-2">—</span>Designed, developed, and
            deployed <Hl>12 platforms</Hl>, driving a <Hl>12x</Hl> increase in
            delivery velocity
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Event-driven video
            pipeline with <Hl>90%+</Hl> transcription and dubbing accuracy
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Parallelized video
            editing microservices cut processing time by <Hl>85%</Hl>
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Real-time YouTube
            livestream dubbing with voice replication, lifting live engagement
            by <Hl>40%</Hl>
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
            <span className="text-accent mr-2">—</span>
            <Hl>React/React Native</Hl> apps backed by an{" "}
            <Hl>Apollo GraphQL</Hl> API
          </li>
          <li>
            <span className="text-accent mr-2">—</span>Re-architected 3 legacy
            web apps into modular component libraries with <Hl>70%</Hl> test
            coverage
          </li>
          <li>
            <span className="text-accent mr-2">—</span>
            <Hl>40%</Hl> front-end performance gain through lazy loading and
            bundle splitting
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
            <span className="text-accent mr-2">—</span>Three interconnected
            platforms (User, Host, Admin) for hosting, leasing, and profit
            tracking
          </li>
          <li>
            <span className="text-accent mr-2">—</span>
            <Hl>Redux</Hl> state management reduced front-end bugs by{" "}
            <Hl>30%</Hl>
          </li>
          <li>
            <span className="text-accent mr-2">—</span>
            <Hl>MongoDB</Hl> queries and indexes optimized to support{" "}
            <Hl>millions of records</Hl>
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
];

const sideProjects = [
  {
    name: "Maka Kids",
    stack: "React Native · Swift · NestJS · Python · GCP",
    href: "https://www.makakids.com/",
    desc: "Kids' streaming app with a Python AI pipeline that auto-reviews, scores, and ranks episodes to match each child's learning interests. Designed the scaling foundation; live on the App Store and Google Play.",
  },
  {
    name: "Macbook Clipboard Manager",
    stack: "Electron + Swift",
    href: "https://github.com/vicopem01/clipboard-manager",
    desc: "A lightweight macOS clipboard manager with menu bar integration, text and image history, and a native, non-invasive UX.",
  },
  {
    name: "Device Fingerprint",
    stack: "TypeScript · npm",
    href: "https://github.com/vicopem01/browser-imprint",
    desc: "A privacy-aware, dependency-free device fingerprinting library using canvas, WebGL, audio, and hardware signals — fully type-safe and published on npm.",
  },
  {
    name: "SRT to SSML Converter",
    stack: "TypeScript · npm",
    href: "https://github.com/vicopem01/srttossml",
    desc: "Converts SRT subtitles into AWS Polly-compatible SSML for precise pacing, pauses, and natural-sounding text-to-speech.",
  },
];

const Projects = () => {
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

      <div className="w-11/12 max-w-7xl mx-auto pt-10">
        <h2 className="font-display text-3xl md:text-5xl text-white">
          Side <span className="text-accent">Projects</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 py-8">
          {sideProjects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-neutral-800 rounded-xl p-6 transition-colors hover:border-accent"
            >
              <p className="text-xs tracking-widest uppercase text-accent">
                {project.stack}
              </p>
              <p className="text-xl text-neutral-200 mt-2 group-hover:text-accent transition-colors">
                {project.name}
              </p>
              <p className="text-sm text-neutral-400 mt-2">{project.desc}</p>
            </a>
          ))}
        </div>
      </div>

      <Timeline
        data={data}
        title="Full Stack Development Timeline"
        desc="From frontend foundations to founding-engineer and solutions-architecture roles"
      />
    </div>
  );
};

export default Projects;
