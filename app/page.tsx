import PortfolioAbout from "./components/PortfolioAbout";
import PortfolioAdditionalHighlights from "./components/PortfolioAdditionalHighlights";
import PortfolioContact from "./components/PortfolioContact";
import PortfolioEducation from "./components/PortfolioEducation";
import PortfolioExperience from "./components/PortfolioExperience";
import PortfolioFooter from "./components/PortfolioFooter";
import PortfolioHeader from "./components/PortfolioHeader";
import PortfolioHero from "./components/PortfolioHero";
import PortfolioSkills from "./components/PortfolioSkills";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rashi Agrawal",
    jobTitle: "Customer Operations Professional",
    email: "rashiagrawal2099@gmail.com",
    telephone: "+91-81075-98176",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Banasthali University",
    },
    knowsAbout: [
      "Customer Operations",
      "Quality Assurance",
      "Operations Management",
      "Process Optimization",
      "Remote Team Collaboration",
    ],
    url: "https://rashiagrawal.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex w-full">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100"></div>
          </div>
        </div>
        <div className="relative flex w-full flex-col">
          <PortfolioHeader />
          <div
            className="flex-none"
            style={{ height: "var(--content-offset, 4rem)" }}
          ></div>
          <main className="flex-auto">
            <PortfolioHero />
            <div id="about">
              <PortfolioAbout />
            </div>
            <div id="experience">
              <PortfolioExperience />
            </div>
            <div id="education">
              <PortfolioEducation />
            </div>
            <PortfolioAdditionalHighlights />
            <div id="skills">
              <PortfolioSkills />
            </div>
            <div id="contact">
              <PortfolioContact />
            </div>
            <PortfolioFooter />
          </main>
        </div>
      </div>
    </>
  );
}
