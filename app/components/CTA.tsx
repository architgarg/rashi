"use client";

import Section from "./ui/Section";
import Button from "./ui/Button";
import { resumeData } from "@/lib/content";

export default function CTA() {
  return (
    <Section className="bg-[#1a1a1a] text-white">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Connect?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Let's discuss how I can contribute to your team's success.
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
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-white text-white hover:bg-white hover:text-[#1a1a1a]"
          >
            LinkedIn
          </Button>
          <Button
            variant="outline"
            size="large"
            href={`mailto:${resumeData.contact.email}?subject=Schedule a Call`}
            className="border-white text-white hover:bg-white hover:text-[#1a1a1a]"
          >
            Schedule Call
          </Button>
          <Button
            variant="outline"
            size="large"
            onClick={() => {
              console.log("Download resume clicked");
            }}
            className="border-white text-white hover:bg-white hover:text-[#1a1a1a]"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </Section>
  );
}
