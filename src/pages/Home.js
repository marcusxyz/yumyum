import React from 'react';
import AboutUs from '../components/About us';
import Hero from '../components/Hero';
import MarqueeScroller from '../components/MarqueeScroller';
import TodaysMenu from '../components/TodaysMenu';
import Footer from '../components/Footer';
import OpeningHours from '../components/OpeningHours';

const Home = () => {
  document.title = 'YUM YUM | Ramen bar';
  return (
    <div>
      <Hero />
      <MarqueeScroller />
      <TodaysMenu />
      <AboutUs />
      <OpeningHours />
      <Footer />
    </div>
  );
};

export default Home;
