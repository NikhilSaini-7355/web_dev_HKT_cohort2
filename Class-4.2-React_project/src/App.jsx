import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [Todos, setTodos] = useState([{
    title:"got to gym",
    description:"go to gym from 7-9",
    completed: false
  },{
    title:"got to lab",
    description:"go to lab from 7-9",
    completed: true
  }])

  return (
    <AllTodoRender todos={Todos} setTodos={setTodos}></AllTodoRender>
  )
}
function AllTodoRender(props)
{   
  function AddTodo()
{
  // if a = [1,2]
  // [...a] = [1,2]
  // [...a,3] = [1,2,3]
  props.setTodos([...props.todos,{
    title:"go to study",
    description:"study all day",
    completed:true
  }])
}
   return <div>
    <button onClick={AddTodo}>Add to do</button>
    {props.todos.map(function(todo){
       return <TodoRender title={todo.title} description={todo.description} ></TodoRender>
    })}
   </div>
}
function TodoRender(props2)
{ //console.log(props2.title)
  return (
    <div>
      <div>{props2.title}</div>
      <div>{props2.description}</div>
      <button onClick={function(){
          alert("done");
      }}>complete</button>
    </div>
  )
}

export default App
