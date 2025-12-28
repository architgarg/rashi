import { resumeData } from "@/lib/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2">
              {resumeData.contact.name}
            </p>
            <p className="text-sm text-gray-400">
              {resumeData.contact.location}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>

          <div className="text-sm text-gray-400">
            © {currentYear} {resumeData.contact.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
