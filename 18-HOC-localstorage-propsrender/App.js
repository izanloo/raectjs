import "./App.css";
import { useEffect, useState } from "react";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Storage from "./components/Storage";
import Reset from "./components/Reset";

function App() {
  return <>
  {/* <Posts link={"https://jsonplaceholder.typicode.com/posts"} />; */}
  <Storage render={(save,load,remove)=>  {console.log(save,'name');return <Login save={save} load={load} remove={remove} />}}/>
  <Storage render={(save,load,remove)=> {return <Reset save={save} load={load} remove={remove} />}}/>
  </>
}

export default App;
