import React from 'react';
import './Navbar.css';
import jobber from "../../assets/jobber.jpg";

const Navbar = () => {
  return (
    <section className="navbar">
        <div className="container">
            <div className="logo">
                <img src={jobber} alt="Jobber Logo" />
            </div>
            <div className="links">
                <div className="link">Home</div>
                <div className="link">About</div>
                <div className="link">Policy</div>
                <div className="link">Contact</div>
            </div>
        </div>
    </section>
  )
}

export default Navbar;
