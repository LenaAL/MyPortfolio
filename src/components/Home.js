import React from "react";
import image from '../img/tim-stief-YFFGkE3y4F8-unsplash.jpg';

export default function Home() {
    return (
        <main>
            <img src={image} alt="Snowy mountains over water" className="img" />
            <div>
                <h1 className="text">Lena Amdal-Larsen</h1>
                <h2 className="undertext">This is my portfolio</h2>
            </div>
        </main>
    )
}