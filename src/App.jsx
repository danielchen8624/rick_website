import { useEffect } from 'react';
import ThemedNavbar from './components/themed/ThemedNavbar';
import ThemedHero from './components/themed/ThemedHero';
import ThemedWhyChooseUs from './components/themed/ThemedWhyChooseUs';
import ThemedAbout from './components/themed/ThemedAbout';
import ThemedServices from './components/themed/ThemedServices';
import ServiceAreas from './components/ServiceAreas';
import Contact from './components/Contact';
import ThemedFooter from './components/themed/ThemedFooter';
import './App.css';

function App() {
  useEffect(() => {
    // Scroll-triggered fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <ThemedNavbar />
      <main>
        <ThemedHero />
        <ThemedWhyChooseUs />
        <ThemedAbout />
        <ThemedServices />
        <ServiceAreas />
        <Contact />
      </main>
      <ThemedFooter />
    </div>
  );
}

export default App;
