import Link from "next/link"
import Container from "../Container/Container"
import type { Case } from "@/lib/content"

type Props = {
  previous: Case | null
  next: Case | null
}

export default function CaseEdgeNavigation({ previous, next }: Props) {
  return (
    <section className="CaseEdgeNavigation">
      <Container size="small">
        <div className="CaseEdgeNavigation--Inner">
          <div>
            {previous && (
              <Link
                href={`/cases/${previous.slug}`}
                className="CaseEdgeNavigation--Link previous"
              >
                Previous case
                <small className="CaseEdgeNavigation--CaseTitle">
                  {previous.title}
                </small>
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link
                href={`/cases/${next.slug}`}
                className="CaseEdgeNavigation--Link next"
              >
                Next case
                <small className="CaseEdgeNavigation--CaseTitle">
                  {next.title}
                </small>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
