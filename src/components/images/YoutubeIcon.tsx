import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="3.875rem"
    height="3.875rem"
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={31} cy={31} r={31} fill="#fff" fillOpacity={0.15} />
      <circle cx={31} cy={31} r={29.5} stroke="#D8AD3D" strokeWidth={3} />
    </g>
    <path
      d="M44.143 24.937a3.342 3.342 0 0 0-2.35-2.354C39.705 22.009 31.352 22 31.352 22s-8.352-.01-10.441.539a3.413 3.413 0 0 0-2.355 2.37c-.55 2.088-.556 6.419-.556 6.419s-.005 4.352.541 6.419a3.341 3.341 0 0 0 2.351 2.353c2.11.573 10.44.583 10.44.583s8.353.009 10.441-.538a3.352 3.352 0 0 0 2.356-2.35c.552-2.087.556-6.416.556-6.416s.027-4.354-.542-6.442ZM28.68 35.34l.007-8 6.942 4.007-6.949 3.993Z"
      fill="#D8AD3D"
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
          result="effect1_backgroundBlur_265_571"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_265_571"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default SvgComponent
