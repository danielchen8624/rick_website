import './ServiceAreas.css';

const ServiceAreas = () => {
  const areas = [
    'Whitby',
    'Ajax',
    'Oshawa',
    'Pickering',
    'Port Perry',
    'Uxbridge',
    'Whitchurch-Stouffville',
    'Bowmanville',
    'Courtice',
    'Newcastle',
  ];

  return (
    <section id="areas" className="service-areas">
      <div className="container">
        <div className="areas-content">
          <div className="areas-text fade-in-left">
            <span className="section-subtitle">Areas We Serve</span>
            <h2 className="section-title">Keeping Facilities Spotless Across the Region</h2>
            <p>
              Based in Whitby, our janitorial teams serve businesses and facilities throughout Durham Region and the Greater Toronto Area. We provide reliable, scheduled cleaning services wherever you need us.
            </p>
          </div>
          <div className="areas-tags fade-in-right">
            {areas.map((area, i) => (
              <span key={i} className="area-tag" style={{ animationDelay: `${i * 0.1}s` }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
