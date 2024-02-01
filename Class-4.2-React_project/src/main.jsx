import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 

    {/* call to the "App" component . Another way = <App></App> */}
  </React.StrictMode>,
)


// React calculates the "diff"
// ReactDOM or ReactNative manages the stuff to put the diff to  the DOM
// Structure of jsx file
// Javascript code 
//  {
        // function() //component 
        // {
          // retruns {
            // <HTML>
              // { 
                  // in this html returned we can write the javascript code by enclosing in { }
                  // like== 
                  // {
                    // let a = 10;
                    // for(let i=0;i<b.length;i++)
                    // {
                      // 
                    // }
                  // }
              // }
       // } 
 // } 




