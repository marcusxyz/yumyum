import React from 'react';
import { HeroContainer, HeroContent, HeroButton } from './styles';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent to='/find-us' img='/images/find-us.png' position='center'>
        <HeroButton img='images/blob.svg'>Find us</HeroButton>
      </HeroContent>
      <HeroContent to='/menu' img='/images/see-menu.png' position='bottom'>
        <HeroButton img='images/blob.svg'>See menu</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
