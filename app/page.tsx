import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import AdditionalInfo from "./components/AdditionalInfo";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

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
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <AdditionalInfo />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
