import heroImg from '../assets/images/themed-hero.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <img src={heroImg} alt="Professional contracting services" />
        <div className="hero-overlay" />
      </div>
      <div className="container hero-content">
        <div className="hero-badge">Serving Durham &amp; the Greater Toronto Area</div>
        <h1 className="hero-title">
          E&E Total Contracting Ltd.
        </h1>
        <p className="hero-services">
          Janitorial Cleaning &bull; Power Washing &bull; Renovations
        </p>
        <p className="hero-subtitle">
          Professional property services with dependable scheduling, quality workmanship, and commercial-grade results.
        </p>
        <div className="hero-buttons">
          <a href="tel:2896007660" className="btn btn-primary btn-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Us Today
          </a>
          <a href="#services" className="btn btn-outline" onClick={(e) => {
            e.preventDefault();
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            What We Do
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
