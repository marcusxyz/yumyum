import React from 'react';
import { Link } from '@gatsbyjs/reach-router';
import { NavStyled, NavContent, NavLogo, NavLinks } from './styles';

const Nav = () => {
  return (
    <NavStyled>
      <NavContent>
        <NavLogo>
          <Link to='/'>
            <img src='images/logo.svg' alt='' />
          </Link>
        </NavLogo>
        <NavLinks>
          <Link to='#'>Menu</Link>
          <Link to='#'>Our Story</Link>
          <Link to='#'>Find us</Link>
        </NavLinks>
      </NavContent>
    </NavStyled>
  );
};

export default Nav;
