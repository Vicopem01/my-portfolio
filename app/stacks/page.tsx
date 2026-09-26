import Link from "next/link";
import Image from "next/image";
import Back from "@/public/svgs/exit.svg";
import {
  TECHNOLOGIES,
  DEVOPS_TECHNOLOGIES,
  MANAGER_TECHNOLOGIES,
} from "@/constant";
import { instrumentSerif } from "@/utils/fonts";

const GROUPS = [
  { index: "01", title: "Full-Stack Developer", href: "/developer", items: TECHNOLOGIES },
  { index: "02", title: "DevOps & Cloud Architect", href: "/devops", items: DEVOPS_TECHNOLOGIES },
  { index: "03", title: "Product Manager", href: "/manager", items: MANAGER_TECHNOLOGIES },
];

const Stacks = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h3 className="font-display">
        <Link
          href="/"
          className="text-xl flex items-center gap-2 hover:underline"
        >
          <Image
            src={Back}
            alt=""
            width={30}
            height={30}
            className="invert dark:invert-0"
          />
          Go Home
        </Link>
      </h3>

      <p className="mt-14 text-sm uppercase tracking-[0.3em] text-accent">
        Tools of the trade
      </p>
      <h2 className="font-display text-4xl md:text-6xl mt-2">
        Tech{" "}
        <span className={`${instrumentSerif.className} text-accent`}>
          stack
        </span>
      </h2>

      <div className="mt-12">
        {GROUPS.map((group) => (
          <section
            key={group.index}
            className="border-t border-neutral-200 dark:border-neutral-800 py-8"
          >
            <Link href={group.href} className="group flex items-baseline gap-4">
              <span className="text-sm font-medium tracking-widest text-accent">
                {group.index}
              </span>
              <span
                className={`text-2xl md:text-3xl font-medium transition-colors group-hover:text-accent ${instrumentSerif.className} group-hover:italic`}
              >
                {group.title}
              </span>
            </Link>
            <div className="flex flex-wrap gap-2 mt-5">
              {group.items.map((tech) => (
                <span
                  key={tech.name}
                  className="rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-1.5 text-sm text-neutral-700 dark:text-neutral-300"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Stacks;
