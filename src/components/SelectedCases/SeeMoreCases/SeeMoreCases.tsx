import Link from "next/link"
import Container from "../../Container/Container"

export default function SeeMoreCases() {
  return (
    <Container className="SeeMoreCases">
      <Link className="Link" href="/cases">
        View more cases
      </Link>
    </Container>
  )
}
