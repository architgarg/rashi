import { resumeData } from "@/lib/content";
import Section from "./ui/Section";

export default function About() {
  return (
    <Section id="about" className="bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 text-center">
          About
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-[#2a2a2a] text-lg leading-relaxed text-center">
            {resumeData.summary}
          </p>
          <p className="text-[#6a6a6a] text-base mt-6 text-center">
            Experienced in ticket‑based support workflows, quality reviews, and
            cross‑functional collaboration. Seeking remote roles in customer
            operations, research support, video quality review, and UX or
            service operations.
          </p>
        </div>
      </div>
    </Section>
  );
}
