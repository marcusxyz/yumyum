import React from 'react';
import { Router } from '@gatsbyjs/reach-router';
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
        <Home path='/'></Home>
        <Menu exact path='/menu'></Menu>
        <OurStory exact path='/our-story'></OurStory>
        <FindUs exact path='/find-us'></FindUs>
      </Router>
    </div>
  );
};

export default App;
