import styled from 'styled-components';
import { device } from '../MediaQueries';

export const HoursContainer = styled.section`
  background-color: var(--pink);
  color: var(--red);
`;

export const HoursWrapper = styled.div`
  padding: 8rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: var(--h2);
`;

export const HoursContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HoursTitle = styled.h4`
  font-size: var(--h4);
`;

export const HoursText = styled.p`
  font-size: var(--p-large);
`;
