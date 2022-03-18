import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react"
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import './components/style/home.css';
import './components/style/post.css';
import './components/style/singlePost.css';
import './components/style/project.css';
import './components/style/about.css';
import './components/style/footer.css';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/project:slug' element={<p>singleProject</p>} />
        <Route path='/post/:slug' element={<SinglePost />} />
        <Route path='/post' element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
