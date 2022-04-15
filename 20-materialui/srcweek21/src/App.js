import "./App.css";
import Header from "./components/Header";

import { Container } from "@mui/material";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { useState } from "react";

function App() {
  const [itemArray, setItemArray] = useState([
    {
      id: 1,
      category: "WebDesign",
      title: "HTML",
      des: "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      id: 2,
      category: "WebDesign",
      title: "HTML2",
      des: "Hypertext222 Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      id: 3,
      category: "FrontEnd",
      title: "JavaScript",
      des:"JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification."
    },
    {
      id: 4,
      category: "FrontEnd",
      title: "HTML2",
      des: "Hypertext222 Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      id: 5,
      category: "BackEnd",
      title: "HTML2",
      des: "Hypertext222 Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      id: 6,
      category: "BackEnd",
      title: "HTML2",
      des: "Hypertext222 Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    },
  ]);

  const [selectedItem,setSelectedItem]=useState({})

  return (
    <>
      <Header />
      <Container >
        <LeftSide items={itemArray} setSelectedItem={setSelectedItem}/>
        <RightSide selectedItem={selectedItem} />
      </Container>
    </>
  );
}

export default App;
