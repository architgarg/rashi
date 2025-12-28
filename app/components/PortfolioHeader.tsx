"use client";

import { useState } from "react";

export default function PortfolioHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col"
      style={{
        height: "var(--header-height, 4rem)",
        marginBottom: "var(--header-mb, 0)",
      }}
    >
      <div
        className="top-0 z-10 h-16 pt-6"
        style={{
          position:
            "var(--header-position, sticky)" as React.CSSProperties["position"],
        }}
      >
        <div
          className="sm:px-8 w-full"
          style={{
            position:
              "var(--header-inner-position, relative)" as React.CSSProperties["position"],
          }}
        >
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1"></div>
                  <div className="flex flex-1 justify-end md:justify-center">
                    {/* Desktop Navigation */}
                    <nav className="pointer-events-auto hidden md:block">
                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm">
                        {navLinks.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              className="relative block px-3 py-2 transition hover:text-teal-500"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    {/* Mobile Menu Button */}
                    <div className="pointer-events-auto md:hidden">
                      <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="rounded-full bg-white/90 p-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm hover:text-teal-500 transition"
                        aria-label="Toggle menu"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {mobileMenuOpen ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          )}
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-end md:flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden absolute top-full left-0 right-0 mt-2 mx-4 sm:mx-8">
            <nav className="rounded-lg bg-white/95 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur-sm">
              <ul className="py-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 hover:text-teal-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
