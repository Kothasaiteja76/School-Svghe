import React from 'react';
import './App.css'; 
import BackgroundAnimation from './components/BackgroundAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import DayInLife from './components/DayInLife';
import Community from './components/Community';
import Events from './components/Events';
import Contact from './components/Contact';
import Admission from './components/Admission';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <BackgroundAnimation />
      <Header />
      <main>
        <Hero />
        <About />
        <Achievements />
        <DayInLife />
        <Community />
        <Events />
        <Contact />
        <Admission/>
      </main>
      <Footer />
    </div>
  );
}

export default App;