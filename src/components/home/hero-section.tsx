"use client";

import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { TextEffect } from "@/components/ui/text-effect";

import { APP_NAME } from "@/config/app";
import JobFiltersSection from "../job/job-filters";

export function HeroSection() {
  const rotatingWords = [
    "Dream Job",
    "Next Role",
    "Career Path",
    "Perfect Fit",
    "Future",
  ];

  return (
    <section className="min-h-screen overflow-hidden pt-22 px-4 py-4">
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <div className="flex relative flex-row mt-6 justify-center flex-wrap gap-12">
        <div className="max-w-3xl w-full">
          <div className="mb-8">
            <h1 className="text-3xl overflow-hidden md:text-5xl font-semibold leading-tight mb-6 tracking-tight">
              Find Your <FlipWords words={rotatingWords} className="" /> <br />
              <span className="font-semibold text-muted-secondary">
                With {APP_NAME}
              </span>
            </h1>
            <TextEffect
              per="char"
              preset="fade"
              className="text-xl md:text-2xl text-muted-foreground  mx-auto leading-relaxed font-normal">
              Connect with top companies and discover opportunities that match
              your skills and ambitions
            </TextEffect>
          </div>

          <JobFiltersSection />
        </div>
        <div className="mt-12 md:mt-0">
          <Image
            src="/hero-bg.png"
            alt="Hero Background"
            width={400}
            height={400}
            priority
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
