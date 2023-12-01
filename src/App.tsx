import { ChangeEvent, useCallback, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input1, setInput1] = useState<number>(0)
  const [input2, setInput2] = useState<number>(0)
  const [input3, setInput3] = useState<number>(0)

  const handleNameChange1 = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput1(parseInt(e.target.value));
}, [input1]);

  const handleNameChange2 = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput2(parseInt(e.target.value));
}, [input2]);

  const handleNameChange3 = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput3(parseInt(e.target.value));
}, [input3]);

  
  const handleSubmit = useCallback(async() => {

  }, []);

  return (
    <>
      <div>
        <input className='input' name='lune' value={input1} type="number" onChange={handleNameChange1} />
        <input className='input' name='terre' value={input2} type="number" onChange={handleNameChange2} />
        <input className='input' name='soleil' value={input3} type="number" onChange={handleNameChange3} />
        <button id='button' onClick={handleSubmit}>Calculer</button>

      </div>
    </>
  )
}

export default App
