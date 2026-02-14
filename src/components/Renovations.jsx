import './Renovations.css';

const Renovations = () => {
  const specialties = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: 'Kitchen Transformation',
      desc: 'Elevate your culinary space with our kitchen remodeling services, encompassing everything from cabinets and countertops to backsplash and lighting.',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
        </svg>
      ),
      title: 'Luxurious Bathroom Upgrades',
      desc: 'Experience the ultimate relaxation with our bathroom renovations, featuring elegant vanities, exquisite tiling, and expert installation of showers and tubs.',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      title: 'Basement Revitalization',
      desc: 'Unleash the potential of your basement with our comprehensive renovation solutions, including framing, custom-built rooms, stylish bars, and flawless drywalling.',
    },
  ];

  const capabilities = [
    'Comprehensive Renovation Solutions',
    'Collaborative Design Process',
    'Versatile Renovation Expertise',
    'Professional Planning & Execution',
    'Tailored Solutions',
    'Local Material Expertise',
  ];

  return (
    <section id="renovations" className="renovations">
      <div className="container">
        <div className="reno-header fade-in">
          <span className="section-subtitle">Renovation Specialties</span>
          <h2 className="section-title">Transform Your Space with Expert Home Upgrades</h2>
          <p className="section-description">
            Our team's dedication to excellence ensures your project unfolds seamlessly, leaving you with a space that reflects your vision and exceeds your expectations.
          </p>
        </div>

        <div className="reno-specialties">
          {specialties.map((s, i) => (
            <div key={i} className="reno-card fade-in" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="reno-card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="reno-capabilities fade-in">
          <h3>Our Renovation Capabilities</h3>
          <div className="capabilities-grid">
            {capabilities.map((c, i) => (
              <div key={i} className="capability-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Renovations;
