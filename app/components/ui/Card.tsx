import { ReactNode } from "react";
import classNames from "classnames";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={classNames(
        "rounded-lg bg-white p-6 shadow-sm transition-all duration-200",
        hover && "hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
