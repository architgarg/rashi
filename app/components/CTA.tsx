"use client";

import { resumeData } from "@/lib/content";
import { downloadResume } from "@/lib/utils";
import Button from "./ui/Button";
import Section from "./ui/Section";

export default function CTA() {
  return (
    <Section className="bg-[#1a1a1a] text-white">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Connect?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Let&apos;s discuss how I can contribute to your team&apos;s success.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="secondary"
            size="large"
            href={`mailto:${resumeData.contact.email}?subject=Let's Connect`}
          >
            Email Me
          </Button>
          <Button
            variant="outline"
            size="large"
            href="https://www.linkedin.com/in/rashi-agrawal-a2b9a627a/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-white text-white hover:bg-green-300/10 hover:text-[#1a1a1a]"
          >
            LinkedIn
          </Button>
          <Button
            variant="outline"
            size="large"
            onClick={downloadResume}
            className="border-white text-white hover:bg-green-300/10 hover:text-[#1a1a1a] cursor-pointer"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </Section>
  );
}
