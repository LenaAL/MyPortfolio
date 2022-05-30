import React, { useState, useEffect } from "react";
import SanityClient from "../client.js";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import Footer from "./Footer";


export default function Project() {

    const [project, setProject] = useState(null);


    useEffect(() => {
        SanityClient.fetch(`*[_type=="project"] {
                    title,
                    slug,
                    date,
                    place,
                    description,
                    projectType,
                    link,
                    tags,
                }

                `).then((data) => setProject(data))
            .catch(console.error);
    }, []);

    if (!project) return <div><AiOutlineLoading /> Loading...</div>

    return <>
        <main className="mainProjectContainer">
            <section className="projectSection">
                <h1 className="pageTitle">My Projects</h1>

                <section className="projectGrid"> {project && project.map((project, index) => (
                    <article className="projectContentCard">
                        <h3 className="projectTitle"> <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer"> {project.title}</a> </h3>
                        <div className="information"> <span> <strong>Finished</strong>: {"  "}
                            {new Date(project.date).toLocaleDateString()}
                        </span>
                            <p className="description"> {project.description}
                            </p>
                            <div className="linkContainer">
                                <p> <a href={project.link} target="_blank" rel="noopener noreferrer" className="linkToProjects"> <span role="img" aria-label="right pointing arrow"><FaLongArrowAltRight />
                                </span>
                                    <strong>View Project</strong> {""}
                                </a></p>
                                <p>
                                    {/*<span id="blue" role="img" aria-label="right pointing arrow"><FaLongArrowAltRight />
                                    </span>
                                   <Link className="link" to={"/post/"}><strong>Read reflectation</strong></Link>*/}
                                </p>
                            </div>
                        </div>
                    </article>))
                }
                </section>
            </section>
        </main>
        <Footer />
    </>
}