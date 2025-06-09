import Godan from "@/public/images/Projects/godan.png";
import Spaceet from "@/public/images/Projects/spaceet.png";
// import Aview from "@/public/images/Projects/aview.png";
import Cova from "@/public/images/Projects/cova.png";
// import DLHS from "@/public/images/Projects/d-lhs.png";
// import SaySwitch from "@/public/images/Projects/sayswitch.png";

import LinkedIn from "@/public/images/Dock/linkedIn.svg";
import Mail from "@/public/images/Dock/mail.svg";
import GitHub from "@/public/images/Dock/github.png";

export const data = [
  // {
  //   heading:
  //     "Aview works with the top translators and voiceover talent so that you can quickly grow your international influence, A-View at a time.",
  //   img: Aview,
  //   skills: "Next JS • Node JS • AWS • Redis • Firebase • Python",
  //   link: "https://aviewint.com",
  // },
  {
    heading:
      "COVA gives you control of your wealth and ensures your assets never become unclaimed assets in the event of an eventuality.",
    img: Cova,
    skills: "React • TypeScript • GraphQL • SCSS • NestJS • AWS",
    link: "https://getcova.com",
  },
  // {
  //   heading:
  //     "A complete feature - rich payment solution for both offline and online acquiring",
  //   img: SaySwitch,
  //   skills: "Next JS • Node JS • Tailwind • MySQL",
  //   link: "https://www.sayswitchgroup.com",
  // },
  // {
  //   heading:
  //     "Grow your business, D-LHS will take care of your Logistics and Haulage",
  //   img: DLHS,
  //   skills: "Next JS • Javascript • Tailwind • ExpressJS",
  //   link: "https://d-lhs.co",
  // },
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
    to: "https://github.com/Vicopem01",
    text: "GitHub",
    external: true,
    image: GitHub,
    designation: "Open GitHub Profile",
  },
  {
    to: "https://www.linkedin.com/in/victor-ogunjobi/",
    text: "LinkedIn",
    external: true,
    image: LinkedIn,
    designation: "Open LinkedIn Profile",
  },
  {
    to: "mailto:vicopem@gmail.com?subject=Hi%Victor&body=I%20saw%20your%20portfolio%20and%20",
    text: "Email",
    external: true,
    image: Mail,
    designation: "Send an Email",
  },
];

