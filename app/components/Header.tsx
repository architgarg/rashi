"use client";

import { resumeData } from "@/lib/content";
import { useEffect, useState } from "react";
import Button from "./ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-semibold text-[#1a1a1a] hover:text-[#7a8f7f] transition-colors"
          >
            {resumeData.contact.name.split(" ")[0]}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors"
            >
              Experience
            </button>
            <Button
              variant="outline"
              size="small"
              href={`mailto:${resumeData.contact.email}`}
            >
              Contact
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="outline"
              size="small"
              href={`mailto:${resumeData.contact.email}`}
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
