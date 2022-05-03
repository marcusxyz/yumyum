import React, { useState } from 'react';
import client from '../../contentful';
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
  DelieveryWrapper,
} from './styles';

const Footer = () => {
  const [footer, setFooter] = useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'footer',
      })
      .then((entries) => {
        setFooter(entries.items[0].fields);
      });
  }, []);

  const tel = footer && footer.telephoneLink;
  const telImg = footer && footer.telephoneSvg.fields.file.url;
  const invertedLogo = footer && footer.logo.fields.file.url;
  const build = footer && footer.build;
  const credit = footer && footer.credits;
  const authorName = footer && footer.authorName;
  const authorLink = footer && footer.authorLink;

  const [delieveries, setDelieveries] = useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'footerDeliveries',
        order: 'sys.createdAt',
      })
      .then((entries) => {
        setDelieveries(entries.items);
      });
  }, []);

  return (
    <FooterContainer>
      <FooterContent>
        <Telephonewrapper>
          <TelephoneLink href={tel}>
            <Telephone src={telImg}></Telephone>
          </TelephoneLink>
        </Telephonewrapper>
        <DelieveryWrapper>
          {delieveries &&
            delieveries.map((delievery, i) => {
              return (
                <DelieveryList key={i}>
                  <DelieveryItems href={delievery.fields.delieveryWebsite}>
                    {delievery.fields.delieveryTitle}
                  </DelieveryItems>
                </DelieveryList>
              );
            })}
        </DelieveryWrapper>
        <Logo src={invertedLogo} />
        <ContactList>
          <ContactItems>{build}</ContactItems>
          <ContactItems>
            {credit}
            <ContactLink href={authorLink}>{authorName}</ContactLink>
          </ContactItems>
        </ContactList>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
