interface StuffAgainProps {
  text: string
  moretext: string
}

export default function stuffAgain(props: StuffAgainProps) {
  return <>
    <div>
    <h1>{props.text}</h1>
    <h2>{props.moretext}</h2>
    </div>
  </>
}
