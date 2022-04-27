import React from 'react';
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
} from './styles';
// import client from '../../contentful';

const TodaysMenu = () => {
  return (
    <MenuContainer>
      <SectionTitle>Todays Lunch</SectionTitle>
      <MenuContentContainer>
        <MenuContent>
          <MenuCategory>Meat</MenuCategory>
          <MenuPrice>119 kr</MenuPrice>
          <MenuTitle>Spicy Ramen</MenuTitle>
          <MenuDescription>
            Swedish pork side / Swedish chicken, spring onion, leek, salted
            tomato, bean sprouts, nori, eggs and katsuobushi
          </MenuDescription>
        </MenuContent>

        <MenuContent>
          <MenuCategory>Veg</MenuCategory>
          <MenuPrice>109 kr</MenuPrice>
          <MenuTitle>Roasted Garlic Ramen</MenuTitle>
          <MenuDescription>
            Smoked tofu, pak choi, bean sprouts, spring onion, salted tomato,
            leek, nori, celeriac, enoki, roasted garlic
          </MenuDescription>
        </MenuContent>
      </MenuContentContainer>
      <MenuButtonContainer>
        <MenuButton to='/menu'>See menu</MenuButton>
      </MenuButtonContainer>
    </MenuContainer>
  );
};

export default TodaysMenu;
