// useCallback hook usage
import { useCallback, useEffect,useMemo,useState } from "react";
import axios from "axios";
import App from "./App";
import { Fragment } from "react";
import { memo } from "react";

function App2()
{
   const [counter,setCounter] = useState(0);

   function buttonpressed()
   {
    setCounter(counter+1)
   }



   function anyfunction()
   {
    console.log("hello");
    return "world"
   }


   const anyfunction2 = useCallback(()=>{
    console.log("hello");
    return "world"
   },[])
   let arr= [1,2,3]

   let obj = {
    name:"harkirat",
    description:"cohort"
   }
   let c = 1;let d ="uiuu";
   return <div>
    <button onClick={buttonpressed}>count {counter}</button>
    <Childcomponent />
    <MemoizedComponent/>
    <MemoizedComponent/>
    <MemoizedComponent/>
    <MemoizedComponent/>
    <MemoizedComponent2 c={c}/>
    <MemoizedComponent3 d = {d}/>
    <MemoizedComponent4 arr = {arr}/>
    <MemoizedComponent5 obj = {obj}/>
    <MemoizedComponent6 anyfunction = {anyfunction}/>
    <MemoizedComponent7 anyfunction2 = {anyfunction2}/>
    <MemoizedComponent7 anyfunction2 = {anyfunction2}/>
    <MemoizedComponent7 anyfunction2 = {anyfunction2}/>
    <MemoizedComponent7 anyfunction2 = {anyfunction2}/>
   </div>

   // memoizedcomponents4,5,6 again rerender even after they are memoized and none of their props are changed
   // Reason:- After each rerender of the parent component App() , react rerenders normal components and checks if the props of memoized components are changed or not. if changed memoized components rerender else not rerender
   // After each rerender of the parent component App(), primitive values remain same after redeclaration,as their values are compared
   // but After each rerender of the parent component App() , reference types are not same even if they have same content, as their references are compared not actual value
   // hence react rerenders these components taking reference type variables as props
   // 
   // a=7,b=7    a==b // true
   // a="hjh",b="hjh"    a==b // true
   // a=[7,8],b=[7,8]    a==b // false
   // a={c:0,k:"jkjj"},b={c:0,k:"jkjj"}    a==b // false
   // a=function(c,d){ return c+d },b=function(c,d){ return c+d }    a==b // false
   //
   //  useCallback() solves this issue 
   // useCallback():- 'useCallback is a hook in React, a popular JavaScript library for building user interfaces. It is used to memoize functions, which can help in optimizing the performance of your application, especially in cases involving child components that rely on reference equality to prevent unnecessary renders.
}

function Childcomponent()
{
    console.log("child render")
    return <div>
        <div>button clicked</div>
    </div>
}

const MemoizedComponent = memo(()=>{
    console.log("memo child render")
return <div>
    <div>button2 clicked</div>
</div>
})

const MemoizedComponent2 = memo(({c})=>{
    console.log("memo child 2 render")
return <div>
    <div>button2 clicked</div>
</div>
})

const MemoizedComponent3 = memo(({d})=>{
    console.log("memo child 3 render")
return <div>
    <div>button3 clicked</div>
</div>
})

const MemoizedComponent4 = memo(({arr})=>{
    console.log("memo child 4 render")
return <div>
    <div>button4 clicked</div>
</div>
})

const MemoizedComponent5 = memo(({obj})=>{
    console.log("memo child 5 render")
return <div>
    <div>button5 clicked</div>
</div>
})

const MemoizedComponent6 = memo(({anyfunction})=>{
    console.log("memo child 6 render")
return <div>
    <div>button6 clicked</div>
</div>
})

const MemoizedComponent7 = memo(({anyfunction2})=>{
    console.log("memo child 7 render")
return <div>
    <div>button 7 clicked</div>
</div>
})
export default App2
