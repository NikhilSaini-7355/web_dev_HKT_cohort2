import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// npm install 
// npm run dev
// commands to run the reat project



// npm run build 
// command which onverts entir react code into html,css,js in "dist" folder
// after this we don't require react, we can just run dist folder and get the equivalent website equivalen to react website 



// state variables:- any variable that react is going to constantly watch and keep a track of. React updates it in the DOM if the state variable is updated
// react doesn't do it for normal variables
// component:- (function which returns html code )
function App2() {
  // App() is a react component(function which returns html code ) and can be called as <App /> or <App></App>
  // react component always start with capital letter 
  const [count, setCount] = useState(0)
  // const [state_variable,state_variable_setfunction] = useState(initial_value)
  //  this is how we create a state variable using "useState()" hook
  // most probably setCount is written as:-
  // setCount(n)
  // {
  //  count = n;
  // }
  // Important point:- we can not change the value of state variables(like count ) directly , we can only change them using the setter functions associated with them , during the declaration of the state variables
  // count = count + 1 /// "ERROR"
  // setCount(count+1) // "CORRECT" means count = count+1;
  // setCount(Math.random()) // "CORRECT" means count = Math.random()
  return (
     <Button count={count} setCount= {setCount} ></Button>  // this is how we "call a Component with its props(Properties) passed as arguments " , it look much similar to html tags
     // but this is the "way of calling Components with its props(Properties) passed as arguments"
  )
}



// Component
function Button(props)
{
  function onCLickHandler()
  {
    props.setCount(props.count + 1);

  }

  return (
    <div>
    <button onClick={onCLickHandler}>
      count is {props.count}
    </button>
  </div>

  )
}

export default App2
