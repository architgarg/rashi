"use client";

import { resumeData } from "@/lib/content";
import Button from "./ui/Button";
import Section from "./ui/Section";

export default function Hero() {
  return (
    <Section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 opacity-100">
      <div className="text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4">
          {resumeData.contact.name}
        </h1>
        <p className="text-xl md:text-2xl text-[#4a4a4a] mb-2">
          Customer Operations Professional
        </p>
        <p className="text-lg text-[#6a6a6a] mb-8">
          Quality & Process Excellence
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <span className="text-[#6a6a6a]">{resumeData.contact.location}</span>
          <span className="hidden sm:inline text-[#6a6a6a]">•</span>
          <a
            href={`tel:${resumeData.contact.phone.replace(/\s/g, "")}`}
            className="text-[#6a6a6a] hover:text-[#1a1a1a] transition-colors"
          >
            {resumeData.contact.phone}
          </a>
          <span className="hidden sm:inline text-[#6a6a6a]">•</span>
          <a
            href={`mailto:${resumeData.contact.email}`}
            className="text-[#6a6a6a] hover:text-[#1a1a1a] transition-colors"
          >
            {resumeData.contact.email}
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="large"
            href={`mailto:${resumeData.contact.email}?subject=Let's Connect`}
          >
            Schedule a Call
          </Button>
          <Button
            variant="outline"
            size="large"
            onClick={() => {
              console.log("Download resume clicked");
            }}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </Section>
  );
}
