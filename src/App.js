import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
