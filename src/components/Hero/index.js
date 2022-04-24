import React from 'react';
import { Link } from '@gatsbyjs/reach-router';
import { HeroContainer, HeroContent, HeroButton } from './styles';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent to='/menu' img='/images/find-us.png' position='center'>
        <HeroButton to='/menu' img='images/blob.svg'>
          Find us
        </HeroButton>
      </HeroContent>
      <HeroContent to='/menu' img='/images/see-menu.png' position='bottom'>
        <HeroButton img='images/blob.svg'>See menu</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
