import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stuff from './components/Stuff'
import MoreStuff from './components/moreStuff'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Stuff word="React" cheese="TypeScript" />
      <MoreStuff anotherword='Demo' num={2} somethingelse={200}/>
    </>
  )
}

export default App
