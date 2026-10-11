import type { ReactNode } from "react"
import Container from "../../Container/Container"

type ContainerProps = {
  position: "Left" | "Right"
  children: ReactNode
}

export function SplitviewContainer({ position, children }: ContainerProps) {
  return (
    <div className={`Splitview--${position}`}>
      <Container>
        <div className="Splitview--Content">{children}</div>
      </Container>
    </div>
  )
}

export default function Splitview({ children }: { children: ReactNode }) {
  return <div className="Splitview">{children}</div>
}
