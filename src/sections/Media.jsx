import React from 'react';

export default function Media() {
  const pressMentions = [
    {
      source: 'The Times of India',
      date: 'March 2023',
      title: 'Cuddalore-Pondy Railway line approved in Union Budget after years of advocacy',
      desc: 'Union Ministry includes the long-pending Cuddalore-Pondicherry rail link in the development budget following active public representations led by BJP State Secretary A. Ashvathaman Allimuthu.'
    },
    {
      source: 'The New Indian Express',
      date: 'June 2021',
      title: 'Melmambattu chemical/liquor plant shut down following farmer protests',
      desc: 'State environment pollution board orders closure of a groundwater polluting manufacturing plant in Cuddalore after an intense legal and public demonstration led by local advocates.'
    },
    {
      source: 'Organiser Weekly',
      date: 'January 2023',
      title: 'Madras High Court orders alternate route to preserve ancient Chidambaram shrines',
      desc: 'Double victory for heritage activists as Court stays demolition of highway-overlapping temple shrines, ordering NHAI to adjust widening layout plans.'
    }
  ];

  const debates = [
    {
      title: 'Constitutional Roles & Assemblies',
      channel: 'Polimer News',
      desc: 'Debating powers of governors and local state mandates.'
    },
    {
      title: 'Temple Funds & Autonomy',
      channel: 'News18 Tamil Nadu',
      desc: 'Analysis of temple administration and civic rights.'
    },
    {
      title: 'Agrarian Moratoriums & Aid',
      channel: 'Thanthi TV',
      desc: 'Debating central farmer policies and local state supports.'
    }
  ];

  return (
    <section id="media" className="section active">
      <div className="container">
        <div className="section-eyebrow">Press &amp; Updates</div>
        <h2 className="section-title">Media Hub</h2>
        
        <div className="media-grid">
          <div className="press-mentions-section">
            <h3>Featured Press Coverage</h3>
            <div className="press-cards-stack">
              {pressMentions.map((p, idx) => (
                <div key={idx} className="press-card">
                  <div className="press-meta">
                    <span>{p.source}</span>
                    <span>{p.date}</span>
                  </div>
                  <h4 className="press-title">{p.title}</h4>
                  <p className="press-snippet">{p.desc}</p>
                  <a href="#read" onClick={(e) => e.preventDefault()} className="press-link">
                    Read Full Report <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="media-sidebar">
            {/* TV Debates Box */}
            <div className="sidebar-box">
              <h3>TV Debate Highlights</h3>
              <p>Advocate Ashvathaman is a regular panelist on state TV news channels, discussing constitutional values and nationalist perspectives.</p>
              <div className="debates-list">
                {debates.map((d, idx) => (
                  <div key={idx} className="debate-item">
                    <i className="fas fa-tv"></i>
                    <div className="debate-item-text">
                      <h4>{d.title}</h4>
                      <p>{d.channel} • {d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Roundtable Box */}
            <div className="sidebar-box">
              <h3>Thoughts on Mann Ki Baat</h3>
              <p>A monthly roundtable forum initiated by Ashvathaman. It translates PM Modi's development visions into regional community action plans.</p>
              <a href="#contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>JOIN NEXT ROUNDTABLE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