export const TECHNOLOGIES = [
  {
    name: "Go",
    src: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
    alt: "Go",
  },
  {
    name: "GraphQL",
    src: "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white",
    alt: "GraphQL",
  },
  {
    name: "JavaScript",
    src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    alt: "JavaScript",
  },
  {
    name: "TypeScript",
    src: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    alt: "TypeScript",
  },
  {
    name: "Python",
    src: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    alt: "Python",
  },
  {
    name: "AWS",
    src: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
    alt: "AWS",
  },
  {
    name: "Firebase",
    src: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
    alt: "Firebase",
  },
  {
    name: "Google Cloud",
    src: "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white",
    alt: "Google Cloud",
  },
  {
    name: "Heroku",
    src: "https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white",
    alt: "Heroku",
  },
  {
    name: "Netlify",
    src: "https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=%2300C7B7",
    alt: "Netlify",
  },
  {
    name: "OVH",
    src: "https://img.shields.io/badge/ovh-%23123F6D.svg?style=for-the-badge&logo=ovh&logoColor=%23123F6D",
    alt: "OVH",
  },
  {
    name: "Render",
    src: "https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white",
    alt: "Render",
  },
  {
    name: "Vercel",
    src: "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
    alt: "Vercel",
  },
  {
    name: "Apollo GraphQL",
    src: "https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql",
    alt: "Apollo-GraphQL",
  },
  {
    name: "Chart.js",
    src: "https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white",
    alt: "Chart.js",
  },
  {
    name: "Node.js",
    src: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    alt: "NodeJS",
  },
  {
    name: "Next.js",
    src: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    alt: "Next JS",
  },
  {
    name: "NestJS",
    src: "https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white",
    alt: "NestJS",
  },
  {
    name: "Expo",
    src: "https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=%23D04A37",
    alt: "Expo",
  },
  {
    name: "React Native",
    src: "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    alt: "React Native",
  },
  {
    name: "React",
    src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    alt: "React",
  },
  {
    name: "Gunicorn",
    src: "https://img.shields.io/badge/gunicorn-%298729.svg?style=for-the-badge&logo=gunicorn&logoColor=white",
    alt: "Gunicorn",
  },
  {
    name: "Amazon DynamoDB",
    src: "https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white",
    alt: "AmazonDynamoDB",
  },
  {
    name: "PostgreSQL",
    src: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    alt: "Postgres",
  },
  {
    name: "Supabase",
    src: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white",
    alt: "Supabase",
  },
  {
    name: "MongoDB",
    src: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    alt: "MongoDB",
  },
  {
    name: "MySQL",
    src: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
    alt: "MySQL",
  },
  {
    name: "Redis",
    src: "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white",
    alt: "Redis",
  },
  {
    name: "Firebase Database",
    src: "https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34",
    alt: "Firebase",
  },
  {
    name: "Figma",
    src: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
    alt: "Figma",
  },
  {
    name: "NumPy",
    src: "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
    alt: "NumPy",
  },
  {
    name: "SciPy",
    src: "https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=white",
    alt: "Scipy",
  },
  {
    name: "PyTorch",
    src: "https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white",
    alt: "PyTorch",
  },
  {
    name: "Git",
    src: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
    alt: "Git",
  },
  {
    name: "GitHub",
    src: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
    alt: "GitHub",
  },
  {
    name: "GitLab",
    src: "https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white",
    alt: "GitLab",
  },
  {
    name: "GitHub Actions",
    src: "https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white",
    alt: "GitHub Actions",
  },
  {
    name: "Docker",
    src: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
    alt: "Docker",
  },
  {
    name: "FFmpeg",
    src: "https://shields.io/badge/FFmpeg-%23171717.svg?logo=ffmpeg&style=for-the-badge&labelColor=171717&logoColor=5cb85c",
    alt: "FFmpeg",
  },
];

export const MANAGER_TECHNOLOGIES = [
  {
    name: "Jira",
    src: "https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white",
    alt: "Jira",
  },
  {
    name: "Slack",
    src: "https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white",
    alt: "Slack",
  },
  {
    name: "Notion",
    src: "https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white",
    alt: "Notion",
  },
  {
    name: "Figma",
    src: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
    alt: "Figma",
  },
  {
    name: "Miro",
    src: "https://img.shields.io/badge/Miro-050038?style=for-the-badge&logo=Miro&logoColor=white",
    alt: "Miro",
  },
  {
    name: "Google Analytics",
    src: "https://img.shields.io/badge/Google%20Analytics-E37400?style=for-the-badge&logo=google%20analytics&logoColor=white",
    alt: "Google Analytics",
  },
  {
    name: "Hotjar",
    src: "https://img.shields.io/badge/hotjar-FD3A5C?style=for-the-badge&logo=hotjar&logoColor=white",
    alt: "Hotjar",
  },
  {
    name: "Monday.com",
    src: "https://img.shields.io/badge/Monday.com-FF3D57?style=for-the-badge&logo=monday.com&logoColor=white",
    alt: "Monday.com",
  },
  {
    name: "Trello",
    src: "https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white",
    alt: "Trello",
  },
  {
    name: "Linear",
    src: "https://img.shields.io/badge/Linear-5E6AD2?style=for-the-badge&logo=linear&logoColor=white",
    alt: "Linear",
  },
  {
    name: "GitHub",
    src: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
    alt: "GitHub",
  },
  {
    name: "GitLab",
    src: "https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white",
    alt: "GitLab",
  },
  {
    name: "Postman",
    src: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
    alt: "Postman",
  },
  {
    name: "Firebase",
    src: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
    alt: "Firebase",
  },
  {
    name: "Intercom",
    src: "https://img.shields.io/badge/Intercom-005FFF?style=for-the-badge&logo=intercom&logoColor=white",
    alt: "Intercom",
  },
  {
    name: "Zendesk",
    src: "https://img.shields.io/badge/Zendesk-03363D?style=for-the-badge&logo=Zendesk&logoColor=white",
    alt: "Zendesk",
  },
  {
    name: "Zapier",
    src: "https://img.shields.io/badge/zapier-FF4A00?style=for-the-badge&logo=zapier&logoColor=white",
    alt: "Zapier",
  },
  {
    name: "Airtable",
    src: "https://img.shields.io/badge/Airtable-18BFFF?style=for-the-badge&logo=Airtable&logoColor=white",
    alt: "Airtable",
  },
  {
    name: "Google Sheets",
    src: "https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white",
    alt: "Google Sheets",
  },
  {
    name: "Excel",
    src: "https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white",
    alt: "Microsoft Excel",
  },
];

