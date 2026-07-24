import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  let increment = ()=>{
    if(count <20)
    setCount(count+1);
  }
  let decrement = ()=>{
    if(count >=1)
    setCount(count-1);
  }

  return (
    <>
      <h1>Hello Sohit</h1>
      <h2>Count: {count} </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}

export default App
