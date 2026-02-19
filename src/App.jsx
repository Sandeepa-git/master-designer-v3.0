import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import About from './components/About';
import Services from './components/Services';
import Guidelines from './components/Guidelines';
import Timeline from './components/Timeline';
import Memories from './components/Memories';
import Motto from './components/Motto';
import Prizes from './components/Prizes';
import TShirt from './components/TShirt';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - adjust as needed or hook into actual asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white selection:bg-cyan-500 selection:text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Header />
            <main>
              <Hero />
              <Sponsors />
              <Services />
              <About />
              <Guidelines />
              <Timeline />
              <Memories />
              <Motto />
              <Prizes />
              <TShirt />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
