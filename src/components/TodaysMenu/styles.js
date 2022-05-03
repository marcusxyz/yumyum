import styled from 'styled-components';
import { device } from '../MediaQueries';

export const LunchContainer = styled.section`
  background-color: var(--pink);
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

export const SectionSubtitle = styled.p`
  font-size: var(--p-large);
  font-weight: 500;
`;

export const LunchContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 2rem;
  }
`;

export const LunchContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

export const LunchCategory = styled.h3`
  font-size: var(--h3);
  margin: 0;
`;

export const LunchPrice = styled.p`
  font-size: var(--p-large);
  font-weight: 500;
  font-style: italic;
`;

export const LunchTitle = styled.p`
  font-size: var(--p-large);
  font-weight: 500;
`;

export const LunchDescription = styled.p`
  font-size: var(--p);
  font-weight: 500;
  padding: 0 1rem;

  @media ${device.tablet} {
    padding: 0 4rem;
  }
`;
