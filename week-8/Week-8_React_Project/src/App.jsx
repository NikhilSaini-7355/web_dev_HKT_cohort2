// flexbox in react
// flexbox is very important

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import './App.css'
import { countAtom } from './Store/CountAtom'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'

function App() {
  return  <div>
        <RecoilRoot>
      <FlexboxExample></FlexboxExample>
      </RecoilRoot>
    </div>
  
}

function FlexboxExample()
{  const count = useRecoilValue(countAtom);
   const setCount = useSetRecoilState(countAtom);
   return  <div style={{display:"flex" , justifyContent:"space-between"}} >
    <div style={{backgroundColor:"crimson"}} >
      <div style={{backgroundColor:"red"}}>
      hi there from the first div count = {count}
      </div>
      <button onClick={()=>
      {
        setCount(count+1)
      }}>click me</button>
    </div>

    <div style={{backgroundColor:"lightpink"}}>
      <div style={{backgroundColor:"green"}}>
      hi there from the second div count = {count}
      </div>
      <button onClick={()=>
      {
        setCount(count+1)
      }}>click me</button>
    </div>

    <div style={{backgroundColor:"lightblue"}}>
      <div style={{backgroundColor:"yellow"}}>
      hi there from the third div count = {count}
      </div>
      <button onClick={()=>
      {
        setCount(count+1)
      }}>click me</button>
    </div>
   </div>
   
  
  }

export default App
