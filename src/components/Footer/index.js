import React from 'react';
import {
  FooterContainer,
  FooterContent,
  Telephone,
  DelieveryList,
  DelieveryItems,
  Logo,
  ContactList,
  ContactItems,
  ContactLink,
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Telephone src='images/tel.svg'></Telephone>
        <DelieveryList>
          <DelieveryItems href='#'>Foodora</DelieveryItems>
          <DelieveryItems href='#'>Uber Eats</DelieveryItems>
        </DelieveryList>
        <Logo src='images/logo-inverted.svg' />
        <ContactList>
          <ContactItems>Built with React + Contentful</ContactItems>
          <ContactItems>
            Design & development by{' '}
            <ContactLink href='https://github.com/marcusxyz'>
              Marcus
            </ContactLink>
          </ContactItems>
        </ContactList>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
