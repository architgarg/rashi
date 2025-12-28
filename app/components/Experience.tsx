"use client";

import { resumeData } from "@/lib/content";
import { useState } from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";
import Section from "./ui/Section";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Section id="experience" className="bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 text-center">
        Professional Experience
      </h2>
      <div className="space-y-8">
        {resumeData.experience.map((exp, index) => (
          <Card key={index} className="border-l-4 border-l-[#7a8f7f]" hover>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-1">
                  {exp.title}
                </h3>
                <p className="text-lg text-[#7a8f7f] font-medium mb-1">
                  {exp.company}
                </p>
                <p className="text-sm text-[#6a6a6a] mb-2">{exp.location}</p>
                <p className="text-sm text-[#6a6a6a]">
                  {exp.startDate} – {exp.endDate}
                </p>
              </div>
            </div>

            {exp.description && (
              <p className="text-[#4a4a4a] mb-4 italic">{exp.description}</p>
            )}

            {expandedIndex === index ? (
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-2">
                    Key Responsibilities:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-[#4a4a4a] ml-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {exp.impact && exp.impact.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a] mb-2">
                      Impact:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-[#4a4a4a] ml-2">
                      {exp.impact.map((impact, impactIndex) => (
                        <li key={impactIndex}>{impact.description}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.awards && exp.awards.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a] mb-2">
                      Awards:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.awards.map((award, awardIndex) => (
                        <span
                          key={awardIndex}
                          className="px-3 py-1 bg-[#7a8f7f]/10 text-[#7a8f7f] rounded-full text-sm font-medium border border-[#7a8f7f]/20"
                        >
                          {award.title} – {award.date}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setExpandedIndex(null)}
                  className="text-[#7a8f7f] hover:text-[#6a7f6f] text-sm font-medium mt-2"
                >
                  Show Less
                </button>
              </div>
            ) : (
              <button
                onClick={() => setExpandedIndex(index)}
                className="text-[#7a8f7f] hover:text-[#6a7f6f] text-sm font-medium mt-4"
              >
                Show More
              </button>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-[#4a4a4a] mb-4">
          Let's talk about how I can help your team
        </p>
        <Button
          variant="primary"
          size="medium"
          href={`mailto:${resumeData.contact.email}?subject=Let's Connect`}
        >
          Get in Touch
        </Button>
      </div>
    </Section>
  );
}
