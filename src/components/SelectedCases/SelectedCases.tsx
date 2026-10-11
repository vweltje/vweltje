"use client"

import SelectedCase from "./SelectedCase/SelectedCase"
import SeeMoreCases from "./SeeMoreCases/SeeMoreCases"
import type { Case } from "@/lib/content"
import { useIsMobile } from "@/lib/useIsMobile"

export default function SelectedCases({ items }: { items: Case[] }) {
  const isMobile = useIsMobile()

  return (
    <>
      <div className="SelectedCases">
        {items.map((item, index) => (
          <SelectedCase
            item={item}
            textFirst={!isMobile && index % 2 !== 0}
            key={item.slug}
          />
        ))}
      </div>
      {!isMobile && <SeeMoreCases />}
    </>
  )
}
