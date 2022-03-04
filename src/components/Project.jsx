import React, { useState, useEffect } from "react";
import SanityClient from "../client.js";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./Footer";



export default function Project() {

    const [project, setProject] = useState(null);

    useEffect(() => {
        SanityClient
            .fetch(`*[_type == "project"] {
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`)
            .then((data) => setProject(data))
            .catch(console.error);
    }, []);

    return (
        <>
            <main className="mainProjectContainer">
                <section className="projectSection">
                    <h1 className="pageTitle">My Projects</h1>
                    <h2 className="pageSub">Here I will link all my projects</h2>
                    <p className="pageText">`To read about the reflectations I have around the spesific projects go to Reflections or click <Link to="/post" className="link">    here`</Link></p>
                    <section className="projectGrid">
                        {project && project.map((project, index) => (
                            <article className="projectContentCard">
                                <h3 className="projectTitle">
                                    <a href={project.link}
                                        alt={project.title}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        {project.title}
                                    </a>
                                </h3>
                                <div className="information">
                                    <span>
                                        <strong>Finished on</strong>: {"  "}
                                        {new Date(project.date).toLocaleDateString()}
                                    </span>
                                    <p className="description">
                                        {project.description}
                                    </p>
                                    <p>
                                        <a href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link">
                                            <span role="img" aria-label="right pointing arrow"><FaLongArrowAltRight />
                                            </span> <strong>View Project</strong>{""}
                                        </a>
                                    </p>
                                </div>
                            </article>
                        ))}
                    </section>
                </section>
            </main>
            <Footer></Footer>
        </>

    )
}