import React from 'react';
import './Footer.css';
import { FaInstagram,FaTwitter,FaFacebookF,FaLinkedin} from "react-icons/fa";

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="for-contact">
                        <h1>Jober</h1>
                        <h4>Call us</h4>
                        <p className='telephone'>(123) 456-7890</p>
                        <p>
                            90 Fifth Avenue, 3rd Floor<br />
                            San Francisco, CA 1980<br />
                            office@jobster.com
                        </p>
                    </div>
                    <div className="column-1">
                        <h4>For Candidates</h4>
                        <ul className="list-unstyled">
                            <li>Find job</li>
                            <li>Candidate Dashboard</li>
                            <li>My Application</li>
                            <li>Favourite Jobs</li>
                            <li>My Inbox</li>
                        </ul>
                    </div>
                    <div className="column-1">
                        <h4>For Employers</h4>
                        <ul className="list-unstyled">
                            <li>Find Candidates</li>
                            <li>Company Dashboard</li>
                            <li>Post a Job</li>
                            <li>Manage Jobs</li>
                        </ul>
                    </div>
                    <div className="column-1">
                        <h4>Other Demos</h4>
                        <ul className="list-unstyled">
                            <li>Image Rotator</li>
                            <li>Illustration</li>
                            <li>Boxed Hero</li>
                            <li>Image Background</li>
                            <li>Top Search</li>
                            <li>Image Card</li>
                        </ul>
                    </div>
                    <div className="column-1">
                        <h4>About Us</h4>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>FAQs</li>
                            <li>Contact Us</li>
                            <li>404 Page</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Jober. All Rights Reserved.</p>
                    <ul className="socials">
                        <li><FaFacebookF /></li>
                        <li><FaTwitter /></li>
                        <li><i><FaInstagram /></i></li>
                        <li><i><FaLinkedin /></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
