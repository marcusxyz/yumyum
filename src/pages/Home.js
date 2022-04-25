import React, { useState } from 'react';
import Hero from '../components/Hero';
import MarqueeScroller from '../components/MarqueeScroller';
import client from '../contentful';

const Home = () => {
  const [indexHero, setIndexHero] = useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'indexHero',
      })
      .then((entries) => {
        console.log(entries.items);
        setIndexHero(entries.items);
      });
  }, []);

  return (
    <div>
      <Hero />
      <h1></h1>
      <MarqueeScroller />
    </div>
  );
};

export default Home;
