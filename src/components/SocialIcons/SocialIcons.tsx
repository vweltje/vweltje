import LinkedinIcon from "../icons/LinkedinIcon"
import InstagramIcon from "../icons/InstagramIcon"
import GitHubIcon from "../icons/GitHubIcon"

export default function SocialIcons() {
  return (
    <ul className="SocialIcons">
      <li>
        <a
          href="https://www.linkedin.com/in/vweltje/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <LinkedinIcon className="SocialIcons--Icon" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/vweltje/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <InstagramIcon className="SocialIcons--Icon" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vweltje"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <GitHubIcon className="SocialIcons--Icon" />
        </a>
      </li>
    </ul>
  )
}
