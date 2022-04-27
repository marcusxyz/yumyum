import React from 'react';
import {
  AboutContainer,
  AboutImage,
  SectionTitle,
  SectionSubTitle,
  AboutTextWrapper,
  AboutText,
  AboutImageWrapper,
} from './styles';

const AboutUs = () => {
  return (
    <AboutContainer>
      <AboutImageWrapper>
        <AboutImage img='images/about-us.webp' />
      </AboutImageWrapper>
      <AboutTextWrapper>
        <SectionTitle img='images/chef.svg'></SectionTitle>
        <SectionSubTitle>Our story</SectionSubTitle>
        <AboutText>
          Classically trained in the art of kaiseki, Chef Sakamoto decided to
          leap into the world of ramen with his latest venture, yum yum. Chef
          Sakamoto implored chef Fukui to share her methods. She said that she
          would only teach him the basics if he promised to bring the art of
          ramen abroad. He knew that he could meld the umami flavors and smoky
          scents of Cantonese cuisine with the richness and nuances of ramen. He
          went back to Tokyo to learn from Chef Fukui, and with her blessing,
          returned to Gothenburg seven years later.
        </AboutText>
      </AboutTextWrapper>
    </AboutContainer>
  );
};

export default AboutUs;
