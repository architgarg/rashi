import Section from "./ui/Section";
import Card from "./ui/Card";
import { resumeData } from "@/lib/content";

export default function AdditionalInfo() {
  return (
    <Section id="additional-info" className="bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 text-center">
        Additional Information
      </h2>
      <div className="max-w-3xl mx-auto">
        <Card hover>
          <ul className="space-y-4">
            {resumeData.additionalInfo.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-[#4a4a4a]"
              >
                <span className="text-[#7a8f7f] mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
