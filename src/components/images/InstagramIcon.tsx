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
      <circle cx={31} cy={31} r={29.5} stroke="#B72C2C" strokeWidth={3} />
    </g>
    <path
      d="M42.36 26.633a8.133 8.133 0 0 0-.522-2.761 5.743 5.743 0 0 0-3.28-3.28 8.232 8.232 0 0 0-2.724-.523c-1.198-.054-1.578-.069-4.62-.069s-3.432 0-4.622.069c-.93.019-1.85.196-2.722.523a5.738 5.738 0 0 0-3.28 3.28 8.164 8.164 0 0 0-.522 2.722c-.054 1.2-.07 1.58-.07 4.622s0 3.43.07 4.622c.018.932.194 1.85.522 2.724a5.744 5.744 0 0 0 3.281 3.28c.87.34 1.79.53 2.722.56 1.2.053 1.58.07 4.622.07s3.432 0 4.622-.07a8.213 8.213 0 0 0 2.723-.522 5.749 5.749 0 0 0 3.28-3.28 8.203 8.203 0 0 0 .522-2.725c.054-1.198.07-1.578.07-4.622-.002-3.042-.002-3.428-.072-4.62ZM31.206 36.969a5.758 5.758 0 0 1-5.759-5.76 5.758 5.758 0 1 1 11.519 0 5.759 5.759 0 0 1-5.76 5.76Zm5.989-10.389a1.341 1.341 0 0 1-.514-2.583 1.343 1.343 0 1 1 .514 2.583Z"
      fill="#B72C2C"
    />
    <path
      d="M31.206 34.95a3.741 3.741 0 1 0 0-7.481 3.741 3.741 0 0 0 0 7.482Z"
      fill="#B72C2C"
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
          result="effect1_backgroundBlur_265_574"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_265_574"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default SvgComponent
