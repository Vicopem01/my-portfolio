"use client";
import React from "react";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "./AnimatedModal";
import Link from "next/link";
import { instrumentSerif } from "@/utils/fonts";

interface LinkButtonProps {
  text: string;
  href: string;
  index: string;
}
const LinkButton = ({ text, href, index }: LinkButtonProps) => (
  <Link
    href={href}
    className="group flex w-full items-baseline gap-4 border-b border-neutral-200 dark:border-neutral-800 py-4 text-left"
  >
    <span className="text-sm font-medium tracking-widest text-accent">
      {index}
    </span>
    <span
      className={`text-2xl md:text-4xl font-medium text-neutral-900 dark:text-neutral-200 transition-colors group-hover:text-accent ${instrumentSerif.className} group-hover:italic`}
    >
      {text}
    </span>
    <svg
      width="20"
      height="20"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-auto h-6 w-6 shrink-0 self-center text-accent opacity-100 transition-all duration-200 group-hover:translate-x-1 md:opacity-0 md:group-hover:opacity-100"
    >
      <path
        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  </Link>
);

export function AnimatedModalDemo() {
  return (
    <div className="py-10 flex items-center justify-center">
      <Modal>
        <ModalTrigger />

        <ModalBody>
          <ModalContent className="flex flex-col justify-center items-stretch flex-1 p-8 md:p-10">
            <LinkButton index="01" text="Full-Stack Developer" href="/developer" />
            <LinkButton index="02" text="Product Manager" href="/manager" />
            <LinkButton index="03" text="DevOps Engineer" href="/devops" />
            {/* <LinkButton index="04" text="Founder" href="/founder" /> */}
          </ModalContent>
          <div
            className={"flex justify-end p-4 bg-gray-100 dark:bg-neutral-900"}
          ></div>
        </ModalBody>
      </Modal>
    </div>
  );
}
