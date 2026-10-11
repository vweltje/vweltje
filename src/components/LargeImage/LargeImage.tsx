import Container from "../Container/Container"
import Image from "../Image/Image"

export default function LargeImage({ image }: { image: string }) {
  return (
    <section className="LargeImage">
      <Container>
        <Image className="LargeImage--Image" src={image} alt={image} />
      </Container>
    </section>
  )
}
