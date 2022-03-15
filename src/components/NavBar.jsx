import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { GiRabbitHead } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import './style/navBar.css';
import './style/home.css';
import './style/post.css';
import './style/singlePost.css';
import './style/project.css';
import './style/about.css';
import './style/footer.css';



export default function NavBar() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return <>
        <header className="bg">

            <nav className="container">
                <ul className="list">
                    {(toggleMenu || screenWidth > 637) && (<>
                        <NavLink to="/" exact className="logo">
                            <GiRabbitHead />LENA
                        </NavLink>
                        <NavLink to="/project" className="navBar" activeClassname="active">
                            Projects
                        </NavLink>
                        <NavLink to="/post" className="navBar">
                            Reflections
                        </NavLink>
                        <NavLink to="/about" className="navBar">
                            About Me
                        </NavLink>
                    </>)}
                    <button onClick={toggleNav} className="burger"><FaBars /></button>
                </ul>
            </nav>

        </header>

    </>
}
