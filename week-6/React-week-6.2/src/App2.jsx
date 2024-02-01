import { useEffect,useState } from "react";
import axios from "axios";
import App from "./App";
import { Fragment } from "react";

function App2()
{
   return <Fragment>
    <Todo id={2}></Todo>
   </Fragment>
}

function Todo({id})
{   const [todo,setTodo] = useState([]); // generally we define state variables in lowest common ancestor of the components that are using that state variable
   
    useEffect(()=>{
        axios.get("https://sum-server.100xdevs.com/todos/?id="+id)
         .then(function(response)
         {
            setTodo(response.data.todo)
         })
    },[])

    return <div>
        <div>{todo.title}</div>
        <div>{todo.description}</div>
    </div>
}

export default App2