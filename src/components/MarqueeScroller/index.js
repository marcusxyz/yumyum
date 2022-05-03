import React, { useState } from 'react';
import client from '../../contentful';
import Marquee from 'react-fast-marquee';
import {
  MarqueeContainer,
  MarqueeContent,
  MarqueeTitle,
  MarqueeImage,
} from './styles';

// import './styles.css';

const MarqueeScroller = () => {
  const [marquee, setMarquee] = useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'marquee',
        'sys.id': 'hCxkA2kX9W3A7kENbus3b',
      })
      .then((entries) => {
        setMarquee(entries.items[0].fields);
      });
  }, []);

  const marqueeText = marquee && marquee.marqueeText;
  const marqueeImage = marquee && marquee.marqueeImage.fields.file.url;
  const marqueeImageAlt = marquee && marquee.marqueeImage.fields.description;

  return (
    <Marquee play={true} gradient={false} speed={100}>
      <MarqueeContainer>
        <MarqueeContent>
          <MarqueeTitle>{marqueeText}</MarqueeTitle>
          <MarqueeImage src={marqueeImage} alt={marqueeImageAlt} />
          <MarqueeTitle>{marqueeText}</MarqueeTitle>
          <MarqueeImage src={marqueeImage} alt={marqueeImageAlt} />
          <MarqueeTitle>{marqueeText}</MarqueeTitle>
          <MarqueeImage src={marqueeImage} alt={marqueeImageAlt} />
        </MarqueeContent>
      </MarqueeContainer>
    </Marquee>
  );
};
export default MarqueeScroller;
