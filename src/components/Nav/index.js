import React, { useState } from 'react';
import { Link } from '@gatsbyjs/reach-router';
import { NavStyled, NavContent, NavLogo, NavLinks } from './styles';
import client from '../../contentful';

const Nav = () => {
  const [nav, setNav] = useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'nav',
        'sys.id': '6hUFw4OJufNikRWwl0MuCI',
      })
      .then((entries) => {
        setNav(entries.items[0].fields);
        console.log(entries.items[0].fields);
      });
  }, []);

  const logo = nav && nav.logoImage.fields.file.url;

  // Nav links
  const firstLinkTitle = nav && nav.firstLinkTitle;
  const firstUrl = nav && nav.firstLinkUrl;
  const secondLinkTitle = nav && nav.secondLinkTitle;
  const secondUrl = nav && nav.secondLinkUrl;
  const thirdLinkTitle = nav && nav.thirdLinkTitle;
  const thirdUrl = nav && nav.thirdLinkUrl;

  return (
    <NavStyled>
      <NavContent>
        <NavLogo>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </NavLogo>
        <NavLinks>
          <Link to={firstUrl || '/'}>{firstLinkTitle}</Link>
          <Link to={secondUrl || '/'}>{secondLinkTitle}</Link>
          <Link to={thirdUrl || '/'}>{thirdLinkTitle}</Link>
        </NavLinks>
      </NavContent>
    </NavStyled>
  );
};

export default Nav;
