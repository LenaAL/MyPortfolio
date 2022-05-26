import React from "react";
import { NavLink } from "react-router-dom";
import image from '../img/albussommer 015.JPG';



export default function Home() {
    return (
        <main className="homeBg"> <img src={image} alt="Albus the bunny" className="img" />
            <div className="bgContainer">
                <h1 className="text">Hi! I'm Lena Amdal-Larsen</h1>
                <h2 className="undertext">Web Developer, Animal Lover, and Gamer</h2>
                <NavLink to="/project"> <button className="projectBtn"><span>View my work</span></button> </NavLink>
                <NavLink to="/post"> <button className="reflectBtn"><span>My Reflections</span></button> </NavLink>
                <NavLink to="/about"> <button className="aboutBtn"><span>About Me</span></button> </NavLink>
            </div>
        </main>)
}