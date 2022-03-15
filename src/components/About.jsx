import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import Footer from "./Footer";
import { AiOutlineLoading } from "react-icons/ai";
import BlockContent from "@sanity/block-content-to-react";
import image from '../img/AboutPic.jpg'


export default function About() {
    const [author, setAuthor] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"] {
            name,
            bio,
            "authorImage": image.asset->url
        }`
        )
            .then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    if (!author) return <div><AiOutlineLoading /> Loading...</div>

    return <>
        <main className="about">
            <h1>About me</h1>
            <div className="wrapper">
                <section className="aboutBg">
                    <img className="me" src={image} />
                    <div className="aboutText">
                        <h2><span>I'm a frontend developer</span></h2>
                        <div className="aboutBlockContent">
                            <BlockContent blocks={author.bio} projectId="zzsf9mdk" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <Footer />
    </>
}
