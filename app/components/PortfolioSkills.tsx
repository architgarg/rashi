import { resumeData } from "@/lib/content";

export default function PortfolioSkills() {
  return (
    <div className="sm:px-8 mt-12 md:mt-24">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 mb-12">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {resumeData.skills.map((category, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800 mb-3">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs font-medium text-zinc-600 bg-zinc-100 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
