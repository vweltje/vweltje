import ParallaxLayer from "../ParallaxLayer/ParallaxLayer"

function Characters({ text }: { text: string }) {
  return [...text].map((character, index) => (
    <span className="VerticalHeading--Character" key={`${character}-${index}`}>
      {character}
    </span>
  ))
}

type Props = {
  textLeft: string
  textRight: string
}

export default function VerticalHeading({ textLeft, textRight }: Props) {
  return (
    <h2 className="VerticalHeading">
      <ParallaxLayer y={[-20, 20]}>
        <div className="VerticalHeading--Left">
          <Characters text={textLeft} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer y={[-60, 60]}>
        <div className="VerticalHeading--Right">
          <Characters text={textRight} />
        </div>
      </ParallaxLayer>
    </h2>
  )
}
