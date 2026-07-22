import React from 'react';

export default function Home({ onNavigate, onWatchVideo }) {
  const handleLinkClick = (e, path) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <main id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">

            <div className="hero-leaders-group">
              <span className="leaders-group-label">Guided by Visionary Leadership</span>
              <div className="leaders-avatars">
                <div className="leader-avatar-item">
                  <img src="/assets/leader_1.webp" alt="Shri Narendra Modi" className="leader-avatar" />
                  <span className="leader-name">Narendra Modi</span>
                </div>
                <div className="leader-avatar-item">
                  <img src="/assets/leader_2.webp" alt="Shri Amit Shah" className="leader-avatar" />
                  <span className="leader-name">Amit Shah</span>
                </div>
                <div className="leader-avatar-item">
                  <img src="/assets/leader_3.webp" alt="Shri Rajnath Singh" className="leader-avatar" />
                  <span className="leader-name">Rajnath Singh</span>
                </div>
                <div className="leader-avatar-item">
                  <img src="/assets/leader_4.webp" alt="Shri Yogi Adityanath" className="leader-avatar" />
                  <span className="leader-name">Yogi Adityanath</span>
                </div>
                <div className="leader-avatar-item">
                  <img src="/assets/leader_5.webp" alt="Shri G. Kishan Reddy" className="leader-avatar" />
                  <span className="leader-name">G. Kishan Reddy</span>
                </div>
                <div className="leader-avatar-item">
                  <img src="/assets/leader_6.webp" alt="Shri Nainar Nagendran" className="leader-avatar" />
                  <span className="leader-name">Nainar Nagendran</span>
                </div>
              </div>
            </div>

            <h1 className="hero-headline">
              DON'T FOLLOW <span className="orange-part">ME,</span><br />
              JUST FOLLOW MY <span className="green-part">IDEOLOGY.</span>
            </h1>
            <p className="hero-description">
              Committed to building a stronger, inclusive and developed India through people-centric leadership, youth empowerment and social responsibility.
            </p>

            <div className="hero-ctas">
              <a href="/vision" onClick={(e) => handleLinkClick(e, '/vision')} className="btn-primary">
                VIEW VISION <i className="fas fa-chevron-right" style={{ fontSize: '0.8rem' }}></i>
              </a>
              <a href="/journey" onClick={(e) => handleLinkClick(e, '/journey')} className="btn-secondary">
                EXPLORE JOURNEY <i className="fas fa-chevron-right" style={{ fontSize: '0.8rem' }}></i>
              </a>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="hero-image-wrapper">
              <img src="/assets/herosection.webp" alt="A. Ashvathaman Allimuthu speaking at a podium" className="hero-img-main" />
              {/* Modi Greeting Inset Card */}
              <div className="hero-inset-card">
                <img src="/assets/insert-modi.webp" alt="Ashvathaman Allimuthu greeting PM Narendra Modi" />
                <div className="card-content">
                  <h4>People First. India Always.</h4>
                  <p>Building a brighter tomorrow together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats & Quote Cards (Tricolor Overlay Row) */}
        <div className="hero-overlays">
          <div className="overlays-grid">
            {/* Stats Card */}
            <div className="stats-card">
              <div className="stat-item">
                <i className="fas fa-handshake stat-icon"></i>
                <span className="stat-number">15+</span>
                <span className="stat-label">Years</span>
                <span className="stat-caption">Of Public Service</span>
              </div>
              <div className="stat-item">
                <i className="fas fa-briefcase stat-icon"></i>
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects</span>
                <span className="stat-caption">Completed</span>
              </div>
              <div className="stat-item">
                <i className="fas fa-users stat-icon"></i>
                <span className="stat-number">1M+</span>
                <span className="stat-label">People</span>
                <span className="stat-caption">Impacted</span>
              </div>
              <div className="stat-item">
                <i className="fas fa-trophy stat-icon"></i>
                <span className="stat-number">25+</span>
                <span className="stat-label">Awards</span>
                <span className="stat-caption">&amp; Recognitions</span>
              </div>
            </div>

            {/* Quote Card */}
            <div className="quote-card">
              <p className="quote-text">
                Leadership is not about position, it's about <span className="highlight">purpose</span> and <span className="highlight">service</span>.
              </p>
              <span className="quote-author">— Ashvathaman Allimuthu</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tricolor Ribbon Border */}
      <div className="tricolor-wave-bottom">
        <div className="tricolor-ribbon"></div>
      </div>
    </main>
  );
}
