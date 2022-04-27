import React from 'react';
import AboutUs from '../components/About us';
import Hero from '../components/Hero';
import MarqueeScroller from '../components/MarqueeScroller';
import TodaysMenu from '../components/TodaysMenu';

const Home = () => {
  return (
    <div>
      <Hero />
      <MarqueeScroller />
      <TodaysMenu />
      <AboutUs />
      <h1>Hello</h1>
    </div>
  );
};

export default Home;
