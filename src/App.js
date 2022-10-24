import './App.css';
import { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function App() {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  function increment1() {
    setCount1(count1 + 1)
  }
  function increment2() {
    setCount2(count2 + 1)
  }

  return (
    <div className="App">
      <Child1 value={count1}/>
      <button onClick={() => {increment1()}}>increment1</button>
      <Child2 value={count2}/>
      <button onClick={() => {increment2()}}>increment2</button>
    </div>
  );
}

export default App;
