import janitorialImg from '../assets/images/janitorial.png';
import powerwashImg from '../assets/images/powerwash.png';
import renovationImg from '../assets/images/renovation.png';
import './Services.css';

const Services = () => {
  const services = [
    {
      image: janitorialImg,
      title: 'Janitorial Cleaning',
      subtitle: 'Reliable Janitorial & Commercial Cleaning Services',
      desc: 'Maintain a clean, sanitary space with professional cleaning plans built around your schedule. We handle offices, retail spaces, multi-unit buildings, and more with commercial-grade equipment and trained staff.',
      features: ['Office & Commercial Cleaning', 'Floor Care & Maintenance', 'Sanitization & Disinfection', 'Scheduled Cleaning Programs'],
    },
    {
      image: powerwashImg,
      title: 'Power Washing',
      subtitle: 'Power Washing & Exterior Cleaning Experts',
      desc: 'Restore your property\'s exterior with commercial-grade power washing equipment and trained technicians. Remove built-up grime, mold, algae, and stains from any surface.',
      features: ['Driveway & Walkway Cleaning', 'Building Exterior Washing', 'Deck & Patio Restoration', 'Graffiti Removal'],
    },
    {
      image: renovationImg,
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
              <div className="service-card-image">
                <img src={s.image} alt={s.title} />
                <div className="service-card-overlay">
                  <span className="service-badge">{s.title}</span>
                </div>
              </div>
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
