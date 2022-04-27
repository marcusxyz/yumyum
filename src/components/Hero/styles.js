import styled from 'styled-components';
import { Link } from '@gatsbyjs/reach-router';
import { device } from '../MediaQueries';

export const HeroContainer = styled.section`
  background-color: var(--tan);
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

export const HeroButton = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 4rem;

  font-size: var(--h1);
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  @media ${device.tablet} {
    padding: 7rem;
  }
`;

export const HeroContent = styled(Link)`
  width: 100%;
  height: 60vh;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: ${(props) => `${props.position}`};
  background-color: var(--red);
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover ${HeroButton} {
    /* opacity: 0; */
    background-image: url('images/blob-hover.svg');
    background-size: contain;
  }

  @media ${device.tablet} {
    width: 100%;
    height: 80vh;
  }
`;
