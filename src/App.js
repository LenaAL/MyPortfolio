import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react"
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
