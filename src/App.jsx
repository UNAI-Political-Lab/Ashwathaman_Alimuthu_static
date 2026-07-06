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
  const [activePath, setActivePath] = useState('/');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Helper to scroll to a section by element ID
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Navigates and updates browser history
  const navigateTo = (path) => {
    window.history.pushState(null, null, path);
    setActivePath(path);
    
    // Map path to section id
    const sectionId = path === '/' ? 'home' : path.replace('/', '');
    scrollToSection(sectionId);
  };

  // Sync routing on popstate (browser back/forward button clicks)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setActivePath(path);
      const sectionId = path === '/' ? 'home' : path.replace('/', '');
      scrollToSection(sectionId);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle direct loads / hard reloads
  useEffect(() => {
    const path = window.location.pathname;
    const validPaths = ['/', '/home', '/about', '/journey', '/vision', '/initiatives', '/media', '/gallery', '/contact'];
    
    if (validPaths.includes(path)) {
      const resolvedPath = path === '/home' ? '/' : path;
      setActivePath(resolvedPath);
      // Wait for DOM to render completely before scrolling
      setTimeout(() => {
        const sectionId = resolvedPath === '/' ? 'home' : resolvedPath.replace('/', '');
        scrollToSection(sectionId);
      }, 100);
    }
  }, []);

  // Update active path based on scroll position
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
          const path = id === 'home' ? '/' : `/${id}`;
          setActivePath(path);
          // Update URL without causing page reload or popstate trigger
          window.history.replaceState(null, null, path);
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

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <>
      <Navigation activePath={activePath} onNavigate={navigateTo} />

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
