import styled from 'styled-components';
import { device } from '../MediaQueries';

export const AboutContainer = styled.section`
  color: var(--red);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4rem;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const AboutImageWrapper = styled.div`
  padding: 0 1rem;
  z-index: 2;
  position: relative;
  bottom: -5rem;

  @media ${device.tablet} {
    padding: 0 10rem;
    bottom: -10rem;
  }
`;

export const AboutImage = styled.div`
  width: 100%;
  height: 60vw;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-color: var(--red);

  @media ${device.tablet} {
    height: 40vw;
  }
`;

export const AboutTextWrapper = styled.div`
  padding: 4rem 1rem 0 1rem;
  background-color: var(--tan);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 6rem;

  @media ${device.tablet} {
    padding: 10rem;
  }
`;

export const SectionTitle = styled.img`
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: auto;
  padding: 4rem;

  @media ${device.tablet} {
    padding: 6rem;
  }
`;

export const SectionSubTitle = styled.h4`
  font-size: var(--h4);
  margin-bottom: 4rem;
`;

export const AboutText = styled.p`
  text-align: left;
  font-weight: 500;
  line-height: 1.5;
  font-size: var(--p-large);

  @media ${device.tablet} {
    font-size: var(--p-large);
    text-align: left;
    columns: 2;
    column-gap: 6rem;
  }
`;
