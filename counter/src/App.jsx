import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);
  const addValue = ()=>{
    if(counter === 20) return;
    setCounter(counter+1);
  }
  const removeValue = ()=>{
    if(counter === 0) return;
    setCounter(counter-1);
  }
  return (
    <>
    <h1>Counter value: {counter}</h1>

    <button onClick={addValue}>Increasing: {counter}</button>
    <br />
    <button onClick={removeValue}>Decreasing : {counter}</button>
    </>
  )
}

export default App
