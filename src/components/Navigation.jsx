import React, { useState, useEffect } from 'react';

export default function Navigation({ activePath, onNavigate }) {
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
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Journey', path: '/journey' },
    { label: 'Vision', path: '/vision' },
    { label: 'Initiatives', path: '/initiatives' },
    { label: 'Media', path: '/media' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    onNavigate(path);
    setIsMobileNavActive(false);
  };

  return (
    <>
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className="container nav-container">
          <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="logo logo-link">
            <img src="/assets/logo-bjp.webp" alt="BJP Logo" />
            <span className="logo-text">A. Ashvathaman Allimuthu</span>
          </a>
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className={activePath === item.path ? 'active' : ''}
                    onClick={(e) => handleLinkClick(e, item.path)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="social-nav">
              <a href="https://www.facebook.com/asuvathaman.allimuthu/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com/asuvathaman" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
              <a href="https://www.instagram.com/asuvathamanallimuthu/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.youtube.com/channel/UCW271630AAMsr_Shfs-2FFw" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
            <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="btn-contact-nav">
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
            <li key={item.path}>
              <a
                href={item.path}
                className={activePath === item.path ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, item.path)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-social">
          <a href="https://www.facebook.com/asuvathaman.allimuthu/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://x.com/asuvathaman" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
          <a href="https://www.instagram.com/asuvathamanallimuthu/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UCW271630AAMsr_Shfs-2FFw" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </>
  );
}
