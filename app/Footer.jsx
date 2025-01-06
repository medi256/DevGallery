import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="https://www.mergesociety.com">MergeSociety</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a
                href="https://www.twitter.com/@manager70191"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/medi256"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@devgallary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i> TikTok
              </a>
            </li>
            <li>
              <a href="mailto:managersebowa4525@gmail.com">
                <i className="fas fa-envelope"></i> Email
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: managersebowa4525@gmail.com</p>
          <p>Phone: +256 701840072</p>
          <p>Address: 123 Dev Street, Code City</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} DevGallery. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
