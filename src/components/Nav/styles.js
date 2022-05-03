import styled from 'styled-components';
import { device } from '../MediaQueries';

export const NavStyled = styled.div`
  background-color: var(--light-tan);
  padding: 1.5rem 1rem;

  @media ${device.tablet} {
    padding: 1.5rem 2.5rem;
  }
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.div``;

export const NavLinks = styled.div`
  /* display: none; */
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  @media ${device.tablet} {
    gap: 3rem;
  }
`;
