import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react"
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/post/:slug' element={<SinglePost />} />
        <Route path='/post' element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
