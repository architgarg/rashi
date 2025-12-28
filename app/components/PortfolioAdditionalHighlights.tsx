import { resumeData } from "@/lib/content";

export default function PortfolioAdditionalHighlights() {
  return (
    <div className="sm:px-8 mt-12 md:mt-24">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 mb-12">
              Additional Highlights
            </h2>
            <div className="max-w-xl">
              <div className="group relative">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <div className="relative z-10">
                  {resumeData.additionalInfo.highlights.map(
                    (highlight, index) => (
                      <p key={index} className="text-sm text-zinc-600 mb-2">
                        • {highlight}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
