// Prop-drilling and context API
//
// Before we begin, how do you think one should one manage state?
// 1. Keep everything in the top level component (C1)
// 2. Keep everything as low as possible
//  (at the LCA of children that need a state)
// 
// Either way, you will need to drill props down through the
// Component tree.
// This gets very hard to maintain and highly verbose
// Makes code highly unreadable

// Prop-Drilling:-Prop drilling doesn’t mean that parent re-renders children
//                 It just means the syntactic uneasiness when writing code



// OFFICIAL REACT DEFINITION - https://react.dev/learn/passing-data-deeply-with-context
// The problem with passing props
//Passing props is a great way to explicitly pipe data through your Ul tree to the components that use it.
//But passing props can become verbose and inconvenient when you need to pass some prop deeply through the tree, or if many components need the same prop. The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called "prop drilling"
//
//Wouldn't it be great if there were a way to "teleport data to the components in the tree that need it without passing props? With React's context feature, there is!
//
// CONTEXT API LETS YOU TELEPORT THE PROPS FROM PARENT COMPONENT TO CHILD COMPONENT EVEN IF THEY ARE VERY FAR, AND THE COMPONENTS IN BETWEEN THEM IN THE UI TREE WILL NOT HAVE ACCESS TO THOSE PROPS IF THEY DON'T NEED IT
// If you use the context api, you’re pushing your state management outside the code react components









// Without Context API
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  )
}

function Count({count, setCount}) {
  return <div>
    <CountRenderer count={count} />
    <Buttons count={count} setCount={setCount} />
  </div>
}

function CountRenderer({count}) {
  return <div>
    {count}
  </div>
}

function Buttons({count, setCount}) {
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