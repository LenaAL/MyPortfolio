import React from "react";
import { NavLink } from "react-router-dom";
import image from '../img/alexander-grey-62vi3TG5EDg-unsplash.jpg';



export default function Home() {
    return (
        <>
            <main className="homeBg"> <img src={image} alt="A bunny sticking its head out from under a house with grass in his mouth" className="img" />
                <div className="bgContainer">
                    <h1 className="text">Hi! I'm Lena Amdal-Larsen</h1>
                    <h2 className="undertext">Junior Web Designer </h2>
                </div>
                <div className="buttonContainer">
                    <NavLink to="/project"> <button className="projectBtn"><span>View my work</span></button> </NavLink>
                    <NavLink to="/post"> <button className="reflectBtn"><span>My Reflections</span></button> </NavLink>
                    <NavLink to="/about"> <button className="aboutBtn"><span>About Me</span></button> </NavLink>
                </div>

            </main>
        </>)
}