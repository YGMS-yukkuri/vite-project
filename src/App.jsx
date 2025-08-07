import React, { useState } from 'react'
import './App.css'
import Button from './button'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log("button clicked");
  }

  return (
    <>
      <h1>Hello World!!</h1>
      <Button type="submit" onclick={handleClick}>
        <span>クリック</span>
      </Button>
    </>
  )
}

export default App
