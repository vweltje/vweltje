import Image from "../../Image/Image"

export default function ImageWrapper({ image }: { image: string }) {
  return (
    <div className="DefaultSection--ImageWrapper">
      <Image className="DefaultSection--Image" src={image} alt={image} />
    </div>
  )
}
