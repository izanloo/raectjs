import "./App.css";
import { useEffect, useState } from "react";
import Posts from "./components/Posts";

function App() {
  return <Posts link={"https://jsonplaceholder.typicode.com/posts"} />;
}

export default App;
