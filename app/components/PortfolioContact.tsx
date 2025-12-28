import { resumeData } from "@/lib/content";

export default function PortfolioContact() {
  return (
    <div className="sm:px-8 mt-12 md:mt-24">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 mb-8">
              Get in Touch
            </h2>
            <p className="text-base text-zinc-600 mb-8">
              Let&apos;s discuss how I can contribute to your team&apos;s success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-4 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-medium text-zinc-50 hover:bg-zinc-700 active:bg-zinc-700 active:text-zinc-50/70 group"
                href={`mailto:${resumeData.contact.email}?subject=Let's Connect`}
              >
                Email Me
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4 stroke-zinc-400 transition group-hover:stroke-zinc-50 group-active:stroke-zinc-50"
                >
                  <path
                    d="M2.5 4.5h11M2.5 4.5l5.5 4.5 5.5-4.5M2.5 4.5v7h11v-7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
              <a
                className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-4 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-medium text-zinc-50 hover:bg-zinc-700 active:bg-zinc-700 active:text-zinc-50/70 group"
                href="https://www.linkedin.com/in/rashi-agrawal-a2b9a627a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4 stroke-zinc-400 transition group-hover:stroke-zinc-50 group-active:stroke-zinc-50"
                >
                  <path
                    d="M5.5 14.5h-3v-8h3v8zM4 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm10.5 9h-3v-4.5c0-1.5-.5-2-1.5-2s-1.5.5-1.5 2v4.5h-3v-8h3v1.5c.5-1 1.5-1.5 2.5-1.5s2.5.5 2.5 2.5v5.5z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
              <a
                className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-4 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-medium text-zinc-50 hover:bg-zinc-700 active:bg-zinc-700 active:text-zinc-50/70 group"
                href="/rashi_resume.pdf"
                download="rashi_resume.pdf"
              >
                Download CV
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4 stroke-zinc-400 transition group-hover:stroke-zinc-50 group-active:stroke-zinc-50"
                >
                  <path
                    d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

