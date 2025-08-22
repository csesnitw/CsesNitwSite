import * as React from "react";
import { cn } from "@/lib/utils";

type BrandLogoProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

// Temporary placeholder logo SVG. Replace paths later with the official CSES NITW mark.
export default function BrandLogo({ size = 24, className, ...props }: BrandLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M295 540h209v50c-25.776.752-51.499 1.143-77.282 1.101q-6.99-.007-13.981-.008-13.13-.005-26.26-.021a47227 47227 0 0 0-29.988-.022q-30.745-.016-61.489-.05v50h129v50H295l1 101 208 1v50H295v-50h-52V590h52z"
        fill="#FFF"
      />
      <path
        d="M654 540h183v51H655v50h130v50h52v102h-52v50H602v-51h182V692H654v-50h-52v-52h52z"
        fill="#00B5C6"
      />
      <path
        d="M654 266h131v50h52v102h-52v50H602v-51h182V317H654zm-411-52h52l1 201 208 1v50H295v-50h-52zm411-49h183v51H654v50h-52v-51h52zm-359-2h209v50H295z"
        fill="#FFF"
      />
    </svg>
  );
}
