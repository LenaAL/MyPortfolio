import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SanityClient from "../client.js";


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
        <main className="mainPost">
            <h1 className="PostText">Reflectations</h1>
            <h2 className="PostText2">Here i will post my thoughts and reflectations over the projects I have made</h2>
            <section className="containerPost">
                <div className="postGrid">
                    {post && post.map((post, index) => (
                        <article>
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                <span className="cards" key={index}>
                                    <img src={post.mainImage.asset.url}
                                        alt={post.mainImage.alt}
                                        width="400px" height="400px" />
                                    <span className="postTitle">
                                        <h3 className="postText3">{post.title}</h3>
                                    </span>
                                </span>

                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
};