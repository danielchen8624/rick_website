import './ThemedFooter.css';

const ThemedFooter = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Why Choose Us', target: 'why-us' },
    { label: 'About Us', target: 'about' },
    { label: 'Cleaning Services', target: 'services' },
    { label: 'Areas We Serve', target: 'areas' },
    { label: 'Contact Us', target: 'contact' },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="themed-footer">
      <div className="container">
        <div className="themed-footer-grid">
          <div className="themed-footer-brand">
            <div className="themed-footer-logo">
              <img src="/rick_logo.png" alt="E&E Total Contracting Ltd." className="logo-img" />
            </div>
            <p className="themed-footer-tagline">
              Professional Janitorial &amp; Facility Cleaning Services
            </p>
            <p className="themed-footer-desc">
              Spotless spaces, dependable scheduling, and commercial-grade results. Serving Durham Region &amp; the Greater Toronto Area.
            </p>
          </div>

          <div className="themed-footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <a href={`#${link.target}`} onClick={(e) => handleNavClick(e, link.target)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="themed-footer-links-col">
            <h4>Cleaning Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Office Cleaning</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Floor Care & Buffing</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Sanitization & Disinfection</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Post-Construction Cleanup</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Power Washing</a></li>
            </ul>
          </div>

          <div className="themed-footer-contact-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:2896007660">(289) 600-7660</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:Ricardo.Teixeira@eetc.com">Ricardo.Teixeira@eetc.com</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>72 Garrard Rd. Whitby, ON L1N 3K5</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="themed-footer-bottom">
          <p>&copy; {currentYear} E&E Total Contracting Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ThemedFooter;
