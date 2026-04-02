import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <div className={`min-h-screen ${!isLoaded ? 'overflow-hidden' : ''}`}>
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;