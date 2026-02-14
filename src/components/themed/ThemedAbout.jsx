import './ThemedAbout.css';

const ThemedAbout = () => {
  return (
    <section id="about" className="themed-about">
      <div className="container">
        <div className="themed-about-grid">
          <div className="themed-about-text fade-in-left">
            <span className="section-subtitle">About Us</span>
            <h2 className="section-title">Built to Keep Your Spaces Spotless</h2>
            <p>
              E&E Total Contracting Ltd. was founded with a clear mission: to provide dependable, professional janitorial and facility cleaning services that businesses can rely on, day in and day out.
            </p>
            <p>
              Based in Whitby, we serve Durham Region and the Greater Toronto Area — supporting offices, retail spaces, multi-unit complexes, and commercial properties with scheduled cleaning programs, deep sanitization, and facility maintenance.
            </p>
            <p className="themed-about-highlight">
              We also offer power washing and renovation services for clients looking for complete property care under one trusted contractor.
            </p>
            <a href="#contact" className="btn btn-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Get a Free Quote
            </a>
          </div>
          <div className="themed-about-stats fade-in-right">
            <div className="themed-stat-card">
              <div className="themed-stat-number">10+</div>
              <div className="themed-stat-label">Years Serving the GTA</div>
            </div>
            <div className="themed-stat-card">
              <div className="themed-stat-number">500+</div>
              <div className="themed-stat-label">Facilities Served</div>
            </div>
            <div className="themed-stat-card">
              <div className="themed-stat-number">100%</div>
              <div className="themed-stat-label">Client Satisfaction</div>
            </div>
            <div className="themed-stat-card">
              <div className="themed-stat-number">24/7</div>
              <div className="themed-stat-label">Scheduling Flexibility</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemedAbout;
