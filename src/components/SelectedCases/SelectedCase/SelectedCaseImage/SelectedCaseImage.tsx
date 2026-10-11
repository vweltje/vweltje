import ParallaxLayer from "../../../ParallaxLayer/ParallaxLayer"
import Image from "../../../Image/Image"

type Props = {
  image: string
  reversed?: boolean
}

export default function SelectedCaseImage({ image, reversed = false }: Props) {
  return (
    <div className="SelectedCaseImage">
      <div
        className={`SelectedCaseImage--Background${reversed ? " Reversed" : ""}`}
      >
        <ParallaxLayer
          className="Left"
          y={reversed ? [0, 0] : [-7.5, 7.5]}
        />
        <ParallaxLayer
          className="Right"
          y={reversed ? [-7.5, 7.5] : [0, 0]}
          x={reversed ? [-7.5, 0] : [0, 0]}
        />
      </div>
      <Image resolution="small" src={image} alt={image} />
    </div>
  )
}
