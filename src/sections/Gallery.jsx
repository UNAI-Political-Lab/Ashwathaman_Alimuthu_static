import React, { useState } from 'react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All Photos', key: 'all' },
    { label: 'With Leaders', key: 'leaders' },
    { label: 'Movements & Protests', key: 'protests' },
    { label: 'Cultural & Temples', key: 'cultural' },
    { label: 'Grassroots Work', key: 'grassroots' }
  ];

  const galleryItems = [
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_1.webp',
      title: 'Meeting Shri Rajnath Singh',
      desc: 'Presenting a golden idol of Maa Durga to Hon\'ble Union Defence Minister.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_2.webp',
      title: 'Electoral Campaign Roadshow',
      desc: 'On the campaign vehicle with Union Minister Shri Rajnath Singh.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_3.webp',
      title: 'Greeting Supporters',
      desc: 'Waving to the crowd during the state campaign rally.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_4.webp',
      title: 'Public Rally Address',
      desc: 'Addressing the public alongside national BJP leaders.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_5.webp',
      title: 'International Delegation',
      desc: 'At the Office of the Deputy Minister of National Unity in Malaysia.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_6.webp',
      title: 'Meeting Shri Yogi Adityanath',
      desc: 'Presenting a sacred text to the Hon\'ble Chief Minister of Uttar Pradesh.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_7.webp',
      title: 'Memorandum to Shri Amit Shah',
      desc: 'Submitting a representation on state judicial reforms to Union Home Minister.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_8.webp',
      title: 'With Shri B. L. Santhosh',
      desc: 'Discussing organizational development with BJP National General Secretary.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_9.webp',
      title: 'Ganga Ghat Sangam',
      desc: 'Greeting national leaders and spiritual scholars at Prayagraj.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_10.webp',
      title: 'Ganga River Delegation',
      desc: 'On a boat discussion with senior national leaders and B. L. Santhosh.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_11.webp',
      title: 'With Shri Ashwini Vaishnaw',
      desc: 'Reviewing progress on the Cuddalore–Pondicherry rail link project at Pamban Bridge.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_12.webp',
      title: 'Meeting Smt. Nirmala Sitharaman',
      desc: 'Presenting the rupee symbol memento to Hon\'ble Union Finance Minister.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_13.webp',
      title: 'Waving to Electoral Gatherings',
      desc: 'Accompanying the Defence Minister on the election campaign vehicle.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_14.webp',
      title: 'With Shri Suresh Gopi',
      desc: 'Sharing a warm moment with the prominent actor, MP, and leader.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_15.webp',
      title: 'Waving at roadshows',
      desc: 'Participating in massive public greeting drives.'
    },
    {
      category: 'leaders',
      img: '/assets/gallery/leaders/leaders_16.webp',
      title: 'With Shri Dharmendra Pradhan',
      desc: 'Discussing state education and literacy projects with Union Minister.'
    },
    {
      category: 'protests',
      img: '/assets/gallery/protest/protest_1.webp',
      title: 'Civic Rights Demonstration',
      desc: 'Detained by police during a public protest for civic rights in Chennai.'
    },
    {
      category: 'cultural',
      img: '/assets/gallery/culture/culture_1.webp',
      title: 'Malaysia Tamil Sangam Book Release',
      desc: 'Releasing a literature book at Malaysia Thamizhar Sangam.'
    },
    {
      category: 'cultural',
      img: '/assets/gallery/culture/culture_2.webp',
      title: 'Interaction with Tamil Diaspora',
      desc: 'With community elders and members of Malaysia Tamil Sangam.'
    },
    {
      category: 'cultural',
      img: '/assets/gallery/culture/culture_3.webp',
      title: 'Blessings of Kanchi Shankaracharya',
      desc: 'Bowing to receive holy blessings and prasad from His Holiness.'
    },
    {
      category: 'cultural',
      img: '/assets/gallery/culture/culture_4.webp',
      title: 'Spiritual Audience',
      desc: 'Receiving spiritual guidance from Kanchi Kamakoti Peetham Shankaracharya.'
    },
    {
      category: 'cultural',
      img: '/assets/gallery/culture/culture_5.webp',
      title: 'Offerings to Kanchi Mutt',
      desc: 'Offering fruits and flowers in devotion at the Kanchi Mutt.'
    },
    {
      category: 'grassroots',
      img: '/assets/gallery/rootworks/rootworks_1.webp',
      title: 'Grassroots Committee Meet',
      desc: 'Addressing party workers and local organizers at a committee seminar.'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="section active">
      <div className="container">
        <div className="section-eyebrow">Moments</div>
        <h2 className="section-title">Public Gallery</h2>
        
        {/* Filter buttons */}
        <div className="gallery-filter-bar">
          {filters.map((f) => (
            <button 
              key={f.key}
              className={`gallery-filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx} 
              className="gallery-item" 
              data-category={item.category}
              style={{ animation: 'fadeIn 0.4s ease-in-out' }}
            >
              <img src={item.img} alt={item.title} />
              <div className="gallery-overlay">
                <div className="gallery-caption">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
