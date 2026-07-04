import React from 'react';

export default function Vision() {
  const pillars = [
    {
      icon: 'fas fa-gopuram',
      title: 'Cultural & Civilizational Identity',
      desc: 'Protecting temples, Hindu religious practices, and historic Tamil heritage as living, non-negotiable parts of our public life.'
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Access to Justice',
      desc: 'Free legal aid and public-interest litigation so ordinary citizens and workers are never priced out of the courts.'
    },
    {
      icon: 'fas fa-users-cog',
      title: 'People-Centric Development',
      desc: 'Infrastructure, water, and rail access driven by what local communities actually request and require, rather than top-down policies.'
    },
    {
      icon: 'fas fa-user-graduate',
      title: 'Youth & Education',
      desc: 'Expanding access to quality schooling and skill/defence-service training (e.g. Agnipath) for the next generation of leaders.'
    },
    {
      icon: 'fas fa-seedling',
      title: 'Environmental Responsibility',
      desc: 'Clean groundwater, rainwater harvesting, and accountable industry, especially for the agricultural villages nearest to developmental hubs.'
    },
    {
      icon: 'fas fa-scroll',
      title: 'Constitutional Accountability',
      desc: 'Holding public office, government institutions, and political opponents to the exact letter of the law and constitutional guidelines.'
    }
  ];

  return (
    <section id="vision" className="section active">
      <div className="container">
        <div className="section-eyebrow">Vision</div>
        <h2 className="section-title">Ideology &amp; Guiding Pillars</h2>
        <div className="pillars-grid vision-pillars-grid">
          {pillars.map((p, idx) => (
            <div key={idx} className="pillar-card">
              <div className="pillar-icon"><i className={p.icon}></i></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
