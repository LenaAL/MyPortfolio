import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SanityClient from "../client.js";
/*import { ImageUrlBuilder } from "@sanity/image-url";*/
import { AiOutlineLoading } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import BlockContent from "@sanity/block-content-to-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

/*const builder = ImageUrlBuilder(SanityClient);
function urlFor(source) {
    return builder.image(source)
}*/

export default function SinglePost() {

    const [SinglePost, SetSinglePost] = useState(null);
    const { slug } = useParams();


    const navigate = useNavigate();

    useEffect(() => {
        SanityClient.fetch(`*[slug.current == "${slug}"] {
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": atuthor->image
        }`
        )
            .then((data) => SetSinglePost(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!SinglePost) return <div><AiOutlineLoading /> Loading...</div>

    return <>
        <main className="singlePContainer">
            <article className="singePArticle">
                <header>
                    <div className="singlePitem">
                        <div className="titleCard">
                            <h1 className="singleTitle">{SinglePost.title}</h1>
                            <div className="authorCard">
                                <p className="authorText">{SinglePost.name}</p>
                            </div>
                        </div>
                    </div>
                </header>
            </article>
        </main>
        <div onClick={() => navigate(-1)} className="backBtn"><FaArrowLeft /></div>
        <article className="blockContainer">
            <div className="blockContent"><BlockContent blocks={SinglePost.body} projectId="zzsf9mdk" dataset="production" /></div>
        </article>

        <Footer />
    </>
}