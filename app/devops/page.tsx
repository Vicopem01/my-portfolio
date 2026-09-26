import Aview1 from "@/public/images/Projects/aview-1.png";
import Aview2 from "@/public/images/Projects/aview-2.png";
import Aview3 from "@/public/images/Projects/aview-3.png";
import Aview4 from "@/public/images/Projects/aview-4.png";
import { Timeline } from "@/components/UI/timeline";
import Carousel from "@/components/UI/Carousel";
import TerminalCard, { TermLine } from "@/components/UI/TerminalCard";
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
          Cloud-native delivery on AWS for an enterprise Developer Portal.
        </p>
        <TerminalCard title="element-fleet — production">
          <TermLine>
            serverless deploys via <Hl>AWS SAM</Hl> + <Hl>AWS Amplify</Hl> —
            high availability, rapid iteration
          </TermLine>
          <TermLine>
            header-based routing with <Hl>Kong</Hl> — zero customer disruption
            through a major API redesign
          </TermLine>
          <TermLine>
            standardized auth across services with <Hl>Auth0</Hl>
          </TermLine>
        </TerminalCard>
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
        <TerminalCard title="go-natura — production">
          <TermLine>
            full-stack delivery of the grants and incentives platform
          </TermLine>
          <TermLine>
            deployment automation and environment management end to end
          </TermLine>
        </TerminalCard>
      </div>
    ),
  },
  {
    subTitle: "2023",
    content: (
      <div>
        <p className="text-xl text-neutral-200">
          Aview International{" "}
          <span className="text-sm text-accent">Solutions Architect</span>
        </p>
        <p className="text-sm my-2 text-neutral-300">
          Architected and scaled cloud-native microservices across{" "}
          <Hl>AWS (Lambda, S3, CloudFront, Elastic Beanstalk)</Hl> and{" "}
          <Hl>GCP (GCE, Cloud Run, Cloud Functions)</Hl>.
        </p>
        <TerminalCard title="aview — media-pipeline">
          <TermLine>
            <Hl>40x scalability</Hl>, infra costs <Hl>-35%</Hl> —{" "}
            <Hl>Redis queues</Hl>, <Hl>circuit breakers</Hl>, retries
          </TermLine>
          <TermLine>
            event-driven pipeline: transcription → translation → dubbing →
            editing → distribution · <Hl>35+ languages</Hl> ·{" "}
            <Hl>99.9% uptime</Hl>
          </TermLine>
          <TermLine>
            parallelized microservices + distributed workers — processing time{" "}
            <Hl>-85%</Hl>
          </TermLine>
          <TermLine>
            fault-tolerant data flow — content turnaround <Hl>-70%</Hl>
          </TermLine>
        </TerminalCard>

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
        <TerminalCard title="cova — ci/cd">
          <TermLine>
            <Hl>Git-based workflows</Hl> — branching strategies, code reviews,{" "}
            <Hl>CI/CD hooks</Hl>
          </TermLine>
          <TermLine>
            agile deploys driven by real-time user feedback
          </TermLine>
        </TerminalCard>
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
        <TerminalCard title="spaceet — infra">
          <TermLine>
            automated <Hl>CI/CD pipelines</Hl> — <Hl>Git</Hl>,{" "}
            <Hl>Docker</Hl>, cloud services · deploy time <Hl>-99%</Hl>
          </TermLine>
          <TermLine>
            <Hl>high availability</Hl> under high-traffic loads
          </TermLine>
        </TerminalCard>
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
      </div>
    ),
  },
];

const DevopsEngineer = () => {
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
        title="DevOps & Cloud Architecture Timeline"
        desc="Cloud-native, event-driven, and serverless systems across AWS and GCP"
      />
    </div>
  );
};

export default DevopsEngineer;
