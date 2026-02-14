import janitorialImg from '../../assets/images/janitorial.png';
import powerwashImg from '../../assets/images/powerwash.png';
import renovationImg from '../../assets/images/renovation.png';
import './ThemedServices.css';

const ThemedServices = () => {
  const primaryService = {
    image: janitorialImg,
    title: 'Janitorial Cleaning',
    subtitle: 'Comprehensive Commercial & Office Cleaning',
    desc: 'Our core service — keep your business running in a spotless, sanitized environment. We deliver reliable, scheduled cleaning programs tailored to your facility\'s needs, using commercial-grade equipment and trained staff.',
    features: [
      'Office & Commercial Cleaning',
      'Floor Care & Buffing',
      'Sanitization & Disinfection',
      'Restroom Deep Cleaning',
      'Scheduled Cleaning Programs',
      'Post-Construction Cleanup',
    ],
  };

  const secondaryServices = [
    {
      image: powerwashImg,
      title: 'Power Washing',
      desc: 'Restore your property\'s exterior with commercial-grade power washing — driveways, walkways, building facades, and more.',
      features: ['Driveway & Walkway Cleaning', 'Building Exterior Washing', 'Deck & Patio Restoration'],
    },
    {
      image: renovationImg,
      title: 'Renovation',
      desc: 'Quality renovation services for residential and commercial clients, from kitchen remodels to basement finishing.',
      features: ['Kitchen Remodeling', 'Bathroom Upgrades', 'Basement Finishing'],
    },
  ];

  return (
    <section id="services" className="themed-services">
      <div className="container">
        <div className="themed-services-header fade-in">
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">Our Cleaning &amp; Maintenance Services</h2>
          <p className="section-description">
            Professional janitorial services are our specialty. We also offer power washing and renovation services to keep your property in top shape.
          </p>
        </div>

        {/* Primary: Janitorial — large featured card */}
        <div className="themed-primary-service fade-in">
          <div className="themed-primary-image">
            <img src={primaryService.image} alt={primaryService.title} />
            <div className="themed-primary-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Our Specialty
            </div>
          </div>
          <div className="themed-primary-content">
            <h3>{primaryService.subtitle}</h3>
            <p>{primaryService.desc}</p>
            <ul className="themed-primary-features">
              {primaryService.features.map((f, j) => (
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

        {/* Secondary: Power Washing & Renovation — smaller cards */}
        <div className="themed-secondary-label fade-in">
          <span>Also Available</span>
        </div>
        <div className="themed-secondary-grid">
          {secondaryServices.map((s, i) => (
            <div key={i} className="themed-secondary-card fade-in" style={{ transitionDelay: `${i * 0.2}s` }}>
              <div className="themed-secondary-image">
                <img src={s.image} alt={s.title} />
                <div className="themed-secondary-overlay">
                  <span className="themed-secondary-badge">{s.title}</span>
                </div>
              </div>
              <div className="themed-secondary-content">
                <p>{s.desc}</p>
                <ul className="themed-secondary-features">
                  {s.features.map((f, j) => (
                    <li key={j}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

export default ThemedServices;
