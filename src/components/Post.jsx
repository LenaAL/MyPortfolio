import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SanityClient from "../client.js";
import Footer from "./Footer";


export default function Post() {

    const [post, setPost] = useState(null);

    useEffect(() => {
        SanityClient
            .fetch(`*[_type == "post"] { 
                title,
                slug,
                mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []); //only run once


    return (
        <>
            <main className="mainPost">
                <h1 className="PostText">Reflections</h1>
                <section className="containerPost">

                    <div className="postGrid">
                        {post && post.map((post, index) => (
                            <article className="box">
                                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                    <div className="cards" key={index}>
                                        <div className="cardImgContainer">
                                            <img src={post.mainImage.asset.url}
                                                alt={post.mainImage.alt}
                                                className="cardsImg"
                                            />
                                        </div>
                                        <span className="postTitle">
                                            <h3 className="postText3">{post.title}</h3>
                                        </span>
                                    </div>

                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
};