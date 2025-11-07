import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Connecting tribal artisans with the world, preserving heritage through authentic craftsmanship.</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#facebook">📘 Facebook</a>
              <a href="#instagram">📷 Instagram</a>
              <a href="#twitter">🐦 Twitter</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@tribalcrafts.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Tribal Handicrafts. Preserving heritage through authentic craftsmanship.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;