import React, { useState } from 'react';

export default function Initiatives() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const categories = [
    {
      icon: 'fas fa-gopuram',
      title: 'Cultural Heritage',
      imageUrl: '/assets/init-culture.webp',
      items: [
        'Advocacy against temple vandalism; called for CBI enquiry.',
        'Prevented demolition of two temples by securing alternate route.',
        'Legal actions on reopening of Melpathi Draupadi Amman Temple.',
        'Secured stamp honoring freedom fighter Arthanareeswara Varma.'
      ]
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Social Justice & Legal Aid',
      imageUrl: '/assets/init-custom-justice.webp', // We will name the copied webp files consistently or check our names
      // Wait, let's see. In our commands we saved them as:
      // /assets/init-culture.webp
      // /assets/init-justice.webp
      // /assets/init-farmer.webp
      // /assets/init-education.webp
      // /assets/init-rail.webp
      // /assets/init-discourse.webp
      // /assets/init-animal.webp
      // /assets/init-governance.webp
      // Let's use exactly these!
      imageUrl: '/assets/init-justice.webp',
      items: [
        '12+ years of pro-bono legal support for grassroots activists.',
        'PIL to protect Economically Weaker Section (EWS) certificates.',
        'Labour Commission advocacy leading to arrest in worker death.'
      ]
    },
    {
      icon: 'fas fa-tractor',
      title: 'Farmer & Community Rights',
      imageUrl: '/assets/init-farmer.webp',
      items: [
        'Advocacy for NLC project-affected village water & compensation.',
        'Representation before National Commission for Backward Classes.',
        'Pushed for dredging of Kolakudi Lake for agriculture.'
      ]
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Education & Youth',
      imageUrl: '/assets/init-education.webp',
      items: [
        'Free residential training for rural Agnipath aspirants.',
        'PIL promoting Central Government Navodaya schools in TN.',
        'Opened a memorial Kabaddi ground in Kadampiluyur.'
      ]
    },
    {
      icon: 'fas fa-seedling',
      title: 'Environment & Rail',
      imageUrl: '/assets/init-rail.webp',
      items: [
        'Led protests to shut down polluting distillery in Melmambattu.',
        'PIL for state Rain Water Harvesting Act implementation.',
        'Pushed for Cuddalore–Pondicherry rail link in Union Budget.',
        'Biofuel research initiative partnering with IIT Madras.'
      ]
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Public Discourse',
      imageUrl: '/assets/init-discourse.webp',
      items: [
        'Hosts monthly "Thoughts on Mann Ki Baat" discussions.',
        'Frequent debater on Tamil TV representing BJP national ideas.',
        'Headed digital strategy for Assembly & local body elections.'
      ]
    },
    {
      icon: 'fas fa-dog',
      title: 'Animal Welfare',
      imageUrl: '/assets/init-animal.webp',
      items: [
        'Shelters and protects 50+ rare native Indian dog breeds.',
        'Advocates for local cattle breeding and native livestock.'
      ]
    },
    {
      icon: 'fas fa-landmark',
      title: 'Governance',
      imageUrl: '/assets/init-governance.webp',
      items: [
        'Legal complaints on Assembly rules violation and conduct.',
        'Legal queries regarding Raj Bhavan security incidents.',
        'Public defense against toll concession CAG audit reports.'
      ]
    }
  ];

  const handleToggle = (index, isDesktop = false) => {
    if (isDesktop) {
      setActiveAccordion(index);
    } else {
      setActiveAccordion(activeAccordion === index ? null : index);
    }
  };

  return (
    <section id="initiatives" className="section active">
      <div className="container">
        <div className="section-eyebrow">Action Records</div>
        <h2 className="section-title">Key Initiatives &amp; Campaigns</h2>
        <p className="initiatives-intro">Hover or tap on a card to explore case work, public interest campaigns, and judicial actions taken by Advocate Ashvathaman Allimuthu.</p>
        
        {/* Desktop View: Interactive Image Accordion */}
        <div className="initiatives-desktop-view">
          <div className="initiatives-accordion-container">
            {categories.map((cat, index) => {
              const isActive = activeAccordion === index;
              return (
                <div 
                  key={index} 
                  className={`init-acc-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => handleToggle(index, true)}
                >
                  {/* Background Image */}
                  <img
                    src={cat.imageUrl}
                    alt={cat.title}
                    className="init-acc-bg"
                    onError={(e) => {
                      const target = e.target;
                      target.onerror = null;
                      target.src = 'https://placehold.co/400x500/2d3748/ffffff?text=Image+Error';
                    }}
                  />
                  {/* Dark overlay */}
                  <div className="init-acc-overlay"></div>

                  {/* Icon Badge */}
                  <div className="init-acc-icon">
                    <i className={cat.icon}></i>
                  </div>

                  {/* Vertical Caption (Inactive State) */}
                  <span className="init-acc-vertical-title">
                    {cat.title}
                  </span>

                  {/* Details Content (Active State) */}
                  <div className="init-acc-content">
                    <h3 className="init-acc-title">{cat.title}</h3>
                    <div className="init-acc-divider"></div>
                    <ul className="init-acc-list">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="init-acc-list-item">
                          <i className="fas fa-chevron-right arrow-bullet"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Opens Downwards Accordion */}
        <div className="initiatives-mobile-view">
          <div className="initiatives-grid">
            {categories.map((cat, index) => {
              const isOpen = activeAccordion === index;
              return (
                <div key={index} className="initiatives-card">
                  <div 
                    className="init-card-header" 
                    onClick={() => handleToggle(index, false)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div 
                      className="init-icon"
                      style={{
                        backgroundColor: isOpen ? 'var(--orange-600)' : 'rgba(255, 90, 0, 0.06)',
                        color: isOpen ? 'var(--white)' : 'var(--orange-600)'
                      }}
                    >
                      <i className={cat.icon}></i>
                    </div>
                    <h3>{cat.title}</h3>
                    <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} init-accordion-chevron`} style={{ marginLeft: 'auto', color: 'var(--ink-400)', fontSize: '0.9rem', transition: 'transform 0.3s ease' }}></i>
                  </div>
                  {isOpen && (
                    <div className="init-card-body" style={{ display: 'block', animation: 'fadeIn 0.3s ease-in-out' }}>
                      <ul className="init-list">
                        {cat.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
