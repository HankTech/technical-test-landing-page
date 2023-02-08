import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.255 11.995a.874.874 0 0 1 0-1.239l4.632-4.63-4.632-4.63a.876.876 0 1 1 1.24-1.24l5.249 5.25a.875.875 0 0 1 0 1.24l-5.25 5.25a.875.875 0 0 1-1.239 0Z"
      fill="#D8AD3D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.124 6.126a.875.875 0 0 1-.875.875H.875a.875.875 0 1 1 0-1.75h11.374a.875.875 0 0 1 .875.875Z"
      fill="#D8AD3D"
    />
  </svg>
)

export default SvgComponent
