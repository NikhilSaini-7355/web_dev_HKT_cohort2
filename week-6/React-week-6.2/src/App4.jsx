import { useCallback, useEffect,useMemo,useState } from "react";
import axios from "axios";
import App from "./App";
import { Fragment } from "react";
import { memo } from "react";
//METHOD-1
//causes lots of unnecessary rerender
// even when count changes , number not changes , still whole App() rerenders and the for loop again runs even though number has not changed

function App1()
{   const [number,setNumber] = useState(0);
    const [count,setCount] = useState(0);
    function onbuttonclick()
    {
        setCount(count+1);
    }
    let sum =0;
    function onTyping(e)
    {
        setNumber(document.getElementById("1").value)
        // we can also do setNumber(e.target.value) /// e.target.value is another way of accessing the text inside the input element
        console.log(number);
        
    }
    sum =0;
    for(let i=1;i<=number;i++)
    {
        sum+=i;
    }
    return <div>
    <input type={"text"} onChange={onTyping} id={"1"}></input>
    <div>sum from 1 to {number} is  {sum}</div>
    <button onClick={onbuttonclick}>count {count}</button>
    </div>
}

//METHOD-2
// we can memoize components using React.memo()
function App2()
{
    const [count,setCount] = useState(0);
    function onbuttonclick()
    {
        setCount(count+1);
    }
    return <div>
     <Form2></Form2>   
    <button onClick={onbuttonclick}>count {count}</button>
    </div>
}


const  Form2 = memo(() =>
{
    const [number,setNumber] = useState(0);
    let sum =0;
    function onTyping(e)
    {
        setNumber(document.getElementById("1").value)
        // we can also do setNumber(e.target.value) /// e.target.value is another way of accessing the text inside the input element
        console.log(number);
        
    }
    sum =0;
    for(let i=1;i<=number;i++)
    {
        sum+=i;
    }
    console.log(sum);
    return <div>
        <input type={"text"} onChange={onTyping} id={"1"}></input>
        <div>sum from 1 to {number} is  {sum}</div>
    </div>
}
)


//METHOD-3
//// we can use useMemo() hook
// memoization:-It’s a mildly DSA concept . It means remembering some output given an input and not computing it again.
// useMemo() provides a way to remember values of variables across several rerender. Means we can store value in a variable and it is not lost even after several renders if the thing in the dependency array of useMemo() does not changes and hence the function inside it is not called even if rerender happens
function App3()
{   const [number,setNumber] = useState(0);
    const [count,setCount] = useState(0);
    function onbuttonclick()
    {
        setCount(count+1);
    }
    let finalsum =0;
    function onTyping(e)
    {
        setNumber(document.getElementById("1").value)
        // we can also do setNumber(e.target.value) /// e.target.value is another way of accessing the text inside the input element
        console.log(number);
        
    }
    finalsum = useMemo(()=>{
        let sum =0;
        for(let i=1;i<=number;i++)
        {
            sum+=i;
        }
        return sum;
    },[number])
    return <div>
    <input type={"text"} onChange={onTyping} id={"1"}></input>
    <div>sum from 1 to {number} is  {finalsum}</div>
    <button onClick={onbuttonclick}>count {count}</button>
    </div>
}

// METHOD-4
//using useEffect()
function App4()
{   const [number,setNumber] = useState(0);
    const [count,setCount] = useState(0);
    const [sum,setSum] = useState(0);
  //  let sum=0;
    console.log("kjkli")
    function onbuttonclick()
    {
        setCount(count+1);
    }
    
    function onTyping(e)
    {
        //setNumber(document.getElementById("1").value)
        // we can also do 
        setNumber(e.target.value) /// e.target.value is another way of accessing the text inside the input element
        console.log(number);
        
    }
    let h=0
    useEffect(()=>{
        h=0;
        for(let i=1;i<=number;i++)
        {
           h+=i;
        }
        setSum(h)
        //sum =h;
        console.log("ki"+sum)
    },[number])
    console.log("kbbbi"+sum)
    return <div>
    <input type={"text"} onChange={onTyping} id={"1"}></input>
    <div>sum from 1 to {number} is  {sum}</div>
    <button onClick={onbuttonclick}>count {count}</button>
    </div>
}


//METHOD-5
// using simple concepts of putting state variables in lowest common ancestor we are avoiding unnecessary rerender
function App5()
{
   return <div>
    <Form></Form>
    <CustomButton></CustomButton>
   </div>
}

function CustomButton()
{
    const [count,setCount] = useState(0);
    function onbuttonclick()
    {
        setCount(count+1);
    }

    return <div>
    <button onClick={onbuttonclick}>count {count}</button>
    </div>
}

function Form()
{
    const [number,setNumber] = useState(0);
    let sum =0;
    function onTyping(e)
    {
        setNumber(document.getElementById("1").value)
        // we can also do setNumber(e.target.value) /// e.target.value is another way of accessing the text inside the input element
        console.log(number);
        
    }
    sum =0;
    for(let i=1;i<=number;i++)
    {
        sum+=i;
    }
    console.log(sum);
    return <div>
        <input type={"text"} onChange={onTyping} id={"1"}></input>
        <div>sum from 1 to {number} is  {sum}</div>
    </div>
}





export default App4