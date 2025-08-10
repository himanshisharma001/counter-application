import { useState } from 'react'
import './App.css'

function App() {
 const [count, setCount] = useState(0);


  return (
    <>
    <div className="app">
      <div className="counter-container">
        <h1>Counter App</h1>
        <p className="count">{count}</p>
        <div className="buttons">
          <button className="decrement" onClick={() => setCount(count - 1)}>
            -
          </button>
          <button className="reset" onClick={() => setCount(0)}>
            Reset
          </button>
          <button className="increment" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
