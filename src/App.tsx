//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Stuff from './components/Stuff'
import MoreStuff from './components/moreStuff'
import StuffAgain from './components/stuffAgain'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Stuff word="Capstone" cheese="Project" />
      <MoreStuff anotherword='Demo' num={3} somethingelse="Site" />
      <StuffAgain text="hello" moretext="world" />
    </>
  )
}

export default App
