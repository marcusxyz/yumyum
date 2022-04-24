import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  MarqueeContainer,
  MarqueeContent,
  MarqueeTitle,
  MarqueeImage,
} from './styles';

// import './styles.css';

const MarqueeScroller = () => {
  return (
    <Marquee play={true} gradient={false} speed={100}>
      <MarqueeContainer>
        <MarqueeContent>
          <MarqueeTitle>YUMYUM TAKEAWAY IS OPEN</MarqueeTitle>
          <MarqueeImage
            src='/images/ramen.svg'
            alt='bowl of ramen illustration'
          />
          <MarqueeTitle>YUMYUM TAKEAWAY IS OPEN</MarqueeTitle>
          <MarqueeImage
            src='/images/ramen.svg'
            alt='bowl of ramen illustration'
          />
          <MarqueeTitle>YUMYUM TAKEAWAY IS OPEN</MarqueeTitle>
          <MarqueeImage
            src='/images/ramen.svg'
            alt='bowl of ramen illustration'
          />
        </MarqueeContent>
      </MarqueeContainer>
    </Marquee>
  );
};
export default MarqueeScroller;
