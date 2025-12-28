import { resumeData } from "@/lib/content";
import Card from "./ui/Card";
import Section from "./ui/Section";

export default function Education() {
  return (
    <Section id="education">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 text-center">
        Education
      </h2>
      <div className="max-w-2xl mx-auto">
        <Card hover>
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-2">
              {resumeData.education.degree}
            </h3>
            <p className="text-lg text-[#4a4a4a] mb-2">
              {resumeData.education.institution}
            </p>
            <p className="text-sm text-[#6a6a6a] mb-2">
              {resumeData.education.period}
            </p>
            {resumeData.education.cgpa && (
              <p className="text-base text-[#7a8f7f] font-medium">
                CGPA: {resumeData.education.cgpa}
              </p>
            )}
          </div>
        </Card>
      </div>
    </Section>
  );
}
