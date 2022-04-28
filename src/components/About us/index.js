import React from 'react';
import PropTypes from 'prop-types';
import {
  AboutContainer,
  AboutImage,
  SectionTitle,
  SectionSubTitle,
  AboutTextWrapper,
  AboutText,
  AboutImageWrapper,
} from './styles';

const AboutUs = (props) => {
  return (
    <AboutContainer>
      <AboutImageWrapper>
        <AboutImage img={props.image} />
      </AboutImageWrapper>
      <AboutTextWrapper>
        <SectionTitle img={props.title}></SectionTitle>
        <SectionSubTitle>{props.subtitle}</SectionSubTitle>
        <AboutText>{props.description}</AboutText>
      </AboutTextWrapper>
    </AboutContainer>
  );
};

AboutUs.propTypes = {
  image: PropTypes.string,
};

AboutUs.defaultProps = {
  image: 'images/about-us.webp',
  title: 'images/chef.svg',
  subtitle: 'Our story',
  description:
    'Classically trained in the art of kaiseki, Chef Sakamoto decided to leap into the world of ramen with his latest venture, yum yum. Chef Sakamoto implored chef Fukui to share her methods. She said that she would only teach him the basics if he promised to bring the art of ramen abroad. He knew that he could meld the umami flavors and smoky scents of Cantonese cuisine with the richness and nuances of ramen. He went back to Tokyo to learn from Chef Fukui, and with her blessing, returned to Gothenburg seven years later.',
};

export default AboutUs;
