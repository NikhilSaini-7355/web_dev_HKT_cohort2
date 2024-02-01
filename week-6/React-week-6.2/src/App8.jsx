//useRef() hook
// useRef() hook basically lets you access the DOM elements
// till now we have been doing somethig like document.getElementById() to access the DOM elements
// this accessing of the DOM elements can be used to override some part of DOM rendered by react
// so with useRef() we can override some part of DOM which was rendered by react

import { useState,useCallback,useEffect,useRef,useMemo } from "react";

function App()
{
    const [incomeTax,setIncomeTax] = useState(2000000);
    
    const divref = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            console.log(divref.current)
            divref.current.innerHTML = 10
            // even after overriding the DOM rendered by react using useRef(), still for react incomeTax=2000000 because there is no change in actual incomeTax variable
            // we can also do but not advisable :-
            // document.getElementById("incometax").innerHTML = 10
        },5000)
    },[])

    return <div>
       your incomeTax is  <div ref={divref} id="incometax">{incomeTax}</div>
    </div>
}

export default App