import Container from "../Container/Container"
import Image from "../Image/Image"

export default function CaseDevicePreview({ image }: { image: string }) {
  return (
    <section className="CaseDevicePreview">
      <Container size="small">
        <figure className="CaseDevicePreview--Figure">
          <Image
            className="CaseDevicePreview--Image"
            resolution="large"
            src={image}
            alt={image}
          />
        </figure>
      </Container>
    </section>
  )
}
