// src/components/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`bg-white text-blue-600 px-6 py-3 rounded-md font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
