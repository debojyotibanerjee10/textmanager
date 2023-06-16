import { useState } from 'react';
import Navbar from "./components/Navbar";
import Textpara from "./components/Textpara";
import About from "./components/About"
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const [mode,setMode]=useState("light");
  const togglemode=()=>{
    if(mode==="light")
    {
      setMode("dark");
    }
    else
    {
      setMode("light");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextManager" theme={mode} toggle={togglemode}/>
      <Routes>
      <Route exact path="/" element={<Textpara theme={mode}/>}/>
      <Route exact path="/about" element={<About theme={mode}/>}/>
      </Routes>
    </Router>
    
    </>
  );
}


