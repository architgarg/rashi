"use client";

import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
}

export default function Button({
  variant = "primary",
  size = "medium",
  children,
  className,
  href,
  target,
  rel,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    "cursor-pointer inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] focus:ring-[#1a1a1a]",
    secondary:
      "bg-[#7a8f7f] text-white hover:bg-[#6a7f6f] focus:ring-[#7a8f7f]",
    outline:
      "border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white focus:ring-[#1a1a1a]",
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const classes = classNames(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href && !onClick) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  if (href && onClick) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
