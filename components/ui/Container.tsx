import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {

  return (
    <div className="max-w-(--width) mx-auto px-(--px)">
      {children}
    </div>
  )
}