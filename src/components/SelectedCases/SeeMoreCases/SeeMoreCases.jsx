import React from "react"
import { Link } from "gatsby"
import Container from "../../Container/Container"
import "./SeeMoreCases.scss"

const SeeMoreCases = () => (
  <Container className="SeeMoreCases">
    <Link className="Link" to="/cases">
      View more cases
    </Link>
  </Container>
)
export default SeeMoreCases
