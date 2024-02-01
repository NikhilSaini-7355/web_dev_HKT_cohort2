


// JUST EXPERIMENT WITH CONTEXT API


import { useContext, useState } from "react"
import { countContext } from "./context";
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
        <countContext.Provider value={count}>
         <Buttons setCount={setCount}/>
         <CountRenderer />
        </countContext.Provider>
         <Count setCount={setCount}/>
    </div>
  )
}

function Count({ setCount}) {
  const count = useContext(countContext);
  console.log(count)
  return <div>
    <CountRenderer  />
    <Buttons  setCount={setCount} />
  </div>
}

function CountRenderer() {
    const count = useContext(countContext);
    console.log(count)
  return <div>
    {count}
  </div>
}

function Buttons({ setCount}) {
    const count = useContext(countContext);
    console.log(count)
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App