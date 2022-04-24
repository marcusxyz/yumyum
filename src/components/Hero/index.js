import React from 'react';
import { Link } from '@gatsbyjs/reach-router';
import { HeroContainer, HeroContent, HeroImage, HeroButton } from './styles';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroImage>
          <Link to='#'>
            <HeroButton>Find us</HeroButton>
          </Link>
        </HeroImage>
      </HeroContent>
      <HeroContent>
        <HeroImage>
          <Link to='#'>
            <HeroButton>See menu</HeroButton>
          </Link>
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
