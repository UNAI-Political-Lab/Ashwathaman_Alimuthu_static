import React, { useState } from 'react';

export default function Initiatives() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const categories = [
    {
      icon: 'fas fa-gopuram',
      title: 'Cultural & Religious Heritage',
      items: [
        'Advocacy against temple vandalism across Tamil Nadu; called for CBI enquiry.',
        'Prevented demolition of two temples at Chidambaram during a highway project by securing an alternate route.',
        'Legal actions regarding reopening of the Melpathi Sri Dharmaraja Sri Draupadi Amman Temple.',
        'Secured government approval for a commemorative postal stamp honoring freedom fighter Arthanareeswara Varma.',
        'Campaign to rename Chennai\'s Ripon Building after Tamil scholar U.Ve. Swaminatha Iyer.'
      ]
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Social Justice & Legal Aid',
      items: [
        '12+ years of pro-bono representation for public activists and grassroots party workers in false charges.',
        'Public Interest Litigation (PIL) to protect Economically Weaker Section (EWS) certificate access.',
        'Labour Commission complaint following a worker\'s death, leading to a CBI referral and arrest.'
      ]
    },
    {
      icon: 'fas fa-tractor',
      title: 'Farmer & Community Rights',
      items: [
        'Advocacy for Neyveli Lignite Corporation (NLC) project-affected villages on drinking water access and fair compensation.',
        'Representation before the National Commission for Backward Classes on farmer land rights.',
        'Pushed for dredging of Kolakudi Lake to protect agriculture and prevent village floods.'
      ]
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Education & Youth Empowerment',
      items: [
        'Free residential training academy and bootcamps for rural Agnipath (armed forces) aspirants.',
        'Public interest litigation promoting Central Government Navodaya-model schools in Tamil Nadu.',
        'Opened a memorial Kabaddi ground for youth sports development in Kadampiluyur.'
      ]
    },
    {
      icon: 'fas fa-seedling',
      title: 'Environment & Infrastructure',
      items: [
        'Led protests resulting in the shutdown of a major polluting liquor distillery in Melmambattu.',
        'PIL filed for strict implementation of the state Rain Water Harvesting Act.',
        'Sustained advocacy to include the Cuddalore–Pondicherry rail link in the Union Budget.',
        'Pushed for a Cashew-based biofuel research initiative in Cuddalore partnering with IIT Madras.'
      ]
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Public Discourse & Media',
      items: [
        'Hosts the monthly discussion forum "Thoughts on Mann Ki Baat" to discuss development.',
        'Frequent debater on Tamil TV representing BJP ideology on national channels.',
        'Headed digital media strategy for State Assembly and local body election campaigns.'
      ]
    },
    {
      icon: 'fas fa-dog',
      title: 'Animal Welfare',
      items: [
        'Shelters and protects 50+ rare native Indian dog breeds at his college campus in Ullundurpet.',
        'Advocates for local cattle breeding and preservation of native Tamil livestock.'
      ]
    },
    {
      icon: 'fas fa-landmark',
      title: 'Governance Accountability',
      items: [
        'Formal legal complaints regarding Legislative Assembly conduct and rules violation.',
        'Initiated legal questions following security incidents near the Raj Bhavan in Chennai.',
        'Public defense and rebuttal of CAG audit reports on highway toll concessions in the state.'
      ]
    }
  ];

  const handleToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="initiatives" className="section active">
      <div className="container">
        <div className="section-eyebrow">Action Records</div>
        <h2 className="section-title">Key Initiatives &amp; Campaigns</h2>
        <p className="initiatives-intro">Click on any category below to view specific case work, public interest campaigns, and judicial actions taken by Advocate Ashvathaman Allimuthu.</p>
        
        <div className="initiatives-grid">
          {categories.map((cat, index) => {
            const isOpen = activeAccordion === index;
            return (
              <div key={index} className="initiatives-card">
                <div 
                  className="init-card-header" 
                  onClick={() => handleToggle(index)}
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
    </section>
  );
}
