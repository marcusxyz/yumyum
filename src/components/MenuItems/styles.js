import styled from 'styled-components';
import { device } from '../MediaQueries';

export const MenuContainer = styled.section`
  background-color: ${(props) => `var(--${props.color})`};
  color: var(--red);
  padding: 6rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;

  @media ${device.tablet} {
    padding: 8rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const SectionTitleWrapper = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.h1`
  font-size: var(--h2);
  margin-bottom: 2rem;

  @media ${device.tablet} {
    font-size: var(--h1);
  }
`;

export const MenuContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
`;

export const MenuContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    width: calc(50% - 2rem);
    margin-bottom: 4rem;
  }
`;

export const MenuTitle = styled.h3`
  font-size: var(--h3);
  margin: 0;
`;

export const MenuPrice = styled.p`
  font-size: var(--p-large);
  font-weight: 500;
  font-style: italic;
`;

export const MenuDescription = styled.p`
  font-size: var(--p);
  font-weight: 500;
  padding: 0 1rem;

  @media ${device.tablet} {
    padding: 0 4rem;
  }
`;
