import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SanityClient from "../client.js";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { GiRabbitHead } from "react-icons/gi";
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
                <h3 id="quoteP">Here are some of my projects </h3>
                <h3 id="indentP">One from each year of my degree <span className="quoteBunny"><GiRabbitHead /></span></h3>
                <section className="projectGrid"> {project && project.map((project, index) => (
                    <article className="projectContentCard">
                        <h3 className="projectTitle"> <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer"> {project.title}</a> </h3>
                        <div className="information"> <span> <strong>Finished on</strong>: {"  "}
                            {new Date(project.date).toLocaleDateString()}
                        </span>
                            <p className="description"> {project.description}
                            </p>
                            <div className="linkContainer">
                                <p> <a href={project.link} target="_blank" rel="noopener noreferrer" className="link"> <span role="img" aria-label="right pointing arrow"><FaLongArrowAltRight />
                                </span>
                                    <strong>View Project</strong> {""}
                                </a></p>
                                <p>
                                    <span id="blue" role="img" aria-label="right pointing arrow"><FaLongArrowAltRight />
                                    </span>
                                    <Link className="link" to={"/post/"}><strong>Read reflectation</strong></Link>
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