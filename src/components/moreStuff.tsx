interface MoreStuffProps {
  anotherword: string,
  num: number,
  somethingelse?: string|number
}

export default function MoreStuff(props: MoreStuffProps) {
  return <div>
    <h1>{props.anotherword}</h1>
    <p>{props.num}</p>
    <p>{props.somethingelse}</p>
  </div>
}