import './BusinessCard.css';

const BusinessCard = () => {
  const phone = '2896007660';
  const email = 'Ricardo.t@eetotalcontracting.ca';
  const website = 'https://www.eetotalcontracting.ca/';

  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Teixeira;Ricardo;;;',
    'FN:Ricardo Teixeira',
    'ORG:E&E Total Contracting Ltd',
    'TITLE:Owner',
    `TEL;TYPE=CELL:+1${phone}`,
    `EMAIL:${email}`,
    `URL:${website}`,
    'END:VCARD',
  ].join('\n');

  const vcardHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;

  return (
    <div className="bcard-page">
      <div className="bcard">
        <header className="bcard-header">
          <h1 className="bcard-name">Ricardo Teixeira</h1>
          <p className="bcard-role">Owner</p>
        </header>

        <div className="bcard-actions">
          <a href={`tel:${phone}`} className="bcard-action">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>CALL</span>
          </a>
          <span className="bcard-action-divider" />
          <a href={`mailto:${email}`} className="bcard-action">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            <span>EMAIL</span>
          </a>
        </div>

        <section className="bcard-body">
          <p className="bcard-bio">
            Commercial Janitorial &amp; Property Maintenance<br />
            Reliable cleaning for garbage areas, common spaces, and plazas.<br />
            Scan to request a quote.
          </p>

          <ul className="bcard-list">
            <li className="bcard-row">
              <span className="bcard-row-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <div className="bcard-row-text">
                <a href={`tel:${phone}`} className="bcard-row-value">{phone}</a>
                <span className="bcard-row-label">Mobile</span>
              </div>
            </li>

            <li className="bcard-row">
              <span className="bcard-row-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <div className="bcard-row-text">
                <a href={`mailto:${email}`} className="bcard-row-value bcard-row-value-break">{email}</a>
                <span className="bcard-row-label">Email</span>
              </div>
            </li>

            <li className="bcard-row">
              <span className="bcard-row-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              <div className="bcard-row-text">
                <span className="bcard-row-value">E&amp;E Total Contracting Ltd</span>
                <span className="bcard-row-label">Owner</span>
              </div>
            </li>

            <li className="bcard-row">
              <span className="bcard-row-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </span>
              <div className="bcard-row-text">
                <a href={website} className="bcard-row-value bcard-row-value-break">{website}</a>
                <span className="bcard-row-label">Website</span>
              </div>
            </li>
          </ul>

          <div className="bcard-social">
            <h2 className="bcard-social-title">Visit Our Website</h2>
            <a href="/" className="bcard-home-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Go to Home Page</span>
            </a>
          </div>
        </section>

        <a href={vcardHref} download="Ricardo-Teixeira.vcf" className="bcard-save" aria-label="Save contact">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BusinessCard;
