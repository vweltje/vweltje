import Container from "../Container/Container"
import PostCard from "../PostCard/PostCard"
import type { Case } from "@/lib/content"

type Props = {
  cases: Case[]
  small?: boolean
}

export default function CasesGrid({ cases, small = false }: Props) {
  return (
    <Container size="small">
      <div className={`CasesGrid${small ? " small" : ""}`}>
        {cases.map(({ slug, featuredImage, title, excerpt }) => (
          <div className="CasesGrid--Item" key={slug}>
            <PostCard
              image={featuredImage}
              title={title}
              excerpt={excerpt}
              link={{ href: `/cases/${slug}`, text: "View case study" }}
            />
          </div>
        ))}
      </div>
    </Container>
  )
}
