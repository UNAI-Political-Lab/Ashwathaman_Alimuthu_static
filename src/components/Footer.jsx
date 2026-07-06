import React from 'react';

export default function Footer({ onNavigate }) {
  const handleLinkClick = (e, path) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo_1_0.webp" alt="Ashvathaman Allimuthu" className="footer-brand-logo" />
            <p className="footer-brand-desc">
              A. Ashvathaman Allimuthu is State Secretary of Tamil Nadu BJP Legal Cell, a practicing advocate at Chennai, political leader and writer dedicated to national civilizational progress.
            </p>
          </div>
          
          <div className="footer-links-col">
            <h3>Quick Links</h3>
            <ul className="footer-links-list">
              <li><a href="/" onClick={(e) => handleLinkClick(e, '/')}>Home</a></li>
              <li><a href="/about" onClick={(e) => handleLinkClick(e, '/about')}>About</a></li>
              <li><a href="/journey" onClick={(e) => handleLinkClick(e, '/journey')}>Journey</a></li>
              <li><a href="/vision" onClick={(e) => handleLinkClick(e, '/vision')}>Vision</a></li>
              <li><a href="/initiatives" onClick={(e) => handleLinkClick(e, '/initiatives')}>Initiatives</a></li>
              <li><a href="/media" onClick={(e) => handleLinkClick(e, '/media')}>Media</a></li>
              <li><a href="/gallery" onClick={(e) => handleLinkClick(e, '/gallery')}>Gallery</a></li>
              <li><a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact-col">
            <h3>Contact Channels</h3>
            <div className="footer-contact-details">
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Madras Parrys Law Offices, Chennai, TN</span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-envelope"></i>
                <span>info@ashvathaman.in</span>
              </div>
              <div className="footer-contact-item">
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp Connect Available</span>
              </div>
            </div>
            <div className="footer-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 A. Ashvathaman Allimuthu. All rights reserved. Built for civic transparency.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#legal">Legal Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
