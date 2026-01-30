"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export default function Card({
  children,
  hover = false,
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-zee-bg-card border border-white/10 rounded-card p-6 ${
        hover ? "transition-colors hover:border-white/20" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
