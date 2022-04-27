import React, { useState } from 'react';
import {
  MenuContainer,
  MenuContent,
  MenuCategory,
  MenuPrice,
  MenuTitle,
  MenuDescription,
  MenuButton,
  MenuContentContainer,
  MenuButtonContainer,
  SectionTitle,
  SectionSubtitle,
  SectionTitleWrapper,
} from './styles';
import client from '../../contentful';

const TodaysMenu = () => {
  const [menuItems, setMenuItems] = useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'todaysMenu',
      })
      .then((entries) => {
        setMenuItems(entries.items);
        console.log(entries.items);
        console.log(entries.fields.MenuTitle);
      });
  }, []);

  return (
    <MenuContainer>
      <SectionTitleWrapper>
        <SectionTitle>Todays Lunch</SectionTitle>
        <SectionSubtitle>11:30 – 13:00</SectionSubtitle>
      </SectionTitleWrapper>
      <MenuContentContainer>
        {menuItems &&
          menuItems.map((menuItem, i) => {
            return (
              <MenuContent key={i}>
                <MenuCategory>{menuItem.fields.category}</MenuCategory>
                <MenuPrice>{menuItem.fields.price}</MenuPrice>
                <MenuTitle>{menuItem.fields.name}</MenuTitle>
                <MenuDescription>{menuItem.fields.ingredients}</MenuDescription>
              </MenuContent>
            );
          })}
      </MenuContentContainer>
      <MenuButtonContainer>
        <MenuButton to='/menu'>See menu</MenuButton>
      </MenuButtonContainer>
    </MenuContainer>
  );
};

export default TodaysMenu;
