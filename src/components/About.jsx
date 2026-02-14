import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text fade-in-left">
            <span className="section-subtitle">About Us</span>
            <h2 className="section-title">Reliable Property Services. Done Right.</h2>
            <p>
              E&E Total Contracting Ltd. was built to provide dependable, professional property services with a focus on quality, efficiency, and clear communication. We take a practical, detail-driven approach to every project — delivering results that meet real-world needs, timelines, and budgets.
            </p>
            <p>
              Based in Whitby, we proudly serve Durham Region and the Greater Toronto Area, supporting residential and commercial clients with renovations, janitorial cleaning, and power washing services.
            </p>
            <p className="about-highlight">
              Our goal is simple: to be the one contractor you can rely on to maintain, improve, and protect your property.
            </p>
            <a href="#contact" className="btn btn-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Get Started
            </a>
          </div>
          <div className="about-stats fade-in-right">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">9+</div>
              <div className="stat-label">Areas Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
