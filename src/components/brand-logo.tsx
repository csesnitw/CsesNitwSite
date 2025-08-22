import * as React from "react";
import { cn } from "@/lib/utils";

type BrandLogoProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

// Temporary placeholder logo SVG. Replace paths later with the official CSES NITW mark.
export default function BrandLogo({ size = 24, className, ...props }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CSES NITW Logo"
      className={cn("text-green-500", className)}
      {...props}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" stroke="currentColor" strokeWidth="1.5" />

      <rect x="6" y="7" width="2" height="10" rx="1" fill="currentColor" opacity="0.9" />
      <rect x="10" y="5" width="2" height="14" rx="1" fill="currentColor" opacity="0.85" />
      <rect x="14" y="9" width="2" height="8" rx="1" fill="currentColor" opacity="0.9" />
      <rect x="18" y="6.5" width="2" height="11" rx="1" fill="currentColor" opacity="0.8" />

      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
