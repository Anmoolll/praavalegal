"use client";

import { Receipt, Briefcase, ListChecks, FileText } from "lucide-react";
import FloatingCard from "./FloatingCard";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#e8ebf2]">
      {/* Background blurred decorative shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-[5%] h-24 w-64 rotate-[-8deg] rounded-full bg-[#d0d4e4] opacity-60 blur-3xl" />
        <div className="absolute top-[8%] right-[10%] h-20 w-72 rotate-[6deg] rounded-full bg-[#d0d4e4] opacity-50 blur-3xl" />
        <div className="absolute top-[55%] left-[2%] h-16 w-48 rotate-[-5deg] rounded-full bg-[#d0d4e4] opacity-50 blur-3xl" />
        <div className="absolute bottom-[15%] right-[5%] h-20 w-56 rotate-[10deg] rounded-full bg-[#d0d4e4] opacity-50 blur-3xl" />
        <div className="absolute top-[30%] right-[3%] h-14 w-40 rotate-[-3deg] rounded-full bg-[#d0d4e4] opacity-40 blur-3xl" />
        <div className="absolute bottom-[35%] left-[15%] h-14 w-52 rotate-[4deg] rounded-full bg-[#d0d4e4] opacity-40 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 py-20 lg:flex-row lg:items-center lg:gap-12 lg:px-12 lg:py-0">
        {/* Left: Hero Text */}
        <div className="z-10 flex-1 max-w-xl lg:max-w-lg xl:max-w-xl">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem] xl:text-6xl lg:leading-[1.15]">
            <span className="text-[#8b8daf]">A single platform to </span>
            <span className="text-[#797DA7]">manage</span>
            <span className="text-[#8b8daf]"> every part of your </span>
            <span className="text-[#797DA7]">legal work</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#4361ee] sm:text-lg">
            Track matters, coordinate schedules, manage clients, centralize
            documents, and handle communication &ndash; all in one system.
          </p>
        </div>

        {/* Right: Floating Cards */}
        <div className="relative mt-16 h-[420px] w-full flex-1 lg:mt-0 lg:h-[520px] hidden sm:block">
          {/* Large blur blob behind cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-[#c5cbec] opacity-30 blur-3xl" />

          <FloatingCard
            color="#4361ee"
            rotation="8deg"
            icon={Receipt}
            label="Billing"
            position={{ top: "8%", right: "5%" }}
            animationDelay={0.1}
          />

          <FloatingCard
            color="#f0a030"
            rotation="-12deg"
            icon={Briefcase}
            label="Matters"
            position={{ top: "35%", left: "5%" }}
            animationDelay={0.25}
          />

          <FloatingCard
            variant="portal"
            color="#ddd8f0"
            rotation="-4deg"
            name="John Doe - Portal"
            message="Hey! Could you please review a document for me?"
            reference="MAT-2233 - 2 h ago"
            position={{ top: "36%", left: "35%" }}
            animationDelay={0.4}
          />

          <FloatingCard
            color="#1e1b3a"
            rotation="-6deg"
            icon={ListChecks}
            label="Tasks"
            position={{ bottom: "15%", left: "18%" }}
            animationDelay={0.55}
          />

          <FloatingCard
            color="#1e1b3a"
            rotation="-4deg"
            icon={FileText}
            label="Documents"
            position={{ bottom: "10%", right: "5%" }}
            animationDelay={0.7}
          />
        </div>
      </div>
    </section>
  );
}
