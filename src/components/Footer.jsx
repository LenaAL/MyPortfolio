import React from "react";
import { FaRegEnvelope, FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return <> <footer className="footer">
        <div className="footerText">
            <div> <strong>Contact me:</strong>
                <p><FaRegEnvelope /> <a href="mailto: Lenaamdallarsen@gmail.com">Lenaamdallarsen@gmail.com</a></p>
                <p><FaDiscord /> Ecentrah#7213</p>
                <p><FaLinkedin /> If i had one lol </p>
                <p><FaTwitter /> @xLenaAL</p>
            </div>
            <div><strong>Made with React and Sanity.io</strong>
            </div>
        </div>
    </footer> </>
}