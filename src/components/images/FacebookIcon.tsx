import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || "3.875rem"}
    height={props.height || "3.875rem"}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={31} cy={31} r={31} fill="#fff" fillOpacity={0.15} />
      <circle cx={31} cy={31} r={29.5} stroke="#009CD9" strokeWidth={3} />
    </g>
    <path
      d="M33.095 44V32.16h4.146l.617-4.636h-4.763V24.57c0-1.338.387-2.254 2.38-2.254H38v-4.133A34.778 34.778 0 0 0 34.3 18c-3.664 0-6.18 2.156-6.18 6.113v3.402H24v4.636h4.128V44h4.967Z"
      fill="#009CD9"
    />
    <defs>
      <filter
        id="a"
        x={-14}
        y={-14}
        width={90}
        height={90}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={7} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_265_568"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_265_568"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default SvgComponent
