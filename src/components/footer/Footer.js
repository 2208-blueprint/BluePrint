import React from 'react'

const Footer = () => {
    return (
        <div id="footer-root-container">
            <div className="footer-group-1">
                <div className="footer-column">
                    <h2>Helpful Links</h2>
                    <a href="/">Help/FAQ</a>
                    <a href="/profile">My Account</a>
                    <a href="/">Contact Us</a>
                </div>
                <div className="footer-column">
                    <h2>Our Network</h2>
                    <a href="/">Github</a>
                    <a href="/">Facebook</a>
                    <a href="/">Google</a>
                </div>
                <div className="footer-column">
                    <h2>About Us</h2>
                    <a href="/">Who We Are</a>
                    <a href="/">Github Repository</a>
                    <a href="/">Contact Us</a>
                </div>
            </div>
            <div className="footer-group-2">
                <img src="./e481ee2c79e42c5250d8823e53954539.png"/>
                <p>By continuing past this page, you agree to our terms of use</p>
                <p className="footer-copy">©BluePrint 2022</p>
            </div>
        </div>
    )
}

export default Footer