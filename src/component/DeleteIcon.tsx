import { SVGProps } from "react"

const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="rgba(234,18,18,1)"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8Zm2 2v10h12V10H6Zm3 2h2v6H9v-6Zm4 0h2v6h-2v-6ZM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5Zm2-1v1h6V4H9Z" />
  </svg>
)
export default DeleteIcon