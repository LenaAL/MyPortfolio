import React from "react";
import { FaRegEnvelope, FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return <> <footer className="footer">
        <div className="footerText">
            <div> <strong>Contact me:</strong>
                <p><span className="footerIcon"><FaRegEnvelope /></span> <a href="mailto: Lenaamdallarsen@gmail.com">Lenaamdallarsen@gmail.com</a></p>
                <p><span className="footerIcon"><FaLinkedin /></span> <a href="https://www.linkedin.com/in/lena-amdal-larsen-240b08234/">Lena Amdal-Larsen</a></p>
                <p><span className="footerIcon"><FaTwitter /></span> @xLenaAL</p>
            </div>
            <div><strong>Made with React and Sanity.io</strong>
            </div>
        </div>
    </footer> </>
}