import Godan from "@/public/images/Projects/godan.png";
import Spaceet from "@/public/images/Projects/spaceet.png";
import Aview from "@/public/images/Projects/aview.png";
import Cova from "@/public/images/Projects/cova.png";
import DLHS from "@/public/images/Projects/d-lhs.png";
import SaySwitch from "@/public/images/Projects/sayswitch.png";

import Stack from "@/public/images/Dock/stack.svg";
import Projects from "@/public/images/Dock/projects.svg";
import LinkedIn from "@/public/images/Dock/linkedIn.svg";
import Home from "@/public/images/Dock/home.svg";
import Mail from "@/public/images/Dock/mail.svg";
import GitHub from "@/public/images/Dock/github-dark.png";

export const data = [
  {
    heading:
      "Aview works with the top translators and voiceover talent so that you can quickly grow your international influence, A-View at a time.",
    img: Aview,
    skills: "Next JS • Node JS • AWS • Redis • Firebase • Python",
    link: "https://aviewint.com",
  },
  {
    heading:
      "COVA gives you control of your wealth and ensures your assets never become unclaimed assets in the event of an eventuality.",
    img: Cova,
    skills: "React • TypeScript • GraphQL • SCSS • NestJS • AWS",
    link: "https://getcova.com",
  },
  {
    heading:
      "A complete feature - rich payment solution for both offline and online acquiring",
    img: SaySwitch,
    skills: "Next JS • Node JS • Tailwind • MySQL",
    link: "https://www.sayswitchgroup.com",
  },
  {
    heading:
      "Grow your business, D-LHS will take care of your Logistics and Haulage",
    img: DLHS,
    skills: "Next JS • Javascript • Tailwind • ExpressJS",
    link: "https://d-lhs.co",
  },
  {
    heading:
      "Spaceet provides a seamless user experience for apartment listing and short let bookings.",
    img: Spaceet,
    skills: "React JS • Node JS • CSS",
    link: "https://spaceet.com",
  },
  {
    heading:
      "Designing a parcel delivery experience for a Nigeria based company",
    img: Godan,
    skills: "Next JS • Firebase • Tailwind",
    link: "https://www.figma.com/file/LWFK2EBSjdCbCZfXg3ciV7/GoDan?type=design&node-id=0-1&t=6AOJXO1ZlM2HgUfN-0",
  },
];

export const Dark = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 5C7.9998 6.39064 8.41381 7.74983 9.18923 8.90421C9.96465 10.0586 11.0663 10.9559 12.3538 11.4816C13.6412 12.0073 15.0561 12.1376 16.4179 11.8559C17.7797 11.5742 19.0268 10.8933 20 9.9V10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0H10.1C9.43404 0.651125 8.90514 1.42896 8.54448 2.28768C8.18382 3.1464 7.99869 4.06862 8 5ZM2 10C1.99927 11.785 2.59553 13.5189 3.69389 14.926C4.79226 16.333 6.32963 17.3323 8.06141 17.7648C9.79319 18.1974 11.6199 18.0383 13.2508 17.313C14.8818 16.5876 16.2233 15.3377 17.062 13.762C15.5694 14.1136 14.0118 14.0781 12.5368 13.6587C11.0619 13.2394 9.7185 12.4501 8.63421 11.3658C7.54992 10.2815 6.76065 8.93814 6.34128 7.46318C5.92192 5.98821 5.88636 4.43056 6.238 2.938C4.95758 3.62014 3.88678 4.63766 3.14026 5.88164C2.39373 7.12562 1.99958 8.54921 2 10Z"
      fill="white"
    />
  </svg>
);

export const dockLinks = [
  {
    to: "/",
    text: "Home",
    image: Home,
  },
  {
    to: "/projects",
    text: "Projects",
    image: Projects,
  },
  {
    to: "/stacks",
    text: "Stacks",
    image: Stack,
  },
  {
    to: "https://github.com/Vicopem01",
    text: "GitHub",
    external: true,
    image: GitHub,
  },
  {
    to: "https://www.linkedin.com/in/victor-ogunjobi/",
    text: "LinkedIn",
    external: true,
    image: LinkedIn,
  },
  // {
  //   to: "https://twitter.com/vicopem",
  //   text: "Twitter",
  //   external: true,
  //   image: Twitter,
  // },
  {
    to: "mailto:vicopem@gmail.com?subject=Hi%Victor&body=I%20saw%20your%20portfolio%20and%20",
    text: "Email",
    external: true,
    image: Mail,
  },
];
