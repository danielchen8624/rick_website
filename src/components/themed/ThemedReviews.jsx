import { useState } from 'react';
import './ThemedReviews.css';

const INITIAL_REVIEWS = [
  {
    name: 'Sarah Maguire',
    company: 'Stronghold Management Group',
    text: 'I would like to provide a reference of experience working with Ricardo from E&E Total Contracting and his team. Ricardo from E&E Total Contracting and his team are extremely responsive, efficient and kind. They have accepted and completed in a timely manner and to their best ability every time. I would highly recommend their services to anyone and everyone that requires them. I will myself be using their service now and into the future as I am completely satisfied and impressed with the level of care provided.',
    date: 'March 25, 2026',
  },
  {
    name: 'Debbie Anderson, RCM, B.A. (Hons)',
    company: 'Condominium Manager',
    text: 'My Superintendent was away for 7 weeks over the Christmas holidays. I had the pleasure of coverage being provided by Edwin Lara of E&E Total Contracting Ltd. He was excellent! His employer, Ricardo, was wonderful to work with as well and all was very seamless while the Super was away during a busy holiday season. If you need coverage, I’m sure Ricardo will do his best to help you out. If you are lucky, you will get Edwin!',
    date: 'April 28, 2026',
  },
];

const ThemedReviews = () => {
  const [reviews] = useState(INITIAL_REVIEWS);

  return (
    <section id="reviews" className="themed-reviews">
      <div className="container">
        <div className="themed-reviews-header fade-in">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">
            Read what our satisfied clients have to say about working with E&E Total Contracting Ltd.
          </p>
        </div>

        <div className="themed-reviews-grid">
          {reviews.map((review, i) => (
            <div key={i} className="themed-review-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="review-quote-icon">&ldquo;</div>
              <p className="review-text">{review.text}</p>
              <div className="review-signature">
                <div className="review-author">{review.name}</div>
                {review.company && <div className="review-company">{review.company}</div>}
                <div className="review-date">{review.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemedReviews;
