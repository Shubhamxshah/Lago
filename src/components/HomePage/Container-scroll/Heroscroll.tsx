"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className="flex space-x-4 md:block mx-auto">
              <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfKwXdwe3jIpPJuPs2Nmkw_3GqoUOEP1YxQ3B6frYfGgYJ11g/viewform?usp=send_form"}>
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-black text-black dark:text-white
               border-neutral-200 dark:border-slate-800"
                >
                  Book a demo
                </Button>
              </Link>
              <Link href={"https://getlago.com/docs/guide/introduction/welcome-to-lago"}>
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-black text-black dark:text-white
               border-neutral-200 dark:border-slate-800"
                >
                  Deploy open source
                </Button>
              </Link>
            </div>
          </>
        }
      >
        <Image
          src={`/shot1.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
