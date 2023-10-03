interface StuffProps {
  word: string,
  cheese ?: string,
  something?: string|number  
}

export default function Stuff(props: StuffProps) {
  return <div>
    <h1>{props.word}</h1>
    {/*if props.cheese is present, props.cheese-- otherwise, "no cheese"*/}
    <h4>{props.cheese}</h4>
    <h4>{props.something}</h4>
  </div>
  

}