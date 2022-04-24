import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import MarqueeScroller from './components/MarqueeScroller';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <MarqueeScroller />
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
