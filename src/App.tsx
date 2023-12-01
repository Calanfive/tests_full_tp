import './App.css'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { calculerHeure } from "../src/calculerHeure.ts";


function App() {
  const [input1, setInput1] = useState<number>(1)
  const [input2, setInput2] = useState<number>(1)
  const [input3, setInput3] = useState<number>(1)
  const [showResult, setShowResult] = useState(false)

  const handleValueChange1 = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput1(parseInt(e.target.value));
}, [input1]);

  const handleValueChange2 = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput2(parseInt(e.target.value));
}, [input2]);

  const handleValueChange3 = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput3(parseInt(e.target.value));
}, [input3]);

  
  const handleShowResult = useCallback(() => {
    setShowResult(true);
  }, []);

  const result = useMemo(
    () => calculerHeure(input1, input2, input3)
    , [input1, input2, input3]
);

  return (
    <>
      <div>
        <input id='lune_id' name='lune' value={input1} type="number" onChange={handleValueChange1} />
        <input id='terre_id' name='terre' value={input2} type="number" onChange={handleValueChange2} />
        <input id='soleil_id' name='soleil' value={input3} type="number" onChange={handleValueChange3} />
        <button id='button' onClick={handleShowResult}>Calculer</button>
        {showResult === true && <p>{result}</p>}
      </div>
    </>
  )
}

export default App
