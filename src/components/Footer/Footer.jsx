import React from "react";
import "./Footer.css";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="footer-top">
                    <h1 className="logo">zomato</h1>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Eternal</h3>
                        <ul>
                            <li>Zomato</li>
                            <li>Blinkit</li>
                            <li>District</li>
                            <li>Hyperpure</li>
                            <li>Feeding India</li>
                            <li>Investor Relations</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>For Restaurants</h3>
                        <ul>
                            <li>Partner With Us</li>
                            <li>Apps For You</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>For Delivery <br /> Partners</h3>
                        <ul>
                            <li>Partner With Us</li>
                            <li>Apps For You</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Learn More</h3>
                        <ul>
                            <li>Privacy</li>
                            <li>Security</li>
                            <li>Terms of Service</li>
                            <li>Help & Support</li>
                            <li>Report a Fraud</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div className="footer-column social">
                        <h3>Social Links</h3>
                        <div className="social-icons">
                            <FaLinkedin />
                            <FaInstagram />
                            <FaYoutube />
                            <FaFacebook />
                            <FaTwitter />
                        </div>
                        <div className="store-buttons">
                            <img src="gp.png" alt="App Store" />
                            <img src="ios.png" alt="Google Play" />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="footer-bottom">
                    <p>
                        By continuing past this page, you agree to our Terms of Service, Cookie
                        Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.
                        <br /> 2008-2025 © Zomato™ Ltd. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
