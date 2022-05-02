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
  Telephonewrapper,
  TelephoneLink,
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Telephonewrapper>
          <TelephoneLink href='tel:+12345678'>
            <Telephone src='images/tel.svg'></Telephone>
          </TelephoneLink>
        </Telephonewrapper>
        <DelieveryList>
          <DelieveryItems href='https://www.foodora.se/en/'>
            Foodora
          </DelieveryItems>
          <DelieveryItems href='https://www.ubereats.com/se'>
            Uber Eats
          </DelieveryItems>
          <DelieveryItems href='https://wolt.com/en/swe'>Wolt</DelieveryItems>
        </DelieveryList>
        <Logo src='images/logo-inverted.svg' />
        <ContactList>
          <ContactItems>Built with React + Contentful</ContactItems>
          <ContactItems>
            Design & development by{' '}
            <ContactLink href='https://marcushagerstrand.com/'>
              Marcus
            </ContactLink>
          </ContactItems>
        </ContactList>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
