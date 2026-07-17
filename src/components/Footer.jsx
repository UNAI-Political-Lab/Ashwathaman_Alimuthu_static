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
              <a href="https://www.facebook.com/asuvathaman.allimuthu/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com/asuvathaman" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
              <a href="https://www.instagram.com/asuvathamanallimuthu/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.youtube.com/channel/UCW271630AAMsr_Shfs-2FFw" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-info">
            <p>&copy; 2026 A. Ashvathaman Allimuthu. All rights reserved. Built for civic transparency.</p>
            <div className="footer-bottom-links">
              <a href="/legal/privacy-policy.html">Privacy Policy</a>
              <a href="/legal/terms-of-use.html">Terms of Use</a>
              <a href="/legal/legal-disclaimer.html">Legal Disclaimer</a>
            </div>
          </div>
          <a href="https://unaitech.com" target="_blank" rel="noopener noreferrer" className="unai-tech-badge">
            <div className="unai-tech-badge-text">
              <span className="unai-crafted">CRAFTED BY</span>
              <span className="unai-brand">UNAI<span className="unai-tech">TECH</span></span>
            </div>
            <div className="unai-tech-badge-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
