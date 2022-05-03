import React, { useState } from 'react';
import { HeroContainer, HeroContent, HeroButton } from './styles';
import client from '../../contentful';

const Hero = () => {
  const [indexHero, setIndexHero] = useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'indexHero',
        'sys.id': '1GvFooGGo7jWjCWXKCigTb',
      })
      .then((entries) => {
        setIndexHero(entries.items[0].fields);
      });
  }, []);

  // Change content on left div
  const linkTitleLeft = indexHero && indexHero.leftLinkTitle;
  const leftUrl = indexHero && indexHero.urlLeft;
  const imageLeft = indexHero && indexHero.leftImage.fields.file.url;

  // Change content on right div
  const linkTitleRight = indexHero && indexHero.rightLinkTitle;
  const rightUrl = indexHero && indexHero.urlRight;
  const imageRight = indexHero && indexHero.rightImage.fields.file.url;

  return (
    <HeroContainer>
      <HeroContent to={leftUrl || '/'} img={imageLeft} position='center'>
        <HeroButton img='images/blob.svg'>{linkTitleLeft}</HeroButton>
      </HeroContent>
      <HeroContent to={rightUrl || '/'} img={imageRight} position='bottom'>
        <HeroButton img='images/blob.svg'>{linkTitleRight}</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
