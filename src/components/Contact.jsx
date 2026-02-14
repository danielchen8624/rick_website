import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header fade-in">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Request a Free Cleaning Quote</h2>
          <p className="section-description">
            Ready for a spotless facility? Contact us today for a free consultation and customized janitorial cleaning quote.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info fade-in-left">
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h3>Call Us</h3>
                <a href="tel:2896007660">(289) 600-7660</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3>Address</h3>
                <p>72 Garrard Rd. Whitby, ON L1N 3K5</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <h3>E-mail</h3>
                <a href="mailto:Ricardo.Teixeira@eetc.com">Ricardo.Teixeira@eetc.com</a>
              </div>
            </div>

            <a href="tel:2896007660" className="btn btn-primary btn-lg contact-cta">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Contact Us for a Free Quote
            </a>
          </div>

          <div className="contact-map fade-in-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.5!2d-78.9427!3d43.8711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d7b5e2a2481%3A0x0!2s72+Garrard+Rd+Whitby+ON+L1N+3K5!5e0!3m2!1sen!2sca!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 'var(--radius-md)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="E&E Total Contracting Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
