"use client";

import { ReactNode } from "react";
import classNames from "classnames";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  children,
  id,
  className,
  containerClassName,
}: SectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const hasOpacityOverride = className?.includes("opacity-");

  return (
    <section
      ref={ref as any}
      id={id}
      className={classNames(
        "py-16 md:py-24 transition-opacity duration-700",
        !hasOpacityOverride && (isIntersecting ? "opacity-100" : "opacity-0"),
        className
      )}
    >
      <div
        className={classNames(
          "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
