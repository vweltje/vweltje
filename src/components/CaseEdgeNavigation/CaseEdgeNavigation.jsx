import React from "react"
import { Link } from "gatsby"
import Container from "../Container/Container"
import "./CaseEdgeNavigation.scss"

const CaseEdgeNavigation = ({ previous, next }) => (
  <section className="CaseEdgeNavigation">
    <Container size="small">
      <div className="CaseEdgeNavigation--Inner">
        <div>
          {previous?.slug && (
            <Link
              to={`/cases${previous.slug}`}
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
          {next?.slug && (
            <Link
              to={`/cases${next.slug}`}
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
export default CaseEdgeNavigation
