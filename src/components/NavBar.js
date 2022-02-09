import React from "react";
import { NavLink } from "react-router-dom";
import './styles.css';




export default function NavBar() {
    return (
        <header className="bg">
            <div>
                <nav className="container">
                    <NavLink to="/" exact className="logo">
                        LENA
                    </NavLink>
                    <NavLink to="/project" className="nav" activeClassname="active">
                        Projects
                    </NavLink>
                    <NavLink to="/post" className="nav">
                        Blog post
                    </NavLink>
                    <NavLink to="/cv" className="nav">
                        CV
                    </NavLink>
                    <NavLink to="/about" className="nav">
                        About Me
                    </NavLink>
                </nav>
            </div>
        </header>

    )
}