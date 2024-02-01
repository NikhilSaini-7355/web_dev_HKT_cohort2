import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

// Two jargons
// 1. Side-Effects:- In React, the concept of side effects encompasses any operations that reach outside the functional scope of a React component. These operations can affect other components, interact with the browser, or perform asynchronous data fetching
// 2. Hooks:-Hooks are a feature introduced in React 16.8 that allow you to use state and other React features without writing a class. They enable functional components to have access to stateful logic and lifecycle features, which were previously only possible in class components. This has led to a more concise and readable way of writing components in React.
// Some common hooks are
// 1. useState:- Let’s you describe the state of your app Whenever state updates, it triggers a re-render which finally results in a DOM update
// 2. useEffect:- The 'useEffect hook is a feature in React, a popular JavaScript library for building user interfaces, It allows you to perform side effects in function components. Side effects are operations that can affect other components or can't be done during rendering, such as data fetching, subscriptions, or manually changing the DOM in React components.
//                The 'useEffect hook serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React class components, but unified into a single API.
// 3. useCallback
// 4. useMemo
// 5. useRef
// 6. useContext



// IMPORTANT NOTE:-
// A REACT COMPONENT MUST ALWAYS RETURN A SINGLE PARENT ELEMENT OF XML/HTML
// THAT PARENT ELEMENT CAN HAVE SEVERAL CHILD HTML/XML ELEMENT OR OTHER COMPONENTS BEING CALLED



// VERY VERY IMPORTANT NOTE:-
// 1. WHENEVER STATE CHANGES , THE PARENT COMPONENT IN WHICH THE STATE IS DEFINED RE-RENDERS AND ALL THE COMPONENTS USING THAT STATE VARIABLE RE-RENDER ALSO. FROM RULE-2, SINCE PARENT COMPONENT RE-RENDERS ,ALL ITS CHILD COMPONENT(EVEN THOSE NOT USING THAT STATE VARIABLE) WILL ALSO RE-RENDER , TO STOP THAT MEMOIZE THE COMPONENT USING React.memo()
// 2. WHENEVER PARENT COMPONENT RE-RENDERS ALL ITS CHILD COMPONENT ALSO RE-RENDER EVEN IF THE STATE VARIABLE WHIC THOSE HILD COMPONENT USES DOES NOT CHANGES. TO STOP THIS MEMOIZE THE CHILD COMPONENT

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(()=>{
     fetch("https://sum-server.100xdevs.com/todos")
       .then(function(response)
       {
          response.json()
           .then(function(ans){
             setTodo(ans.todos)
           })
       })


       // axios way of fetching data
       axios.get("https://sum-server.100xdevs.com/todos")
        .then( function(response){
          setTodo(responsem.data.todos)
        })
  },[
    // dependency array for determining when useState() runs
    // if empty, runs when the "component" "mounts" on DOM for first time
    // dependency array can take state variable only
  ])

  return (
    <> {/* can be <div>,etc ; <> ; <React.Fragments>(need to import) */}
     { todo.map( function(todo)
     {
      return <div>
        {/* key must be passed to the component while rendering arrays for easiness of react to render it even if the components don't use it */}
        <Todo key={todo.id} title={todo.title} description={todo.description}></Todo> 
      </div>
     })}

    </>
  )
}

function Todo(props)  // Todo({title,description}) // title and description can also be acessed using object destructuring
{
   return <div>
    <h1>props.title</h1>
    <h3>props.description</h3>
   </div>
}


// WRAPPER COMPONENTS
function App2()
{
  return <>
  <WrapperComponent > 
    <normalComponent>
    </normalComponent>
  </WrapperComponent>

{/* same as above */}
  <WrapperComponent children={<normalComponent/>}></WrapperComponent>  
   {/* with "children"(which is a predefined keyword in JS) we can access the "innerHTML" of the "component" */}
  </>
}

function WrapperComponent({children})
{
   return <div>
    {children}
   </div>
}

function normalComponent(props)
{
  return <div>
    {props.description}
  </div>
}
export default App
