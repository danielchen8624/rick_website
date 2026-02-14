import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
      title: 'Full-Scope Service Management',
      desc: 'We manage projects from start to finish — whether it\'s a renovation, scheduled janitorial service, or power washing job — ensuring clear timelines, organized execution, and consistent results.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Professional Team Coordination',
      desc: 'Our experienced crews and trusted trade partners work together efficiently to maintain quality standards, safety, and accountability across every service we provide.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'Service-First Approach',
      desc: 'We respect your property, your schedule, and your expectations. From clean job sites to dependable follow-through, we focus on long-term value and client satisfaction.',
    },
  ];

  return (
    <section id="why-us" className="why-choose-us">
      <div className="container">
        <div className="why-header fade-in">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">A Reliable Partner for Property Improvements &amp; Maintenance</h2>
          <p className="section-description">
            At E&E Total Contracting Ltd., we specialize in services that improve, protect, and maintain your property — whether it's an office, retail space, multi-unit property, or home.
          </p>
        </div>
        <div className="why-grid">
          {features.map((f, i) => (
            <div key={i} className="why-card fade-in" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="why-card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
