import styled from 'styled-components';
import { device } from '../MediaQueries';

export const MapWrapper = styled.section`
  padding: 6rem 1rem;
  background-color: var(--tan);
  color: var(--red);

  @media ${device.tablet} {
    padding: 10rem;
  }

  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const PageTitle = styled.h1`
  font-size: var(--h1);
`;
