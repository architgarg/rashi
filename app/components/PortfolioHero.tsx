import { resumeData } from "@/lib/content";
import Image from "next/image";

export default function PortfolioHero() {
  return (
    <div className="sm:px-8 mt-9">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="max-w-2xl">
              <div className="flex justify-start mb-6">
                <div className="relative w-20 h-20">
                  <Image
                    src="/head.png"
                    alt="Rashi"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                👋 I&apos;m Rashi!
              </h1>
              <p className="mt-6 text-base text-zinc-600">
                I&apos;m a Customer Operations & Content Support Analyst. I
                specialize in managing client communication, content quality
                review, and process optimization in remote, fast-paced
                environments.
              </p>
              <div className="mt-6 flex gap-6">
                <a
                  className="group -m-1 p-1"
                  aria-label="Email"
                  href={`mailto:${resumeData.contact.email}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 fill-zinc-400 transition group-hover:fill-teal-500"
                  >
                    <path
                      d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                    <path
                      d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="group -m-1 p-1"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/rashi-agrawal-a2b9a627a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 fill-zinc-400 transition group-hover:fill-teal-500"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  className="group -m-1 p-1"
                  aria-label="Phone"
                  href={`tel:${resumeData.contact.phone.replace(/\s/g, "")}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 fill-zinc-400 transition group-hover:fill-teal-500"
                  >
                    <path
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
