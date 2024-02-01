// WITH CONTEXT API
// context API is a way of avoiding Prop-drilling by teleporting the props from parent component to the child component

// context API involves three steps:-
// 1. Creating the context using createContext()
// 2. Wrapping all the components that are going to use the teleported state variable inside contextName.Provider component
// 3. using the teleported state variable using the useContext() hook

import { useContext, useState } from "react"
import { countContext } from "./context";
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
        <countContext.Provider value={{count,setCount ,/* all the state variables to be teleported */ }}>
            {/* Wrap all the components that are going to use the teleported state variable  */}
            {/* we can use individually CountRenderer and Buttons */}
            {/* or we can use Count component as it is the parent component of both and eventually returns them, hence both of them get access to the teleported value as both of them are returned by the Count component */}
        <Count  />
        </countContext.Provider>
     
    </div>
  )
}

function Count() {
  const count = useContext(countContext); // useContext(countContext) gives the value of the teleported state variable i.e count=value={count,setCount}
  console.log(count.count)
  return <div>
    <CountRenderer  />
    <Buttons  />
  </div>
}

function CountRenderer() {
    const {count} = useContext(countContext); // using object destructuring , to get count from useContext(countContext) which gives {count,setCount}
    console.log(count)
  return <div>
    {count}
  </div>
}

function Buttons() {
    const {count,setCount} = useContext(countContext);  // using object destructuring , to get count and setCount from useContext(countContext) which gives {count,setCount}
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