// custom hooks
// useCallback hook usage
import { useCallback, useEffect,useMemo,useState } from "react";
import axios from "axios";
import App from "./App";
import { Fragment } from "react";
import { memo } from "react";


// custom hooks are hooks made by developer . They are functions which must start from 'use'.
function useCustomhook()
{
    const [todos,setTodo] = useState([])
useEffect(()=>{
 fetch("")
   .then(function(response)
   {
     response.json()
       .then(function(ans)
       {
         setTodo(ans)
       })
   })
},[])

return todos
}
function App2()
{         
   const todos = useCustomhook();
   
return <div>
    {todos.map(function(todo){
        return <div>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
        </div>
    } )}
</div>

}
export default App2
