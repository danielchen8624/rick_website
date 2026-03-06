import { useState } from 'react';
import janitorialImg from '../assets/images/janitorial.jpg';
import janitorialBeforeImg from '../assets/images/gallery/hallway-before.jpg';
import powerwashImg from '../assets/images/powerwash.jpg';
import renovationImg from '../assets/images/renovation.jpg';
import renovationBeforeImg from '../assets/images/gallery/bathroom-before.jpg';
import './Services.css';

const BeforeAfterImage = ({ beforeImage, afterImage, alt, className, expandable, children }) => {
  const [showBefore, setShowBefore] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const currentSrc = showBefore ? (beforeImage || afterImage) : afterImage;
  const currentAlt = beforeImage ? `${alt} — ${showBefore ? 'Before' : 'After'}` : alt;

  const handleImageClick = (e) => {
    if (expandable) {
      e.stopPropagation();
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <>
      <div className={`${className}${expandable ? ' expandable-image' : ''}`}>
        <img src={currentSrc} alt={currentAlt} onClick={handleImageClick} />
        {beforeImage && (
          <div className="before-after-toggle">
            <button
              className={`ba-btn ${!showBefore ? 'ba-btn-active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setShowBefore(false); }}
            >After</button>
            <button
              className={`ba-btn ${showBefore ? 'ba-btn-active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setShowBefore(true); }}
            >Before</button>
          </div>
        )}
        {children}
      </div>

      {expandable && lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <img src={currentSrc} alt={currentAlt} className="lightbox-img" />
            {beforeImage && (
              <div className="lightbox-toggle">
                <button
                  className={`ba-btn ${!showBefore ? 'ba-btn-active' : ''}`}
                  onClick={() => setShowBefore(false)}
                >After</button>
                <button
                  className={`ba-btn ${showBefore ? 'ba-btn-active' : ''}`}
                  onClick={() => setShowBefore(true)}
                >Before</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const Services = () => {
  const services = [
    {
      image: janitorialImg,
      beforeImage: janitorialBeforeImg,
      title: 'Janitorial Cleaning',
      subtitle: 'Reliable Janitorial & Commercial Cleaning Services',
      desc: 'Maintain a clean, sanitary space with professional cleaning plans built around your schedule. We handle offices, retail spaces, multi-unit buildings, and more with commercial-grade equipment and trained staff.',
      features: ['Office & Commercial Cleaning', 'Floor Care & Maintenance', 'Sanitization & Disinfection', 'Scheduled Cleaning Programs'],
    },
    {
      image: powerwashImg,
      expandable: true,
      title: 'Power Washing',
      subtitle: 'Power Washing & Exterior Cleaning Experts',
      desc: 'Restore your property\'s exterior with commercial-grade power washing equipment and trained technicians. Remove built-up grime, mold, algae, and stains from any surface.',
      features: ['Driveway & Walkway Cleaning', 'Building Exterior Washing', 'Deck & Patio Restoration', 'Graffiti Removal'],
    },
    {
      image: renovationImg,
      beforeImage: renovationBeforeImg,
      expandable: true,
      title: 'Renovation',
      subtitle: 'Professional Renovation Services in Whitby & the GTA',
      desc: 'High-quality renovation services for residential and commercial clients. From complete kitchen remodels to basement finishing, we bring your vision to life with expert craftsmanship.',
      features: ['Kitchen Remodeling', 'Bathroom Upgrades', 'Basement Finishing', 'General Contracting'],
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header fade-in">
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">Our Indoor &amp; Outdoor Contractor Services</h2>
          <p className="section-description">
            From interior upgrades to ongoing cleaning and exterior maintenance — we deliver consistent, professional results for every project.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card fade-in" style={{ transitionDelay: `${i * 0.2}s` }}>
              <BeforeAfterImage
                beforeImage={s.beforeImage}
                afterImage={s.image}
                alt={s.title}
                className="service-card-image"
                expandable={s.expandable}
              >
                <div className="service-card-overlay">
                  <span className="service-badge">{s.title}</span>
                </div>
              </BeforeAfterImage>
              <div className="service-card-content">
                <h3>{s.subtitle}</h3>
                <p>{s.desc}</p>
                <ul className="service-features">
                  {s.features.map((f, j) => (
                    <li key={j}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
