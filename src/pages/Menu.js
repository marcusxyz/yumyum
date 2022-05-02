import React from 'react';
import TodaysMenu from '../components/TodaysMenu';
import MenuItems from '../components/MenuItems';
import Footer from '../components/Footer';

const Menu = () => {
  document.title = 'Menu | YUM YUM';
  return (
    <div>
      <TodaysMenu />
      <MenuItems />
      <Footer />
    </div>
  );
};

export default Menu;
