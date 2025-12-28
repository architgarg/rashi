import { resumeData } from "@/lib/content";

export default function PortfolioAbout() {
  return (
    <div className="sm:px-8 mt-12 md:mt-24">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col gap-16">
                <article className="group relative flex flex-col items-start">
                  <h2 className="text-base font-semibold tracking-tight text-zinc-800">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                    <span className="relative z-10">About Me</span>
                  </h2>
                  <p className="relative z-10 mt-2 text-sm text-zinc-600">
                    {resumeData.summary}
                  </p>
                  <p className="relative z-10 mt-4 text-sm text-zinc-600">
                    Experienced in ticket‑based support workflows, quality
                    reviews, and cross‑functional collaboration. Seeking remote
                    roles in customer operations, research support, video
                    quality review, and UX or service operations.
                  </p>
                </article>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
