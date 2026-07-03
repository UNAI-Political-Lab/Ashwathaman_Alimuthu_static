import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Journey from './sections/Journey';
import Vision from './sections/Vision';
import Initiatives from './sections/Initiatives';
import Media from './sections/Media';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

export default function App() {
  const [activeHash, setActiveHash] = useState('#home');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Handle client-side path to hash redirection (e.g., /about -> /#about) for dev server / direct loads
  useEffect(() => {
    const pathname = window.location.pathname.replace(/^\/|\/$/g, '').toLowerCase();
    const validPaths = ['home', 'about', 'journey', 'vision', 'initiatives', 'media', 'gallery', 'contact'];
    if (validPaths.includes(pathname)) {
      window.location.replace(`/#${pathname}`);
    }
  }, []);

  // Sync hash routing on manual URL modifications & click actions
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setActiveHash(hash);
      
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        // Adjust for sticky header height (approx 80px)
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial sync
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update active hash based on scroll position
  useEffect(() => {
    const sections = ['home', 'about', 'journey', 'vision', 'initiatives', 'media', 'gallery', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Trigger when section occupies the active viewport area
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveHash(`#${id}`);
          // Update URL hash without causing a page jump/hashchange trigger
          window.history.replaceState(null, null, `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(secId => {
        const el = document.getElementById(secId);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navigateTo = (hash) => {
    window.location.hash = hash;
    setActiveHash(hash);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <>
      <Navigation activeHash={activeHash} onNavigate={navigateTo} />

      <Home onNavigate={navigateTo} onWatchVideo={() => setIsVideoModalOpen(true)} />
      <About />
      <Journey />
      <Vision />
      <Initiatives />
      <Media />
      <Gallery />
      <Contact />

      <Footer onNavigate={navigateTo} />

      {/* Watch Video Lightbox Modal */}
      <div 
        className={`modal ${isVideoModalOpen ? 'active' : ''}`}
        onClick={closeVideoModal}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <i className="fas fa-times modal-close" onClick={closeVideoModal}></i>
          {isVideoModalOpen && (
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
              title="Ashvathaman Allimuthu Profile Video"
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
}
