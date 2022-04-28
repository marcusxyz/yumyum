import React from 'react';
import AboutUs from '../components/About us';
import Hero from '../components/Hero';
import MarqueeScroller from '../components/MarqueeScroller';
import TodaysMenu from '../components/TodaysMenu';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <MarqueeScroller />
      <TodaysMenu />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
