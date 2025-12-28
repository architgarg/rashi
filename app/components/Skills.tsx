import { resumeData } from "@/lib/content";
import Card from "./ui/Card";
import Section from "./ui/Section";

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 text-center">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.skills.map((category, index) => (
          <Card key={index} hover className="h-full">
            <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-[#fafafa] text-[#4a4a4a] rounded-full text-sm border border-[#e5e5e5]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
