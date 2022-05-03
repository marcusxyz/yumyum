import styled from 'styled-components';
// import { Link } from '@gatsbyjs/reach-router';
import { device } from '../MediaQueries';

export const FooterContainer = styled.section`
  background-color: var(--red);
  padding: 6rem 1rem 2rem 1rem;

  @media ${device.tablet} {
    padding: 8rem 2.5rem 2rem 2.5rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  gap: 4rem;
  color: var(--light-tan);

  @media ${device.tablet} {
    gap: 5rem;
  }
`;
export const Telephonewrapper = styled.div`
  width: 100%;
`;

export const TelephoneLink = styled.a`
  cursor: pointer;
`;
export const Telephone = styled.img`
  width: 70vw;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 40vw;
  }
`;

export const DelieveryWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  gap: 2rem;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
  }
`;

export const DelieveryList = styled.li``;

export const DelieveryItems = styled.a`
  font-size: var(--h4);
  color: var(--light-tan);
  border-bottom: 2px dashed var(--light-tan);
  margin: 0 auto;

  @media ${device.tablet} {
    margin: 0;
  }

  &:hover {
    border-bottom: 2px solid var(--light-tan);
  }
`;

export const Logo = styled.img`
  width: 15vw;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 10vw;
  }

  @media ${device.laptop} {
    width: 5vw;
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContactItems = styled.p`
  font-size: var(--p);
`;

export const ContactLink = styled.a`
  font-family: 'Roboto Mono', monospace;
  font-size: var(--p);
  font-weight: normal;
  text-transform: none;
  color: var(--light-tan);
  border-bottom: 1px dashed var(--light-tan);

  &:hover {
    border-bottom: 1px solid var(--light-tan);
  }
`;
