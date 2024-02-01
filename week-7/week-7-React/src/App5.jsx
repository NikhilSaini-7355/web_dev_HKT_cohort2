// Why do you use the context API?
// to make rendering performant(rendering efficient)--------NO
// to make syntax clearer/get rid of prop drilling(prop drilling is a syntactical issue)(context API just helps to make the syntax clearer,i.e,solve the issue of prop drilling by making the syntax clear.under the hood, things work-out almost the same way)----------YES
// context API does not fixes unnecessary re-renders , only fixes prop drilling


// we can see from App3.jsx that if the count state variable changes , then APP(),Count(),CountRenderer(),Buttons() rerender. Since Count() does not uses or accepts the count state variable,it should not rerender ,but still it rerenders. This issue is solved by state-management-library like recoil.


// In real world when we do state management using recoil , it's better to divide the whole project(happens in real world) into:- store(contains all state variables and its logic) and components(contains all the components logic). sometimes two different engineers work on these two different parts of the project
// Recoil:- A state management library for react , written by some ex-react folks(hkt thinks)
// other famous state management libraries are:- Redux and Zustand
// Recoil has a concept of an atom to store the state.just like useState() an atom can be used to define state variables, update and get them.
// An atom can be defined completely outside the component , and can be teleported to any component
// All projects which use Recoil , have a separate folder called store having all state management logic

import { useContext, useMemo, useRef, useState } from "react"
import { countContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/Atoms/count";
function App() {    
  return (
    <div>       
        <RecoilRoot>
            {/* just like context provider, in Recoil also, we need to wrap all the components that are using the Recoil logic in any way */}
        <Count  />      
        {/* since count returns both CountRenderer and  Buttons , so this by wrapping count in RecoilRoot is actually same as wrapping both CountRenderer and  Buttons in RecoilRoot
        we can also wrap them individually in Count */}
        </RecoilRoot>     
    </div>
  )
}

function Count() {
  return <div>
    {/* <RecoilRoot> */}
        {/* we can wrap both of them individually also, as Count does not use Recoil logic no need to wrap it in the App component  */}
    <CountRenderer  />
    <Buttons  />
    {/* </RecoilRoot> */}
  </div>
}

function CountRenderer() {
    const count = useRecoilValue(countAtom); 
    // useRecoilValue(atom_name) hook gives access to the state variable
    // useRecoilState(atom_name) hook gives access to both the state variable and set_state_variable function
    // useSetRecoilState(atom_name) hook gives access to the set_state_variable function
    // const count = useRecoilValue(countAtom)
    // const [count,setCount] = useRecoilState(countAtom) 
    // const setCount = useSetRecoilState(countAtom) 
    return <div>
    {count}
  </div>
}


// HKT method-2
function Buttons1() {
  //  const [count,setCount] = useRecoilState(countAtom) 
     // with this line we are getting both count and setCount , hence whenever count changes Buttons component also re-render . 
     //what we can do is get only the setCount function and using callback function inside setCount function update the count(  setCount((c)=>c+1)   or    setCount(function(c){ return c+1 } )       )    .  Hence whenever count changes Buttons component do not  re-render.
     const setCount = useSetRecoilState(countAtom)
 
     // use Recoil to manage large global states , which are being used by large no. of components
     // use useState() for the state variables which are defined and used in the same component or used by very less no. of components(like 1 child component)

   return <div>
     <button onClick={() => {
       setCount((count)=>count + 1)
      
     }}>Increase</button>
 
     <button onClick={() => {
       setCount((count)=> count - 1)
      
     }}>Decrease</button>
     <EvenCountRenderer />
   </div>
 }
function EvenCountRenderer(){
    const count = useRecoilValue(countAtom)
    // useMemo() is used when the calculation or value of a ertain variable depends on state variable . Wrapping in useMemo() ensures that the expensive calculation does not happens when the state variable on which it depends remains unchanged 
    // hence useMemo() is used for quantities somewhat derived from state variables

    // similarly react also provides "selector" which somewhat similar to useMemo() ,i.e,it is also for derived quantities(derived from state variables)
    const isEven = useMemo(()=>{
        return (count%2==0)
    },[count])
    return <div>
        {(isEven)?"it is even":""}
    </div>
}



// My method-1 of printing "it is even"
function Buttons2() {
   const [count,setCount] = useRecoilState(countAtom) 
    // with this line we are getting both count and setCount , hence whenever count changes Buttons component also re-render . 
    //what we can do is get only the setCount function and using callback function inside setCount function update the count(  setCount((c)=>c+1)   or    setCount(function(c){ return c+1 } )       )    .  Hence whenever count changes Buttons component do not  re-render.
   // const setCount = useSetRecoilState(countAtom)

    // use Recoil to manage large global states , which are being used by large no. of components
    // use useState() for the state variables which are defined and used in the same component or used by very less no. of components(like 1 child component)
  
  
    
    const divref = useRef();
    function checkdiv()
    {
        if((count+1)%2==0)
        {
            divref.current.innerHTML = "it is even"
        }
        else{
            divref.current.innerHTML = ""
        }
    }
  return <div>
    <button onClick={() => {
      setCount((count)=>{
        checkdiv()
        return count + 1})
     
    }}>Increase</button>

    <button onClick={() => {
      setCount((count)=>{ 
        checkdiv()
        return count - 1})
     
    }}>Decrease</button>
    <div ref={divref}></div>
  </div>
}


// My method-2 of printing "it is even", but does not works
function Buttons() {
    const [count,setCount] = useRecoilState(countAtom) 
     // with this line we are getting both count and setCount , hence whenever count changes Buttons component also re-render . 
     //what we can do is get only the setCount function and using callback function inside setCount function update the count(  setCount((c)=>c+1)   or    setCount(function(c){ return c+1 } )       )    .  Hence whenever count changes Buttons component do not  re-render.
    // const setCount = useSetRecoilState(countAtom)
 
     // use Recoil to manage large global states , which are being used by large no. of components
     // use useState() for the state variables which are defined and used in the same component or used by very less no. of components(like 1 child component)
   
   
     
     const divref = useRef();
     function checkdiv()
     {
         if((count)%2==0)
         {
             divref.current.innerHTML = "it is even"
         }
         else{
             divref.current.innerHTML = ""
         }
     }
   return <div>
     <button onClick={() => {
       setCount((count)=>{
         
         return count + 1})
         checkdiv()
         // this method does not work , because setCount or any other set_state_variable method is an asynchronous method
         // when we press button , setCount function takes time to execute and update count , hence, checkdiv() which is just after setCount function , runs with the previous value of the count . hence we see that for odd count we get "it is even" while for even count we get ""
         // Solution:- put checkdiv() function inside setCount , so that updation of count and checkdiv() both come under async function and execute though little late but together one after another
         // Better Solution:- make a component which takes count state variable , then checks the condition like checkdiv() and render based on the value of count
         //                   since all components which use count state variable render only after the updation of count , so there is no time lag due to the async nature of setCount , as when setCount finishes updating the count state variable then only it calls all the components using the count state variable to rerender with the updated value of count
         // Best Solution :- use "Selector" of recoil library
     }}>Increase</button>
 
     <button onClick={() => {
       setCount((count)=>{ 
         
         return count - 1})
         checkdiv()
     }}>Decrease</button>
     <div ref={divref}></div>
   </div>
 }
 
export default App

