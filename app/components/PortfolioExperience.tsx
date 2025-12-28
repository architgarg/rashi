import { resumeData } from "@/lib/content";

export default function PortfolioExperience() {
  return (
    <div className="sm:px-8 mt-12 md:mt-24">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 mb-12">
              Professional experience
            </h2>
            <div className="flex max-w-xl flex-col gap-16">
              {resumeData.experience.map((exp, index) => (
                <article
                  key={index}
                  className="group relative flex flex-col items-start"
                >
                  <h2 className="text-base font-semibold tracking-tight text-zinc-800">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                    <span className="relative z-10">{exp.title}</span>
                  </h2>
                  <time
                    className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 pl-3.5"
                    dateTime={exp.startDate}
                  >
                    <span
                      className="absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200"></span>
                    </span>
                    {exp.startDate} — {exp.endDate}
                  </time>
                  <p className="relative z-10 mt-2 text-sm font-medium text-zinc-600">
                    {exp.company} • {exp.location}
                  </p>
                  {exp.description && (
                    <p className="relative z-10 mt-2 text-sm text-zinc-600">
                      {exp.description}
                    </p>
                  )}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div className="relative z-10 mt-4">
                      <p className="text-xs font-medium text-zinc-500 mb-2">
                        Key Responsibilities:
                      </p>
                      <ul className="text-sm text-zinc-600 space-y-1">
                        {exp.responsibilities
                          .slice(0, 3)
                          .map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                  {exp.impact && exp.impact.length > 0 && (
                    <div className="relative z-10 mt-4">
                      <p className="text-xs font-medium text-zinc-500 mb-2">
                        Impact:
                      </p>
                      <ul className="text-sm text-zinc-600 space-y-1">
                        {exp.impact.map((impact, impactIndex) => (
                          <li key={impactIndex} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{impact.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {exp.awards && exp.awards.length > 0 && (
                    <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                      {exp.awards.map((award, awardIndex) => (
                        <span
                          key={awardIndex}
                          className="px-2 py-1 text-xs font-medium text-teal-600 bg-teal-50 rounded"
                        >
                          {award.title} ({award.date})
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
