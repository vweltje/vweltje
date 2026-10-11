import Link from "next/link"

type Props = {
  title: string
  text: string
  link: { href: string; text: string }
}

export default function SelectedCaseText({ title, text, link }: Props) {
  return (
    <div className="SelectedCaseText">
      <div className="SelectedCaseText--Inner">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="Link" href={link.href}>
          {link.text}
        </Link>
        {/* Makes the whole case clickable on mobile */}
        <Link
          className="SelectedCaseText--CoverLink"
          href={link.href}
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
