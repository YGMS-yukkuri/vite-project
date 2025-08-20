import React, { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button/button'
import Display from './components/Display/Display';

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(`count:`, count)
    if (count > 15) {
      setCount(0);
    }
  }, [count])

  return (
    <>
      <h1>Hello World!!</h1>
      <Button type="submit" onClick={handleClick}>
        ボタン
      </Button>
      <Display count={count} />
    </>
  )
}
export default App
