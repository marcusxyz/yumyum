import styled from 'styled-components';
import { device } from '../MediaQueries';

export const NavStyled = styled.div`
  background-color: var(--light-tan);
  padding: 1.5rem 2.5rem;
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.div``;

export const NavLinks = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }
`;
