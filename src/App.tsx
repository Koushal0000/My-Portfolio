import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingJourney from './components/CodingJourney';
import Certifications from './components/Certifications';
import Hackathons from './components/Hackathons';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import NotFound from './components/NotFound';

export default function App() {
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    // Basic router logic to handle custom 404 page for any path other than '/'
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path !== '/' && path !== '') {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleGoHome = () => {
    setIsNotFound(false);
    window.history.pushState(null, '', '/');
  };

  if (isNotFound) {
    return <NotFound onGoHome={handleGoHome} />;
  }

  return (
    <div className="bg-[#0B1020] min-h-screen text-[#F8FAFC] flex flex-col justify-start">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingJourney />
        <Certifications />
        <Hackathons />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
