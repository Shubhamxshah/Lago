"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <div className="flex items-center justify-center space-x-10">

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem className="flex">
            <Image 
                src="/logo.svg"
                height="75"
                width={75}
                alt= "logo"
                /> <span className="text-xl font-semibold ml-2 pb-1">  Premium</span>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
          The optimal solution for teams with control and flexibility.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/shot5.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfKwXdwe3jIpPJuPs2Nmkw_3GqoUOEP1YxQ3B6frYfGgYJ11g/viewform"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
            Book a demo →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

<CardContainer className="inter-var">
<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
<CardItem className="flex">
            <Image 
                src="/logo.svg"
                height="75"
                width={75}
                alt= "logo"
                /> <span className="text-xl font-semibold ml-2 pb-1">  Open source</span>
        </CardItem>
  <CardItem
    as="p"
    translateZ="60"
    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
    >
    The optimal solution for small projects.
  </CardItem>
  <CardItem translateZ="100" className="w-full mt-4">
    <Image
      src="/shot5.png"
      height="1000"
      width="1000"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
      alt="thumbnail"
    />
  </CardItem>
  <div className="flex justify-between items-center mt-20">
    <CardItem
      translateZ={20}
      as={Link}
      href="https://getlago.com/docs/guide/introduction/welcome-to-lago"
      target="__blank"
      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
      >
      Deploy open source →
    </CardItem>
    <CardItem
      translateZ={20}
      as="button"
      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
      >
      Sign up
    </CardItem>
  </div>
</CardBody>
</CardContainer>
</div>
  );
}