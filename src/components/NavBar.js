import React from "react";
import { NavLink } from "react-router-dom";
import './styles.css';




export default function NavBar() {
    return (
        <header className="bg">
            <div>
                <nav className="container">
                    <NavLink to="/" exact className="nav" activeClassname="active">
                        Home
                    </NavLink>
                    <NavLink to="/project" className="nav">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="nav">
                        About Me
                    </NavLink>
                </nav>
            </div>
        </header>

    )
}