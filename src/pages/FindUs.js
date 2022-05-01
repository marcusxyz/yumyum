import React from 'react';
import Map from '../components/Map';
import OpeningHours from '../components/OpeningHours';
import Footer from '../components/Footer';
const FindUs = () => {
  document.title = 'YUM YUM | Find Us';
  return (
    <div>
      <Map />
      <OpeningHours />
      <Footer />
    </div>
  );
};

export default FindUs;
