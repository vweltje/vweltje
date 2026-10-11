import SelectedCase from "./SelectedCase/SelectedCase"
import SeeMoreCases from "./SeeMoreCases/SeeMoreCases"
import type { Case } from "@/lib/content"

export default function SelectedCases({ items }: { items: Case[] }) {
  return (
    <>
      <div className="SelectedCases">
        {items.map((item, index) => (
          <SelectedCase
            item={item}
            textFirst={index % 2 !== 0}
            key={item.slug}
          />
        ))}
      </div>
      <SeeMoreCases />
    </>
  )
}
