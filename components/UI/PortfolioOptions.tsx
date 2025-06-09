"use client";
import React from "react";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "./AnimatedModal";
import Link from "next/link";

interface LinkButtonProps {
  text: string;
  href: string;
}
const LinkButton = ({ text, href }: LinkButtonProps) => (
  <Link
    href={href}
    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200"
  >
    <span className="leading-none group-hover:underline">{text}</span>
    <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
      <svg
        width="20"
        height="20"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
      >
        <path
          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  </Link>
);

export function AnimatedModalDemo() {
  return (
    <div className="py-20 flex items-center justify-center">
      <Modal>
        <ModalTrigger />

        <ModalBody>
          <ModalContent className="flex flex-col justify-around items-center flex-1 p-8 md:p-10 text-6xl">
            <LinkButton text="FULL STACK DEVELOPER" href="/developer" />
            <LinkButton text="PRODUCT MANAGER" href="/manager" />
            <LinkButton text="DEVOPS ENGINEER" href="/devops" />
            {/* <LinkButton text="FOUNDER" href="/founder" /> */}
          </ModalContent>
          <div
            className={"flex justify-end p-4 bg-gray-100 dark:bg-neutral-900"}
          ></div>
        </ModalBody>
      </Modal>
    </div>
  );
}
