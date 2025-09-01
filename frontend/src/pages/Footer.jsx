import "../styles/Footer.css";
import React from "react";
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} BrightLearn | All Rights Reserved</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Support</a>
      </div>
    </footer>
  );
}

export default Footer;
