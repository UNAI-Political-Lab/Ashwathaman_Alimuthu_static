import React from 'react';

export default function About() {
  return (
    <section id="about" className="section active">
      <div className="container">
        <div className="section-eyebrow">Biography</div>
        <h2 className="section-title">A. Ashvathaman Allimuthu</h2>
        
        <div className="about-grid">
          <div className="about-image">
            <img src="/assets/about-profile.webp" alt="A. Ashvathaman Allimuthu portrait" />
            <div className="credentials-badge">
              B.A., B.L. &bull; PRACTICING ADVOCATE &bull; BJP STATE SECRETARY (LEGAL CELL)
            </div>
          </div>
          
          <div className="about-content">
            <p>
              A. Ashvathaman Allimuthu, B.A., B.L. is a practicing advocate at the Madras High Court and the State Secretary of the Bharatiya Janata Party's Legal Cell in Tamil Nadu. Known for his fearless public advocacy, he has dedicated over a decade to providing free legal representation to party workers and citizens facing systemic challenges.
            </p>
            <p>
              Throughout his career, he has initiated numerous public-interest litigations (PIL) aimed at preserving civilizational heritage, protecting temples, securing farmer compensation, improving environment safety, and defending democratic rights. He is a frequent panelist on Tamil television debates, representing the BJP's national ideology with measured facts.
            </p>
            
            {/* Thirukkural Callout */}
            <div className="thirukkural-card">
              <p className="thirukkural-tamil">"சொலல்வல்லன் சோர்விலன் அஞ்சான் அவனை இகல்வெல்லல் யார்க்கும் அரிது"</p>
              <p className="thirukkural-trans">"The person is unbeatable who has the qualities of being fearless, tireless and powerful in speech."</p>
              <p className="thirukkural-author">— Thirukkural 647</p>
            </div>
          </div>
        </div>

        {/* Values & Pillars Grid */}
        <h2 className="section-title about-pillars-title">Guiding Pillars of Leadership</h2>
        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon"><i className="fas fa-gopuram"></i></div>
            <h3>Cultural Heritage</h3>
            <p>Protecting temples, native practices, and Tamil history as crucial pillars of our living identity.</p>
          </div>
          <div className="pillar-card">
            <div className="pillar-icon"><i className="fas fa-balance-scale"></i></div>
            <h3>Access to Justice</h3>
            <p>Ensuring marginalized citizens and party workers are never priced out of legal protection and aid.</p>
          </div>
          <div className="pillar-card">
            <div className="pillar-icon"><i className="fas fa-road"></i></div>
            <h3>People-Centric Progress</h3>
            <p>Advocating for infrastructure projects requested directly by community stakeholders, not top-down programs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
