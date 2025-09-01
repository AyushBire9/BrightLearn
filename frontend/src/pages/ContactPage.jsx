import "./../styles/ContactPage.css";
import React from "react";
function ContactPage() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
