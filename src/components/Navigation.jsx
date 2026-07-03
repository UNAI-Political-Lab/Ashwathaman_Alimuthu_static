import React, { useState, useEffect } from 'react';

export default function Navigation({ activeHash, onNavigate }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', hash: '#home' },
    { label: 'About', hash: '#about' },
    { label: 'Journey', hash: '#journey' },
    { label: 'Vision', hash: '#vision' },
    { label: 'Initiatives', hash: '#initiatives' },
    { label: 'Media', hash: '#media' },
    { label: 'Gallery', hash: '#gallery' },
    { label: 'Contact', hash: '#contact' }
  ];

  const handleLinkClick = (e, hash) => {
    e.preventDefault();
    onNavigate(hash);
    setIsMobileNavActive(false);
  };

  return (
    <>
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className="container nav-container">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="logo logo-link">
            <img src="/assets/logo.svg" alt="Ashvathaman Allimuthu Logo" />
          </a>
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.hash}>
                  <a
                    href={item.hash}
                    className={activeHash === item.hash ? 'active' : ''}
                    onClick={(e) => handleLinkClick(e, item.hash)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="social-nav">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="btn-contact-nav">
              GET IN TOUCH <i className="fas fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
            </a>
            <i className="fas fa-bars menu-toggle" onClick={() => setIsMobileNavActive(true)}></i>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`mobile-nav-overlay ${isMobileNavActive ? 'active' : ''}`}
        onClick={() => setIsMobileNavActive(false)}
      ></div>
      <div className={`mobile-nav ${isMobileNavActive ? 'active' : ''}`}>
        <i className="fas fa-times mobile-nav-close" onClick={() => setIsMobileNavActive(false)}></i>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.hash}>
              <a
                href={item.hash}
                className={activeHash === item.hash ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, item.hash)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </>
  );
}
