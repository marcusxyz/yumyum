import styled from 'styled-components';
import { Link } from '@gatsbyjs/reach-router';
import { device } from '../MediaQueries';

export const MenuContainer = styled.section`
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
    margin-bottom: 2rem;
  }
`;

export const MenuContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

export const MenuCategory = styled.h3`
  font-size: var(--h3);
  margin: 0;
`;

export const MenuPrice = styled.p`
  font-size: var(--p-large);
  font-weight: 500;
  font-style: italic;
`;

export const MenuTitle = styled.p`
  font-size: var(--p-large);
  font-weight: 500;
`;

export const MenuDescription = styled.p`
  font-size: var(--p);
  font-weight: 500;
  padding: 0 1rem;

  @media ${device.tablet} {
    padding: 0 4rem;
  }
`;

export const MenuButtonContainer = styled.div`
  width: 100%;
`;

export const MenuButton = styled(Link)`
  display: inline;
  font-size: var(--h3);
  padding-bottom: 0.25rem;
  border-bottom: 0.25rem dashed var(--red);
  transition: 0.2s;

  &:hover {
    border-bottom: 0.25rem solid var(--red);
  }
`;
