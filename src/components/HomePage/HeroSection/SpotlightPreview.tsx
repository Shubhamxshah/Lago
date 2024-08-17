import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import IsLive from "./IsLive";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export function SpotlightPreview() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col 
    items-center justify-center relative overflow-hidden mx-auto"
    >
      <div> 
        <br />
        <br />
      </div>
      <IsLive />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-10"
        fill="white"
      />
      <div className=" w-full text-center">
        <h1
          className="text-4xl  md:text-7xl font-bold bg-clip-text 
          text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 items-center p-4"
        >
          Welcome to the future <br /> of billing
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Lago offers a self-hosted and cloud, scalable and modular architecture
          for metering and usage-based billing, at every stage of your company.
        </p>
      </div>
    </div>
  );
}
