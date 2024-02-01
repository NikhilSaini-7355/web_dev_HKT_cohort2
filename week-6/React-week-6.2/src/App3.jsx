import { useEffect,useState } from "react";
import axios from "axios";
import App from "./App";
import { Fragment } from "react";




// STATE VARIABLES ARE ALWAYS DEFINED INSIDE COMPONENTS (THAT TOO LOWEST COMMON ANCESTOR OF THE COMPONENTS USING THAT STATE VRIABLES).THEY ARE NEVER DEFINED GOBALLY.

function App3()
{  const [selectedId,setId] = useState(1);
    
   return <div>
    <button onClick={ function (){    setId(1);    }}>{1}</button>
    <button onClick={ function (){    setId(2);    }}>{2}</button>
    <button onClick={ function (){    setId(3);    }}>{3}</button>
    <button onClick={ function (){    setId(4);    }}>{4}</button>
    <button onClick={ function (){    setId(5);    }}>{5}</button>
    <button onClick={ function (){    setId(6);    }}>{6}</button>
    <Todo id={selectedId}></Todo>
   </div>
}

function Todo({id})
{   const [todo,setTodo] = useState([]); // generally we define state variables in lowest common ancestor of the components that are using that state variable
   
// useEffect() does not take async function
// for that do:- useAsyncEffect()
    useEffect(()=>{
        axios.get("https://sum-server.100xdevs.com/todos/?id="+id)
         .then(function(response)
         {
            setTodo(response.data.todo)
         })
    },[id])  // id is state variable

    return <div>
        <div>{todo.title}</div>
        <div>{todo.description}</div>
    </div>
}

export default App3