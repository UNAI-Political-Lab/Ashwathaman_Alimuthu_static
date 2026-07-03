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
      img: '/assets/gallery-leaders.png',
      title: 'Meeting with National Leaders',
      desc: 'Discussing strategic state reforms in Chennai.'
    },
    {
      category: 'protests',
      img: '/assets/gallery-protest.png',
      title: 'Melmambattu Environmental Rally',
      desc: 'Leading residents to protect local groundwater.'
    },
    {
      category: 'cultural',
      img: '/assets/gallery-temple.png',
      title: 'Chidambaram Heritage Action',
      desc: 'Reviewing ancient temple borders with priests.'
    },
    {
      category: 'grassroots',
      img: '/assets/gallery-grassroots.png',
      title: 'NLC-Affected Farmers Assembly',
      desc: 'Discussing fair land compensation rights at Cuddalore.'
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
