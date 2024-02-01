// Routing - very very important
// 3 jargons related to Routing
// 1. Single Page Application :- React lets you create single page application . In a single Page Application, when we change routes from the client side then the html corresponding to the new route does not comes from the backend through another fetch request made to the backend, it comes from the client side only, as all possible html related to all possible routes of that url comes in a single time-the first time the fetch request was made to the backend of the website or url. whenever we change routes , the new html corresponding to the new route comes from the client side only , no further(or very less) fetch requests are made to the backend. Hence it does not do hard-reloading when the route is changed ///// while in a multi-page Application whenever we change routes , a new fetch request  goes to the backend and the new html corresponding to that new route comes from the backend . Hence it  does  hard-reloading when the route is changed.
// 2. Client side bundle :- whenever we make the fetch request to the backend of a particular url for the first time , a whole bundle of js and html file come which have the js and html corresponding to all the routes of that url ,thus we can make single page Application through this
// 3. Client side routing:- It is a way of coding in which we write code through which whenever the route changes at the client side ,we get back the corresponding html and js from the---->>the html and js bundle that has came through client side bundle the first time we made the fetch request to the backend. Thus this is way of programming to make single page Applications



// Till now we have managed multiple routes(GET,POST,PUT,DELETE,etc. through app.get("route",...middlewares, route-handler-function),app.post("route",...middlewares, route-handler-function),app.put("route",...middlewares, route-handler-function),app.delete("route",...middlewares, route-handler-function)) through express library. Those routes were backend-routes as they were written in the code of backend
// React lets you create Front-end routes as they are written in the front-end code and to access the html of those route we don't make a fetch request to the backend , we directly access it in the front-end only


// How to do routing in react? -->>> using "react-router-dom" library
import React, { Suspense, useState ,useEffect} from 'react'
// Suspense API used for asynchronous component fetching or asynchronous data fetching
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

// importing components without lazy loading
// import Dashboard from './components/dashboard'
// import Landing from './components/Landing'


// importing components with lazy loading
// lazy loading :- In this , once the whole bundle of html and js for all the possible routes of that url comes from the backend after the first fetch request we make to the backend, then the html and js of a particular route only come to client side when the route is actually called.That is in lazy loading the html and js comes from the bundle only when need arises ,i.e., hen that specific route is called.
// without lazy loading , we just put every html and js that is present in the bundle corresponding to every route of that url, in the client side, which may not be required if the client only goes to very few routes of that url.

const Dashboard = React.lazy(()=>{return import('./components/dashboard')})
// ()=>{return import('./components/dashboard')} can also be written as ()=>import('./components/dashboard')
const Landing = React.lazy(()=>{return import('./components/Landing')})
// React.lazy() makes the component asynchronous
// In React when we are fetching asynchronous component or asynchronous data, we wrap it inside Suspense component using the Suspense API .

let c=0,d=0;
// In this week-7 we are learning to structure the project in a good way
// hence all the components are defined in a different folder
function App() {


  // SUSPENSE API
  return (
    <div>
      <div style={{backgroundColor:"black" , color:"white"}}>constant nav-bar</div>
      {/* BrowserRouter is just another component provided by react-router-dom. It acts as a wrapper component for all the corresponding components of all the routes defined in it .     
      all of the components that are rendered outside the BrowserRouter component remain constant and do not change or get affected or reload if we change the url. only the portion mentioned inside BrowserRouter component change or reload on changing the url */}
      <OutsideComponent />
      <BrowserRouter>
      <InsideComponent />
      <Appbar />
      <Routes>
        <Route path='/dashboard' element={<Suspense fallback="loading..."><Dashboard /></Suspense>} />
        <Route path='/' element={<Suspense fallback="loading..."><Landing /></Suspense>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar()
{ c++;
  console.log(c);
  const navigate = useNavigate()
  return (
    <div>
         <button onClick={()=>{
       // window.location.href="/dashboard"
        // window lets you access the whole window of the DOM
        // location is an object denoting the whole DOM , including it's url,router,etc.
        // location.href gives the url+router for the webpage that is being shown by the DOM

        // But this is not correct way of navigating through different routes, as when we change the route through location.href , network request using fetch again goes to backend , which then returns the html for the route. This breaks the concept of Single page Application , hence not used.
        // Hence it  does hard-reloading when the route is changed


        // solution:- we use the useNavigate() hook provided by the react-router-dom library. This is the correct way of doing client-side-routing. This is the correct way of navigating through different routes at the client side.
        // One limitation of useNavigate():- It is mandatory for the declaration and the usage code of useNavigate() to be inside  a component that is inside the BrowserRouter component else it will not work.
     navigate("/dashboard")
      }}>Dashboard</button>

      <button onClick={()=>{
      //  window.location.href="/"
      navigate("/")
}}>Landing</button>


    </div>
  )
}

function OutsideComponent()
{
  d++;
  return <div>count is {d}</div>
}
let f=0;
function InsideComponent()
{  const navigate2 = useNavigate()
  // even though the InsideComponent() component is inside the BrowserRouter component , still it does not reload(if it is completely unconnected to the react-router-dom library) when the router is changed. It reloads when the router is changed only when it is somehow (using or connected) to the react-router-dom library.This means for a component to reload on changing routes it should be inside BrowserRouter component and when it is somehow (using or connected) to the react-router-dom library.
  const [e,sete] = useState(0)
  f++;
  console.log(f);
  useEffect(()=>{sete(e+1)},[])
    console.log("e is "+e);
  return <div>count is {f}</div>
  
}
export default App
