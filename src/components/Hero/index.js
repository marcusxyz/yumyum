import React, { useState } from 'react';
import { HeroContainer, HeroContent, HeroButton } from './styles';
import client from '../../contentful';

const Hero = () => {
  const [indexHero, setIndexHero] = useState(null);

  React.useEffect(() => {
    client
      .getEntry({
        content_type: 'indexHero',
        limit: 1,
      })
      .then((entry) => {
        setIndexHero(entry.fields);
        console.log(entry.fields.leftImage.fields.file.url);
        console.log(entry.fields.urlRight);
      });
  }, []);
  return (
    <HeroContainer>
      <HeroContent
        to='/find-us'
        img={indexHero && indexHero.leftImage.fields.file.url}
        position='center'
      >
        <HeroButton img='images/blob.svg'>
          {indexHero && indexHero.leftLinkTitle}
        </HeroButton>
      </HeroContent>
      <HeroContent to='/menu' img='/images/see-menu.png' position='bottom'>
        <HeroButton img='images/blob.svg'>See menu</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
