import React from 'react';
import { Router } from '@reach/router';
import Nav from './components/Nav';

import Home from './pages/Home';
import Menu from './pages/Menu';
import OurStory from './pages/OurStory';
import FindUs from './pages/FindUs';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Router>
        <Home path='/' />
        <Menu path='/menu'>;</Menu>
        <OurStory path='/our-story'></OurStory>
        <FindUs path='/find-us'></FindUs>
      </Router>
    </div>
  );
};

export default App;
