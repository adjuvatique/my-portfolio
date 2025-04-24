import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
// import Testimonials from './components/Testimonials';  // удалено
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      {/* <Testimonials /> */}         {/* удалено */}
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
