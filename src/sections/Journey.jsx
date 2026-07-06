import React from 'react';

export default function Journey() {
  const milestones = [
    {
      year: '2012',
      icon: 'fas fa-scale-balanced',
      title: 'Free Legal Aid Mobilization',
      desc: 'Begins offering pro-bono legal advocacy and representation to BJP party workers and civic activists in Chennai, a service maintained consistently for over 12 years.'
    },
    {
      year: '2015',
      icon: 'fas fa-gavel',
      title: 'Constitutional Challenges',
      desc: 'Files a legal challenge in the Madras High Court regarding the "self-respect marriage" provisions under the Hindu Marriage Act (Tamil Nadu amendment, 1967) to ensure constitutional checks.'
    },
    {
      year: '2017',
      icon: 'fas fa-film',
      title: 'Cultural Advocacy & Censor Representation',
      desc: 'Petitions the High Court to review the censor certification granted to the film Mersal over concerns regarding public messaging and misrepresentation of civic facts.'
    },
    {
      year: '2021',
      icon: 'fas fa-leaf',
      title: 'Environmental and Labour Victories',
      desc: 'Leads the Labour Commission complaint in a factory worker\'s death, leading to a CBI referral and official action. Directly heads community protests resulting in the shutdown of a polluting groundwater liquor factory in Melmambattu. Secures loan moratoriums for traditional idol-makers from the Union Finance Ministry.'
    },
    {
      year: '2023',
      icon: 'fas fa-place-of-worship',
      title: 'Railways & Temple Preservation Wins',
      desc: 'Secures Union Budget inclusion for the long-pending Cuddalore–Pondicherry railway link after sustained advocacy. Successfully stops the demolition of two historical temples at Chidambaram by forcing alternate highway project routes. Obtains approval for an official commemorative stamp for freedom fighter Arthanareeswara Varma.'
    },
    {
      year: 'Present',
      icon: 'fas fa-heart',
      title: 'Thoughts on Mann Ki Baat & Community Care',
      desc: 'Hosts the monthly "Thoughts on Mann Ki Baat" discussion forum. Actively runs a native Indian dog breeds shelter housing 50+ animals at Ullundurpet, Cuddalore. Continues legal representations for local development projects.'
    }
  ];

  return (
    <section id="journey" className="section active">
      <div className="container">
        <div className="section-eyebrow">Milestones</div>
        <h2 className="section-title">A Chronology of Action</h2>
        
        <div className="timeline-container">
          {milestones.map((m, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-badge">{m.year}</div>
              <div className="timeline-content">
                <div className="timeline-content-inner">
                  <div className="timeline-watermark">{m.year}</div>
                  <div className="timeline-header">
                    <div className="timeline-icon-box">
                      <i className={m.icon}></i>
                    </div>
                    <h4>{m.title}</h4>
                  </div>
                  <p>{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
