import './ThemedWhyChooseUs.css';

const ThemedWhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Scheduled Cleaning Programs',
      desc: 'We build custom cleaning plans around your business schedule — daily, weekly, or monthly. Your space stays spotless without disrupting your operations.',
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
      title: 'Trained & Vetted Staff',
      desc: 'Every team member is background-checked, trained on commercial-grade equipment, and committed to delivering consistent, high-quality results.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
      title: 'Commercial-Grade Results',
      desc: 'We use professional-grade products and equipment — from floor buffing to sanitization systems — to deliver results that meet health and safety standards.',
    },
  ];

  return (
    <section id="why-us" className="themed-why-choose-us">
      <div className="container">
        <div className="themed-why-header fade-in">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">Why Trust Us With Your Facility</h2>
          <p className="section-description">
            At E&E Total Contracting Ltd., we specialize in keeping your spaces clean, safe, and presentable — with reliable scheduling, trained staff, and professional-grade equipment.
          </p>
        </div>
        <div className="themed-why-grid">
          {features.map((f, i) => (
            <div key={i} className="themed-why-card fade-in" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="themed-why-card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemedWhyChooseUs;
