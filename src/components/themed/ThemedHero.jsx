import heroImg from '../../assets/images/themed-hero.png';
import './ThemedHero.css';

const ThemedHero = () => {
  return (
    <section id="hero" className="themed-hero">
      <div className="themed-hero-bg">
        <img src={heroImg} alt="Spotless commercial facility" />
        <div className="themed-hero-overlay" />
      </div>
      <div className="container themed-hero-content">
        <div className="themed-hero-badge">Serving Durham &amp; the Greater Toronto Area</div>
        <h1 className="themed-hero-title">
          Professional Janitorial Services<br />
          <span className="themed-hero-accent">You Can Count On</span>
        </h1>
        <p className="themed-hero-services">
          Office Cleaning &bull; Floor Care &bull; Sanitization &bull; Facility Maintenance
        </p>
        <p className="themed-hero-subtitle">
          Spotless spaces, dependable scheduling, and commercial-grade results — trusted by businesses across Durham Region and the GTA.
        </p>
        <div className="themed-hero-buttons">
          <a href="tel:2896007660" className="btn btn-primary btn-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Us Today
          </a>
          <a href="#services" className="btn btn-outline" onClick={(e) => {
            e.preventDefault();
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Our Cleaning Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThemedHero;
