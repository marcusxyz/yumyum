import styled from 'styled-components';

export const MarqueeContainer = styled.div`
  width: 100%;
`;

export const MarqueeContent = styled.div`
  background-color: var(--red);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.5rem 0;
  overflow: hidden;
`;

export const MarqueeTitle = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  font-size: var(--h3);
  color: var(--light-tan);
  margin: 0;
`;

export const MarqueeImage = styled.img`
  display: inline;
  margin: 0 2rem;
`;
