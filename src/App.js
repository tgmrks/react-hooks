import './App.css';
import { useState } from 'react'
import { useCallback } from 'react';
import Child1 from './Child1'
import Child2 from './Child2'

function App() {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increment1 = useCallback(() => {
    setCount1(count1 + 1)
  }, [count1])

  const increment2 = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])

  return (
    <div className="App">
      <h1>useCallback</h1>
      <Child1 value={count1} setValue={increment1}/>
      <Child2 value={count2} setValue={increment2}/>
    </div>
  );
}

export default App;
