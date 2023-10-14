import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_content">
        <Link className="Footer_About" to="/About">
          <p>About App</p>
        </Link>
        <Link className="Footer_Contact" to="/Contact">
          <p>Contact Me</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