export const DEVOPS_TECHNOLOGIES = [
  {
    name: "Docker",
    src: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
    alt: "Docker",
  },
  {
    name: "Kubernetes",
    src: "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white",
    alt: "Kubernetes",
  },
  {
    name: "AWS",
    src: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
    alt: "AWS",
  },
  {
    name: "Azure",
    src: "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white",
    alt: "Azure",
  },
  {
    name: "Google Cloud",
    src: "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white",
    alt: "Google Cloud Platform",
  },
  {
    name: "Terraform",
    src: "https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white",
    alt: "Terraform",
  },
  {
    name: "Ansible",
    src: "https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&logoColor=white",
    alt: "Ansible",
  },
  {
    name: "Jenkins",
    src: "https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white",
    alt: "Jenkins",
  },
  {
    name: "GitHub Actions",
    src: "https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white",
    alt: "GitHub Actions",
  },
  {
    name: "GitLab CI",
    src: "https://img.shields.io/badge/gitlab%20ci-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white",
    alt: "GitLab CI",
  },
  {
    name: "Datadog",
    src: "https://img.shields.io/badge/datadog-%23632CA6.svg?style=for-the-badge&logo=datadog&logoColor=white",
    alt: "Datadog",
  },
  {
    name: "Nginx",
    src: "https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white",
    alt: "Nginx",
  },
  {
    name: "Apache",
    src: "https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white",
    alt: "Apache",
  },
  {
    name: "Redis",
    src: "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white",
    alt: "Redis",
  },
  {
    name: "PostgreSQL",
    src: "https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    alt: "PostgreSQL",
  },
  {
    name: "MySQL",
    src: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
    alt: "MySQL",
  },
  {
    name: "MongoDB",
    src: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    alt: "MongoDB",
  },
  {
    name: "Linux",
    src: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
    alt: "Linux",
  },
  {
    name: "Ubuntu",
    src: "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white",
    alt: "Ubuntu",
  },
  {
    name: "CentOS",
    src: "https://img.shields.io/badge/cent%20os-002260?style=for-the-badge&logo=centos&logoColor=F0F0F0",
    alt: "CentOS",
  },
  {
    name: "Helm",
    src: "https://img.shields.io/badge/Helm-0F1689?style=for-the-badge&logo=Helm&labelColor=0F1689",
    alt: "Helm",
  },
  {
    name: "Vault",
    src: "https://img.shields.io/badge/vault-FFEC6E?style=for-the-badge&logo=vault&logoColor=white",
    alt: "HashiCorp Vault",
  },
  {
    name: "Bash",
    src: "https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white",
    alt: "Shell Script",
  },
  {
    name: "Python",
    src: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    alt: "Python",
  },
  {
    name: "Go",
    src: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
    alt: "Go",
  },
];
