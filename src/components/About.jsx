import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import Footer from "./Footer";
import { AiOutlineLoading } from "react-icons/ai";
import BlockContent from "@sanity/block-content-to-react";
import image from '../img/ProfilePic.jpeg'


export default function About() {
    const [author, setAuthor] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"] {
            name,
            bio
        }`
        )
            .then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    if (!author) return <div><AiOutlineLoading /> Loading...</div>

    return <>
        <main className="about">
            <h1 className="aboutTitle">About me</h1>
            <div className="wrapper">
                <section className="aboutBg">
                    <img className="me" src={image} alt="Girl with blond hair, wearing a blue hoodie and a black jacket" />
                    <div className="skills">
                        <ul><strong>Skills:</strong></ul>
                        <ul>HTML & CSS (+Sass)</ul>
                        <ul>JavaScript</ul>
                        <ul>React.js</ul>
                        <ul>Figma, Adobe XD, Balsamiq</ul>
                    </div>
                    <div className="aboutText">
                        <h2><span>Hi I'm Lena Amdal-Larsen</span></h2>
                        <div className="aboutBlockContent">
                            <BlockContent blocks={author.bio} projectId="zzsf9mdk" dataset="production" />
                            <a href="https://drive.google.com/file/d/1Gl-okvY4uK_F5DhCm3eIvy9Z_lDfDMNd/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="MinCV">
                                <span>My CV</span></a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <Footer />
    </>
}
