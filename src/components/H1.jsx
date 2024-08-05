import React from 'react';
import { twMerge } from 'tailwind-merge';
export default function H1({ children, className }) {
  return (
    <h1 className={twMerge('text-4xl md:text-5xl', className)}>{children}</h1>
  );
}
