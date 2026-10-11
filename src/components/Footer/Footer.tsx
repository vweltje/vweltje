import Link from "next/link"
import Container from "../Container/Container"
import SocialIcons from "../SocialIcons/SocialIcons"
import VWLogoFull from "../icons/VWLogoFull"

export default function Footer() {
  return (
    <footer className="Footer">
      <Container>
        <div className="Footer--Columns">
          <div className="Footer--Column">
            <div>
              <Link href="/" className="Footer--LogoLink">
                <VWLogoFull className="Footer--Logo" />
                <span className="Hidden">Go back to home</span>
              </Link>
            </div>
          </div>
          <div className="Footer--Column">
            <div>
              <h5>Location</h5>
              <p>
                Eindhoven, <br />
                The Netherlands
              </p>
            </div>
          </div>
          <div className="Footer--Column">
            <div>
              <h5>Socials</h5>
              <SocialIcons />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
