import styled from 'styled-components';
import { Link } from '@gatsbyjs/reach-router';
import Hero from '.';

export const HeroContainer = styled.section`
  background-color: var(--tan);
  display: flex;
  flex-direction: row;
`;

export const HeroButton = styled.div`
  display: inline-block;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 7rem;

  font-size: var(--h1);
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
`;

export const HeroContent = styled(Link)`
  width: 50%;
  height: 80vh;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: ${(props) => `${props.position}`};
  background-color: var(--red);
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover ${HeroButton} {
    opacity: 0;
  }
`;
