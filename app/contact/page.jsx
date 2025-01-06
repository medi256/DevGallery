import React from "react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h1>Contact Me</h1>
        <p>
          Hey there! 👋 Thanks for stopping by. If you're interested in
          collaborating on any of my projects or just want to chat about
          programming, feel free to reach out. I'm always open to new ideas and
          partnerships!
        </p>
        <p>
          Whether you're a developer, designer, or just someone passionate about
          tech, I'd love to hear from you. Let's build something amazing
          together!
        </p>
        <p>
          You can contact me directly via email at:{" "}
          <a href="mailto:managersebowa4525@gmail.com">
            managersebowa4525@gmail.com
          </a>
          . I'll do my best to get back to you as soon as possible.
        </p>
        <p>Looking forward to hearing from you!</p>
      </div>
    </div>
  );
};

export default ContactUs;
