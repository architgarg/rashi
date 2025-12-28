import { resumeData } from "@/lib/content";

export default function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 flex-none">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pt-10 pb-16">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800">
                    <a href="#about" className="transition hover:text-teal-500">
                      About
                    </a>
                    <a
                      href="#experience"
                      className="transition hover:text-teal-500"
                    >
                      Experience
                    </a>
                    <a
                      href="#skills"
                      className="transition hover:text-teal-500"
                    >
                      Skills
                    </a>
                    <a
                      href="#education"
                      className="transition hover:text-teal-500"
                    >
                      Education
                    </a>
                    <a
                      href="#contact"
                      className="transition hover:text-teal-500"
                    >
                      Contact
                    </a>
                  </div>
                  <p className="text-sm text-zinc-400">
                    © {currentYear} {resumeData.contact.name}. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
